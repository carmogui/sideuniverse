import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";

export default function UnderConstructionPage() {
  return (
    <div className="relative flex h-dvh items-center justify-center">
      <Link
        className="absolute left-0 top-0 flex items-center gap-2 px-4 py-4 font-bold text-[#383838] hover:opacity-75"
        href="/"
      >
        <div className="pb-px">
          <FaChevronLeft size={20} />
        </div>
        return
      </Link>

      <span className="absolute bottom-0 right-0 p-4 opacity-40">
        legacy page | September 2023
      </span>

      <div className="flex flex-col items-center gap-20">
        <div className="flex flex-col items-center gap-2">
          <Link
            href="/"
            className="cursor-pointer text-5xl font-bold hover:opacity-80"
          >
            🌌 sideuniverse
          </Link>

          <br />

          <div className="flex flex-col items-center gap-1">
            <p>
              this will be the internet space where we can share our{" "}
              <strong>side projects</strong>
            </p>
            <p>and together improve them with some cool community feedback</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-lg bg-gray-300 px-5 py-4">
          <h2 className="text-lg font-bold">
            🚗 you can check the roadmap here 🗺️
          </h2>

          <a
            className="text-blue-600 underline hover:text-blue-500"
            href="https://github.com/carmogui/sideuniverse/milestones"
            target="_blank"
          >
            sideuniverse/milestones
          </a>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span>also, check my personal website 😄</span>
          <a
            className="flex items-center gap-2 rounded-lg bg-[#f0da5e] px-4 py-2 font-bold text-[#383838] hover:opacity-75"
            href="https://www.carmogui.dev/"
            target="_blank"
          >
            carmogui.dev
            <div className="pb-px">
              <FaExternalLinkAlt size={12} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
