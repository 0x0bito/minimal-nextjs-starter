import ThemeToggle from "./themeToggle";

export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-[1200px] items-center justify-between">
      <h1>LOGO</h1>
      <ul className="flex justify-center gap-5 p-10">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <ThemeToggle />
    </nav>
  );
}
