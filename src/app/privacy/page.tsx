import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        {/* 뒤로가기 버튼 */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#FF6B35] hover:text-[#e55a2b] transition-colors mb-8"
        >
          <FaArrowLeft />
          <span>홈으로 돌아가기</span>
        </Link>

        {/* 개인정보처리방침 내용 */}
        <article className="prose prose-lg max-w-none dark:prose-invert">
          <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            개인정보처리방침
          </h1>

          <div className="text-gray-600 dark:text-gray-300 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                1. 개인정보의 처리 목적
              </h2>
              <p>
                "이따가 뭐 먹지" 앱은 다음의 목적을 위하여 개인정보를 처리합니다.
                처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며,
                이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의
                동의를 받는 등 필요한 조치를 이행할 예정입니다.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  <strong>서비스 제공:</strong> 음식 추천 서비스 제공, 식사 시간 알림
                  기능 제공
                </li>
                <li>
                  <strong>서비스 개선:</strong> 서비스 이용 통계 분석, 서비스 품질
                  개선
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                2. 개인정보의 처리 및 보유기간
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  앱은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터
                  개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서
                  개인정보를 처리·보유합니다.
                </li>
                <li>
                  각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
                  <ul className="list-circle pl-0 mt-2 space-y-1">
                    <li>
                      서비스 이용 기록: 수집·이용에 관한 동의일로부터 3년까지
                    </li>
                    <li>
                      알림 설정 정보: 앱 삭제 시까지 또는 사용자가 직접 삭제할
                      때까지
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                3. 처리하는 개인정보의 항목
              </h2>
              <p>앱은 다음의 개인정보 항목을 처리하고 있습니다.</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  <strong>필수항목:</strong> 없음 (앱은 개인을 식별할 수 있는
                  정보를 수집하지 않습니다)
                </li>
                <li>
                  <strong>선택항목:</strong>
                  <ul className="list-circle pl-0 mt-2 space-y-1">
                    <li>식사 시간 알림 설정 (기기 내부 저장, 서버 전송 없음)</li>
                    <li>앱 사용 기록 (익명화된 통계 데이터)</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                4. 개인정보의 제3자 제공
              </h2>
              <p>
                앱은 정보주체의 개인정보를 제3자에게 제공하지 않습니다. 다만,
                다음의 경우에는 예외로 합니다.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>정보주체가 사전에 동의한 경우</li>
                <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                5. 개인정보처리의 위탁
              </h2>
              <p>
                앱은 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보
                처리업무를 위탁하고 있습니다.
              </p>
              <p className="mt-4">
                현재 개인정보 처리업무를 위탁하는 업체는 없습니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                6. 정보주체의 권리·의무 및 그 행사방법
              </h2>
              <p>
                정보주체는 다음과 같은 권리를 행사할 수 있습니다.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>개인정보 열람 요구</li>
                <li>개인정보 정정·삭제 요구</li>
                <li>개인정보 처리정지 요구</li>
              </ul>
              <p className="mt-4">
                권리 행사는 개발자에게 이메일로 연락하시면 됩니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                7. 개인정보의 파기
              </h2>
              <p className="whitespace-nowrap">
                앱은 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
              </p>
              <p className="mt-4">
                앱 내에 저장된 개인정보는 앱 삭제 시 함께 삭제됩니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                8. 개인정보 보호책임자
              </h2>
              <p>개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p><strong>이름:</strong> 이시욱</p>
                <p><strong>이메일:</strong> <a href="mailto:dltldnr11@gmail.com" className="text-[#FF6B35] hover:underline">dltldnr11@gmail.com</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                9. 개인정보 처리방침 변경
              </h2>
              <p>
                이 개인정보처리방침은 2024년 1월 1일부터 적용되며, 법령 및
                방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는
                변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}

