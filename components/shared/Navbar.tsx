"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Sidebar from "@/components/shared/Sidebar";
import { navlink } from "@/constants";

const Navbar = () => {
  const { asPath } = useRouter();

  return (
    <nav className="nav">
      <div className="nav-large container mx-auto">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="asd"
            width={150}
            height={120}
            priority
          />
        </Link>

        <div className="flex gap-3">
          {navlink.map((item, i) => (
            <Link
              href={item.route}
              className={`nav-item ${item.route === asPath && "active"}`}
              key={i}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* mobile */}
      <Sidebar />
    </nav>
  );
};

export default Navbar;
