'use client';

import { motion } from 'framer-motion';
import { FaGooglePlay, FaApple } from 'react-icons/fa';

export default function DownloadSection() {
  return (
    <section id="download" className="py-20 bg-[#FF6B35] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-base sm:text-xl mb-12 opacity-90 whitespace-nowrap">
            간단한 질문으로 당신에게 딱 맞는 음식을 찾아보세요
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="https://play.google.com/store/apps/details?id=com.automenu2&hl=ko"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 bg-white text-[#FF6B35] px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <FaGooglePlay className="text-3xl" />
              <div className="text-left">
                <div className="text-xs opacity-70">다운로드</div>
                <div className="text-lg">Google Play</div>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 bg-gray-300 text-gray-500 px-8 py-4 rounded-full font-semibold text-lg shadow-lg cursor-not-allowed"
            >
              <FaApple className="text-3xl" />
              <div className="text-left">
                <div className="text-xs opacity-70">준비중</div>
                <div className="text-lg">App Store</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

