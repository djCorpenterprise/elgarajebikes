import content from "@/data/content.json";

export default function Marquee() {
  // Duplicate the list so the ticker animation loops seamlessly.
  const items = [...content.marquee, ...content.marquee];
  return (
    <div className="marquee-bar">
      <div className="marquee-inner">
        {items.map((text, i) => (
          <span className="mitem" key={i}>
            {text} <span className="mdot"></span>
          </span>
        ))}
      </div>
    </div>
  );
}
