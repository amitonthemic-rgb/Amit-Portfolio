"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const FALLBACK_CITIES = [
  "Delhi",
  "New Delhi",
  "Noida",
  "Gurugram",
  "Ghaziabad",
  "Faridabad",
  "Mumbai",
  "Pune",
  "Nagpur",
  "Bengaluru",
  "Chennai",
  "Hyderabad",
  "Kolkata",
  "Ahmedabad",
  "Surat",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Indore",
  "Bhopal",
  "Chandigarh",
  "Amritsar",
  "Ludhiana",
  "Kochi",
  "Thiruvananthapuram",
  "Coimbatore",
  "Madurai",
  "Visakhapatnam",
  "Vijayawada",
  "Patna",
  "Ranchi",
  "Bhubaneswar",
  "Guwahati",
  "Dehradun",
  "Shimla",
  "Goa",
  "Panaji",
  "Udaipur",
  "Jodhpur",
  "Varanasi",
  "Agra",
  "Mysuru",
  "Mangaluru",
  "Rajkot",
  "Vadodara",
  "Nashik",
  "Aurangabad",
  "Raipur",
  "Jabalpur",
  "Allahabad",
  "Prayagraj",
  "Meerut",
  "Srinagar",
  "Jammu",
];

type PlaceOption = {
  id: string;
  label: string;
  secondary?: string;
};

export function IndiaLocationInput({
  id,
  name,
  value,
  onChange,
  className,
  placeholder = "City or venue, anywhere in India",
}: {
  id: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
}) {
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const [remote, setRemote] = useState<PlaceOption[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchKey, setSearchKey] = useState("");

  const trimmed = value.trim();

  const localMatches = useMemo(() => {
    const q = trimmed.toLowerCase();
    if (q.length < 1) return [] as PlaceOption[];
    return FALLBACK_CITIES.filter((city) => city.toLowerCase().includes(q))
      .slice(0, 8)
      .map((city) => ({ id: `local-${city}`, label: city }));
  }, [trimmed]);

  const options = useMemo(() => {
    const activeRemote =
      trimmed.length >= 2 && searchKey === trimmed ? remote : [];
    const merged: PlaceOption[] = [];
    const seen = new Set<string>();
    for (const item of [...localMatches, ...activeRemote]) {
      const key = item.label.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      merged.push(item);
    }
    return merged.slice(0, 10);
  }, [localMatches, remote, searchKey, trimmed]);

  const safeHighlight =
    options.length === 0 ? 0 : Math.min(highlight, options.length - 1);

  useEffect(() => {
    const q = trimmed;
    if (q.length < 2) {
      return;
    }

    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `/api/places/india?q=${encodeURIComponent(q)}`,
          { signal: controller.signal },
        );
        if (!res.ok) {
          if (!controller.signal.aborted) {
            setRemote([]);
            setSearchKey(q);
          }
          return;
        }
        const data = (await res.json()) as { places?: PlaceOption[] };
        if (!controller.signal.aborted) {
          setRemote(data.places ?? []);
          setSearchKey(q);
        }
      } catch {
        if (!controller.signal.aborted) {
          setRemote([]);
          setSearchKey(q);
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, 300);

    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [trimmed]);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  function select(option: PlaceOption) {
    onChange(option.label);
    setOpen(false);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (!open && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
      setOpen(true);
      return;
    }
    if (!open || options.length === 0) {
      if (event.key === "Escape") setOpen(false);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setHighlight((h) => (h + 1) % options.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlight((h) => (h - 1 + options.length) % options.length);
    } else if (event.key === "Enter") {
      event.preventDefault();
      select(options[safeHighlight] ?? options[0]);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <input
        id={id}
        name={name}
        role="combobox"
        aria-expanded={open}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-activedescendant={
          open && options[safeHighlight]
            ? `${listId}-opt-${safeHighlight}`
            : undefined
        }
        autoComplete="off"
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setHighlight(0);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
      />

      {open && trimmed.length >= 1 ? (
        <ul
          id={listId}
          role="listbox"
          className="absolute z-30 mt-1 max-h-60 w-full overflow-auto rounded-[var(--radius-md)] border border-line-strong bg-paper shadow-[var(--shadow-soft)]"
        >
          {options.length === 0 ? (
            <li className="px-3 py-3 text-sm text-muted">
              {loading ? "Searching India…" : "No matching places yet — keep typing"}
            </li>
          ) : (
            options.map((option, index) => (
              <li key={option.id} role="presentation">
                <button
                  type="button"
                  id={`${listId}-opt-${index}`}
                  role="option"
                  aria-selected={index === safeHighlight}
                  className={cn(
                    "flex w-full flex-col items-start px-3 py-2.5 text-left text-sm transition-colors",
                    index === safeHighlight
                      ? "bg-bronze/10 text-ink"
                      : "text-ink-soft hover:bg-paper-deep",
                  )}
                  onMouseEnter={() => setHighlight(index)}
                  onClick={() => select(option)}
                >
                  <span className="font-medium text-ink">{option.label}</span>
                  {option.secondary && option.secondary !== option.label ? (
                    <span className="mt-0.5 line-clamp-1 text-xs text-muted">
                      {option.secondary}
                    </span>
                  ) : null}
                </button>
              </li>
            ))
          )}
        </ul>
      ) : null}
    </div>
  );
}
