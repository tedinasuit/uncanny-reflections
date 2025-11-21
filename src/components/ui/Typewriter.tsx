import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypewriterProps {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    delayBetween?: number;
    className?: string;
}

export const Typewriter = ({
    words,
    typingSpeed = 150,
    deletingSpeed = 100,
    delayBetween = 2000,
    className,
}: TypewriterProps) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const word = words[currentWordIndex];

        const handleTyping = () => {
            if (isDeleting) {
                setCurrentText((prev) => prev.substring(0, prev.length - 1));
            } else {
                setCurrentText((prev) => word.substring(0, prev.length + 1));
            }

            // Determine typing speed
            let speed = isDeleting ? deletingSpeed : typingSpeed;

            // If finished typing word
            if (!isDeleting && currentText === word) {
                speed = delayBetween;
                setIsDeleting(true);
            }
            // If finished deleting word
            else if (isDeleting && currentText === "") {
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
                speed = 500; // Small pause before typing next word
            }

            return speed;
        };

        const timer = setTimeout(() => {
            handleTyping();
        }, isDeleting && currentText === word ? delayBetween : (isDeleting ? deletingSpeed : typingSpeed));

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetween]);

    return (
        <span className={cn("inline-flex items-center", className)}>
            <span>{currentText || "\u00A0"}</span>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="ml-1 inline-block w-[2px] h-[1em] bg-current"
            />
        </span>
    );
};
