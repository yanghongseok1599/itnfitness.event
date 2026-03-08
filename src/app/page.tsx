"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiPhone,
  FiMapPin,
  FiClock,
  FiCheck,
  FiUsers,
  FiAward,
  FiHeart,
  FiTarget,
  FiShield,
  FiTrendingUp,
  FiChevronDown,
  FiStar,
  FiGift,
} from "react-icons/fi";
import { GiClothes } from "react-icons/gi";
import { SiKakaotalk } from "react-icons/si";
import CountdownTimer from "@/components/CountdownTimer";
import MissionDiscount from "@/components/MissionDiscount";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 } },
  viewport: { once: true },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F5F0] overflow-x-hidden font-[var(--font-noto-sans-kr)]">
      {/* ============================================================ */}
      {/* HERO SECTION */}
      {/* ============================================================ */}
      <section className="relative min-h-screen flex items-center justify-center bg-pattern">
        {/* 배경 비디오 */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover opacity-25"
          >
            <source src="/itnm.mp4" type="video/mp4" />
          </video>
        </div>

        {/* 다중 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-pattern-grid opacity-30" />

        {/* 골드 글로우 배경 오브 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-72 h-72 bg-[#C9A96E] rounded-full filter blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.12, 0.05] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#8B7355] rounded-full filter blur-[150px]"
          />
        </div>

        {/* 스파클 데코 */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="sparkle"
              style={{
                top: `${15 + i * 14}%`,
                left: `${10 + i * 15}%`,
              }}
              animate={{ opacity: [0, 1, 0], y: [0, -40, -80] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 py-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* 이벤트 기간 뱃지 */}
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-block px-6 py-2.5 border border-[rgba(201,169,110,0.4)] text-[#C9A96E] rounded-full text-sm tracking-premium mb-8 glass-card"
            >
              2025.12.01 ~ 2025.12.31
            </motion.span>

            {/* 로고 텍스트 */}
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.3em" }}
              transition={{ delay: 0.5, duration: 1.2 }}
              className="font-display text-lg sm:text-xl md:text-2xl text-[#C9A96E] mb-4 text-shadow-gold"
            >
              ITN FITNESS
            </motion.p>

            {/* 메인 헤드카피 */}
            <h1 className="text-responsive-hero font-serif-kr font-light mb-4 leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="gradient-text-shimmer block"
              >
                ITN피트니스
              </motion.span>
            </h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-responsive-hero-sub font-serif-kr font-light text-[#F5F5F0] mb-6 sm:mb-8"
            >
              신년이벤트
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="text-responsive-body text-[#A0A09A] mb-8 sm:mb-10 font-light"
            >
              함께 시작하면,{" "}
              <span className="text-[#C9A96E] font-normal">
                더 오래 이어집니다
              </span>
            </motion.p>

            {/* 카운트다운 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="mb-12"
            >
              <p className="text-[#A0A09A] mb-4 tracking-premium text-sm uppercase">
                이벤트 종료까지
              </p>
              <CountdownTimer />
            </motion.div>

            {/* CTA 버튼 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center px-2"
            >
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 sm:px-10 py-3.5 sm:py-4 bg-[#C9A96E] hover:bg-[#E8D5A3] text-[#0A0A0A] font-medium rounded-xl text-base sm:text-lg transition-all tracking-premium btn-gold"
              >
                혜택 보러가기
              </motion.a>
              <motion.a
                href="tel:010-9745-2246"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 sm:px-10 py-3.5 sm:py-4 text-[#C9A96E] font-medium rounded-xl text-base sm:text-lg flex items-center justify-center gap-2 btn-gold-outline"
              >
                <FiPhone />
                010-9745-2246
              </motion.a>
            </motion.div>
          </motion.div>

          {/* 스크롤 인디케이터 */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-[#C9A96E] text-xs tracking-ultra uppercase opacity-60">
                Scroll
              </span>
              <FiChevronDown className="text-[#C9A96E] text-xl opacity-60" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 골드 구분선 */}
      <div className="divider-gold" />

      {/* ============================================================ */}
      {/* PRICING SECTION */}
      {/* ============================================================ */}
      <section id="pricing" className="py-20 md:py-32 px-4 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="inline-block px-6 py-2.5 border border-[rgba(201,169,110,0.3)] text-[#C9A96E] rounded-full text-sm tracking-ultra mb-6 uppercase">
              Special Offer
            </span>
            <h2 className="text-responsive-section font-serif-kr font-light mb-4">
              신년 특별{" "}
              <span className="gradient-text-shimmer">회원권 혜택</span>
            </h2>
            <p className="text-[#A0A09A] text-sm sm:text-base font-light">
              함께 등록하면 더 큰 할인! 친구, 가족과 함께 시작하세요
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {/* 카드 1: 12개월 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-[#1A1A1A] border border-[rgba(201,169,110,0.2)] p-8 md:p-10 rounded-2xl card-hover shine-effect"
            >
              <div className="absolute top-0 right-0 bg-gradient-to-r from-[#C9A96E] to-[#E8D5A3] text-[#0A0A0A] px-5 py-1.5 text-sm font-medium tracking-premium rounded-bl-2xl">
                회원권 혜택 1
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif-kr font-light text-[#C9A96E] mb-6 sm:mb-8 mt-4">
                헬스 12개월
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-4 sm:p-5 bg-[#111111] border border-[rgba(201,169,110,0.1)] rounded-xl">
                  <span className="text-[#A0A09A] text-sm sm:text-base">
                    1인 등록 시
                  </span>
                  <div className="text-right">
                    <span className="text-base sm:text-xl font-light text-[#F5F5F0]">
                      월 50,000원
                    </span>
                    <span className="text-[#A0A09A] text-[10px] sm:text-xs ml-1">
                      (부가세 별도)
                    </span>
                  </div>
                </div>
                <motion.div
                  whileHover={{
                    borderColor: "rgba(201,169,110,0.8)",
                    boxShadow: "0 0 30px rgba(201,169,110,0.15)",
                  }}
                  className="flex items-center justify-between p-4 sm:p-5 bg-[rgba(201,169,110,0.08)] border border-[rgba(201,169,110,0.3)] rounded-xl transition-all"
                >
                  <div>
                    <span className="text-[#C9A96E] font-normal text-sm sm:text-base">
                      2인 등록 시
                    </span>
                    <span className="ml-2 px-2 py-0.5 bg-[#C9A96E] text-[#0A0A0A] text-[10px] sm:text-xs font-medium rounded-md">
                      추천
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg sm:text-2xl md:text-3xl font-display font-semibold text-[#C9A96E]">
                      월 45,000원
                    </span>
                    <span className="text-[#A0A09A] text-[10px] sm:text-xs block">
                      (부가세 별도)
                    </span>
                  </div>
                </motion.div>
              </div>
              <p className="text-[#A0A09A] text-sm font-light">
                * 2인 동시 등록 시 1인당 월 5,000원 할인
              </p>
            </motion.div>

            {/* 카드 2: 6개월 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-[#1A1A1A] border border-[rgba(201,169,110,0.2)] p-8 md:p-10 rounded-2xl card-hover shine-effect"
            >
              <div className="absolute top-0 right-0 bg-gradient-to-r from-[#C9A96E] to-[#E8D5A3] text-[#0A0A0A] px-5 py-1.5 text-sm font-medium tracking-premium rounded-bl-2xl">
                회원권 혜택 2
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif-kr font-light text-[#C9A96E] mb-6 sm:mb-8 mt-4">
                헬스 6개월
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-4 sm:p-5 bg-[#111111] border border-[rgba(201,169,110,0.1)] rounded-xl">
                  <span className="text-[#A0A09A] text-sm sm:text-base">
                    1인 등록 시
                  </span>
                  <div className="text-right">
                    <span className="text-base sm:text-xl font-light text-[#F5F5F0]">
                      월 60,000원
                    </span>
                    <span className="text-[#A0A09A] text-[10px] sm:text-xs ml-1">
                      (부가세 별도)
                    </span>
                  </div>
                </div>
                <motion.div
                  whileHover={{
                    borderColor: "rgba(201,169,110,0.8)",
                    boxShadow: "0 0 30px rgba(201,169,110,0.15)",
                  }}
                  className="flex items-center justify-between p-4 sm:p-5 bg-[rgba(201,169,110,0.08)] border border-[rgba(201,169,110,0.3)] rounded-xl transition-all"
                >
                  <div>
                    <span className="text-[#C9A96E] font-normal text-sm sm:text-base">
                      2인 등록 시
                    </span>
                    <span className="ml-2 px-2 py-0.5 bg-[#C9A96E] text-[#0A0A0A] text-[10px] sm:text-xs font-medium rounded-md">
                      추천
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg sm:text-2xl md:text-3xl font-display font-semibold text-[#C9A96E]">
                      월 55,000원
                    </span>
                    <span className="text-[#A0A09A] text-[10px] sm:text-xs block">
                      (부가세 별도)
                    </span>
                  </div>
                </motion.div>
              </div>
              <p className="text-[#A0A09A] text-sm font-light">
                * 2인 동시 등록 시 1인당 월 5,000원 할인
              </p>
            </motion.div>
          </div>

          {/* 혜택 3개 카드 */}
          <motion.div
            {...fadeInUp}
            className="mt-8 sm:mt-12 grid grid-cols-3 gap-3 sm:gap-6"
          >
            {[
              {
                icon: <GiClothes className="text-xl sm:text-2xl text-[#C9A96E]" />,
                title: "운동복, 수건",
                sub: "개인 사물함",
              },
              {
                icon: <FiTarget className="text-xl sm:text-2xl text-[#C9A96E]" />,
                title: "무료수업 1회",
                sub: "PT 체험",
              },
              {
                icon: <FiGift className="text-xl sm:text-2xl text-[#C9A96E]" />,
                title: "미션 달성시",
                sub: "현금 최대 4만원 추가할인",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -4,
                  borderColor: "rgba(201,169,110,0.5)",
                  boxShadow: "0 10px 30px rgba(201,169,110,0.1)",
                }}
                className="bg-[#1A1A1A] border border-[rgba(201,169,110,0.15)] p-3 sm:p-6 text-center rounded-2xl transition-all"
              >
                <div className="mb-2 sm:mb-3 flex justify-center">
                  {item.icon}
                </div>
                <p className="text-[#C9A96E] font-normal text-xs sm:text-sm md:text-base">
                  {item.title}
                </p>
                <p className="text-[#A0A09A] text-[10px] sm:text-xs md:text-sm font-light leading-tight">
                  {item.sub}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <p className="text-center text-[#A0A09A] text-sm mt-8 font-light">
            * 부가세 별도
          </p>
        </div>
      </section>

      {/* 골드 구분선 */}
      <div className="divider-gold" />

      {/* ============================================================ */}
      {/* MISSION DISCOUNT SECTION */}
      {/* ============================================================ */}
      <MissionDiscount />

      {/* 골드 구분선 */}
      <div className="divider-gold" />

      {/* ============================================================ */}
      {/* FACILITY SECTION */}
      {/* ============================================================ */}
      <section id="facility" className="py-20 md:py-32 px-4 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="inline-block px-6 py-2.5 border border-[rgba(201,169,110,0.3)] text-[#C9A96E] rounded-full text-sm tracking-ultra mb-6 uppercase">
              Facility
            </span>
            <h2 className="text-responsive-section font-serif-kr font-light mb-4">
              <span className="gradient-text-shimmer">프리미엄 시설</span> 안내
            </h2>
            <p className="text-[#A0A09A] text-sm sm:text-base font-light">
              문체부 인증 신뢰도 높은 헬스장 ITN피트니스
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {[
              {
                icon: <FiShield className="text-xl sm:text-3xl" />,
                title: "문체부 인증",
                desc: "체형교정사가 운영하는 전문센터",
                delay: 0,
              },
              {
                icon: <FiTarget className="text-xl sm:text-3xl" />,
                title: "최신 장비",
                desc: "프리미엄 운동 기구 완비",
                delay: 0.1,
              },
              {
                icon: <FiUsers className="text-xl sm:text-3xl" />,
                title: "무료 주차",
                desc: "60대 이상 무료 주차 가능",
                delay: 0.2,
              },
              {
                icon: <FiHeart className="text-xl sm:text-3xl" />,
                title: "청결한 환경",
                desc: "매일 청소 및 위생 관리",
                delay: 0.3,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: item.delay,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                  borderColor: "rgba(201,169,110,0.6)",
                  boxShadow:
                    "0 20px 50px rgba(201,169,110,0.12), 0 0 40px rgba(201,169,110,0.06)",
                }}
                className="bg-[#1A1A1A] border border-[rgba(201,169,110,0.15)] p-4 sm:p-8 text-center rounded-2xl transition-all group"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="w-14 h-14 sm:w-18 sm:h-18 bg-[rgba(201,169,110,0.1)] border border-[rgba(201,169,110,0.2)] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-5 text-[#C9A96E] transition-all group-hover:bg-[rgba(201,169,110,0.2)] group-hover:border-[rgba(201,169,110,0.4)]"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-base sm:text-xl font-serif-kr font-normal text-[#F5F5F0] mb-1 sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-[#A0A09A] text-xs sm:text-base font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* 연락처 정보 */}
          <motion.div
            {...fadeInUp}
            className="mt-16 bg-[#1A1A1A] border border-[rgba(201,169,110,0.15)] p-8 md:p-12 rounded-2xl"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FiMapPin className="text-2xl" />,
                  title: "위치",
                  content: (
                    <>
                      동해시 효자남길 33-34
                      <br />
                      이아빌딩 2층 201호
                    </>
                  ),
                },
                {
                  icon: <FiClock className="text-2xl" />,
                  title: "운영시간",
                  content: (
                    <>
                      평일 06:00 - 01:00
                      <br />
                      토/공휴일 09:00 - 19:00
                      <br />
                      일요일 휴관
                    </>
                  ),
                },
                {
                  icon: <FiPhone className="text-2xl" />,
                  title: "연락처",
                  content: "010-9745-2246",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="p-3 bg-[rgba(201,169,110,0.1)] border border-[rgba(201,169,110,0.2)] rounded-xl text-[#C9A96E] transition-all group-hover:bg-[rgba(201,169,110,0.2)] group-hover:shadow-[0_0_20px_rgba(201,169,110,0.15)]">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-normal text-[#F5F5F0] mb-1 tracking-premium">
                      {item.title}
                    </h4>
                    <p className="text-[#A0A09A] text-sm font-light">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 골드 구분선 */}
      <div className="divider-gold" />

      {/* ============================================================ */}
      {/* TRAINERS SECTION */}
      {/* ============================================================ */}
      <section id="trainers" className="py-20 md:py-32 px-4 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="inline-block px-6 py-2.5 border border-[rgba(201,169,110,0.3)] text-[#C9A96E] rounded-full text-sm tracking-ultra mb-6 uppercase">
              Trainers
            </span>
            <h2 className="text-responsive-section font-serif-kr font-light mb-4">
              <span className="gradient-text-shimmer">전문 강사진</span> 소개
            </h2>
            <p className="text-[#A0A09A] text-sm sm:text-base font-light">
              체형교정 전문가가 이끄는 1:1 맞춤 트레이닝
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* 트레이너 카드 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#1A1A1A] border border-[rgba(201,169,110,0.2)] rounded-2xl overflow-hidden group"
            >
              {/* 트레이너 이미지 */}
              <div className="w-full aspect-[4/3] md:aspect-[16/10] relative bg-[#111111] overflow-hidden">
                <Image
                  src="/002.png"
                  alt="대표 트레이너"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
                {/* 골드 오버레이 그라디언트 */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(201,169,110,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-5 mb-8">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-16 h-16 bg-[rgba(201,169,110,0.1)] border border-[rgba(201,169,110,0.3)] rounded-full flex items-center justify-center"
                  >
                    <FiAward className="text-3xl text-[#C9A96E]" />
                  </motion.div>
                  <div>
                    <span className="text-[#C9A96E] text-sm tracking-premium">
                      대표 트레이너
                    </span>
                    <h3 className="text-2xl font-serif-kr font-light text-[#F5F5F0]">
                      체형교정 전문가
                    </h3>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    "국회의원상 수상 재활 트레이너",
                    "생활체육지도자 연수교수",
                    "정형외과 인증 전문센터",
                    "1:1 맞춤 프로그램 설계",
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-center gap-4 group/item"
                    >
                      <span className="text-[#C9A96E] text-lg font-light flex-shrink-0 transition-transform group-hover/item:scale-125">
                        —
                      </span>
                      <span className="text-[#A0A09A] font-light group-hover/item:text-[#F5F5F0] transition-colors">
                        {text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 서비스 카드들 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              {[
                {
                  icon: <FiTarget className="text-2xl" />,
                  title: "1:1 퍼스널 트레이닝",
                  desc: "개인 맞춤형 운동 프로그램으로 효과적인 결과",
                },
                {
                  icon: <FiTrendingUp className="text-2xl" />,
                  title: "체형 교정",
                  desc: "거북목, 라운드숄더, 골반 틀어짐 등 체형 문제 해결",
                },
                {
                  icon: <FiHeart className="text-2xl" />,
                  title: "재활 PT",
                  desc: "부상 후 재활 및 통증 완화를 위한 전문 프로그램",
                },
                {
                  icon: <FiShield className="text-2xl" />,
                  title: "다이어트 PT",
                  desc: "체계적인 운동과 식단 관리로 건강한 다이어트",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{
                    x: 8,
                    borderColor: "rgba(201,169,110,0.5)",
                    boxShadow: "0 0 30px rgba(201,169,110,0.08)",
                  }}
                  className="flex items-start gap-5 bg-[#1A1A1A] border border-[rgba(201,169,110,0.15)] rounded-xl p-5 sm:p-6 transition-all group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    className="p-3 bg-[rgba(201,169,110,0.1)] border border-[rgba(201,169,110,0.2)] rounded-xl text-[#C9A96E] flex-shrink-0 transition-all group-hover:bg-[rgba(201,169,110,0.2)]"
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-serif-kr font-normal text-[#F5F5F0] text-lg">
                      {item.title}
                    </h4>
                    <p className="text-[#A0A09A] text-sm font-light mt-1">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* 국공기관 및 연예인 선택 */}
          <motion.div {...fadeInUp} className="mt-20 text-center">
            <p className="text-lg md:text-xl font-serif-kr font-light text-[#F5F5F0] mb-8">
              국·공기관과 연예인들이 선택한{" "}
              <span className="gradient-text-shimmer">운동 전문기관</span>
            </p>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative w-full overflow-hidden border border-[rgba(201,169,110,0.15)] rounded-2xl"
            >
              <Image
                src="/itn.png"
                alt="국공기관 및 연예인 선택"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
              {/* 호버 시 골드 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(201,169,110,0.1)] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 골드 구분선 */}
      <div className="divider-gold-thick" />

      {/* ============================================================ */}
      {/* CTA SECTION */}
      {/* ============================================================ */}
      <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-[#111111] to-[#0A0A0A] relative overflow-hidden">
        {/* 배경 골드 오브 */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.04, 0.08, 0.04] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#C9A96E] rounded-full filter blur-[200px]"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-responsive-section font-serif-kr font-light mb-6 sm:mb-8">
              2025년,{" "}
              <span className="gradient-text-shimmer">새로운 시작</span>을
              <br />
              ITN피트니스와 함께하세요
            </h2>
            <p className="text-[#A0A09A] mb-8 sm:mb-10 max-w-2xl mx-auto text-sm sm:text-base font-light">
              지금 등록하시면 신년 특별 할인 혜택을 받으실 수 있습니다.
              <br />
              미션 완료하고 추가 할인까지!
            </p>

            {/* 카운트다운 타이머 */}
            <div className="mb-12">
              <p className="text-[#A0A09A] mb-4 tracking-premium text-sm uppercase">
                이벤트 종료까지
              </p>
              <CountdownTimer />
            </div>

            {/* CTA 버튼 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-2">
              <motion.a
                href="https://pf.kakao.com/_nxkQtn"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 sm:px-10 py-4 bg-[#FEE500] hover:bg-[#FFD700] text-[#3C1E1E] font-medium rounded-xl text-base sm:text-lg transition-all flex items-center justify-center gap-2 tracking-premium shadow-[0_0_30px_rgba(254,229,0,0.2)] hover:shadow-[0_0_50px_rgba(254,229,0,0.3)]"
              >
                <SiKakaotalk className="text-lg sm:text-xl" />
                카카오톡 상담하기
              </motion.a>
              <motion.a
                href="tel:010-9745-2246"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 sm:px-10 py-4 bg-[#C9A96E] hover:bg-[#E8D5A3] text-[#0A0A0A] font-medium rounded-xl text-base sm:text-lg transition-all flex items-center justify-center gap-2 tracking-premium btn-gold"
              >
                <FiPhone />
                전화 문의하기
              </motion.a>
            </div>

            <motion.a
              href="https://naver.me/Fr7zuIIp"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="inline-block mt-8 text-[#C9A96E] hover:text-[#E8D5A3] gold-underline transition-colors text-sm tracking-premium"
            >
              네이버 지도에서 위치 확인하기
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FOOTER */}
      {/* ============================================================ */}
      <footer className="bg-[#0A0A0A] py-16 px-4">
        {/* 골드 상단 구분선 */}
        <div className="divider-gold mb-16" />

        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            whileHover={{ letterSpacing: "0.4em" }}
            className="font-display text-2xl text-[#C9A96E] mb-6 tracking-ultra transition-all cursor-default"
          >
            ITN FITNESS
          </motion.h3>
          <p className="text-[#A0A09A] text-sm mb-4 font-light">
            강원도 동해시 효자남길 33-34 이아빌딩 2층 201호
          </p>
          <p className="text-[#A0A09A] text-sm mb-8 font-light">
            전화: 010-9745-2246
          </p>
          <div className="divider-gold mb-8" />
          <p className="text-[#A0A09A]/50 text-xs tracking-premium">
            2025 ITN피트니스. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
