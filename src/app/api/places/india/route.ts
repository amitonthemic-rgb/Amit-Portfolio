import { NextResponse } from "next/server";

type NominatimResult = {
  display_name?: string;
  name?: string;
  address?: {
    city?: string;
    town?: string;
    village?: string;
    suburb?: string;
    county?: string;
    state?: string;
    state_district?: string;
  };
};

export type IndiaPlace = {
  id: string;
  label: string;
  secondary?: string;
};

function formatPlace(item: NominatimResult, index: number): IndiaPlace | null {
  const locality =
    item.address?.city ||
    item.address?.town ||
    item.address?.village ||
    item.address?.suburb ||
    item.name ||
    item.display_name?.split(",")[0]?.trim();

  if (!locality) return null;

  const state = item.address?.state || item.address?.state_district;
  const label = state ? `${locality}, ${state}` : locality;
  const secondary = item.display_name;

  return {
    id: `${label}-${index}`,
    label,
    secondary,
  };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const raw = (searchParams.get("q") ?? "").trim();
  const q = raw.slice(0, 80);

  if (q.length < 2) {
    return NextResponse.json({ places: [] as IndiaPlace[] });
  }

  const url = new URL("https://nominatim.openstreetmap.org/search");
  url.searchParams.set("q", q);
  url.searchParams.set("format", "json");
  url.searchParams.set("addressdetails", "1");
  url.searchParams.set("countrycodes", "in");
  url.searchParams.set("limit", "8");

  try {
    const res = await fetch(url.toString(), {
      headers: {
        Accept: "application/json",
        "User-Agent": "AmitYadavPortfolio/1.0 (booking location suggest; amit.onthemic@gmail.com)",
      },
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      return NextResponse.json({ places: [] as IndiaPlace[], source: "error" }, { status: 200 });
    }

    const data = (await res.json()) as NominatimResult[];
    const seen = new Set<string>();
    const places: IndiaPlace[] = [];

    for (let i = 0; i < data.length; i += 1) {
      const place = formatPlace(data[i], i);
      if (!place) continue;
      const key = place.label.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      places.push(place);
    }

    return NextResponse.json({ places, source: "nominatim" });
  } catch {
    return NextResponse.json({ places: [] as IndiaPlace[], source: "error" }, { status: 200 });
  }
}
