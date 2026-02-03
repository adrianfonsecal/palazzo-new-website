'use client'
import Link  from "next/link";
import Image from 'next/image';
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import logoDark from '@/app/assets/images/WebsiteLogoDark.png';
import logoLight from '@/app/assets/images/WebsiteLogoLight.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLightBackground, setIsLightBackground] = useState(false);
  const palazzoUrl = "https://palazzoinvites.com";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const observerOptions = {
        root: null,
        rootMargin: "-20px 0px -90% 0px", // Detect elements near the top
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // IDs of sections with light background (white)
                const lightSections = ['beneficios', 'paquetes', 'ejemplos'];
                if (lightSections.includes(entry.target.id)) {
                    setIsLightBackground(true);
                } else {
                    setIsLightBackground(false);
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section'); 
    
    sections.forEach(section => observer.observe(section));
    // Also observe footer if it has an ID
    const footer = document.querySelector('footer');
    if(footer) observer.observe(footer);

    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
        observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Beneficios", href: "#beneficios" },
    { name: "Paquetes", href: "#paquetes" },
    { name: "Ejemplos", href: "#ejemplos" },
    { name: "Contacto", href: "#contacto" },
  ];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 border-b",
        isScrolled ? "bg-white/10 backdrop-blur-md shadow-sm border-white/20" : "bg-transparent py-4 border-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center h-16">
        <Link href={palazzoUrl} className="shrink-0 flex items-center gap-2 cursor-pointer">
          <Image 
            src={isLightBackground ? logoLight : logoDark} 
            alt="Palazzo Invites Logo" 
            className='website-logo transition-opacity duration-300' 
          />
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={cn(
                "text-sm uppercase tracking-widest transition-colors duration-200",
                isLightBackground ? "text-charcoal hover:text-sand" : "text-white hover:text-primary"
              )}
            >
              {link.name}
            </a>
          ))}
          <a href="https://app.palazzoinvites.com/login"
                        className="btn-primary px-5 py-2 rounded-full uppercase text-xs tracking-widest font-bold">Iniciar
                        Sesión</a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn("md:hidden transition-colors", isLightBackground ? "text-charcoal" : "text-white")} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-lg font-serif text-white hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
