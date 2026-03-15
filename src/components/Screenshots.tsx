'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const screenshots = [
  'images/Screenshot_one.png',
  'images/Screenshot_two.png',
  'images/Screenshot_three.png',
  'images/Screenshot_four.png',
  'images/Screenshot_five.png',
  'images/Screenshot_six.png',
  'images/Screenshot_seven.png',
  'images/Screenshot_eight.png',
  'images/Screenshot_nine.png',
  'images/Screenshot_ten.png',
];

export default function Screenshots() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            앱 스크린샷
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            실제 앱 화면을 미리 확인해보세요
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer border-4 border-white dark:border-gray-700"
              onClick={() => setSelectedImage(screenshot)}
            >
              <Image
                src={`/${screenshot}`}
                alt={`앱 스크린샷 ${index + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
            </motion.div>
          ))}
        </div>

        {/* 모달 */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-md w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 z-10"
              >
                ×
              </button>
              <div className="relative aspect-[9/16] rounded-lg overflow-hidden bg-black">
                <Image
                  src={`/${selectedImage}`}
                  alt="확대된 스크린샷"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

