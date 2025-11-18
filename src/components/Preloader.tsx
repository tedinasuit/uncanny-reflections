import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader = ({ isLoading }: PreloaderProps) => {
  const [counter, setCounter] = useState(0);

  // Fake progress for visual feedback if real progress isn't granular enough
  // In a real implementation, we'd pass actual progress. 
  // For now, we'll just animate the exit.
  
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-display tracking-widest font-bold"
            >
              LARS HOEIJMANS
            </motion.div>
            <motion.div 
                className="h-[1px] bg-primary/20 w-48 overflow-hidden relative"
            >
                <motion.div 
                    className="absolute inset-y-0 left-0 bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }} // Indeterminate loading animation for now
                />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

