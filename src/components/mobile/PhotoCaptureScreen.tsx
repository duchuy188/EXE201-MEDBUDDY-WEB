import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Upload, CheckCircle, Loader2 } from "lucide-react";

export const PhotoCaptureScreen = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [extractedData, setExtractedData] = useState<any>(null);
  const [showSubscriptionScreen, setShowSubscriptionScreen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageCapture = async (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    setCapturedImage(imageUrl);
    setIsProcessing(true);

    // Simulate AI processing for demo
    setTimeout(() => {
      const mockExtractedData = {
        medicines: [
          {
            name: "Amlodipine",
            dosage: "5mg",
            quantity: 30,
            price: "45.000 VNĐ",
            instructions: "Uống 1 viên/ngày sau ăn"
          },
          {
            name: "Metformin",
            dosage: "500mg", 
            quantity: 60,
            price: "32.000 VNĐ",
            instructions: "Uống 2 viên/ngày, sáng và tối"
          }
        ],
        pharmacy: "Nhà thuốc ABC",
        date: "15/06/2024",
        totalAmount: "77.000 VNĐ"
      };
      
      setExtractedData(mockExtractedData);
      setIsProcessing(false);
    }, 3000);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleImageCapture(file);
    }
  };

  const handleAddToInventory = () => {
    console.log('Adding medicines to inventory:', extractedData);
    // Reset state
    setCapturedImage(null);
    setExtractedData(null);
  };

  const handleRetake = () => {
    setCapturedImage(null);
    setExtractedData(null);
    setIsProcessing(false);
  };

  // Subscription screen logic
  const handleShowSubscription = () => {
    setShowSubscriptionScreen(true);
  };
  const handleCloseSubscription = () => {
    setShowSubscriptionScreen(false);
  };
  const handleSelectPackage = (pkg: string) => {
    setShowSubscriptionScreen(false);
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Camera className="mr-2 text-mint-pastel" size={20} />
          Chụp hóa đơn thuốc
        </h3>

        {!capturedImage ? (
          <div className="space-y-4">
            <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50">
              <Camera size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600 mb-4">
                Chụp ảnh hóa đơn thuốc để AI tự động nhận diện và thêm vào kho
              </p>
              
              <div className="space-y-3">
                <Button 
                  className="w-full bg-gradient-to-r from-mint-pastel to-green-pastel text-gray-800 font-bold"
                  onClick={handleShowSubscription}
                >
                  <Camera className="mr-2" size={16} />
                  Chụp ảnh
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="mr-2" size={16} />
                  Chọn từ thư viện
                </Button>
              </div>
              
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>
            
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">💡 Mẹo chụp ảnh tốt:</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Đảm bảo ánh sáng đủ sáng</li>
                <li>• Hóa đơn phẳng, không bị cong</li>
                <li>• Chữ rõ ràng, không bị mờ</li>
                <li>• Chụp toàn bộ hóa đơn</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="relative">
              <img 
                src={capturedImage} 
                alt="Captured receipt" 
                className="w-full h-48 object-cover rounded-xl border"
              />
              
              {isProcessing && (
                <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <Loader2 className="animate-spin mx-auto mb-2" size={32} />
                    <p className="text-sm">AI đang phân tích hóa đơn...</p>
                  </div>
                </div>
              )}
            </div>

            {isProcessing && (
              <Card className="p-4 bg-blue-50 border-blue-200">
                <div className="flex items-center space-x-3">
                  <Loader2 className="animate-spin text-blue-600" size={20} />
                  <div>
                    <p className="font-semibold text-blue-800">Đang xử lý...</p>
                    <p className="text-sm text-blue-600">AI đang nhận diện thông tin thuốc từ hóa đơn</p>
                  </div>
                </div>
              </Card>
            )}

            {extractedData && (
              <Card className="p-4 bg-green-50 border-green-200">
                <div className="flex items-center mb-3">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  <h4 className="font-semibold text-green-800">Nhận diện thành công!</h4>
                </div>
                
                <div className="space-y-3">
                  <div className="text-sm text-gray-600">
                    <p><strong>Nhà thuốc:</strong> {extractedData.pharmacy}</p>
                    <p><strong>Ngày:</strong> {extractedData.date}</p>
                    <p><strong>Tổng tiền:</strong> {extractedData.totalAmount}</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Danh sách thuốc:</p>
                    {extractedData.medicines.map((medicine: any, index: number) => (
                      <div key={index} className="bg-white p-3 rounded-lg border mb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-semibold">{medicine.name}</p>
                            <p className="text-sm text-gray-600">{medicine.dosage} - SL: {medicine.quantity}</p>
                            <p className="text-xs text-gray-500">{medicine.instructions}</p>
                          </div>
                          <p className="text-sm font-semibold text-green-600">{medicine.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3 mt-4">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-mint-pastel to-green-pastel text-gray-800 font-bold"
                    onClick={handleAddToInventory}
                  >
                    <CheckCircle className="mr-2" size={16} />
                    Thêm vào kho
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={handleRetake}
                  >
                    Chụp lại
                  </Button>
                </div>
              </Card>
            )}
            
            {!isProcessing && !extractedData && (
              <div className="flex space-x-3">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={handleRetake}
                >
                  Chụp lại
                </Button>
              </div>
            )}
          </div>
        )}
      </Card>
    </div>
  );
};
