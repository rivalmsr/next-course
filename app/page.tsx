"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Hi there!</h2>
      <Link className="link text-primary" href="/users">Users Page</Link>
    </main>
  );
}
