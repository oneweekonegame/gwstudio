import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  // 현재 표시할 섹션 상태 (기본: Home)
 const [activeSection, setActiveSection] = useState("Contact");

  // 섹션 렌더링 함수
  const renderSection = () => {
    switch (activeSection) {

      case "Apps":
        return (
          <section
            id="Apps"
            className="min-h-screen bg-gray-300 flex items-center justify-center"
          >
            <h1 className="text-4xl font-bold">Apps Section</h1>
          </section>
        );
      case "Legal_Documents":
        return (
        <section
  id="legal-docs"
  class="py-16 bg-gray-100 min-h-screen flex flex-col items-center"
>
  <div class="container mx-auto px-4">
    <h1 class="text-5xl font-extrabold text-gray-900 mb-4 text-center">
      Legal Documents
    </h1>
    <p class="text-xl text-gray-600 mb-12 text-center">
      Please review our Terms of Service and End User License Agreement.
    </p>

    <div
      class="bg-white shadow-xl rounded-lg p-8 mb-10 border-t-4 border-indigo-600"
    >
      <h2 class="text-3xl font-bold text-indigo-700 mb-6">
        Terms of Service (or Terms of Use)
      </h2>

      <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800">
        Acceptance of Terms
      </h3>
      <p class="text-gray-600 mb-4">
        These Terms of Service ("Terms") govern your use of the games,
        applications, websites, and services provided by
        <strong class="text-indigo-600">GW Studio</strong> (the "Services"). By
        using the Services, you agree to be bound by these Terms. If you do not
        agree to these Terms, do not use the Services.
      </p>

      <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800">
        Limited License and Intellectual Property
      </h3>
      <p class="text-gray-600 mb-4">
        We grant you a non-exclusive, non-transferable, revocable limited license
        to access and use the Services for your personal, non-commercial use. All
        rights, title, and interest in and to the Services (including all
        intellectual property rights) are and will remain the exclusive property
        of <strong class="text-indigo-600">GW Studio</strong> and its licensors.
      </p>

      <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800">
        User Conduct and Prohibited Activities
      </h3>
      <p class="text-gray-600 mb-4">
        You agree not to use the Services to:
      </p>
      <ul class="list-disc list-inside text-gray-600 ml-4 mb-4 space-y-1">
        <li>Violate any law or regulation.</li>
        <li>Harass, abuse, or harm another person.</li>
        <li>
          Reverse engineer or attempt to extract the source code of the Services.
        </li>
        <li>
          Use cheats, exploits, automation software, bots, or any unauthorized
          third-party software.
        </li>
      </ul>

      <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800">
        User Generated Content (UGC)
      </h3>
      <p class="text-gray-600 mb-4">
        You are solely responsible for any content you post, upload, or transmit
        through the Services ("UGC"). You grant
        <strong class="text-indigo-600">GW Studio</strong> a worldwide,
        non-exclusive, perpetual, irrevocable, royalty-free license to use,
        reproduce, modify, and display your UGC in connection with the Services.
      </p>

      <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800">
        Disclaimer of Warranties and Limitation of Liability
      </h3>
      <p class="text-gray-600 mb-4 font-mono p-3 bg-red-50 border border-red-200 rounded">
        THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE."
        <strong class="text-indigo-600">GW Studio</strong> DISCLAIMS ALL
        WARRANTIES, EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW,
        <strong class="text-indigo-600">GW Studio</strong> WILL NOT BE LIABLE
        FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
        DAMAGES.
      </p>

      <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800">
        Termination
      </h3>
      <p class="text-gray-600 mb-4">
        We may suspend or terminate your access to the Services at any time, for
        any reason or no reason, without notice or liability to you.
      </p>

      <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800">
        Governing Law and Dispute Resolution
      </h3>
      <p class="text-gray-600">
        These Terms shall be governed by the laws of
        <strong class="text-indigo-600">[Your Jurisdiction, e.g., the Republic of Korea]</strong>. 
        Any disputes arising under these Terms shall be resolved in the courts of
        <strong class="text-indigo-600">[Your Jurisdiction]</strong>. 
        (Note: Many companies include a mandatory arbitration clause here. Consult your lawyer.)
      </p>
    </div>

    <div
      class="bg-white shadow-xl rounded-lg p-8 border-t-4 border-green-600"
    >
      <h2 class="text-3xl font-bold text-green-700 mb-6">
        End User License Agreement (EULA)
      </h2>

      <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800">Introduction</h3>
      <p class="text-gray-600 mb-4">
        This EULA is a legal agreement between you and
        <strong class="text-indigo-600">GW Studio</strong> regarding your use of
        the <strong class="text-green-600">Ours Games and</strong> software. The
        game is licensed, not sold, to you.
      </p>

      <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800">
        License Grant
      </h3>
      <p class="text-gray-600 mb-4">
        <strong class="text-indigo-600">GW Studio</strong> grants you a personal,
        limited, non-transferable, revocable license to install and use the game
        for your non-commercial entertainment purposes on authorized devices.
      </p>

      <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800">Ownership</h3>
      <p class="text-gray-600">
        All rights and title in and to the game (including, but not limited to,
        any titles, computer code, themes, objects, characters, names, stories,
        dialogue, catch phrases, concepts, artwork, animations, sounds, musical
        compositions, audio-visual effects, operating methods, moral rights,
        documentation, in-game chat transcripts, character profile information,
        recordings of games played, and the game clients and server software) are
        owned by <strong class="text-indigo-600">GW Studio</strong> or its
        licensors.
      </p>
    </div>
  </div>
</section>
        );
      case "Ko_TurmsOfUse":
        return (
          <section
            id="Ko_TurmsOfUse"
            className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
          >
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                이용약관
              </h1>
              <p className="text-gray-700 mb-8 leading-relaxed">
                이 약관은 지더블유스튜디오(이하 "회사"라고 함)가 제공하는
                서비스의 이용과 관련하여 회사와 회원의 권리, 의무 및 기타 필요한
                사항을 규정함을 목적으로 합니다.
              </p>

              <div className="space-y-8">
                {/* 제1장 총칙 */}
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    제1장 총칙
                  </h2>

                  <div className="space-y-6">
                    {/* 제1조 */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">
                        제1조 (목적)
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        이 약관은 지더블유스튜디오가 제공하는 서비스의 이용과
                        관련하여 회사와 회원의 권리, 의무 및 기타 필요한 사항을
                        규정함을 목적으로 합니다.
                      </p>
                    </div>

                    {/* 제2조 */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">
                        제2조 (용어의 정의)
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                      </p>
                      <ul className="list-decimal list-inside text-gray-600 space-y-2 mt-4">
                        <li>
                          “회원”이라 함은 이 약관에 동의하여 회사와 서비스
                          이용계약을 체결하고 회사에서 제공하는 모든 서비스를
                          이용할 수 있는 권한을 획득한 자를 의미합니다.
                        </li>
                        <li>
                          “플랫폼”이라 함은 PC, 휴대폰, 태블릿, 휴대용 게임기,
                          콘솔 게임기, VR 등의 기기를 통해서 콘텐츠를 다운로드
                          받거나 설치하여 사용할 수 있도록 제공하는 제반
                          프로그램과 서비스를 의미합니다.
                        </li>
                        <li>
                          “서비스”라 함은 회사가 회원에게 플랫폼을 통하여
                          제공하는 서비스 및 이에 부수된 제반 서비스를
                          의미합니다.
                        </li>
                        <li>
                          “콘텐츠”라 함은 회사가 서비스의 제공과 관련하여 디지털
                          방식으로 제작된 유료 또는 무료의 내용물 일체(캐릭터,
                          게임머니, 아이템 등)를 의미합니다.
                        </li>
                        <li>
                          “GW ID” 또는 “계정”이라 함은 회원의 식별과 서비스
                          이용을 위하여 회원이 선정하고 회사가 승인하는, 문자,
                          특수문자, 숫자 등의 조합 또는 기존에 회원이 사용하고
                          있던 타 소셜 서비스의 로그인 계정을 의미합니다.
                        </li>
                        <li>
                          “게스트 ID”라 함은 회사에서 제공하는 간소화된 이용신청
                          절차를 통해 회원의 식별절차 없이 임시로 부여되는
                          계정을 의미합니다.
                        </li>
                        <li>
                          “계정정보”라 함은 회원의 계정, 비밀번호, 성명 등
                          회원이 회사에 제공한 개인정보, 기기정보, 서비스
                          이용정보(캐릭터 정보, 아이템, 레벨 등), 이용대금
                          결제정보 등 계정 또는 GW ID에 대한 일체의 정보를
                          의미합니다.
                        </li>
                        <li>
                          “게임 ID”라 함은 GW ID 또는 계정에 수반하여 특정
                          서비스에서만 사용하기 위해 회원이 별도로 생성하고
                          회사가 승인하는 문자, 특수문자, 숫자 등의 조합을
                          의미합니다.
                        </li>
                        <li>
                          “비밀번호”라 함은 회원이 자신의 계정을 사용하고,
                          계정에 대한 접근 권한을 통제하며, 자신의 정보 및
                          권익보호를 위해 스스로 선정하여 비밀로 관리하는 문자,
                          특수문자, 숫자 등의 조합을 의미합니다.
                        </li>
                        <li>
                          “게시물”이라 함은 회원이 서비스를 이용함에 있어 회원이
                          게시한 문자, 문서, 그림, 음성, 영상 또는 이들의
                          조합으로 이루어진 정보를 의미합니다.
                        </li>
                        <li>
                          “회원탈퇴”라 함은 회원이 회사와의 서비스 이용계약을
                          해지하는 것을 의미합니다.
                        </li>
                      </ul>
                      <p className="text-gray-700 mt-4">
                        이 약관에서 사용하는 용어의 정의는 제1항에서 정하는 것을
                        제외하고는 관련 법령, 가이드라인 및 운영정책에서 정하는
                        바에 따릅니다. 관련 법령과 운영정책에서 정하지 않는 것은
                        일반적인 상관례에 따릅니다.
                      </p>
                    </div>

                    {/* 제3조 */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">
                        제3조 (회사정보 등의 제공)
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        회사는 다음 각 호의 사항을 회원이 알아보기 쉽도록
                        홈페이지(www.gwstudio.app)나 서비스 내에 표시합니다.
                        다만, 제6호, 제7호, 제8호는 회원이 연결화면을 통하여 볼
                        수 있도록 할 수 있습니다.
                      </p>
                      <ul className="list-decimal list-inside text-gray-600 space-y-2 mt-4">
                        <li>상호 및 대표자의 성명</li>
                        <li>
                          영업소 소재지 주소(회원의 불만을 처리할 수 있는 곳의
                          주소를 포함한다)
                        </li>
                        <li>전화번호, 전자우편주소</li>
                        <li>사업자 등록번호</li>
                        <li>통신판매업 신고번호</li>
                        <li>개인정보처리방침</li>
                        <li>서비스 이용약관</li>
                        <li>
                          「게임산업진흥에 관한 법률」 등 관련 법령에 따라
                          표시할 의무가 있는 확률형 아이템 관련 정보
                        </li>
                      </ul>
                    </div>

                    {/* 제4조 */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">
                        제4조 (약관의 효력 및 적용과 변경)
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        회사는 이 약관의 내용을 회원이 알 수 있도록 회사에서
                        운영하는 홈페이지에 게시하거나 연결화면을 제공하는
                        방법으로 회원에게 공지합니다. 이 약관에 동의하고 회원
                        가입을 한 회원은 약관에 동의한 시점부터 동의한 약관의
                        적용을 받고 약관의 변경이 있을 경우에는 변경의 효력이
                        발생한 시점부터 변경된 약관의 적용을 받습니다. 이 약관에
                        동의하는 것은 정기적으로 홈페이지를 방문하여 약관의 변경
                        사항을 확인하는 것에 동의하는 것을 의미합니다.
                      </p>
                      <p className="text-gray-700 mt-4">
                        회사는 필요하다고 인정되는 경우 이 약관을 변경할 수
                        있습니다. 약관 변경 시 변경된 약관의 내용과 시행일을
                        정하여, 시행일로부터 7일 전 홈페이지 또는 서비스 내
                        화면을 통해 공시합니다. 이용자에게 불리한 변경의 경우,
                        시행일로부터 30일 전 공시 또는 전자우편으로 고지합니다.
                      </p>
                    </div>

                    {/* 제5조 */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">
                        제5조 (약관 외 준칙)
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        이 약관에서 정하지 아니한 사항과 해석에 관하여는 회사가
                        정한 개별 서비스 이용약관, 가이드라인, 운영정책 및 관련
                        법령이 적용됩니다.
                      </p>
                    </div>

                    {/* 제6조 */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">
                        제6조 (운영정책)
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        회사는 이 약관을 적용하기 위해 필요한 사항과 회원의
                        권익을 보호하고 서비스 내 질서를 유지하기 위하여
                        운영정책으로 정할 수 있습니다. 회원은 이 약관에
                        동의함으로써 운영정책의 적용을 받습니다.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 제2장 개인정보 관리 */}
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    제2장 개인정보 관리
                  </h2>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">
                      제7조 (개인정보의 보호 및 이용)
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      회사는 관련 법령에 따라 회원의 개인정보를 보호하기 위해
                      노력합니다. 개인정보의 보호 및 이용에 대해서는
                      개인정보처리방침에 따릅니다.
                    </p>
                    <ul className="list-decimal list-inside text-gray-600 space-y-2 mt-4">
                      <li>
                        사전에 고지한 목적 외로 개인정보를 이용하지 않으며, 목적
                        달성 시 즉시 파기합니다.
                      </li>
                      <li>
                        개인정보처리방침은 제3자 제공 서비스에는 적용되지
                        않습니다.
                      </li>
                      <li>
                        회원의 선택 또는 서비스 특성에 따라 별명, 캐릭터 사진
                        등이 공개될 수 있습니다.
                      </li>
                      <li>
                        회원은 개인정보를 성실히 관리해야 하며, 변동 시 변경해야
                        합니다.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 제3장~제7장 (간략히 예시, 필요 시 전체 추가) */}
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    제3장~제7장 기타
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    자세한 내용은 지더블유스튜디오의 공식 웹사이트에서 확인
                    가능합니다. 각 항목은 관련 법령에 따라 처리되며, 이용자의
                    권리 보호를 위해 노력하고 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </section>
        );

      case "Ko_Privacy":
        return (
          <section
            id="Ko_Privacy"
            className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
          >
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                개인정보처리방침
              </h1>
              <p className="text-gray-700 mb-8 leading-relaxed">
                지더블유스튜디오는 이용자의 자유와 권리 보호를 위해 「개인정보
                보호법」 및 관계 법령을 준수하며, 적법하게 개인정보를 처리하고
                안전하게 관리하고 있습니다. 이에 「개인정보 보호법」 제30조에
                따라 이용자에게 개인정보 처리에 관한 절차 및 기준을 안내하고,
                이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기
                위하여 다음과 같이 개인정보처리방침을 수립·공개합니다. 본
                개인정보처리방침은 지더블유스튜디오는 제공하는 서비스에
                적용됩니다.
              </p>

              <div className="space-y-8">
                {/* 목차 */}
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    목차
                  </h2>
                  <ul className="list-decimal list-inside text-gray-700 space-y-2">
                    <li>수집하는 개인정보의 항목</li>
                    <li>개인정보의 처리 목적</li>
                    <li>14세 미만 아동의 개인정보 처리에 관한 사항</li>
                    <li>개인정보의 제3자 제공</li>
                    <li>개인정보의 처리 위탁</li>
                    <li>개인정보의 국외이전</li>
                    <li>개인정보의 추가적인 이용 또는 제공의 기준</li>
                    <li>개인정보의 보유기간 및 파기</li>
                    <li>가명정보의 처리</li>
                    <li>이용자 및 법정대리인의 권리와 그 행사 방법</li>
                    <li>
                      개인정보 자동수집 장치의 설치·운영 및 거부에 관한 사항
                    </li>
                    <li>개인정보보호를 위한 지더블유스튜디오의 노력</li>
                    <li>개인정보보호책임자 및 고충처리 부서</li>
                    <li>기타</li>
                  </ul>
                </div>

                {/* 1. 수집하는 개인정보의 항목 */}
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    1. 수집하는 개인정보의 항목
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    지더블유스튜디오는 서비스 이용 시 필요한 개인정보만을
                    수집하며, 수집하는 개인정보의 항목을 이용자에게 상세히
                    안내하고 있습니다.
                  </p>
                  <div className="mt-4 space-y-4">
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">
                        ■ 필수정보란?
                      </h3>
                      <p className="text-gray-600">
                        기본적인 서비스를 제공하기 위해 수집하는 개인정보
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">
                        ■ 선택정보란?
                      </h3>
                      <p className="text-gray-600">
                        기본적인 서비스 이외에 부가적인 서비스를 제공하기 위해
                        수집하는 개인정보
                      </p>
                    </div>
                    <p className="text-gray-700">
                      지더블유스튜디오는 아래의 개인정보 항목을 개인정보 보호법
                      제15조 제1항 제1호에 따라 이용자의 동의를 받아 처리하고
                      있습니다:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>
                        <strong>회원가입:</strong> [필수] ID, 닉네임, 비밀번호,
                        본인확인정보(이름, 생년월일, 성별, 내외국인정보,
                        휴대전화번호, 연계정보(CI), 중복가입정보(DI), 이동통신사
                        정보)
                      </li>
                      <li>
                        <strong>보호자동의:</strong> [필수] 본인확인정보(이름,
                        생년월일, 성별, 내외국인정보, 휴대전화번호,
                        중복가입정보(DI), 이동통신사 정보), 이메일주소
                      </li>
                      <li>
                        <strong>서비스:</strong> [필수] 성별, 출생연도,
                        거주지역, 직업군, 근무직종
                      </li>
                      <li>
                        <strong>결제:</strong> [필수] 휴대전화번호,
                        컬쳐랜드/북앤라이프 회원ID
                      </li>
                      <li>
                        <strong>환불 처리:</strong> [필수] 계좌정보(은행명,
                        예금주명, 계좌번호), 결제 정보
                      </li>
                      <li>
                        <strong>이벤트 등 프로모션 알림 전송:</strong> [선택]
                        휴대전화번호, 이메일주소
                      </li>
                      <li>
                        <strong>경품 및 상품배송:</strong> [필수] 이름,
                        휴대전화번호, 전화번호, 주소
                      </li>
                      <li>
                        <strong>상금지급 및 포인트 전환:</strong> [필수]
                        계좌정보(은행명, 예금주명, 계좌번호), 사업자 - 통장사본,
                        인감증명서
                      </li>
                      <li>
                        <strong>공지사항 전달:</strong> [필수] 휴대전화번호,
                        전화번호, 이메일주소
                      </li>
                      <li>
                        <strong>이벤트 및 행사 참여:</strong> [선택] 이름,
                        휴대전화번호, 성별, 생년월일, 이메일주소
                      </li>
                      <li>
                        <strong>문의대응:</strong> [필수] 닉네임,
                        이메일주소(비회원 문의 시) [선택] ID, 이름, 이메일주소,
                        휴대전화번호, 마이핀번호, 생년월일, 성별, 주소,
                        전화번호, 본인확인정보, 결제 정보
                      </li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      지더블유스튜디오는 아래의 개인정보 항목을 개인정보 보호법
                      제15조 제1항 제2호에 따라 이용자의 동의 없이 처리하고
                      있습니다:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>
                        <strong>제세공과금 처리:</strong> [필수] 주민등록번호,
                        주소, 이름, 휴대전화번호 (소득세법 제21조, 제127조,
                        제164조)
                      </li>
                      <li>
                        <strong>현금영수증 자동 발급:</strong> [선택]
                        휴대전화번호, 현금영수증 카드번호 (소득세법 제162조의3)
                      </li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      서비스 안정성 확보, 부정이용자 방지, 계정 및 아이템 보호,
                      법률 및 지더블유스튜디오 이용약관 위반 행위 제한 등의
                      목적으로 서비스를 이용하는 과정에서 자동으로 생성되는
                      정보(IP, 접속기록, 서비스 이용기록, 불량이용 기록,
                      다운로드 기록, 결제 기록, 쿠키)와 기기를 식별할 수 있는
                      정보(OS 정보, 하드웨어 정보, Mac Address, UUID,
                      광고식별자)가 수집될 수 있습니다.
                    </p>
                  </div>
                </div>

                {/* 2. 개인정보의 처리 목적 */}
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    2. 개인정보의 처리 목적
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    지더블유스튜디오는 아래의 목적으로 개인정보를 이용하며,
                    목적이 변경될 경우에는 이용자에게 별도의 동의를 받는 등
                    필요한 조치를 이행하고 있습니다:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                    <li>
                      이용자를 식별하고, 본인임을 확인하는 등 회원 관리를 위해
                      개인정보를 이용합니다.
                    </li>
                    <li>
                      14세 미만 아동의 경우 회원가입 시 법정대리인 본인확인 및
                      동의 의사 확인을 위해 개인정보를 이용합니다.
                    </li>
                    <li>서비스 제공을 위해 개인정보를 이용합니다.</li>
                    <li>결제 관련 서비스 제공을 위해 개인정보를 이용합니다.</li>
                    <li>
                      이벤트 등 프로모션 알림을 위해 개인정보를 이용합니다.
                    </li>
                    <li>
                      이벤트 참여자에 대한 경품 배송, 제세공과금 처리 등을 위해
                      개인정보를 이용합니다.
                    </li>
                    <li>
                      약관 변경, 서비스 장애, 이용내역, 개인정보이용내역 등
                      공지사항 전달을 위해 개인정보를 이용합니다.
                    </li>
                    <li>
                      문의 대응, 불만 처리, 서비스 개선을 위해 개인정보 또는
                      이용자 이미지를 이용합니다.
                    </li>
                    <li>안전한 서비스 환경을 위해 개인정보를 이용합니다.</li>
                    <li>부정가입 및 이용 방지를 위해 개인정보를 이용합니다.</li>
                    <li>
                      서비스 이용 환경 분석 및 특성에 맞는 서비스 제공을 위해
                      개인정보를 이용합니다.
                    </li>
                  </ul>
                </div>

                {/* 3. 14세 미만 아동의 개인정보 처리 */}
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    3. 14세 미만 아동의 개인정보 처리에 관한 사항
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    지더블유스튜디오는 14세 미만 아동의 개인정보를 처리하기
                    위하여 법정대리인의 동의를 받습니다. 동의 시 아동에게
                    법정대리인의 성명, 연락처 등 최소한의 정보를 요구하며,
                    인터넷 사이트, 휴대전화 본인확인, 신용카드, 토스 인증 등을
                    통해 확인합니다.
                  </p>
                </div>

                {/* 4. 개인정보의 제3자 제공 */}
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    4. 개인정보의 제3자 제공
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    지더블유스튜디오는 관계 법령에 규정된 경우를 제외하고,
                    개인정보 제공 전 이용자에게 상세히 안내하고 동의를 받습니다.
                    아래는 개인정보 보호법 제17조 제1항 제1호에 따라 제공되는
                    정보입니다:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                    <li>
                      <strong>대상:</strong> 협력사
                      <br />
                      목적: 서비스 제공
                      <br />
                      항목: [필수] ID, 생년월일, 성별, 내외국인정보, IP
                      <br />
                      보유 및 이용 기간: 회원 탈퇴, 서비스 해지 시까지
                    </li>
                    <li>
                      <strong>대상:</strong> 제휴사
                      <br />
                      목적: 제휴서비스 제공
                      <br />
                      항목: [필수] 이용자 식별자, 포인트 정보, 거래정보 [선택]
                      가입정보, 이용정보, 구매정보, 회원등급
                      <br />
                      보유 및 이용 기간: 제휴서비스 종료 또는 동의 철회 시까지
                    </li>
                  </ul>
                </div>

                {/* 나머지 섹션은 간략히 예시로 생략, 필요 시 추가 */}
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    5~14. 기타 항목
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    자세한 내용은 지더블유스튜디오의 공식 웹사이트에서 확인
                    가능합니다. 각 항목은 개인정보 보호법에 따라 처리되며,
                    이용자의 권리 보호를 위해 노력하고 있습니다.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mt-8">
                <strong>공고일:</strong> 2025년 10월 13일
                <br />
                <strong>시행일:</strong> 2025년 10월 13일
              </p>
            </div>
          </section>
        );

      case "Contact":
        return (
          <section
  id="Contact"
  class="py-20 bg-gray-900 text-white flex flex-col items-center justify-center"
>
  <div class="container mx-auto px-4 text-center">
    <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Get In Touch</h1>
    <p class="text-xl text-gray-400 mb-10">
      We love hearing from players, press, and potential partners.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
        <h3 class="text-2xl font-semibold mb-3 text-indigo-400">
          Player Support
        </h3>
        <p class="text-gray-400 mb-4">
          Got a bug? Need help with your game?
        </p>
        <a
          href="mailto:support@gwstudio.com"
          class="text-indigo-300 hover:text-indigo-200 font-medium break-all"
        >
          oneweekonegame1@gmail.com
        </a>
      </div>

      <div class="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
        <h3 class="text-2xl font-semibold mb-3 text-green-400">
          Business Inquiries
        </h3>
        <p class="text-gray-400 mb-4">
          For publishing, investment, or partnership proposals.
        </p>
        <a
          href="mailto:bizdev@gwstudio.com"
          class="text-green-300 hover:text-green-200 font-medium break-all"
        >
           oneweekonegame1@gmail.com
        </a>
      </div>

      <div class="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
        <h3 class="text-2xl font-semibold mb-3 text-red-400">
          Press & Media
        </h3>
        <p class="text-gray-400 mb-4">
          Request interviews, assets, or official statements.
        </p>
        <a
          href="mailto:press@gwstudio.com"
          class="text-red-300 hover:text-red-200 font-medium break-all"
        >
          oneweekonegame1@gmail.com
        </a>
      </div>
    </div>
  </div>
</section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar setActiveSection={setActiveSection} />
      <main className="flex-1 pt-20 pb-12">{renderSection()}</main>
      <Footer />
    </div>
  );
};

export default App;
