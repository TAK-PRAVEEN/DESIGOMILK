/**
 * A visible, honest placeholder for an image the client still needs to supply.
 * Never replaced with stock photography. Lists the exact asset spec so it can be shot / sent.
 */
export default function AssetSlot({ name, spec, ratio = "4 / 5", style }: { name: string; spec: string; ratio?: string; style?: React.CSSProperties }) {
  return (
    <figure className="asset-slot" style={{ aspectRatio: ratio, margin: 0, ...style }} aria-label={`Image to be supplied: ${name}`}>
      <div>
        <p className="label" style={{ opacity: 0.75 }}>Asset needed</p>
        <p className="f-display" style={{ fontSize: "1.5rem", margin: "8px 0 6px" }}>{name}</p>
        <p className="f-mono" style={{ fontSize: 11, opacity: 0.65, maxWidth: "30ch", margin: "0 auto" }}>{spec}</p>
      </div>
    </figure>
  );
}
