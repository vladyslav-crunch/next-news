"use client";
import Link from "next/link";
import NavLink from "@/components/nav-link";

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href="/news">News</NavLink>
          </li>
          <li>
            <NavLink href="/app/(content)/archive">Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
