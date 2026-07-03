import content from "@/data/content.json";
import ActionButton from "./ActionButton";

export default function Fleet() {
  const f = content.fleet;
  return (
    <section className="sec" style={{ background: "var(--black)" }} id="flota">
      <div className="sec-lbl">{f.label}</div>
      <h2 className="sec-title">
        {f.titlePre}
        <span className="blue-text">{f.titleAccent}</span>
      </h2>
      <div className="fleet-grid">
        {f.items.map((item) => (
          <div className="fc" key={item.type}>
            <div className="fc-type">{item.type}</div>
            <div className={`fc-name ${item.nameClass}`}>{item.name}</div>
            <p className="fc-desc">{item.desc}</p>
          </div>
        ))}
        <div className="fc" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", gap: 14 }}>
          <div
            style={{ fontFamily: "'Bebas Neue',cursive", fontSize: 20, letterSpacing: 2, color: "rgba(240,234,216,.2)" }}
            dangerouslySetInnerHTML={{ __html: f.cta.prompt }}
          />
          <ActionButton action={f.cta.action} className="btn btn-o" style={{ fontSize: 12 }}>
            {f.cta.label}
          </ActionButton>
        </div>
      </div>
    </section>
  );
}
