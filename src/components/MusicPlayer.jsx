import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipForward, SkipBack, Volume2 } from "lucide-react";

const MusicPlayer = ({ songs = [] }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  // Initialize with default songs if none provided
  const defaultSongs = [
    {
      title: "Song of the Wind",
      artist: "Artist A",
      cover: "/logo.jpeg",
      audio: "audio/audio_1.mp3",
    },
    {
      title: "Midnight Drive",
      artist: "Artist C",
      cover: "/logo.jpeg",
      audio: "audio/audio_2.mp3",
    },
  ];

  const playerSongs = songs.length > 0 ? songs : defaultSongs;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleNext);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleNext);
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        console.error("Audio playback failed:", error);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSongIndex]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === playerSongs.length - 1 ? 0 : prevIndex + 1
    );
    setProgress(0);
  };

  const handlePrevious = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? playerSongs.length - 1 : prevIndex - 1
    );
    setProgress(0);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume / 100;
  };

  const handleProgressClick = (e) => {
    const progressBar = e.currentTarget;
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
    const progressBarWidth = progressBar.clientWidth;
    const seekPercentage = (clickPosition / progressBarWidth) * 100;

    if (audioRef.current.duration) {
      const seekTime = (audioRef.current.duration * seekPercentage) / 100;
      audioRef.current.currentTime = seekTime;
      setProgress(seekPercentage);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 p-3 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center">
        {/* Song Info */}
        <div className="flex items-center w-1/4">
          <img
            src={playerSongs[currentSongIndex]?.cover || "/logo.jpeg"}
            alt="Album Cover"
            className="w-12 h-12 rounded-lg mr-3"
          />
          <div>
            <h4 className="font-semibold text-sm truncate">
              {playerSongs[currentSongIndex]?.title || "No song selected"}
            </h4>
            <p className="text-xs text-gray-400 truncate">
              {playerSongs[currentSongIndex]?.artist || "Unknown artist"}
            </p>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex-1 flex flex-col items-center">
          <div className="flex items-center space-x-4 mb-1">
            <button
              onClick={handlePrevious}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <SkipBack size={20} />
            </button>
            <button
              onClick={togglePlay}
              className="p-2 bg-cyan-600 rounded-full hover:bg-cyan-500 transition-colors"
            >
              {isPlaying ? (
                <Pause size={20} className="text-white" />
              ) : (
                <Play size={20} className="text-white" />
              )}
            </button>
            <button
              onClick={handleNext}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <SkipForward size={20} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="w-full flex items-center">
            <span className="text-xs text-gray-400 mr-2">
              {audioRef.current
                ? formatTime(audioRef.current.currentTime)
                : "0:00"}
            </span>
            <div
              className="flex-1 h-1.5 bg-gray-700 rounded-full overflow-hidden cursor-pointer"
              onClick={handleProgressClick}
            >
              <div
                className="h-full bg-cyan-400 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-400 ml-2">
              {audioRef.current
                ? formatTime(audioRef.current.duration)
                : "0:00"}
            </span>
          </div>
        </div>

        {/* Volume Control */}
        <div className="w-1/4 flex justify-end items-center">
          <Volume2 size={16} className="text-gray-400 mr-2" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className="w-24 accent-cyan-500"
          />
        </div>

        {/* Hidden Audio Element */}
        <audio
          ref={audioRef}
          src={playerSongs[currentSongIndex]?.audio}
          preload="metadata"
        />
      </div>
    </div>
  );
};

// Helper function to format time (seconds to MM:SS)
function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

export default MusicPlayer;