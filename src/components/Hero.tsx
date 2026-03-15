'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaUtensils, FaBell, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* 배경 장식 요소 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF6B35] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF6B35] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-orange-200 dark:bg-orange-900 opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* 로고 영역 */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 relative"
          >
            {/* 로고 */}
            <div className="relative inline-block">
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <div className="absolute inset-0 bg-[#FF6B35] opacity-10 rounded-full blur-3xl scale-125"></div>
                <Image
                  src="/images/logo2.png"
                  alt="이따가 뭐 먹지 로고"
                  width={220}
                  height={220}
                  className="mx-auto relative z-10"
                  priority
                />
              </motion.div>
            </div>

            {/* 기능 아이콘들 - 로고 아래에 배치 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center items-center gap-4 mt-8"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
                <FaBell className="text-[#FF6B35] text-lg" />
                <span className="text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap">알림 설정</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
                <FaUsers className="text-[#FF6B35] text-lg" />
                <span className="text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap">상황 선택</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
                <FaMapMarkerAlt className="text-[#FF6B35] text-lg" />
                <span className="text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap">메뉴선정</span>
              </div>
            </motion.div>
          </motion.div>

          {/* 메인 타이틀 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            이따가 뭐 먹지?
          </motion.h1>

          {/* 부제목 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto whitespace-nowrap"
          >
            간단한 질문으로 딱 맞는 음식을 추천해드립니다
          </motion.p>

          {/* CTA 버튼 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#download"
              className="px-8 py-4 bg-[#FF6B35] text-white rounded-full font-semibold text-lg hover:bg-[#e55a2b] transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              지금 다운로드
            </a>
            <a
              href="#features"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-[#FF6B35] rounded-full font-semibold text-lg border-2 border-[#FF6B35] hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors"
            >
              기능 알아보기
            </a>
          </motion.div>

          {/* 스크롤 인디케이터 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16"
          >
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 mx-auto text-[#FF6B35]"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

