"use client";

import { useState } from "react";
import Image from "next/image";
import site from "@/data/site.json";
import { useModal, scrollToId } from "./ModalProvider";

export default function Header() {
  const { open } = useModal();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (item, fromMobile) => {
    if (item.action) open(item.action);
    else if (item.href) {
      const id = item.href.replace("#", "");
      scrollToId(id);
    }
    if (fromMobile) setMenuOpen(false);
  };

  return (
    <>
      <nav>
        <div className="nav-logo">
          <a onClick={() => scrollToId("inicio")} style={{ cursor: "pointer" }}>
            <Image src="/img/logo-nav.jpeg" alt="El Garaje Bikes" width={200} height={78} style={{ height: 78, width: "auto" }} priority />
          </a>
        </div>
        <ul className="nav-links">
          {site.nav.map((item) => (
            <li key={item.label}>
              <a onClick={() => handleNav(item, false)}>{item.label}</a>
            </li>
          ))}
        </ul>
        <a className="nav-cta" href={site.phoneHref}>Llamar</a>
        <button className="hamburger" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>
      <div className={`mob-menu${menuOpen ? " open" : ""}`} id="mobMenu">
        {site.nav.map((item) => (
          <a key={item.label} onClick={() => handleNav(item, true)}>{item.label}</a>
        ))}
        <a href={site.phoneHref}>{site.phone}</a>
      </div>
    </>
  );
}
