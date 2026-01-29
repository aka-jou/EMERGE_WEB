import React from "react";

type Props = { children: React.ReactNode; href?: string };

export default function FooterLink({ children, href = "#" }: Props) {
  return (
    <li>
      <a
        href={href}
        className="hover:text-[#005900] hover:pl-1 transition-all duration-300 block"
      >
        {children}
      </a>
    </li>
  );
}
