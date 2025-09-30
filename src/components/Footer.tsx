import { FaFacebook, FaTiktok, FaComments } from "react-icons/fa";
import MedBuddyLogo from "../assets/images/medbuddy-logo.png"; // Add this import at the top

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-mint-pastel/10 py-16 border-t border-mint-pastel/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-mint-pastel to-green-pastel rounded-xl flex items-center justify-center p-2">
                <img 
                  src={MedBuddyLogo} 
                  alt="MedBuddy" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold font-mulish bg-gradient-to-r from-mint-pastel to-green-pastel bg-clip-text text-transparent">
                HAP MEDBUDDY
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              <strong>Người bạn thuốc mỗi ngày</strong> - Ứng dụng nhắc lịch uống thuốc dành cho người cao tuổi, 
              người bệnh mãn tính và người thân chăm sóc từ xa.
            </p>
            <div className="space-y-2">
              <p className="text-gray-700 font-semibold">📧 Email: hapmedbuddy@gmail.com</p>
              <p className="text-gray-700 font-semibold">📞 Hotline: 1900-1234 (miễn phí)</p>
              <p className="text-gray-700 font-semibold">🕐 Hỗ trợ: 24/7</p>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-xl font-bold font-mulish mb-4 text-gray-800">Liên kết nhanh</h3>
            <ul className="space-y-3">
              <li><a href="#gioi-thieu" className="text-gray-600 hover:text-mint-pastel transition-colors text-lg">Giới thiệu</a></li>
              <li><a href="#tinh-nang" className="text-gray-600 hover:text-mint-pastel transition-colors text-lg">Tính năng</a></li>
              <li><a href="#huong-dan" className="text-gray-600 hover:text-mint-pastel transition-colors text-lg">Hướng dẫn sử dụng</a></li>
              <li><a href="#tai-app" className="text-gray-600 hover:text-mint-pastel transition-colors text-lg">Tải ứng dụng</a></li>
              <li><a href="#lien-he" className="text-gray-600 hover:text-mint-pastel transition-colors text-lg">Liên hệ</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-xl font-bold font-mulish mb-4 text-gray-800">Hỗ trợ</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-mint-pastel transition-colors text-lg">Câu hỏi thường gặp</a></li>
              <li><a href="#" className="text-gray-600 hover:text-mint-pastel transition-colors text-lg">Video hướng dẫn</a></li>
              <li><a href="#" className="text-gray-600 hover:text-mint-pastel transition-colors text-lg">Chính sách bảo mật</a></li>
              <li><a href="#" className="text-gray-600 hover:text-mint-pastel transition-colors text-lg">Điều khoản sử dụng</a></li>
              <li><a href="#" className="text-gray-600 hover:text-mint-pastel transition-colors text-lg">Báo lỗi</a></li>
            </ul>
          </div>
        </div>
        
        {/* Social media */}
        <div className="border-t border-mint-pastel/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <h3 className="text-lg font-bold font-mulish mb-2 text-gray-800">Kết nối với chúng tôi</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com/HAPMedBuddy2025" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-[#58a7de] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                >
                  <FaFacebook size={24} />
                </a>
                
                <a 
                  href="https://www.tiktok.com/@hapmedbuddy?lang=vi-VN" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-[#58a7de] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                >
                  <FaTiktok size={24} />
                </a>
                
                <a href="#" className="w-12 h-12 bg-[#58a7de] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                  <FaComments size={24} />
                </a>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-600 mb-2">
                <strong>Nhóm phát triển HAP MEDBUDDY</strong>
              </p>
              <p className="text-gray-500">
                © 2025 HAP MEDBUDDY. Mọi quyền được bảo lưu.
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Được phát triển với ❤️ tại Việt Nam
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom message */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-mint-pastel/20 to-pink-pastel/20 p-6 rounded-2xl border border-mint-pastel/30">
            <p className="text-2xl font-semibold text-gray-800 font-mulish">
              💝 "Yêu thương không giới hạn khoảng cách - HAP MEDBUDDY luôn bên bạn"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
