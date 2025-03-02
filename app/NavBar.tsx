import Link from "next/link";

function NavBar() {
  return (
    <nav className="p-5 bg-slate-200">
      <ul className="flex gap-3 ">
        <li>
          <Link href="/">Next JS</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
