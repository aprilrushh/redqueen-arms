import React from 'react';

const App = () => {
  const services = [
    {
      title: "레스토랑 예약 / 관리",
      icon: "🍽️",
      description: "고급 레스토랑부터 캐주얼 다이닝까지, 완벽한 예약 관리"
    },
    {
      title: "세차장 예약 / 관리",
      icon: "🚗",
      description: "스마트한 세차 예약과 효율적인 시설 관리"
    },
    {
      title: "골프장 예약 / 관리",
      icon: "⛳",
      description: "프리미엄 골프장 예약과 회원 관리"
    },
    {
      title: "스포츠시설 예약 / 관리",
      icon: "🏃",
      description: "다양한 스포츠 시설의 통합 예약 관리"
    },
    {
      title: "퀵서비스 예약 / 관리",
      icon: "🚚",
      description: "On Demand Delivery 실시간 예약 및 배차 관리"
    },
    {
      title: "법률사무소 예약 / 관리",
      icon: "⚖️",
      description: "법률 상담 예약과 일정 관리"
    },
    {
      title: "기타 서비스 예약 / 관리",
      icon: "✨",
      description: "모든 예약 서비스를 위한 맞춤형 솔루션"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col items-center text-center">
            <div className="text-5xl mb-6">👑</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">RedQueen ARMS</h1>
            <p className="text-xl md:text-2xl mb-6">AI Reservation Management System</p>
            <p className="text-lg mb-4 max-w-3xl">
              모든 서비스를 AI 여성 로봇이 사람보다 더 친절하고 완벽하게 예약, 상담을 대행해드립니다
            </p>
            <p className="text-lg mb-8 max-w-3xl font-medium">
              "상담원이 정말 사람인지 구별할 수 없을 정도로 완벽합니다"
            </p>
            <p className="text-lg mb-8 max-w-2xl italic">
              예약, 상담, 관리를 RedQueen 로봇에 맡겨주세요
            </p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
              무료로 시작하기
            </button>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">서비스 카테고리</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">RedQueen의 특별한 점</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon="🤖"
              title="자연스러운 AI 음성 상담"
              description="마치 숙련된 전문 상담원과 대화하는 것처럼 자연스럽고 친절한 서비스를 제공합니다"
            />
            <FeatureCard
              icon="💎"
              title="프리미엄 서비스"
              description="VIP급 고객 응대 품질을 24시간 365일 변함없이 제공합니다"
            />
            <FeatureCard
              icon="✨"
              title="완벽한 업무 처리"
              description="실수없이 사람보다 더 완벽하게 상담, 예약을 처리해 드립니다"
            />
            <FeatureCard
              icon="📞"
              title="유연한 번호 연결"
              description="기존 전화번호, 또는 신규 예약/상담 전화번호에 연결해 드립니다"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-bold text-lg">RedQueen ARMS</p>
              <p className="text-gray-400">© 2025 All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xl">📞</span>
              <p>고객센터: 1588-0000</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-gray-100">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <div className="mt-4 flex justify-end">
      <span className="text-red-600 hover:text-red-700">자세히 보기 →</span>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default App;
