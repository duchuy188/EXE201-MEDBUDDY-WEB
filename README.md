# HAP MEDBUDDY - Ứng dụng hỗ trợ người bệnh cao huyết áp

## Giới thiệu dự án

HAP MEDBUDDY là một ứng dụng web được thiết kế để hỗ trợ người bệnh cao huyết áp, đặc biệt là người cao tuổi, trong việc:
- Nhắc nhở uống thuốc đúng giờ
- Theo dõi huyết áp hàng ngày
- Kết nối với người thân để chia sẻ thông tin sức khỏe
- Cung cấp thông tin y tế và lời khuyên từ AI

## Công nghệ sử dụng

Dự án được xây dựng với:
- **Vite** - Build tool và development server
- **TypeScript** - Ngôn ngữ lập trình
- **React** - Framework frontend
- **shadcn-ui** - Component library
- **Tailwind CSS** - CSS framework
- **Capacitor** - Hybrid app development

## Cài đặt và chạy dự án

### Yêu cầu hệ thống
- Node.js (phiên bản 16 trở lên)
- npm hoặc yarn

### Các bước cài đặt

```sh
# Bước 1: Clone repository
git clone <YOUR_GIT_URL>

# Bước 2: Di chuyển vào thư mục dự án
cd EXE201-MEDBUDDY-WEB

# Bước 3: Cài đặt dependencies
npm install

# Bước 4: Chạy development server
npm run dev
```

### Các lệnh khác

```sh
# Build dự án cho production
npm run build

# Preview build production
npm run preview

# Lint code
npm run lint
```

## Cấu trúc dự án

```
src/
├── components/          # Các component React
│   ├── mobile/         # Components cho mobile app
│   └── ui/             # UI components từ shadcn-ui
├── pages/              # Các trang chính
├── shared/             # Code dùng chung
│   ├── api/           # API endpoints
│   ├── types/         # TypeScript types
│   └── utils/         # Utility functions
├── hooks/              # Custom React hooks
└── assets/             # Hình ảnh và tài nguyên
```

## Tính năng chính

### Web Application
- Landing page giới thiệu ứng dụng
- Demo các tính năng chính
- Hướng dẫn sử dụng
- Download links cho mobile app

### Mobile App (Capacitor)
- Dashboard theo dõi sức khỏe
- Quản lý thuốc và lịch uống
- Theo dõi huyết áp
- Kết nối với gia đình
- AI Health Insights
- Voice reminders

## Deployment

### Web Application
Dự án có thể được deploy lên các platform như:
- Vercel
- Netlify
- GitHub Pages

### Mobile App
Sử dụng Capacitor để build cho:
- Android (APK/AAB)
- iOS (IPA)

## Đóng góp

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## Liên hệ

- **Team**: HAP MEDBUDDY Team
- **Email**: contact@hapmedbuddy.com
- **Website**: https://hapmedbuddy.com

## License

Dự án này được phát triển cho mục đích học tập và nghiên cứu.