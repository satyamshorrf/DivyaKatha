import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

const bars = [2, 4, 6, 8, 10, 12, 14];

const AudioButton = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <button
      id="audio-button"
      onClick={toggleAudio}
      className="z-10 flex items-center px-4 py-4 "
    >
      <audio
        id="audio-element"
        ref={audioRef}
        className="hidden"
        src="/audio/audio_1.mp3"
        loop
      />

   

      <div className="flex space-x-0.5 ">
        {bars.map((order, idx) => (
          <motion.div
            key={idx}
            className="w-[1.5px] h-1.5 bg-green-400 rounded"
            animate={isPlaying ? { scaleY: [1, 2, 1] } : { scaleY: 1 }}
            transition={
              isPlaying
                ? {
                    duration: 1,
                    repeat: Infinity,
                    delay: idx * 0.1,
                    ease: 'easeInOut',
                  }
                : { duration: 0 }
            }
            style={{ transformOrigin: 'bottom' }}
          />
        ))}
      </div>
    </button>
  );
};

export default AudioButton;
