"use client";
import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="p-4 text-center justify-center text-xs text-neutral-500 border-t border-neutral-100">
      <span className="font-semibold">{new Date().getFullYear()} </span>
      &#8212; Forked from{" "}
        <Link href={'https://github.com/manuarora700/sidefolio'} target={'_blank'}>Sidefolio</Link>
    </div>
  );
};
