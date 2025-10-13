import { useState } from "react";

const navItem = [
  { name: "Home", href: "#" },
  { name: "Contact", href: "#Contact" },
  { name: "Apps", href: "#Apps" },
  { name: "Turm", href: "#Turm" },
];
const Navbar = () => {
  const [isMenuOption, setIsMenuOption] = useState(false);
  const toggleMenu = () => setIsMenuOption(!isMenuOption);

  return (
    <nav className="fixed w-full bg-gray-50 top-0 left-0 right-0 z-50">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12
       lg:px-20 py-3 md:py-4 flex items-center justify-between"
      >
        {/*Logo */}
        <div
          className="flex items-center text-xl sm:text-2xl
         font-bold text-gray-900"
        >
          <div
            className="w-12 h-12 sm:h-10 flex items-center justify-center
         rounded-full border-3 sm:border-4"
          >
            GW
          </div>
          
          <span>
                <span className="text-yellow-500">
                    Studio
                </span>

          </span>
        </div>

        {/* links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8
         text-gray-700 font-medium">
          {navItem.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="hover:text-green-500 cursor-pointer
             transition-colors">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Button */}

        <div className="">
          <button>Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
