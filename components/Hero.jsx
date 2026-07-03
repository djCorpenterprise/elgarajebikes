import Image from "next/image";
import content from "@/data/content.json";
import site from "@/data/site.json";
import { HeroButton } from "./HeroButton";

export default function Hero() {
  const h = content.hero;
  return (
    <section className="hero" id="inicio">
      <div className="hero-left">
        <div className="hero-eyebrow">{h.eyebrow}</div>
        <h1 className="hero-title">
          {h.titleLines.map((line, i) => (
            <span key={i}>
              <span className={line.className}>{line.text}</span>
              {i < h.titleLines.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="hero-sub" dangerouslySetInnerHTML={{ __html: h.sub }} />
        <div className="hero-btns-grid">
          {h.buttons.map((b) => (
            <HeroButton key={b.label} b={b} />
          ))}
        </div>
        <p className="hero-phone">
          ¿Prefieres llamar? <a href={site.phoneHref}>{site.phone}</a>
        </p>
      </div>
      <div className="hero-right">
        <Image
          className="hero-logo-big"
          src="/img/logo-hero.jpeg"
          alt="El Garaje Bikes"
          width={480}
          height={480}
          priority
        />
      </div>
    </section>
  );
}
