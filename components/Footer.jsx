import Image from "next/image";
import content from "@/data/content.json";
import site from "@/data/site.json";

export default function Footer() {
  const f = content.footer;
  return (
    <footer>
      <div className="fl">
        <Image src="/img/logo-footer.jpeg" alt="El Garaje Bikes" width={220} height={90} style={{ height: "auto", width: "auto" }} />
      </div>
      <div className="fc-copy">{f.copy}</div>
      <div className="fl-ig">
        <a href={site.instagram.url} target="_blank" rel="noopener">{site.instagram.handle}</a>
      </div>
      <div className="fl-links">
        {f.links.map((l) => (
          <a key={l.label} href={l.href}>{l.label}</a>
        ))}
      </div>
    </footer>
  );
}
