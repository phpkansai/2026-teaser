import { motion } from "motion/react";
import seigaihaPattern from "figma:asset/5c80341e9009c05695575b70d8421143ad96b223.png";
import kikkouPattern from "figma:asset/4b53b48a8e754095abe609acbb4b963f1ccb202c.png";
import ichimatsuPattern from "figma:asset/5eb6e8c62f6285eb2a255ee6215003f946725307.png";

export default function App() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[var(--color-kyo-white)]">
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

                    {/* Coming Soon */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="text-2xl md:text-4xl tracking-widest"
                        style={{
                            color: "var(--color-kyo-purple)",
                            letterSpacing: "0.3em"
                        }}
                    >
                        Coming Soon
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
    );
}
