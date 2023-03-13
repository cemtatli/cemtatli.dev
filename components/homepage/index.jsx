import React from "react";
import { Fragment } from "react";
import { ArrowRight } from "iconsax-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex items-start xs:items-center justify-center xs:justify-start gap-2 xs:gap-0 w-full flex-col xs:flex-row">
        <div className="w-24 h-24 relative ">
          <Image src="/avatar.png" alt="cemtatli" fill />
        </div>
        <div className="ml-4">
          <h2 className="text-lg font-medium text-white">Cem Tatlı </h2>
          <p className="text-text text-sm">Frontend Developer in Izmir, Turkey </p>
        </div>
      </section>
      <section className="flex flex-col items-start justify-center gap-2">
        <Link href="/about" className="text-white text-sm hover:underline flex items-center group">
          About
          <ArrowRight
            color="#d9e3f0"
            size={14}
            variant="Outline"
            className="-rotate-45 ml-0.5 hidden group-hover:block"
          />
        </Link>
        <p className="text-text text-sm">
          A frontend developer who is interested in technological developments and always strives to
          improve himself.
        </p>
      </section>

      <section className="flex flex-col items-start justify-center gap-2">
        <h2 className="text-sm font-medium text-white">Skills</h2>
        <p className="text-text text-sm">
          I have experience in the following technologies. I am always learning new technologies.
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="text-xs text-white bg-gray-700 px-2 py-1 rounded-full hover:bg-skills hover:text-bg font-medium cursor-pointer">
            React
          </span>
          <span className="text-xs text-white bg-gray-700 px-2 py-1 rounded-full hover:bg-skills hover:text-bg font-medium cursor-pointer">
            Next.js
          </span>
          <span className="text-xs text-white bg-gray-700 px-2 py-1 rounded-full hover:bg-skills hover:text-bg font-medium cursor-pointer">
            Tailwind CSS
          </span>
          <span className="text-xs text-white bg-gray-700 px-2 py-1 rounded-full hover:bg-skills hover:text-bg font-medium cursor-pointer">
            JavaScript
          </span>
          <span className="text-xs text-white bg-gray-700 px-2 py-1 rounded-full hover:bg-skills hover:text-bg font-medium cursor-pointer">
            TypeScript
          </span>
          <span className="text-xs text-white bg-gray-700 px-2 py-1 rounded-full hover:bg-skills hover:text-bg font-medium cursor-pointer">
            HTML
          </span>
          <span className="text-xs text-white bg-gray-700 px-2 py-1 rounded-full hover:bg-skills hover:text-bg font-medium cursor-pointer">
            CSS
          </span>
          <span className="text-xs text-white bg-gray-700 px-2 py-1 rounded-full hover:bg-skills hover:text-bg font-medium cursor-pointer">
            Sass
          </span>
          <span className="text-xs text-white bg-gray-700 px-2 py-1 rounded-full hover:bg-skills hover:text-bg font-medium cursor-pointer">
            Git
          </span>
          <span className="text-xs text-white bg-gray-700 px-2 py-1 rounded-full hover:bg-skills hover:text-bg font-medium cursor-pointer">
            Figma
          </span>
        </div>
      </section>

      <section className="flex flex-col items-start justify-center gap-2">
        <Link
          href="/project"
          className="text-white text-sm hover:underline flex items-center group"
        >
          Project
          <ArrowRight
            color="#d9e3f0"
            size={14}
            variant="Outline"
            className="-rotate-45 ml-0.5 hidden group-hover:block"
          />
        </Link>
        <p className="text-text text-sm">
          I have worked on many projects. You can see the projects I have worked on.
        </p>
      </section>
    </div>
  );
}