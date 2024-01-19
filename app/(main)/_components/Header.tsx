import Link from "next/link";
import Image from "next/image";
import { DarkModeBtn } from "./DarkModeBtn";
import { CardShare } from "./CardShare";
export const Header = () => {
  return (
    <header className="py-4 px-4 z-0">
      <div className="flex justify-between items-center md:max-w-5xl m-auto">
        <div className="flex items-center">
          <div className="mr-4">
            <Image alt="logo" src="/logo.png" width={48} height={48}></Image>
          </div>
          <h1
            className="
              text-2xl
              font-bold
              text-fuchsia-500"
            style={{ fontFamily: "Maple Mono SC NF Freeze" }}
          >
            EarthWorm
          </h1>
        </div>
        <div className="flex gap-4 items-center">
          <CardShare />
          <Link href="/course" className="hover:text-fuchsia-500">
            更多课程
          </Link>
          <DarkModeBtn />
        </div>
      </div>
    </header>
  );
};
