import Link from "next/link";
import { navLinks } from "@/data/content";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-black/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-white/70 md:flex-row md:justify-between md:px-10">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[#00eaff]">LPVK</p>
          <h4 className="mt-2 text-lg font-semibold text-white">
            Infrared Sensor-Based Virtual Keyboard
          </h4>
          <p className="mt-3 max-w-sm text-white/60">
            Futuristic holographic typing powered by laser projection, infrared sensing, and embedded
            intelligence. Designed for sterile, portable, and immersive environments.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-18 gap-y-3 text-xs uppercase tracking-[0.3em]">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-white/60 hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} LPVK. Built with laser precision.
      </div>
    </footer>
  );
};

export default Footer;


