import { motion } from "motion/react";
import { Mail, MessageSquarePlus, Presentation } from "lucide-react";
import seigaihaPattern from "figma:asset/5c80341e9009c05695575b70d8421143ad96b223.png";
import kikkouPattern from "figma:asset/4b53b48a8e754095abe609acbb4b963f1ccb202c.png";
import ichimatsuPattern from "figma:asset/5eb6e8c62f6285eb2a255ee6215003f946725307.png";

export default function App() {
    return (
        <div className="relative bg-[var(--color-kyo-white)]">
        <div className="relative min-h-screen overflow-hidden">
            {/* Top Right - Seigaiha Pattern */}
            <motion.div
                initial={{ opacity: 0, x: 100, y: -100 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-0 right-0 w-[800px] h-[600px] pointer-events-none"
            >
                <img
                    src={seigaihaPattern}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Top Left - Kikkou Pattern */}
            <motion.div
                initial={{ opacity: 0, x: -100, y: -100 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                className="absolute top-0 left-0 w-[600px] h-[500px] pointer-events-none opacity-80"
            >
                <img
                    src={kikkouPattern}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Bottom - Ichimatsu Pattern */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                className="absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none"
            >
                <img
                    src={ichimatsuPattern}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center w-full max-w-6xl"
                >
                    {/* Decorative Top Border */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.2, delay: 0.6 }}
                        className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-kyo-gold)] to-transparent mx-auto mb-12"
                    />

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="mb-8 tracking-wider md:whitespace-nowrap"
                        style={{
                            color: "var(--color-kyo-black)",
                            letterSpacing: "0.1em",
                            fontFamily: "var(--font-japanese)",
                            fontWeight: 500,
                            fontSize: "clamp(1.5rem, 5vw, 5rem)"
                        }}
                    >
                        PHPカンファレンス関西
                        <wbr />
                        2026
                    </motion.h1>

                    {/* Decorative Middle Border */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.2, delay: 1.0 }}
                        className="w-48 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-kyo-red)]/60 to-transparent mx-auto my-12"
                    />

                    {/* 開催決定 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="tracking-widest"
                        style={{
                            color: "var(--color-kyo-purple)",
                            letterSpacing: "0.3em",
                            fontSize: "clamp(2rem, 6vw, 4.5rem)",
                            fontFamily: '"Noto Sans JP", sans-serif',
                            fontWeight: 900
                        }}
                    >
                        開催決定
                    </motion.div>

                    {/* Event Details */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.4 }}
                        className="mt-8 space-y-2"
                        style={{
                            color: "var(--color-kyo-black)",
                            fontFamily: "var(--font-japanese)",
                            letterSpacing: "0.05em",
                            fontSize: "clamp(1rem, 2.5vw, 1.5rem)"
                        }}
                    >
                        <p>場所：京都リサーチパーク</p>
                        <p>日程：2027年1月16日（土）</p>
                    </motion.div>

                    {/* SNS Link */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="mt-6"
                        style={{
                            fontFamily: "var(--font-japanese)",
                            fontSize: "clamp(0.85rem, 2vw, 1rem)"
                        }}
                    >
                        <a
                            href="https://x.com/phpcon_kansai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline-offset-4 hover:underline"
                            style={{ color: "var(--color-kyo-black)", opacity: 0.7 }}
                        >
                            公式X（Twitter）：@phpcon_kansai
                        </a>
                    </motion.div>

                    {/* Decorative Bottom Border */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.2, delay: 1.4 }}
                        className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-kyo-gold)] to-transparent mx-auto mt-12"
                    />
                </motion.div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[var(--color-kyo-red)]/40" />
                <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[var(--color-kyo-red)]/40" />
                <div className="absolute bottom-24 left-8 w-16 h-16 border-b-2 border-l-2 border-[var(--color-kyo-red)]/40" />
                <div className="absolute bottom-24 right-8 w-16 h-16 border-b-2 border-r-2 border-[var(--color-kyo-red)]/40" />
            </div>
        </div>

        {/* Information Sections */}
        <div className="relative z-10 px-6 pb-24">
            <div className="max-w-3xl mx-auto space-y-16">

                {/* About */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2
                        className="mb-6 text-center tracking-widest"
                        style={{
                            color: "var(--color-kyo-purple)",
                            letterSpacing: "0.2em",
                            fontFamily: "var(--font-japanese)",
                            fontWeight: 700,
                            fontSize: "clamp(1.25rem, 3vw, 1.75rem)"
                        }}
                    >
                        開催概要
                    </h2>
                    <div
                        className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-kyo-gold)] to-transparent mx-auto mb-8"
                    />
                    <div
                        className="space-y-4 leading-relaxed"
                        style={{
                            color: "var(--color-kyo-black)",
                            fontFamily: "var(--font-japanese)",
                            fontSize: "clamp(0.95rem, 2vw, 1.05rem)"
                        }}
                    >
                        <div className="space-y-2">
                            <p>PHPカンファレンス関西は、PHPエンジニア（PHPer）がPHPやPHP周辺の技術的知識やノウハウ、体験を共有するための大規模技術カンファレンスです。</p>
                            <p>2011年から過去8回開催されており、毎回その時のPHP最新情報やトレンドの話題で盛り上がります。</p>
                            <p>関西のPHPerがお互いに情報を交換し、エンジニアとしてレベルアップをする場となるべく、2018年から6年ぶりに開催することになりました。</p>
                            <p>イベント当日は一般公募で集まったエンジニアによる講演をはじめ、その他情報共有を行うための催しが行われます。</p>
                        </div>
                        <div>
                            <p className="mb-1" style={{ color: "var(--color-kyo-purple)", fontWeight: 700 }}>
                                参加資格
                            </p>
                            <p>PHPを使っている人、PHPを使っていた人、PHPに興味がある人など、PHPに関係する人全てに参加資格があります。</p>
                            <p>自身の情報アップデートのためにもぜひお越しください！！</p>
                        </div>
                    </div>
                </motion.section>

                {/* Proposal / Sponsor Links */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="grid gap-6 sm:grid-cols-2"
                >
                    <a
                        href="https://fortee.jp/phpcon-kansai2026/speaker/proposal/cfp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-3 rounded-lg border px-6 py-8 text-center transition-colors hover:bg-[var(--color-kyo-beige)]/30"
                        style={{
                            borderColor: "var(--color-kyo-gold)",
                            color: "var(--color-kyo-black)"
                        }}
                    >
                        <Presentation size={28} style={{ color: "var(--color-kyo-red)" }} />
                        <span
                            style={{
                                fontFamily: "var(--font-japanese)",
                                fontWeight: 700,
                                fontSize: "1.1rem"
                            }}
                        >
                            プロポーザル募集
                        </span>
                        <span className="text-sm opacity-70">登壇者募集フォームはこちら</span>
                        <span
                            className="text-sm"
                            style={{ color: "var(--color-kyo-red)", fontWeight: 700 }}
                        >
                            締切：2026年10月18日（日）
                        </span>
                    </a>

                    <a
                        href="https://docs.google.com/presentation/d/1L8lzrsSyK7unjY8-43bz7bi_nQ_M-DJkz5hGH_EkiD8/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-3 rounded-lg border px-6 py-8 text-center transition-colors hover:bg-[var(--color-kyo-beige)]/30"
                        style={{
                            borderColor: "var(--color-kyo-gold)",
                            color: "var(--color-kyo-black)"
                        }}
                    >
                        <Mail size={28} style={{ color: "var(--color-kyo-red)" }} />
                        <span
                            style={{
                                fontFamily: "var(--font-japanese)",
                                fontWeight: 700,
                                fontSize: "1.1rem"
                            }}
                        >
                            スポンサー募集
                        </span>
                        <span className="text-sm opacity-70">募集要項・お問い合わせはこちら</span>
                        <span
                            className="text-sm"
                            style={{ color: "var(--color-kyo-red)", fontWeight: 700 }}
                        >
                            締切：2026年11月6日（金）
                        </span>
                    </a>

                    <a
                        href="https://requestalk-2026.kphpug.jp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-3 rounded-lg border px-6 py-8 text-center transition-colors hover:bg-[var(--color-kyo-beige)]/30 sm:col-span-2"
                        style={{
                            borderColor: "var(--color-kyo-gold)",
                            color: "var(--color-kyo-black)"
                        }}
                    >
                        <MessageSquarePlus size={28} style={{ color: "var(--color-kyo-red)" }} />
                        <span
                            style={{
                                fontFamily: "var(--font-japanese)",
                                fontWeight: 700,
                                fontSize: "1.1rem"
                            }}
                        >
                            リクエストーク
                        </span>
                        <div className="text-sm opacity-70 max-w-xl space-y-1">
                            <p>自分が聞きたいトークをリクエストしよう！！</p>
                            <p>リクエストークとは、自分がカンファレンスで聞いてみたいトークをリクエストできるしくみです。
                                いままで登壇したことがない人も、あまりカンファレンスに参加したことがなかった人も、リクエストークを使ってカンファレンスづくりに参加してみよう！</p>
                        </div>
                    </a>
                </motion.section>

            </div>
        </div>
        </div>
    );
}
