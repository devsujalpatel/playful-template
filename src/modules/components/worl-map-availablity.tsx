"use client";
import WorldMap from "@/components/ui/world-map";

export function WorldMapAvailable() {
  return (
    <div className="lg:w-10/12 space-y-5 mx-auto mt-24">
      <WorldMap
        dots={[
          {
            start: { lat: 64.2008, lng: -149.4937 }, // canada
            end: { lat: -26.689, lng: -56.9211 }, // south america
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // canada
            end: { lat: 76, lng: -43 }, // greenland
          },
          {
            start: { lat: -26.689, lng: -56.9211 },
            end: { lat: 0, lng: 17 }, // africa
          },
          {
            start: { lat: 76, lng: -43 }, // greenland
            end: { lat: 0, lng: 17 }, // africa
          },
          {
            start: { lat: 70.6139, lng: 97.209 }, // greenland
            end: { lat: 76, lng: -43 }, // russia
          },
          {
            start: { lat: 15, lng: 100 }, // china
            end: { lat: 0, lng: 17 }, // africa
          },
          {
            start: { lat: 0, lng: 17 }, // africa
            end: { lat: 70.6139, lng: 97.209 }, // russia
          },
        ]}
      />
    </div>
  );
}
