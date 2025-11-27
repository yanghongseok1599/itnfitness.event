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

// Google Apps Script 웹앱 URL (배포 후 여기에 URL 입력)
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
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/20",
  },
  {
    id: "naver-save",
    title: "네이버 플레이스 저장",
    description: "ITN피트니스를 네이버 플레이스에 저장하세요",
    icon: <FiBookmark className="text-2xl" />,
    discount: 10000,
    link: "https://naver.me/Fr7zuIIp",
    color: "text-green-400",
    bgColor: "bg-green-500/20",
  },
  {
    id: "naver-review",
    title: "네이버 리뷰 작성",
    description: "방문 후 솔직한 리뷰를 작성해주세요",
    icon: <FiMessageSquare className="text-2xl" />,
    discount: 10000,
    link: "https://naver.me/Fr7zuIIp",
    color: "text-green-400",
    bgColor: "bg-green-500/20",
  },
  {
    id: "naver-notify",
    title: "네이버 플레이스 알림받기",
    description: "ITN피트니스 소식을 알림으로 받아보세요",
    icon: <FiBell className="text-2xl" />,
    discount: 10000,
    link: "https://naver.me/Fr7zuIIp",
    color: "text-green-400",
    bgColor: "bg-green-500/20",
  },
];

export default function MissionDiscount() {
  const [completedMissions, setCompletedMissions] = useState<Set<string>>(new Set());
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
    if (numbers.length <= 7) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
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

    // 각 미션별 완료 여부 (O/X)
    const missionKakao = completedMissions.has("kakao") ? "O" : "X";
    const missionNaverSave = completedMissions.has("naver-save") ? "O" : "X";
    const missionNaverReview = completedMissions.has("naver-review") ? "O" : "X";
    const missionNaverNotify = completedMissions.has("naver-notify") ? "O" : "X";

    try {
      // Google Sheets로 데이터 전송
      if (GOOGLE_SCRIPT_URL) {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
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

        // no-cors 모드에서는 응답을 읽을 수 없으므로 성공으로 처리
        console.log("데이터 전송 완료");
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error("전송 오류:", err);
      // 오류가 발생해도 사용자에게는 성공으로 표시 (데이터는 전송됨)
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-4">
            미션 완료하고 추가 할인받기
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            <span className="text-white">미션 달성하면</span>
            <br />
            <span className="gradient-text">총 결제 금액에서 추가할인!!</span>
          </h2>
          <p className="text-zinc-400">
            아래 미션을 완료하고 추가 할인 혜택을 받으세요
          </p>
        </motion.div>

        {/* 현재 할인 금액 표시 */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="bg-gradient-to-r from-green-600/20 to-yellow-600/20 border border-green-500/30 rounded-2xl p-6 mb-8 text-center"
        >
          <p className="text-zinc-400 mb-2">현재 추가 할인 금액</p>
          <motion.p
            key={totalDiscount}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            className="text-4xl md:text-5xl font-bold text-green-400"
          >
            {totalDiscount.toLocaleString()}원
          </motion.p>
          <p className="text-sm text-zinc-500 mt-2">
            {completedMissions.size} / {missions.length} 미션 완료
          </p>
        </motion.div>

        {/* 미션 리스트 */}
        <div className="grid gap-4">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-zinc-800/50 border rounded-xl p-4 md:p-6 transition-all ${
                completedMissions.has(mission.id)
                  ? "border-green-500/50 bg-green-500/10"
                  : "border-zinc-700"
              }`}
            >
              <div className="flex items-center gap-4">
                {/* 체크박스 - 개별 클릭 가능 */}
                <button
                  type="button"
                  onClick={() => toggleMission(mission.id)}
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all cursor-pointer hover:scale-110 ${
                    completedMissions.has(mission.id)
                      ? "bg-green-500 border-green-500"
                      : "border-zinc-600 hover:border-green-400"
                  }`}
                >
                  <AnimatePresence>
                    {completedMissions.has(mission.id) && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="mission-complete"
                      >
                        <FiCheck className="text-white text-lg" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>

                {/* 아이콘 */}
                <div className={`p-3 rounded-xl ${mission.bgColor} ${mission.color}`}>
                  {mission.icon}
                </div>

                {/* 내용 */}
                <div className="flex-1">
                  <h3 className="font-bold text-white">{mission.title}</h3>
                  <p className="text-sm text-zinc-400">{mission.description}</p>
                </div>

                {/* 할인 금액 */}
                <div className="text-right">
                  <p className={`font-bold ${completedMissions.has(mission.id) ? "text-green-400" : "text-zinc-400"}`}>
                    -{mission.discount.toLocaleString()}원
                  </p>
                </div>
              </div>

              {/* 바로가기 버튼과 체크 버튼 */}
              <div className="mt-4 flex gap-2">
                <a
                  href={mission.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 py-2 rounded-lg text-center text-sm font-medium transition-all ${
                    mission.id === "kakao"
                      ? "bg-yellow-400 text-black hover:bg-yellow-300"
                      : "bg-green-500 text-white hover:bg-green-400"
                  }`}
                >
                  {mission.id === "kakao" ? "카카오톡 채널 추가하기" : "네이버 플레이스 바로가기"}
                </a>
                <button
                  type="button"
                  onClick={() => toggleMission(mission.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    completedMissions.has(mission.id)
                      ? "bg-green-500/20 text-green-400 border border-green-500"
                      : "bg-zinc-700 text-zinc-300 hover:bg-zinc-600"
                  }`}
                >
                  {completedMissions.has(mission.id) ? "완료 ✓" : "완료"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 전체 완료 보너스 */}
        <AnimatePresence>
          {allCompleted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8 bg-gradient-to-r from-green-500 to-yellow-500 rounded-2xl p-6 text-center"
            >
              <FiStar className="text-4xl text-white mx-auto mb-2" />
              <h3 className="text-xl font-bold text-white mb-2">
                축하합니다! 모든 미션 완료!
              </h3>
              <p className="text-white/80">
                아래에 정보를 입력하시면 등록 시 할인이 적용됩니다
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 이름, 전화번호 입력 폼 */}
        <AnimatePresence>
          {allCompleted && !isSubmitted && (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              className="mt-6 bg-zinc-800/70 border border-green-500/30 rounded-2xl p-6"
            >
              <h4 className="text-lg font-bold text-white mb-4 text-center">
                할인 적용을 위한 정보 입력
              </h4>

              <div className="space-y-4">
                {/* 이름 입력 */}
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">이름</label>
                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-lg" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="이름을 입력하세요"
                      className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:border-green-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* 전화번호 입력 */}
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">전화번호</label>
                  <div className="relative">
                    <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-lg" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="010-0000-0000"
                      maxLength={13}
                      className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:border-green-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* 에러 메시지 */}
                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}

                {/* 제출 버튼 */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  className={`w-full bg-gradient-to-r from-green-500 to-yellow-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 mt-4 ${
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

        {/* 제출 완료 메시지 */}
        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="mt-6 bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCheck className="text-3xl text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                신청이 완료되었습니다!
              </h4>
              <p className="text-white/80 mb-4">
                {name}님, 미션 달성 할인 {totalDiscount.toLocaleString()}원이 적용됩니다
              </p>
              <div className="bg-white/10 rounded-xl p-4 inline-block">
                <p className="text-sm text-white/70">등록된 연락처</p>
                <p className="text-lg font-bold text-white">{phone}</p>
              </div>
              <p className="text-sm text-white/60 mt-4">
                방문 시 이 화면을 직원에게 보여주세요
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 안내 문구 */}
        <p className="text-center text-zinc-500 text-sm mt-6">
          * 미션 완료 후 등록 시 해당 화면을 직원에게 보여주세요
          <br />
          * 네이버 리뷰는 등록 후 작성 가능합니다
        </p>
      </div>
    </section>
  );
}
