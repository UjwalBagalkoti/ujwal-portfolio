"use client";

import { useEffect, useState } from "react";

const roles = ["full-stack developer.", "python developer.", "backend engineer."];

export default function TypedRole() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(query.matches);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setText(roles[0]);
      return;
    }

    const current = roles[roleIndex];
    const speed = deleting ? 35 : 65;

    let pause: ReturnType<typeof setTimeout> | undefined;
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          pause = setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, speed);

    return () => {
      clearTimeout(timeout);
      if (pause) clearTimeout(pause);
    };
  }, [text, deleting, roleIndex, reduceMotion]);

  return (
    <span className="font-mono">
      {text}
      <span className="inline-block w-[2px] h-[0.9em] bg-accent dark:bg-accent-bright ml-0.5 translate-y-[1px] animate-caret" />
    </span>
  );
}
