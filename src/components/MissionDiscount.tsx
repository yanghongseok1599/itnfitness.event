"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiKakaotalk } from "react-icons/si";
import {
  FiCheck,
  FiStar,
  FiBell,
  FiMessageSquare,
  FiBookmark,
  FiUser,
  FiPhone,
  FiSend,
  FiLoader,
} from "react-icons/fi";

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";

interface Mission {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  discount: number;
  link: string;
  color: string;
  bgColor: string;
}

const missions: Mission[] = [
  {
    id: "kakao",
    title: "카카오톡 채널 친구추가",
    description: "ITN피트니스 카카오톡 채널을 추가하세요",
    icon: <SiKakaotalk className="text-2xl" />,
    discount: 10000,
    link: "https://pf.kakao.com/_nxkQtn",
    color: "text-[#FEE500]",
    bgColor: "bg-[rgba(254,229,0,0.15)]",
  },
  {
    id: "naver-save",
    title: "네이버 플레이스 저장",
    description: "ITN피트니스를 네이버 플레이스에 저장하세요",
    icon: <FiBookmark className="text-2xl" />,
    discount: 10000,
    link: "https://naver.me/Fr7zuIIp",
    color: "text-[#C9A96E]",
    bgColor: "bg-[rgba(201,169,110,0.15)]",
  },
  {
    id: "naver-review",
    title: "네이버 리뷰 작성",
    description: "방문 후 솔직한 리뷰를 작성해주세요",
    icon: <FiMessageSquare className="text-2xl" />,
    discount: 10000,
    link: "https://naver.me/Fr7zuIIp",
    color: "text-[#C9A96E]",
    bgColor: "bg-[rgba(201,169,110,0.15)]",
  },
  {
    id: "naver-notify",
    title: "네이버 플레이스 알림받기",
    description: "ITN피트니스 소식을 알림으로 받아보세요",
    icon: <FiBell className="text-2xl" />,
    discount: 10000,
    link: "https://naver.me/Fr7zuIIp",
    color: "text-[#C9A96E]",
    bgColor: "bg-[rgba(201,169,110,0.15)]",
  },
];

export default function MissionDiscount() {
  const [completedMissions, setCompletedMissions] = useState<Set<string>>(
    new Set()
  );
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const toggleMission = (id: string) => {
    const newCompleted = new Set(completedMissions);
    if (newCompleted.has(id)) {
      newCompleted.delete(id);
    } else {
      newCompleted.add(id);
    }
    setCompletedMissions(newCompleted);
  };

  const totalDiscount = missions
    .filter((m) => completedMissions.has(m.id))
    .reduce((sum, m) => sum + m.discount, 0);

  const allCompleted = completedMissions.size === missions.length;

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/[^\d]/g, "");
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 7)
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || phone.length < 12) return;

    setIsLoading(true);
    setError("");

    const missionKakao = completedMissions.has("kakao") ? "O" : "X";
    const missionNaverSave = completedMissions.has("naver-save") ? "O" : "X";
    const missionNaverReview = completedMissions.has("naver-review")
      ? "O"
      : "X";
    const missionNaverNotify = completedMissions.has("naver-notify")
      ? "O"
      : "X";

    try {
      if (GOOGLE_SCRIPT_URL) {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name.trim(),
            phone: phone,
            totalDiscount: totalDiscount,
            missionKakao: missionKakao,
            missionNaverSave: missionNaverSave,
            missionNaverReview: missionNaverReview,
            missionNaverNotify: missionNaverNotify,
          }),
        });
        console.log("데이터 전송 완료");
      }
      setIsSubmitted(true);
    } catch (err) {
      console.error("전송 오류:", err);
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 md:py-32 px-4 bg-[#0A0A0A] relative overflow-hidden">
      {/* 배경 글로우 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A96E] rounded-full filter blur-[250px] opacity-[0.03]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2.5 border border-[rgba(201,169,110,0.3)] text-[#C9A96E] rounded-full text-sm tracking-ultra mb-6 uppercase">
            Mission Discount
          </span>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-serif-kr font-light mb-4">
            <span className="text-[#F5F5F0]">미션 달성하면</span>
            <br />
            <span className="gradient-text-shimmer">
              총 결제 금액에서 추가할인!!
            </span>
          </h2>
          <p className="text-[#A0A09A] text-sm sm:text-base font-light">
            아래 미션을 완료하고 추가 할인 혜택을 받으세요
          </p>
        </motion.div>

        {/* 현재 할인 금액 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{
            borderColor: "rgba(201,169,110,0.5)",
            boxShadow: "0 0 40px rgba(201,169,110,0.1)",
          }}
          className="bg-[#1A1A1A] border border-[rgba(201,169,110,0.25)] rounded-2xl p-6 sm:p-8 mb-8 sm:mb-10 text-center transition-all"
        >
          <p className="text-[#A0A09A] mb-3 text-sm sm:text-base font-light tracking-premium">
            현재 추가 할인 금액
          </p>
          <motion.p
            key={totalDiscount}
            initial={{ scale: 1.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-semibold text-[#C9A96E] text-shadow-gold"
          >
            {totalDiscount.toLocaleString()}원
          </motion.p>
          <p className="text-xs sm:text-sm text-[#A0A09A] mt-3 tracking-premium">
            {completedMissions.size} / {missions.length} 미션 완료
          </p>
          {/* 프로그레스 바 */}
          <div className="mt-4 h-[2px] bg-[rgba(201,169,110,0.1)] rounded-xl overflow-hidden">
            <motion.div
              animate={{
                width: `${(completedMissions.size / missions.length) * 100}%`,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[#8B7355] to-[#C9A96E]"
            />
          </div>
        </motion.div>

        {/* 미션 리스트 */}
        <div className="grid gap-4 sm:gap-5">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                x: 4,
                borderColor: completedMissions.has(mission.id)
                  ? "rgba(201,169,110,0.6)"
                  : "rgba(201,169,110,0.4)",
                boxShadow: "0 0 30px rgba(201,169,110,0.06)",
              }}
              className={`relative bg-[#1A1A1A] border rounded-2xl p-4 sm:p-5 md:p-7 transition-all ${
                completedMissions.has(mission.id)
                  ? "border-[rgba(201,169,110,0.4)] bg-[rgba(201,169,110,0.05)]"
                  : "border-[rgba(201,169,110,0.12)]"
              }`}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                {/* 체크박스 */}
                <motion.button
                  type="button"
                  onClick={() => toggleMission(mission.id)}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-7 h-7 sm:w-9 sm:h-9 border rounded-lg flex items-center justify-center transition-all cursor-pointer flex-shrink-0 ${
                    completedMissions.has(mission.id)
                      ? "bg-[#C9A96E] border-[#C9A96E]"
                      : "border-[rgba(201,169,110,0.3)] hover:border-[#C9A96E]"
                  }`}
                >
                  <AnimatePresence>
                    {completedMissions.has(mission.id) && (
                      <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 45 }}
                        className="mission-complete"
                      >
                        <FiCheck className="text-[#0A0A0A] text-sm sm:text-lg font-bold" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                {/* 아이콘 */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`p-2.5 sm:p-3.5 flex-shrink-0 border rounded-xl transition-all ${mission.bgColor} ${mission.color} ${
                    completedMissions.has(mission.id)
                      ? "border-[rgba(201,169,110,0.3)]"
                      : "border-transparent"
                  }`}
                >
                  <span className="text-lg sm:text-2xl">{mission.icon}</span>
                </motion.div>

                {/* 내용 */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-normal text-[#F5F5F0] text-sm sm:text-base truncate">
                    {mission.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A0A09A] truncate font-light">
                    {mission.description}
                  </p>
                </div>

                {/* 할인 금액 */}
                <div className="text-right flex-shrink-0">
                  <motion.p
                    animate={{
                      color: completedMissions.has(mission.id)
                        ? "#C9A96E"
                        : "#A0A09A",
                    }}
                    className="font-display font-semibold text-sm sm:text-lg"
                  >
                    -{mission.discount.toLocaleString()}원
                  </motion.p>
                </div>
              </div>

              {/* 버튼 */}
              <div className="mt-4 flex gap-3">
                <a
                  href={mission.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 py-2.5 text-center text-xs sm:text-sm font-medium rounded-xl transition-all tracking-premium ${
                    mission.id === "kakao"
                      ? "bg-[#FEE500] text-[#3C1E1E] hover:bg-[#FFD700] hover:shadow-[0_0_20px_rgba(254,229,0,0.2)]"
                      : "bg-[#C9A96E] text-[#0A0A0A] hover:bg-[#E8D5A3] hover:shadow-[0_0_20px_rgba(201,169,110,0.2)]"
                  }`}
                >
                  {mission.id === "kakao"
                    ? "카카오톡 채널 추가하기"
                    : "네이버 플레이스 바로가기"}
                </a>
                <motion.button
                  type="button"
                  onClick={() => toggleMission(mission.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium rounded-xl transition-all ${
                    completedMissions.has(mission.id)
                      ? "bg-[rgba(201,169,110,0.15)] text-[#C9A96E] border border-[#C9A96E]"
                      : "bg-[#111111] text-[#A0A09A] border border-[rgba(201,169,110,0.15)] hover:border-[rgba(201,169,110,0.4)] hover:text-[#C9A96E]"
                  }`}
                >
                  {completedMissions.has(mission.id) ? "완료" : "완료"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 전체 완료 보너스 */}
        <AnimatePresence>
          {allCompleted && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="mt-8 sm:mt-10 bg-gradient-to-r from-[#C9A96E] to-[#E8D5A3] rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden"
            >
              {/* 샤인 효과 */}
              <div className="absolute inset-0 shine-effect" />
              <FiStar className="text-2xl sm:text-4xl text-[#0A0A0A] mx-auto mb-3" />
              <h3 className="text-base sm:text-xl font-serif-kr font-normal text-[#0A0A0A] mb-2">
                축하합니다! 모든 미션 완료!
              </h3>
              <p className="text-[#0A0A0A]/70 text-sm sm:text-base font-light">
                아래에 정보를 입력하시면 등록 시 할인이 적용됩니다
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 입력 폼 */}
        <AnimatePresence>
          {allCompleted && !isSubmitted && (
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              className="mt-5 sm:mt-6 bg-[#1A1A1A] border border-[rgba(201,169,110,0.25)] rounded-2xl p-6 sm:p-8"
            >
              <h4 className="text-base sm:text-lg font-serif-kr font-normal text-[#F5F5F0] mb-6 text-center tracking-premium">
                할인 적용을 위한 정보 입력
              </h4>

              <div className="space-y-6">
                {/* 이름 */}
                <div className="relative">
                  <FiUser className="absolute left-0 bottom-3 text-[#C9A96E] text-lg" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="이름을 입력하세요"
                    className="w-full bg-transparent border-b border-[rgba(201,169,110,0.3)] py-3 pl-8 pr-4 text-[#F5F5F0] placeholder-[#A0A09A]/50 focus:outline-none focus:border-[#C9A96E] transition-colors font-light"
                    required
                  />
                </div>

                {/* 전화번호 */}
                <div className="relative">
                  <FiPhone className="absolute left-0 bottom-3 text-[#C9A96E] text-lg" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="010-0000-0000"
                    maxLength={13}
                    className="w-full bg-transparent border-b border-[rgba(201,169,110,0.3)] py-3 pl-8 pr-4 text-[#F5F5F0] placeholder-[#A0A09A]/50 focus:outline-none focus:border-[#C9A96E] transition-colors font-light"
                    required
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}

                {/* 제출 버튼 */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.02, y: isLoading ? 0 : -2 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  className={`w-full bg-[#C9A96E] hover:bg-[#E8D5A3] text-[#0A0A0A] font-medium py-4 rounded-xl flex items-center justify-center gap-2 mt-4 tracking-premium transition-all btn-gold ${
                    isLoading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? (
                    <>
                      <FiLoader className="text-lg animate-spin" />
                      신청 중...
                    </>
                  ) : (
                    <>
                      <FiSend className="text-lg" />
                      할인 신청 완료하기
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        {/* 제출 완료 */}
        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="mt-5 sm:mt-6 bg-gradient-to-r from-[#C9A96E] to-[#E8D5A3] rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 shine-effect" />
              <div className="relative z-10">
                <div className="w-14 h-14 sm:w-18 sm:h-18 bg-[#0A0A0A]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiCheck className="text-2xl sm:text-3xl text-[#0A0A0A]" />
                </div>
                <h4 className="text-base sm:text-xl font-serif-kr font-normal text-[#0A0A0A] mb-2">
                  신청이 완료되었습니다!
                </h4>
                <p className="text-[#0A0A0A]/70 mb-4 text-sm sm:text-base font-light">
                  {name}님, 미션 달성 할인 {totalDiscount.toLocaleString()}원이
                  적용됩니다
                </p>
                <div className="bg-[#0A0A0A]/10 p-4 rounded-xl inline-block">
                  <p className="text-xs sm:text-sm text-[#0A0A0A]/60">
                    등록된 연락처
                  </p>
                  <p className="text-base sm:text-lg font-display font-semibold text-[#0A0A0A]">
                    {phone}
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-[#0A0A0A]/50 mt-4">
                  방문 시 이 화면을 직원에게 보여주세요
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 안내 문구 */}
        <p className="text-center text-[#A0A09A] text-xs sm:text-sm mt-6 sm:mt-8 font-light">
          * 미션 완료 후 등록 시 해당 화면을 직원에게 보여주세요
          <br />* 네이버 리뷰는 등록 후 작성 가능합니다
        </p>
      </div>
    </section>
  );
}
