"use client";

import content from "@/data/content.json";
import site from "@/data/site.json";
import { useModal } from "./ModalProvider";

function PriceTable({ table }) {
  return (
    <div style={{ maxWidth: 380, margin: "24px auto" }}>
      <div style={{ fontFamily: "'Bebas Neue',cursive", fontSize: 24, letterSpacing: 2.5, color: table.nameColor, marginBottom: 10 }}>
        {table.name}
      </div>
      {table.rows.map((row, i) => (
        <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "12px 18px", borderBottom: i < table.rows.length - 1 ? "1px solid var(--border)" : "none", fontSize: 15, textAlign: "left" }}>
          <span style={{ color: "rgba(240,234,216,.8)" }}>{row.k}</span>
          <span style={{ fontWeight: 700, color: "var(--sand)" }}>{row.v}</span>
        </div>
      ))}
    </div>
  );
}

function Overlay({ id, children }) {
  const { active, close } = useModal();
  return (
    <div
      className={`modal-overlay${active === id ? " open" : ""}`}
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div className="modal">
        <button className="modal-close" onClick={close}>✕</button>
        {children}
      </div>
    </div>
  );
}

export default function Modals() {
  const repair = content.modals.repair;
  const rent = content.modals.rent;
  return (
    <>
      <Overlay id="repair">
        <div style={{ textAlign: "center", padding: "24px 0" }}>
          <div className="modal-title" style={{ marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: repair.title }} />
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(240,234,216,.85)", margin: "0 auto 32px", maxWidth: 460 }}>
            {repair.text}{" "}
            <a href={site.whatsapp} target="_blank" rel="noopener" style={{ color: "var(--orange-light)", fontWeight: 600, textDecoration: "underline" }}>{site.phone}</a>
          </p>
          <a href={site.whatsapp} target="_blank" rel="noopener" className="submit-btn"
            style={{ display: "inline-block", maxWidth: 280, textDecoration: "none", textAlign: "center", boxSizing: "border-box" }}>
            {repair.cta}
          </a>
        </div>
      </Overlay>

      <Overlay id="rent">
        <div style={{ textAlign: "center", padding: "24px 0" }}>
          <div className="modal-title" style={{ marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: rent.title }} />
          {rent.priceTables.map((t) => (
            <PriceTable table={t} key={t.name} />
          ))}
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(240,234,216,.85)", margin: "0 auto 24px", maxWidth: 460 }}>
            {rent.text}{" "}
            <a href={site.whatsapp} target="_blank" rel="noopener" style={{ color: "var(--blue-light)", fontWeight: 600, textDecoration: "underline" }}>{site.phone}</a>
          </p>
          <a href={site.whatsapp} target="_blank" rel="noopener" className={`submit-btn ${rent.ctaClass}`}
            style={{ display: "inline-block", maxWidth: 280, textDecoration: "none", textAlign: "center", boxSizing: "border-box" }}>
            {rent.cta}
          </a>
        </div>
      </Overlay>
    </>
  );
}
