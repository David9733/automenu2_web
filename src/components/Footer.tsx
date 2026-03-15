'use client';

import Link from 'next/link';
import { FaEnvelope, FaUser } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* 앱 정보 */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">이따가 뭐 먹지</h3>
            <p className="text-gray-400">
              간단한 질문으로 딱 맞는 음식을 추천해드립니다
            </p>
          </div>

          {/* 링크 */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">링크</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[#FF6B35] transition-colors"
                >
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">연락처</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaUser className="text-[#FF6B35]" />
                <span className="text-gray-300">이시욱</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-[#FF6B35]" />
                <a
                  href="mailto:dltldnr11@gmail.com"
                  className="hover:text-[#FF6B35] transition-colors"
                >
                  dltldnr11@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} 이따가 뭐 먹지. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

