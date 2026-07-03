import content from "@/data/content.json";
import site from "@/data/site.json";

export default function Instagram() {
  const ig = content.instagram;
  return (
    <section className="sec" style={{ background: "var(--black)", padding: "72px 48px", textAlign: "center" }}>
      <div className="sec-lbl" style={{ justifyContent: "center" }}>{ig.label}</div>
      <h2 className="sec-title" style={{ fontSize: "clamp(28px,3.5vw,48px)", margin: "0 0 24px" }}>
        {ig.handlePre}
        <span className="grad-text">{ig.handleAccent}</span>
      </h2>
      <p style={{ fontSize: 15, fontWeight: 300, color: "rgba(240,234,216,.55)", marginBottom: 32 }}>
        {ig.text}
      </p>
      <a className="btn btn-o" href={site.instagram.url} target="_blank" rel="noopener" style={{ fontSize: 14, padding: "16px 40px" }}>
        {ig.cta}
      </a>
    </section>
  );
}
