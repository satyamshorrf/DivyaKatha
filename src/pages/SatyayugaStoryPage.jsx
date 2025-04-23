import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

const SatayugaStoryPage = ({ storyId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [musicSubtitle, setMusicSubtitle] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageDuration, setImageDuration] = useState(5000);
  const audioRef = useRef(null);
  const intervalRef = useRef(null);

  const allImages = {
    story1: ['/imgs/pratik.jpg', '/imgs/pratik.jpg', '/imgs/pratik.jpg'],
    story2: ['/imgs/s_1.jpg', '/imgs/s_2.jpg', '/imgs/s_3.jpg', '/imgs/s_4.jpg', '/imgs/s_5.jpg'],
    story3: ['/imgs/s_1.jpg', '/imgs/s_2.jpg', '/imgs/s_3.jpg', '/imgs/s_4.jpg', '/imgs/s_5.jpg', '/imgs/s_6.jpg'],
    story4: ['/imgs/s_1.jpg', '/imgs/s_2.jpg', '/imgs/s_3.jpg', '/imgs/s_4.jpg', '/imgs/s_5.jpg', '/imgs/s_6.jpg', '/imgs/s_7.jpg'],
    story5: ['/imgs/s_1.jpg', '/imgs/s_2.jpg', '/imgs/s_3.jpg', '/imgs/s_4.jpg', '/imgs/s_5.jpg', '/imgs/s_6.jpg', '/imgs/s_7.jpg', '/imgs/s_8.jpg', '/imgs/s_9.jpg', '/imgs/s_10.jpg'],
  };

  const bgImages = allImages[storyId] || [];
  const totalDuration = 150000;

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
    audio.loop = false;
    audioRef.current = audio;

    audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));

    const imgDuration = totalDuration / bgImages.length;
    setImageDuration(imgDuration);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      clearInterval(intervalRef.current);
    };
  }, [storyId]);

  useEffect(() => {
    if (!imageDuration) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % bgImages.length);
    }, imageDuration);

    return () => clearInterval(intervalRef.current);
  }, [imageDuration, bgImages.length]);

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
    <div className="relative w-full min-h-screen text-white overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0 w-full h-full bg-contain bg-center bg-no-repeat border-2 border-yellow-600 rounded-xl"
          style={{ backgroundImage: `url(${bgImages[currentIndex]})` }}
        />
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <div className="bg-black bg-opacity-60 p-6 rounded-xl max-w-xl w-full text-center shadow-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-4">
            Dvaparayuga - {storyId.toUpperCase()}
          </h1>
          <p className="text-md sm:text-lg font-serif">
            Displaying content for <strong>{storyId}</strong> in Dvaparayuga.
          </p>
        </div>

        <div className="absolute bottom-6 w-full flex flex-col items-center px-4">
          <p className="text-sm sm:text-base text-white bg-black bg-opacity-50 inline-block px-4 py-2 rounded mb-3 shadow">
            🎵 {musicSubtitle}
          </p>
          <button
            onClick={togglePlayPause}
            className="bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-80 transition shadow"
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
          >
            {isPlaying ? <Pause size={28} /> : <Play size={28} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SatayugaStoryPage;
