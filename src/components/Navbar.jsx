"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Hamburger from "hamburger-react";
import { useState } from "react";
import logo from "@/assets/logo.jpg";
import logoAaci from "@/assets/logoaaci.png";

const Navbar = () => {
  const closeNavbar = () => {
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" flex-wrap w-full pb-2 px-4 lg:py-1 lg:px-10 z-20 flex justify-center ">
      <nav className="flex w-full justify-between items-center ">
        <Link href="/" className="">
          <Image src={logo} width={180} alt="logo lingua" />
        </Link>
        <div className=" hidden lg:flex text-customPink text-lg ">
          <ul className="flex gap-8 items-center">
            <li>
              <Link href="#" className="hover:text-customGray">
                Cursos
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-customGray">
                Examenes
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-customGray">
                Empresas
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-customGray">
                Traducciones Públicas
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-customGray">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:hidden text-customPink">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>
      </nav>

      {isOpen ? (
        <ul className="text-customPink lg:hidden flex flex-col gap-8 font-semibold text-center pt-6">
          <li>
            <Link
              href="/"
              className="hover:text-customGray"
              onClick={closeNavbar}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:text-customGray"
              onClick={closeNavbar}
            >
              Cursos
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:text-customGray"
              onClick={closeNavbar}
            >
              Examenes
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:text-customGray"
              onClick={closeNavbar}
            >
              Empresas
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:text-customGray"
              onClick={closeNavbar}
            >
              Traducciones <br /> Públicas
            </Link>
          </li>
          <li>
            <Link
              href="/contacto"
              className="hover:text-customGray"
              onClick={closeNavbar}
            >
              Contacto
            </Link>
          </li>

          <li>
            <div className="flex justify-center gap-2">
              <Link
                href="https://github.com/EmilianoAloi"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <Image src={githubLogo} width={20} alt="GitHub Logo" /> */}
              </Link>
              <Link
                href="https://www.linkedin.com/in/emilianoaloi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <Image src={linkedinLogo} width={20} alt="Linkedin Logo" /> */}
              </Link>
            </div>
          </li>
        </ul>
      ) : (
        ""
      )}
    </header>
  );
};

export default Navbar;
