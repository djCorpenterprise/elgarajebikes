import content from "@/data/content.json";

function badgeClass(kind) {
  if (kind === "beach") return "stop-badge stop-badge-beach";
  if (kind === "dest") return "stop-badge stop-badge-dest";
  return "stop-badge";
}
function cardClass(kind) {
  if (kind === "start") return "stop-card stop-start";
  if (kind === "dest") return "stop-card stop-dest";
  return "stop-card";
}

export default function Routes() {
  const r = content.routes;
  return (
    <section className="sec" style={{ background: "var(--black)" }} id="rutas">
      <div className="sec-lbl">{r.label}</div>
      <h2 className="sec-title">
        {r.titlePre}
        <span className="blue-text">{r.titleAccent}</span>
      </h2>
      <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.8, color: "rgba(240,234,216,.5)", maxWidth: 600, marginBottom: 48 }}>
        {r.intro}
      </p>

      <div className="stops-grid">
        {r.stops.map((stop, i) => (
          <div key={stop.badge}>
            <div className={cardClass(stop.kind)}>
              <div className={badgeClass(stop.kind)}>{stop.badge}</div>
              <div className="stop-content">
                <div className="stop-name">{stop.name}</div>
                <div className="stop-addr">{stop.addr}</div>
                <div className="stop-note">{stop.note}</div>
              </div>
            </div>
            {stop.connector && (
              <div className="stop-connector">
                <div className="stop-line"></div>
                <div className="stop-dist">{stop.connector}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="route-map-wrap">
        <div className="route-map-header">
          <div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--blue-light)", marginBottom: 6 }}>
              {r.summary.label}
            </div>
            <div style={{ fontFamily: "'Bebas Neue',cursive", fontSize: 22, letterSpacing: 1.5, color: "var(--sand)" }}>
              {r.summary.title}
            </div>
            <div style={{ fontSize: 13, color: "var(--muted)", fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: 1, marginTop: 6 }}>
              {r.summary.meta}
            </div>
          </div>
          <a className="btn btn-o" style={{ fontSize: 13, padding: "16px 32px", letterSpacing: 2.5 }}
            href={r.summary.mapUrl} target="_blank" rel="noopener">
            {r.summary.mapLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
