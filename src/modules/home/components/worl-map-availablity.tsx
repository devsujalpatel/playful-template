"use client";
import WorldMap from "@/components/ui/world-map";

export function WorldMapAvailable() {
  return (
    <div className="lg:w-10/12 space-y-5 mx-auto mt-24">
      <WorldMap
        dots={[
          {
            start: { lat: 64.2008, lng: -149.4937 },
            end: { lat: -26.689, lng: -56.9211 },
          },
          {
            start: { lat: 64.2008, lng: -149.4937 },
            end: { lat: 76, lng: -43 },
          },
          {
            start: { lat: -26.689, lng: -56.9211 },
            end: { lat: 0.7223, lng: 17 },
          },
          {
            start: { lat: 76, lng: -43 },
            end: { lat: 0.7223, lng: 17 },
          },
          {
            start: { lat: 76, lng: -43 },
            end: { lat: 28.6139, lng: 77.209 },
          },
          {
            start: { lat: 28.6139, lng: 77.209 },
            end: { lat: -1.2921, lng: 36.8219 },
          },
        ]}
      />
    </div>
  );
}
