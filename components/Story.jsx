import content from "@/data/content.json";
import ActionButton from "./ActionButton";

export default function Story() {
  const s = content.story;
  return (
    <section className="sec" id="story" style={{ background: "var(--charcoal)" }}>
      <div className="sec-lbl">{s.label}</div>
      <h2 className="sec-title">
        {s.titlePre}
        <span className="grad-text">{s.titleAccent}</span>
      </h2>
      <div className="story-stats">
        {s.stats.map((st) => (
          <div className="ss" key={st.n}>
            <div className={`ss-n ${st.nClass}`}>{st.n}</div>
            <div className="ss-l">{st.l}</div>
          </div>
        ))}
      </div>
      <div className="story-body">
        {s.paragraphs.map((p, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
        ))}
      </div>
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 36 }}>
        {s.ctas.map((c) => (
          <ActionButton key={c.label} action={c.action} className={`btn ${c.btnClass}`}>
            {c.label}
          </ActionButton>
        ))}
      </div>
    </section>
  );
}
