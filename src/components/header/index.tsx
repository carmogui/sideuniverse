import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-12 min-h-12 w-full items-center border-b border-solid border-gray-300 bg-white px-4">
      <Link href="/" className="text-lg font-bold hover:opacity-70">
        🌌 sideuniverse
      </Link>
    </header>
  );
}
