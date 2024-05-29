'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import Hamburger from 'hamburger-react'
import { useState } from "react"
import logo from "@/assets/logo.jpg"
import logoAaci from "@/assets/logoaaci.png"

const Navbar = () => {

    const closeNavbar = () => {
        setIsOpen(false);
    }

    const [isOpen, setIsOpen] = useState(false);


    return (

        <header
            className="fixed flex-wrap w-full px-4 py-6 lg:px-10 md:shadow-md z-20 flex justify-center shadow-lg transition duration-500 ease-in-out backdrop-filter backdrop-blur-md "
        >
            <nav className="flex w-full justify-between items-center ">
                <Link href="/" className="">
                    <Image src={logo} width={180} alt="logo lingua" />
                </Link>
                <div className="hidden lg:flex text-customPink text-lg ">
                    <ul className="flex gap-8 items-center">
                        <li><Link href="#" className="hover:text-customGray">Cursos</Link></li>
                        <li><Link href="#" className="hover:text-customGray">Examenes</Link></li>
                        <li><Link href="#" className="hover:text-customGray">Empresas</Link></li>
                        <li><Link href="#" className="hover:text-customGray">Traducciones Públicas</Link></li>
                        <li><Link href="#" className="hover:text-customGray">Contacto</Link></li>
                        <li className="p-2 px-6 flex flex-col items-center gap-2 bg-customBgPink text-center border-2 border-customPink rounded-xl shadow-lg">
                            <h3 className="text-xs font-bold">Cursos certificados:</h3>
                            <Image src={logoAaci} width={120} alt="logo aaci" />
                        </li>

                    </ul>
                </div>

                <div className="lg:hidden text-customPink">
                    <Hamburger toggled={isOpen} toggle={setIsOpen} />
                </div>
            </nav>

            {isOpen ?
                <ul className="text-customPink lg:hidden flex flex-col gap-8 font-semibold text-center pt-6"                    >
                    <li><Link href="/" className="hover:text-customGray" onClick={closeNavbar}>Inicio</Link></li>
                    <li><Link href="#" className="hover:text-customGray" onClick={closeNavbar}>Cursos</Link></li>
                    <li><Link href="#" className="hover:text-customGray" onClick={closeNavbar}>Examenes</Link></li>
                    <li><Link href="#" className="hover:text-customGray" onClick={closeNavbar}>Empresas</Link></li>
                    <li><Link href="#" className="hover:text-customGray" onClick={closeNavbar}>Traducciones <br /> Públicas</Link></li>
                    <li><Link href="#" className="hover:text-customGray" onClick={closeNavbar}>Contacto</Link></li>

                    <li>
                        <div className="flex justify-center gap-2">
                            <Link href="https://github.com/EmilianoAloi" target="_blank" rel="noopener noreferrer">
                                {/* <Image src={githubLogo} width={20} alt="GitHub Logo" /> */}
                            </Link>
                            <Link href="https://www.linkedin.com/in/emilianoaloi/" target="_blank" rel="noopener noreferrer">
                                {/* <Image src={linkedinLogo} width={20} alt="Linkedin Logo" /> */}
                            </Link>
                        </div>
                    </li>

                </ul>
                : ""
            }



        </header>
    )
}

export default Navbar