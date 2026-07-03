"use client";

import { useModal, scrollToId } from "./ModalProvider";

// A button that either opens a modal (action) or scrolls to a section (scrollTo).
export default function ActionButton({ action, scrollTo, className = "btn btn-o", style, children }) {
  const { open } = useModal();
  const onClick = () => {
    if (action) open(action);
    else if (scrollTo) scrollToId(scrollTo);
  };
  return (
    <button className={className} style={style} onClick={onClick}>
      {children}
    </button>
  );
}
