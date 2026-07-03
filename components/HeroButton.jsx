"use client";

import { useModal, scrollToId } from "./ModalProvider";

export function HeroButton({ b }) {
  const { open } = useModal();
  const onClick = () => {
    if (b.action) open(b.action);
    else if (b.scrollTo) scrollToId(b.scrollTo);
  };
  return (
    <div className={`hbtn ${b.cls}`} onClick={onClick} role="button" tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick(); }}>
      <div className="hbtn-label">{b.label}</div>
      <div className="hbtn-sub">{b.sub}</div>
    </div>
  );
}
