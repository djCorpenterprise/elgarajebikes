import content from "@/data/content.json";
import ActionButton from "./ActionButton";

export default function Services() {
  const s = content.services;
  return (
    <section className="sec" id="servicios" style={{ background: "var(--charcoal)" }}>
      <div className="sec-lbl">{s.label}</div>
      <h2 className="sec-title">
        {s.titlePre}
        <span className="grad-text">{s.titleAccent}</span>
      </h2>
      <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.8, color: "rgba(240,234,216,.55)", maxWidth: 560 }}>
        {s.intro}
      </p>
      <div className="svc-grid">
        {s.items.map((item) => (
          <div className="svc" id={item.id} key={item.id}>
            <div className="svc-num">{item.num}</div>
            <div className={`svc-name ${item.nameClass}`} dangerouslySetInnerHTML={{ __html: item.name }} />
            <p className="svc-desc">{item.desc}</p>
            <div className="tags">
              {item.tags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
            <div className="svc-cta">
              <ActionButton action={item.cta.action} className={`btn ${item.cta.btnClass}`}>
                {item.cta.label}
              </ActionButton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
