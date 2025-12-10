import { motion } from "framer-motion";

interface AmbientBackgroundProps {
    color?: string;
}

export const AmbientBackground = ({ color = "#ffffff" }: AmbientBackgroundProps) => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-black" />

            {/* Primary Glow Orb */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: ["-20%", "0%", "-20%"],
                    y: ["-20%", "-10%", "-20%"],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -top-[20%] -left-[10%] w-[80vw] h-[80vw] rounded-full blur-[120px] mix-blend-screen opacity-30"
                style={{ backgroundColor: color }}
            />

            {/* Secondary Glow Orb (Bottom Right) */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: ["20%", "0%", "20%"],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full blur-[100px] mix-blend-screen opacity-20"
                style={{ backgroundColor: color }}
            />

            {/* Noise Overlay for texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
};
