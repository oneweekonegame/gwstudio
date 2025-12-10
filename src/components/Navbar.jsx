import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItem = [
  { name: "Apps", section: "Apps" },
  { name: "Legal_Documents", section: "Legal_Documents" },
  // { name: "이용약관", section: "Ko_TurmsOfUse" },
  // { name: "개인정보처리방침", section: "Ko_Privacy" },
  { name: "Contact", section: "Contact" },

];

const Navbar = ({ setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSectionChange = (section) => {
    setActiveSection(section); // 섹션 변경
    setIsMenuOpen(false); // 모바일 메뉴 닫기
  };

  return (
    <nav className="fixed w-full bg-gray-50 top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center text-xl sm:text-2xl font-bold text-gray-900">
          <div className="w-12 h-12 sm:h-10 flex items-center justify-center rounded-full border-3 sm:border-4">
            GW
          </div>
          <span>
            <span className="text-yellow-500">Studio</span>
          </span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-700 font-medium">
          {navItem.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleSectionChange(item.section)}
                className="hover:text-green-500 cursor-pointer transition-colors"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="hidden md:block">
          <button
            onClick={toggleMenu}
            className="px-4 py-2 sm:px-5 sm:py-2 rounded-lg sm:rounded-xl bg-pink-500 text-white font-medium hover:bg-pink-600 transition-colors"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg border-t border-gray-200 absolute top-full left-0 right-0">
              <div className="px-4 py-3 space-y-3">
                {navItem.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleSectionChange(item.section)}
                    className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg hover:text-green-500 transition-colors w-full text-left"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-2">
                  <button
                    className="w-full py-2 rounded-lg bg-pink-500 text-white font-medium hover:bg-pink-600 transition-colors"
                    onClick={toggleMenu}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
