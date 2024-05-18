"use client";

import { Search } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState<string>("");
  const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={` ${isScrolled ? "bg-black-1" : "navbar"}`}>
      <Link href="/">
        <Image
          src="/assets/logo.png"
          alt="Logo"
          className="logo"
          width={200}
          height={50}
        />
      </Link>
      <div className="nav-links">
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="/my-list" className="nav-link">
          My List
        </Link>
      </div>
      <div className="nav-right">
        <div className="search">
          <input
            placeholder="Search movie..."
            className="input-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="icon" />
        </div>
        <Image
          src="/assets/profile_icon.jpg"
          alt="Profile icon"
          className="profile"
          onClick={() => setDropdownMenu(!dropdownMenu)}
          width={40}
          height={40}
        />
        {dropdownMenu && (
          <div className="dropdown-menu">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/my-list" className="nav-link">
              My List
            </Link>
            <a href="" className="nav-link">
              Log Out
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
