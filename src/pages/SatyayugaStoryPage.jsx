import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

const SatayugaStoryPage = ({ storyId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [musicSubtitle, setMusicSubtitle] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const intervalRef = useRef(null);

  const bgImages = Array.from({ length: 10 }, (_, i) => `/imgs/av_${i + 1}.jpg`);

  useEffect(() => {
    const musicSubtitles = {
      story1: 'Divine Melody of Krishna',
      story2: 'Battle Hymn of Kurukshetra',
      story3: 'Flute Song in Vrindavan',
      story4: 'Chant of the Bhagavad Gita',
      story5: 'Echoes of Dvaparayuga',
    };

    const musicFiles = {
      story1: 'audio_1.mp3',
      story2: 'audio_2.mp3',
      story3: 'audio_3.mp3',
      story4: 'audio_4.mp3',
      story5: 'audio_5.mp3',
    };

    setMusicSubtitle(musicSubtitles[storyId]);

    if (audioRef.current) {
      audioRef.current.pause();
    }

    const audio = new Audio(`/audio/${musicFiles[storyId]}`);
    audio.loop = true;
    audioRef.current = audio;

    audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      clearInterval(intervalRef.current);
    };
  }, [storyId]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % bgImages.length);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${bgImages[currentIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>

      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen">
        <div className="bg-black bg-opacity-50 p-6 rounded">
          <h1 className="text-4xl font-bold mb-4">
            Dvaparayuga - {storyId.toUpperCase()}
          </h1>
          <p className="text-lg">
            Displaying content for {storyId} in Dvaparayuga.
          </p>
        </div>

        <div className="absolute bottom-4 text-center w-full flex flex-col items-center">
          <p className="text-sm text-white bg-black bg-opacity-50 inline-block px-4 py-2 rounded mb-2">
            🎵 {musicSubtitle}
          </p>
          <button
            onClick={togglePlayPause}
            className="bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
          >
            {isPlaying ? <Pause size={32} /> : <Play size={32} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SatayugaStoryPage;
