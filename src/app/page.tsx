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
} from "react-icons/fi";
import { SiKakaotalk } from "react-icons/si";
import CountdownTimer from "@/components/CountdownTimer";
import MissionDiscount from "@/components/MissionDiscount";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-pattern">
        {/* 배경 동영상 */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover opacity-40"
          >
            <source src="/itnm.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full filter blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500 rounded-full filter blur-[120px]" />
        </div>

        <div className="relative z-10 text-center px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/50 text-green-400 rounded-full text-sm font-medium mb-6"
            >
              2025.12.01 ~ 2025.12.31
            </motion.span>

            <h1 className="text-4xl md:text-7xl font-black mb-4">
              <span className="gradient-text">ITN피트니스</span>
            </h1>
            <h2 className="text-3xl md:text-6xl font-black text-white mb-6">
              신년이벤트
            </h2>

            <p className="text-xl md:text-2xl text-zinc-300 mb-8">
              함께 시작하면, <span className="text-green-400 font-bold">더 오래 이어집니다!</span>
            </p>

            <div className="mb-10">
              <p className="text-zinc-400 mb-4">이벤트 종료까지</p>
              <CountdownTimer />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-bold rounded-full text-lg transition-all glow-green"
              >
                혜택 보러가기
              </motion.a>
              <motion.a
                href="tel:010-9745-2246"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-green-500 text-green-400 font-bold rounded-full text-lg hover:bg-green-500/10 transition-all flex items-center justify-center gap-2"
              >
                <FiPhone />
                010-9745-2246
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-green-500 rounded-full mt-2" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-4">
              SPECIAL OFFER
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              신년 특별 <span className="gradient-text">회원권 혜택</span>
            </h2>
            <p className="text-zinc-400">
              함께 등록하면 더 큰 할인! 친구, 가족과 함께 시작하세요
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative bg-zinc-800 border-2 border-green-500/30 rounded-3xl p-6 md:p-8 card-hover overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-green-500 text-black px-4 py-1 text-sm font-bold rounded-bl-xl">
                회원권 혜택 1
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-green-400 mb-6 mt-4">
                헬스 12개월
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-4 bg-zinc-700/50 rounded-xl">
                  <span className="text-zinc-300">1인 등록 시</span>
                  <div className="text-right">
                    <span className="text-xl font-bold text-white">월 50,000원</span>
                    <span className="text-zinc-500 text-xs ml-1">(부가세 별도)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-500/20 border border-green-500/50 rounded-xl">
                  <div>
                    <span className="text-green-400 font-medium">2인 등록 시</span>
                    <span className="ml-2 px-2 py-0.5 bg-green-500 text-black text-xs font-bold rounded">추천</span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl md:text-3xl font-black text-green-400">월 45,000원</span>
                    <span className="text-zinc-500 text-xs block">(부가세 별도)</span>
                  </div>
                </div>
              </div>
              <p className="text-zinc-400 text-sm">* 2인 동시 등록 시 1인당 월 5,000원 할인</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative bg-zinc-800 border-2 border-green-500/30 rounded-3xl p-6 md:p-8 card-hover overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-green-500 text-black px-4 py-1 text-sm font-bold rounded-bl-xl">
                회원권 혜택 2
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-green-400 mb-6 mt-4">
                헬스 6개월
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-4 bg-zinc-700/50 rounded-xl">
                  <span className="text-zinc-300">1인 등록 시</span>
                  <div className="text-right">
                    <span className="text-xl font-bold text-white">월 60,000원</span>
                    <span className="text-zinc-500 text-xs ml-1">(부가세 별도)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-500/20 border border-green-500/50 rounded-xl">
                  <div>
                    <span className="text-green-400 font-medium">2인 등록 시</span>
                    <span className="ml-2 px-2 py-0.5 bg-green-500 text-black text-xs font-bold rounded">추천</span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl md:text-3xl font-black text-green-400">월 55,000원</span>
                    <span className="text-zinc-500 text-xs block">(부가세 별도)</span>
                  </div>
                </div>
              </div>
              <p className="text-zinc-400 text-sm">* 2인 동시 등록 시 1인당 월 5,000원 할인</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 grid grid-cols-3 gap-4"
          >
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 text-center">
              <span className="text-3xl mb-2 block">👕</span>
              <p className="text-green-400 font-bold text-sm md:text-base">운동복, 수건</p>
              <p className="text-zinc-400 text-xs md:text-sm">개인 사물함</p>
            </div>
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 text-center">
              <span className="text-3xl mb-2 block">🏋️</span>
              <p className="text-green-400 font-bold text-sm md:text-base">무료수업 1회</p>
              <p className="text-zinc-400 text-xs md:text-sm">PT 체험</p>
            </div>
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 text-center">
              <span className="text-3xl mb-2 block">🎁</span>
              <p className="text-green-400 font-bold text-sm md:text-base">미션 달성시</p>
              <p className="text-zinc-400 text-xs md:text-sm">현금 최대 4만원 추가할인</p>
            </div>
          </motion.div>

          <p className="text-center text-zinc-500 text-sm mt-6">* 부가세 별도</p>
        </div>
      </section>

      {/* Mission Discount Section */}
      <MissionDiscount />

      {/* Facility Section */}
      <section id="facility" className="py-16 md:py-24 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-4">
              FACILITY
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">프리미엄 시설</span> 안내
            </h2>
            <p className="text-zinc-400">문체부 인증 신뢰도 높은 헬스장 ITN피트니스</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-800/50 border border-zinc-700 rounded-2xl p-6 text-center card-hover"
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-green-400">
                <FiShield className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">문체부 인증</h3>
              <p className="text-zinc-400">체형교정사가 운영하는 전문센터</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-zinc-800/50 border border-zinc-700 rounded-2xl p-6 text-center card-hover"
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-green-400">
                <FiTarget className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">최신 장비</h3>
              <p className="text-zinc-400">프리미엄 운동 기구 완비</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-zinc-800/50 border border-zinc-700 rounded-2xl p-6 text-center card-hover"
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-green-400">
                <FiUsers className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">무료 주차</h3>
              <p className="text-zinc-400">60대 이상 무료 주차 가능</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-zinc-800/50 border border-zinc-700 rounded-2xl p-6 text-center card-hover"
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-green-400">
                <FiHeart className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">청결한 환경</h3>
              <p className="text-zinc-400">매일 청소 및 위생 관리</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-zinc-800 rounded-2xl p-6 md:p-8"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/20 rounded-xl text-green-400">
                  <FiMapPin className="text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">위치</h4>
                  <p className="text-zinc-400 text-sm">
                    동해시 효자남길 33-34<br />이아빌딩 2층 201호
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/20 rounded-xl text-green-400">
                  <FiClock className="text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">운영시간</h4>
                  <p className="text-zinc-400 text-sm">
                    평일 06:00 - 01:00<br />토/공휴일 09:00 - 19:00<br />일요일 휴관
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/20 rounded-xl text-green-400">
                  <FiPhone className="text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">연락처</h4>
                  <p className="text-zinc-400 text-sm">
                    010-9745-2246
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-16 md:py-24 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-4">
              TRAINERS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">전문 강사진</span> 소개
            </h2>
            <p className="text-zinc-400">체형교정 전문가가 이끄는 1:1 맞춤 트레이닝</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500/10 to-yellow-500/10 border border-green-500/30 rounded-3xl overflow-hidden"
            >
              {/* 트레이너 이미지 */}
              <div className="w-full aspect-[4/3] md:aspect-[16/10] relative bg-zinc-900">
                <Image
                  src="/002.png"
                  alt="대표 트레이너"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                    <FiAward className="text-3xl text-green-400" />
                  </div>
                  <div>
                    <span className="text-green-400 text-sm font-medium">대표 트레이너</span>
                    <h3 className="text-2xl font-bold text-white">체형교정 전문가</h3>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FiCheck className="text-green-400 flex-shrink-0" />
                    <span className="text-zinc-300">국회의원상 수상 재활 트레이너</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiCheck className="text-green-400 flex-shrink-0" />
                    <span className="text-zinc-300">생활체육지도자 연수교수</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiCheck className="text-green-400 flex-shrink-0" />
                    <span className="text-zinc-300">정형외과 인증 전문센터</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiCheck className="text-green-400 flex-shrink-0" />
                    <span className="text-zinc-300">1:1 맞춤 프로그램 설계</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-start gap-4 bg-zinc-800/50 border border-zinc-700 rounded-xl p-4">
                <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                  <FiTarget className="text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-white">1:1 퍼스널 트레이닝</h4>
                  <p className="text-zinc-400 text-sm">개인 맞춤형 운동 프로그램으로 효과적인 결과</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-zinc-800/50 border border-zinc-700 rounded-xl p-4">
                <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                  <FiTrendingUp className="text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-white">체형 교정</h4>
                  <p className="text-zinc-400 text-sm">거북목, 라운드숄더, 골반 틀어짐 등 체형 문제 해결</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-zinc-800/50 border border-zinc-700 rounded-xl p-4">
                <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                  <FiHeart className="text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-white">재활 PT</h4>
                  <p className="text-zinc-400 text-sm">부상 후 재활 및 통증 완화를 위한 전문 프로그램</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-zinc-800/50 border border-zinc-700 rounded-xl p-4">
                <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                  <FiShield className="text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-white">다이어트 PT</h4>
                  <p className="text-zinc-400 text-sm">체계적인 운동과 식단 관리로 건강한 다이어트</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 국공기관 및 연예인 선택 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-lg md:text-xl font-bold text-white mb-6">
              국·공기관과 연예인들이 선택한 <span className="gradient-text">운동 전문기관</span>
            </p>
            <div className="relative w-full">
              <Image
                src="/itn.png"
                alt="국공기관 및 연예인 선택"
                width={1200}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              2025년, <span className="gradient-text">새로운 시작</span>을<br />
              ITN피트니스와 함께하세요
            </h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              지금 등록하시면 신년 특별 할인 혜택을 받으실 수 있습니다.<br />
              미션 완료하고 추가 할인까지!
            </p>

            {/* 카운트다운 타이머 */}
            <div className="mb-10">
              <p className="text-zinc-400 mb-4">이벤트 종료까지</p>
              <CountdownTimer />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://pf.kakao.com/_nxkQtn"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-full text-lg transition-all flex items-center justify-center gap-2"
              >
                <SiKakaotalk className="text-xl" />
                카카오톡 상담하기
              </motion.a>
              <motion.a
                href="tel:010-9745-2246"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-bold rounded-full text-lg transition-all flex items-center justify-center gap-2"
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
              className="inline-block mt-6 text-green-400 hover:text-green-300 underline"
            >
              네이버 지도에서 위치 확인하기
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-800 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold gradient-text mb-4">ITN피트니스</h3>
          <p className="text-zinc-400 text-sm mb-4">
            강원도 동해시 효자남길 33-34 이아빌딩 2층 201호
          </p>
          <p className="text-zinc-400 text-sm mb-4">
            전화: 010-9745-2246
          </p>
          <p className="text-zinc-500 text-xs">
            2025 ITN피트니스. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
