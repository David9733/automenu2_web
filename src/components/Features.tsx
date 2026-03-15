'use client';

import { motion } from 'framer-motion';
import { 
  FaClock, 
  FaUsers, 
  FaWineGlass, 
  FaUtensils, 
  FaBell,
  FaHamburger
} from 'react-icons/fa';

const features = [
  {
    icon: FaClock,
    title: '식사 시간 선택',
    description: '아침, 점심, 저녁 중 원하는 시간을 선택하세요',
  },
  {
    icon: FaUsers,
    title: '상황 선택',
    description: '혼자, 동료, 애인, 가족 중 상황에 맞게 선택하세요',
  },
  {
    icon: FaWineGlass,
    title: '음주 여부',
    description: '음주 여부를 선택하여 더 정확한 추천을 받으세요',
  },
  {
    icon: FaHamburger,
    title: '음식 종류 선택',
    description: '한식, 일식, 양식, 중식, 분식 중 원하는 종류를 선택하세요',
  },
  {
    icon: FaUtensils,
    title: '맞춤 음식 추천',
    description: '조건에 맞는 음식 1-3개를 추천해드립니다',
  },
  {
    icon: FaBell,
    title: '식사 시간 알림',
    description: '설정한 시간에 식사 알림을 받아보세요',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            주요 기능
          </h2>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto whitespace-nowrap">
            간단한 선택으로 당신에게 딱 맞는 음식을 찾아드립니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-white dark:from-gray-800 dark:to-gray-700 p-4 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-orange-100 dark:border-gray-600"
              >
                <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon className="text-white text-2xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-center text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 text-center leading-tight">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

