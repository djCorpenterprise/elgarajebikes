import content from "@/data/content.json";

export default function Testimonials() {
  const t = content.testimonials;
  return (
    <section className="sec" style={{ background: "var(--blue-dark)", padding: "72px 48px" }}>
      <div className="sec-lbl" style={{ color: "rgba(240,234,216,.5)" }}>{t.label}</div>
      <h2 className="sec-title" style={{ color: "#fff" }}>{t.title}</h2>
      <div className="test-grid">
        {t.items.map((item, i) => (
          <div className="tc" key={i}>
            <div className="stars">
              {Array.from({ length: 5 }).map((_, j) => (
                <div className="star" key={j}></div>
              ))}
            </div>
            <p className="tq">&ldquo;{item.quote}&rdquo;</p>
            <div className="ta">{item.author}</div>
            <div className="tl">{item.source}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
