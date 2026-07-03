import content from "@/data/content.json";

const icons = {
  pin: (
    <svg viewBox="0 0 16 16" fill="none" stroke="#f07b20" strokeWidth="2" strokeLinecap="round">
      <circle cx="8" cy="6" r="3" /><path d="M8 9 Q8 14 8 14" /><path d="M5 12 Q8 14 11 12" />
    </svg>
  ),
  peaks: (
    <svg viewBox="0 0 16 16" fill="none" stroke="#f07b20" strokeWidth="2" strokeLinecap="round">
      <path d="M2 14 L5 5 L8 10 L11 3 L14 14" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 16 16" fill="none" stroke="#f07b20" strokeWidth="2" strokeLinecap="round">
      <circle cx="8" cy="8" r="6" /><path d="M8 5 L8 8 L11 10" />
    </svg>
  ),
};

export default function Coast() {
  const c = content.coast;
  return (
    <section className="sec" style={{ background: "var(--blue-dark)" }} id="costa">
      <div className="sec-lbl">{c.label}</div>
      <h2 className="sec-title">
        {c.titleLines[0]}
        <br />
        <span className="grad-text">{c.titleLines[1]}</span>
      </h2>
      <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.75, color: "rgba(240,234,216,.55)", marginTop: 12, maxWidth: 600 }}>
        {c.intro}
      </p>
      <div className="coast-features" style={{ marginTop: 40 }}>
        {c.features.map((f) => (
          <div className="cf" key={f.title}>
            <div className="cf-icon">{icons[f.icon]}</div>
            <div>
              <div className="cf-title">{f.title}</div>
              <p className="cf-desc">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
