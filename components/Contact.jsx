"use client";

import { useState } from "react";
import content from "@/data/content.json";
import site from "@/data/site.json";

const W3F_KEY = "683f07cf-7eee-4ee3-a6aa-f943040a018a";

export default function Contact() {
  const c = content.contact;
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ nombre: "", tel: "", email: "", asunto: "", mensaje: "" });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async () => {
    if (!form.nombre.trim()) {
      alert("Por favor introduce tu nombre.");
      return;
    }
    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: W3F_KEY,
          subject: "Nuevo Mensaje de Contacto – El Garaje Bikes",
          name: form.nombre,
          email: form.email,
          message: `MENSAJE DE CONTACTO\n\nNombre: ${form.nombre}\nEmail: ${form.email}\nTeléfono: ${form.tel}\nAsunto: ${form.asunto}\nMensaje: ${form.mensaje}`,
        }),
      });
      const data = await res.json();
      if (data.success) setSent(true);
      else {
        alert(`Error al enviar. Por favor llámanos al ${site.phone}.`);
        setSending(false);
      }
    } catch {
      alert(`Error al enviar. Por favor llámanos al ${site.phone}.`);
      setSending(false);
    }
  };

  return (
    <section className="sec" id="contacto" style={{ background: "var(--charcoal)" }}>
      <div className="sec-lbl">{c.label}</div>
      <h2 className="sec-title">
        {c.titlePre}
        <span className="grad-text">{c.titleAccent}</span>
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, marginTop: 8 }} className="contact-split">
        <div>
          <div style={{ marginBottom: 24 }}>
            <div className="ib-lbl">Direccion</div>
            <div style={{ fontSize: 15, lineHeight: 1.7, color: "var(--sand)" }}>
              {site.address.street}<br />
              {site.address.postal} {site.address.city}, {site.address.region}, {site.address.country}
            </div>
          </div>
          <div style={{ marginBottom: 24 }}>
            <div className="ib-lbl">Telefono</div>
            <div style={{ fontSize: 15 }}>
              <a href={site.phoneHref} style={{ color: "var(--orange-light)" }}>{site.phone}</a>
            </div>
          </div>
          <div style={{ marginBottom: 24 }}>
            <div className="ib-lbl">Email</div>
            <div style={{ fontSize: 15 }}>
              <a href={`mailto:${site.email}`} style={{ color: "var(--orange-light)" }}>{site.email}</a>
            </div>
          </div>
          <div style={{ marginBottom: 24 }}>
            <div className="ib-lbl">Horario</div>
            <table style={{ fontSize: 14, lineHeight: 2, width: "100%" }}>
              <tbody>
                {site.hours.map((h) => (
                  <tr key={h.days}>
                    <td style={{ fontWeight: 500, color: "var(--sand)", paddingRight: 16, whiteSpace: "nowrap" }}>{h.days}</td>
                    <td style={{ color: "rgba(240,234,216,.7)" }}>{h.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ border: "1px solid var(--border)", borderRadius: 4, overflow: "hidden", marginTop: 8 }}>
            <iframe src={c.mapEmbed} width="100%" height="240" style={{ border: "none", filter: "grayscale(70%) contrast(1.1)" }} loading="lazy" />
          </div>
        </div>
        <div>
          <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.75, color: "rgba(240,234,216,.5)", marginBottom: 20 }}>
            {c.form.note}
          </p>
          {!sent ? (
            <div className="fsec" style={{ background: "rgba(255,255,255,0.03)" }}>
              <div className="fg" style={{ gap: 14 }}>
                <div className="fg fg-2">
                  <div>
                    <label>Nombre</label>
                    <input className="ff" type="text" value={form.nombre} onChange={set("nombre")} placeholder="Tu nombre" required />
                  </div>
                  <div>
                    <label>Telefono</label>
                    <input className="ff" type="tel" value={form.tel} onChange={set("tel")} placeholder="+34 600 000 000" />
                  </div>
                </div>
                <div>
                  <label>Email</label>
                  <input className="ff" type="email" value={form.email} onChange={set("email")} placeholder="tu@email.com" />
                </div>
                <div>
                  <label>En que podemos ayudarte?</label>
                  <select className="ff" value={form.asunto} onChange={set("asunto")}>
                    <option value="" disabled>Seleccionar...</option>
                    {c.form.subjects.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label>Mensaje</label>
                  <textarea className="ff" value={form.mensaje} onChange={set("mensaje")} placeholder="Cuéntanos que necesitas..." />
                </div>
              </div>
              <button className="submit-btn" style={{ marginTop: 16, fontSize: 20 }} onClick={submit} disabled={sending}>
                {sending ? "ENVIANDO..." : "ENVIAR MENSAJE"}
              </button>
              <p style={{ textAlign: "center", fontSize: 12, color: "var(--muted)", marginTop: 12 }}>
                O llamanos al <a href={site.phoneHref} style={{ color: "var(--orange-light)" }}>{site.phone}</a>
              </p>
            </div>
          ) : (
            <div className="success-scr show">
              <div className="suc-icon">✓</div>
              <div className="suc-title">{c.form.success.title}</div>
              <p className="suc-sub">{c.form.success.sub}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
