
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-mint-pastel/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-mint-pastel to-green-pastel rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">💊</span>
            </div>
            <span className="text-2xl font-bold font-mulish bg-gradient-to-r from-mint-pastel to-green-pastel bg-clip-text text-transparent">
              HAP MEDBUDDY
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#gioi-thieu" className="text-gray-700 hover:text-mint-pastel font-medium transition-colors text-lg">
              Giới thiệu
            </a>
            <a href="#tinh-nang" className="text-gray-700 hover:text-mint-pastel font-medium transition-colors text-lg">
              Tính năng
            </a>
            <a href="#huong-dan" className="text-gray-700 hover:text-mint-pastel font-medium transition-colors text-lg">
              Hướng dẫn
            </a>
            <a href="#tai-app" className="text-gray-700 hover:text-mint-pastel font-medium transition-colors text-lg">
              Tải App
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-gradient-to-r from-mint-pastel to-green-pastel hover:from-mint-pastel/80 hover:to-green-pastel/80 text-gray-800 font-semibold px-6 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Tải miễn phí
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`w-full h-0.5 bg-gray-600 transform transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-600 my-1 transition duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-600 transform transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="#gioi-thieu" className="text-gray-700 font-medium text-lg">Giới thiệu</a>
              <a href="#tinh-nang" className="text-gray-700 font-medium text-lg">Tính năng</a>
              <a href="#huong-dan" className="text-gray-700 font-medium text-lg">Hướng dẫn</a>
              <a href="#tai-app" className="text-gray-700 font-medium text-lg">Tải App</a>
              <Button className="bg-gradient-to-r from-mint-pastel to-green-pastel text-gray-800 font-semibold w-full py-3 rounded-full text-lg mt-4">
                Tải miễn phí
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
