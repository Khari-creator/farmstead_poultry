import React from "react";

type MapEmbedProps = {
  query?: string; // e.g. "Farmstead Poultry Muhoroni Kisumu"
  width?: string | number;
  height?: string | number;
  className?: string;
  zoom?: number;
  placeId?: string; // optional Google Place ID for more precise embed
};

export default function MapEmbed({
  query = "Farmstead Poultry Muhoroni Kisumu",
  width = "100%",
  height = 420,
  className,
  zoom = 15,
}: MapEmbedProps) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    query
  )}&output=embed&z=${zoom}`;

  return (
    <div className={className} style={{ width }}>
      <iframe
        title={`Map: ${query}`}
        src={src}
        width={typeof width === "number" ? width : "100%"}
        height={height}
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
