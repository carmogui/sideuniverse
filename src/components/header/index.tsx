import Link from "next/link";

export function Header() {
  return (
    <>
      <div className="h-12" />
      <header className="fixed z-10 flex h-12 w-full items-center border-b border-solid border-gray-300 bg-white px-4">
        <Link href="/" className="text-lg font-bold hover:opacity-70">
          🌌 sideuniverse
        </Link>
      </header>
    </>
  );
}
