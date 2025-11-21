import { useState } from "react";
import { Play } from "lucide-react";

interface LazyVideoProps {
    src: string;
    poster: string;
    alt: string;
    className?: string;
}

const LazyVideo = ({ src, poster, alt, className = "" }: LazyVideoProps) => {
    const [isPlaying, setIsPlaying] = useState(false);

    if (!isPlaying) {
        return (
            <div
                className={`relative group cursor-pointer overflow-hidden ${className}`}
                onClick={() => setIsPlaying(true)}
            >
                <img
                    src={poster}
                    alt={alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`relative ${className}`}>
            <video
                src={src}
                controls
                autoPlay
                className="w-full h-full object-cover"
                poster={poster}
            >
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default LazyVideo;
