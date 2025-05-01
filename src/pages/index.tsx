import { Header } from "components";
import Link from "next/link";
import { TbBrowserCheck, TbTool } from "react-icons/tb";

function Home() {
  return (
    <div className="flex flex-col">
      <Header />

      <div className="flex flex-col items-center gap-24 p-24">
        <div className="flex flex-col items-center gap-1">
          <p>
            this will be the internet space where we can share our{" "}
            <strong>side projects</strong>
          </p>
          <p>and together improve them with some cool community feedback</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <p className="font-bold">[ work in progress ]</p>
          <p>
            currently working on some{" "}
            <a
              className="cursor-pointer text-blue-600 hover:text-blue-400"
              href="https://github.com/carmogui/sideuniverse/milestone/3"
              target="_blank"
            >
              authentication
            </a>{" "}
            stuff :D
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <p className="text-center font-bold">[ some cool links ]</p>
          <Link
            className="flex items-center gap-2 rounded-lg bg-[#f0da5e] px-4 py-2 font-bold text-[#383838] hover:opacity-75"
            href="/status"
          >
            <TbBrowserCheck size={24} />
            status page
          </Link>

          <Link
            className="flex items-center gap-2 rounded-lg bg-[#f0da5e] px-4 py-2 font-bold text-[#383838] hover:opacity-75"
            href="/legacy/under-construction"
          >
            <TbTool size={24} />
            legacy under construction page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
