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
} from "react-icons/fi";

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
    discount: 5000,
    link: "https://pf.kakao.com/_nxkQtn",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/20",
  },
  {
    id: "naver-save",
    title: "네이버 플레이스 저장",
    description: "ITN피트니스를 네이버 플레이스에 저장하세요",
    icon: <FiBookmark className="text-2xl" />,
    discount: 5000,
    link: "https://naver.me/Fr7zuIIp",
    color: "text-green-400",
    bgColor: "bg-green-500/20",
  },
  {
    id: "naver-review",
    title: "네이버 리뷰 작성",
    description: "방문 후 솔직한 리뷰를 작성해주세요",
    icon: <FiMessageSquare className="text-2xl" />,
    discount: 0,
    link: "https://naver.me/Fr7zuIIp",
    color: "text-green-400",
    bgColor: "bg-green-500/20",
  },
  {
    id: "naver-notify",
    title: "네이버 플레이스 알림받기",
    description: "ITN피트니스 소식을 알림으로 받아보세요",
    icon: <FiBell className="text-2xl" />,
    discount: 5000,
    link: "https://naver.me/Fr7zuIIp",
    color: "text-green-400",
    bgColor: "bg-green-500/20",
  },
];

export default function MissionDiscount() {
  const [completedMissions, setCompletedMissions] = useState<Set<string>>(new Set());

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
            <span className="text-white">미션 달성하면</span>{" "}
            <span className="gradient-text">더 할인!</span>
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
          {completedMissions.has("naver-review") && (
            <p className="text-yellow-400 mt-2 text-sm">+ 리뷰 작성 시 7일 연장</p>
          )}
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
              className={`relative bg-zinc-800/50 border rounded-xl p-4 md:p-6 transition-all cursor-pointer ${
                completedMissions.has(mission.id)
                  ? "border-green-500/50 bg-green-500/10"
                  : "border-zinc-700 hover:border-green-500/30"
              }`}
              onClick={() => toggleMission(mission.id)}
            >
              <div className="flex items-center gap-4">
                {/* 체크박스 */}
                <div
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                    completedMissions.has(mission.id)
                      ? "bg-green-500 border-green-500"
                      : "border-zinc-600"
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
                </div>

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
                  {mission.discount > 0 ? (
                    <p className={`font-bold ${completedMissions.has(mission.id) ? "text-green-400" : "text-zinc-400"}`}>
                      -{mission.discount.toLocaleString()}원
                    </p>
                  ) : (
                    <p className={`font-bold text-sm ${completedMissions.has(mission.id) ? "text-yellow-400" : "text-zinc-400"}`}>
                      7일 연장
                    </p>
                  )}
                </div>
              </div>

              {/* 바로가기 버튼 */}
              <a
                href={mission.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`mt-4 block w-full py-2 rounded-lg text-center text-sm font-medium transition-all ${
                  mission.id === "kakao"
                    ? "bg-yellow-400 text-black hover:bg-yellow-300"
                    : "bg-green-500 text-white hover:bg-green-400"
                }`}
              >
                {mission.id === "kakao" ? "카카오톡 채널 추가하기" : "네이버 플레이스 바로가기"}
              </a>
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
                모든 미션 완료!
              </h3>
              <p className="text-white/80">
                등록 시 직원에게 화면을 보여주시면 추가 할인이 적용됩니다
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 안내 문구 */}
        <p className="text-center text-zinc-500 text-sm mt-6">
          * 미션 완료 후 등록 시 해당 화면을 직원에게 보여주세요
          <br />
          * 네이버 리뷰는 등록 후 작성 가능하며, 작성 시 이용기간이 7일 연장됩니다
        </p>
      </div>
    </section>
  );
}
