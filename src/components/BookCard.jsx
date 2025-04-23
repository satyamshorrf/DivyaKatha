import React, { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react"; // Import the Play and Stop icons from lucide-react

const pages = [
  {
    type: "cover",
    content: (
      <div className="page-cover w-full h-full ">
        {/* <h1 className="text-4xl font-bold text-white">Bhagavad Gita</h1> */}
        <img
          src="/imgs/g_c.jpeg"
          alt="Cover"
          className="  w-full h-full rounded  "
        />
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="page-content p-20">
        <h2 className="text-lg font-bold text-red-700">अर्जुनविषादयोग</h2>
        <p className="text-sm text-gray-600 italic">
          Arjuna Vishada Yoga - Arjuna’s Dilemma
        </p>
        <p className="mt-2 whitespace-pre-line">
          धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः
          पाण्डवाश्चैव किमकुर्वत सञ्जय ||1||
        </p>
        <p className="mt-4 text-sm font-semibold text-gray-800">Translation:</p>
        <p className="text-sm">
          Dhritarashtra said: O Sanjaya, what did my sons and the sons of Pandu
          do when they assembled on the holy field of Kurukshetra, eager for
          battle?
        </p>
        <p className="mt-4 text-sm font-semibold text-gray-800">Explanation:</p>
        <p className="text-sm">
          The Bhagavad Gita begins with King Dhritarashtra asking his secretary
          Sanjaya about the battle between his sons (the Kauravas) and their
          cousins (the Pandavas) on the sacred field of Kurukshetra.
        </p>
      </div>
    ),
  },

  {
    type: "image",
    content: (
      <div className="page-image h-full w-full flex items-center justify-center">
        <img
          src="/imgs/av_2.jpg"
          alt="Krishna and Arjuna"
          className="w-full h-full object-cover rounded-xl border-4 border-yellow-600"
        />
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="page-content p-20">
        <h2 className="text-lg font-bold text-red-700">अर्जुनविषादयोग</h2>
        <p className="text-sm text-gray-600 italic">
          Arjuna Vishada Yoga - Arjuna’s Dilemma
        </p>
        <p className="mt-2 whitespace-pre-line">
          धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः
          पाण्डवाश्चैव किमकुर्वत सञ्जय ||1||
        </p>
        <p className="mt-4 text-sm font-semibold text-gray-800">Translation:</p>
        <p className="text-sm">
          Dhritarashtra said: O Sanjaya, what did my sons and the sons of Pandu
          do when they assembled on the holy field of Kurukshetra, eager for
          battle?
        </p>
        <p className="mt-4 text-sm font-semibold text-gray-800">Explanation:</p>
        <p className="text-sm">
          The Bhagavad Gita begins with King Dhritarashtra asking his secretary
          Sanjaya about the battle between his sons (the Kauravas) and their
          cousins (the Pandavas) on the sacred field of Kurukshetra.
        </p>
      </div>
    ),
  },
  {
    type: "image",
    content: (
      <div className="page-image h-full w-full flex items-center justify-center">
        <img
          src="/imgs/av_2.jpg"
          alt="Krishna and Arjuna"
          className="w-full h-full object-cover rounded-xl border-4 border-yellow-600"
        />
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="page-content p-20">
        <h2 className="text-lg font-bold text-red-700">अर्जुनविषादयोग</h2>
        <p className="text-sm text-gray-600 italic">
          Arjuna Vishada Yoga - Arjuna’s Dilemma
        </p>
        <p className="mt-2 whitespace-pre-line">
          धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः
          पाण्डवाश्चैव किमकुर्वत सञ्जय ||1||
        </p>
        <p className="mt-4 text-sm font-semibold text-gray-800">Translation:</p>
        <p className="text-sm">
          Dhritarashtra said: O Sanjaya, what did my sons and the sons of Pandu
          do when they assembled on the holy field of Kurukshetra, eager for
          battle?
        </p>
        <p className="mt-4 text-sm font-semibold text-gray-800">Explanation:</p>
        <p className="text-sm">
          The Bhagavad Gita begins with King Dhritarashtra asking his secretary
          Sanjaya about the battle between his sons (the Kauravas) and their
          cousins (the Pandavas) on the sacred field of Kurukshetra.
        </p>
      </div>
    ),
  },
  {
    type: "image",
    content: (
      <div className="page-image h-full w-full flex items-center justify-center">
        <img
          src="/imgs/av_2.jpg"
          alt="Krishna and Arjuna"
          className="w-full h-full object-cover rounded-xl border-4 border-yellow-600"
        />
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="page-content p-20">
        <h2 className="text-lg font-bold text-red-700">अर्जुनविषादयोग</h2>
        <p className="text-sm text-gray-600 italic">
          Arjuna Vishada Yoga - Arjuna’s Dilemma
        </p>
        <p className="mt-2 whitespace-pre-line">
          धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः
          पाण्डवाश्चैव किमकुर्वत सञ्जय ||1||
        </p>
        <p className="mt-4 text-sm font-semibold text-gray-800">Translation:</p>
        <p className="text-sm">
          Dhritarashtra said: O Sanjaya, what did my sons and the sons of Pandu
          do when they assembled on the holy field of Kurukshetra, eager for
          battle?
        </p>
        <p className="mt-4 text-sm font-semibold text-gray-800">Explanation:</p>
        <p className="text-sm">
          The Bhagavad Gita begins with King Dhritarashtra asking his secretary
          Sanjaya about the battle between his sons (the Kauravas) and their
          cousins (the Pandavas) on the sacred field of Kurukshetra.
        </p>
      </div>
    ),
  },
  {
    type: "image",
    content: (
      <div className="page-image h-full w-full flex items-center justify-center">
        <img
          src="/imgs/av_2.jpg"
          alt="Krishna and Arjuna"
          className="w-full h-full object-cover rounded-xl border-4 border-yellow-600"
        />
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="page-content">
        <h2 className="text-lg font-bold text-red-700">End Book</h2>
        <p className="text-sm text-fuchsia-800">
          The Gita offers profound teachings on duty, righteousness, and
          spiritual wisdom.
        </p>
      </div>
    ),
  },
];

const BookPreview = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true); // To track audio play/pause state
  const [audioPosition, setAudioPosition] = useState(0); // Track audio position
  const book = useRef();
  const audioRef = useRef();

  const backgrounds = [
    "bg-gradient-to-br from-yellow-100 to-orange-200", // Cover background
    "bg-gradient-to-br from-blue-100 to-green-200", // Page 1 background
    "bg-gradient-to-br from-pink-100 to-purple-200", // Page 2 background
    "bg-gradient-to-br from-teal-100 to-cyan-200", // Page 3 background
    "bg-gradient-to-br from-indigo-100 to-violet-200", // Page 4 background
  ];

  const audioTracks = [
    "/audio/audio_1.mp3", // Cover audio
    "/audio/audio_2.mp3", // Page 1 audio
    "/audio/audio_3.mp3", // Page 2 audio
    "/audio/audio_4.mp3", // Page 3 audio
    "/audio/audio_5.mp3", // Page 4 audio
  ];

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
    if (audioRef.current) {
      audioRef.current.src = audioTracks[pageIndex];
      audioRef.current.currentTime = audioPosition; // Resume from last position
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        setAudioPosition(audioRef.current.currentTime); // Save current position before pausing
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    // Auto-start audio on page refresh or load.
    if (audioRef.current) {
      audioRef.current.src = audioTracks[currentPage];
      audioRef.current.currentTime = audioPosition; // Ensure it starts from the saved position
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentPage]);

  // Stop all audio if the play state is false
  useEffect(() => {
    if (!isPlaying && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isPlaying]);

  return (
    <div
      className={`min-h-screen ${backgrounds[currentPage]} flex items-center justify-center `}
    >
      <HTMLFlipBook
        width={400}
        height={500}
        size="fixed"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className="book-shadow"
        ref={book}
        onFlip={(e) => handlePageChange(e.data)}
      >
        {pages.map((page, idx) => (
          <div
            key={idx}
            className="page bg-white border-4 border-yellow-600 rounded-xl  shadow-lg"
          >
            {page.content}
          </div>
        ))}
      </HTMLFlipBook>
      <audio ref={audioRef} preload="auto" />

      <button
        className="absolute bottom-100 right-[14rem]  transform -translate-x-1/2 flex items-center space-x-4 border-[3px] border-gray-400 rounded-full bg-white backdrop-blur-lg p-4 shadow-lg text-black"
        onClick={() => book.current.pageFlip().flipNext()}
      >
        <ChevronRight size={36} color="gray" />
      </button>
      <button
        className="absolute bottom-100 left-[19rem] transform -translate-x-1/2 flex items-center space-x-4 border-[3px] border-gray-400 rounded-full bg-white backdrop-blur-lg p-4 shadow-lg text-black "
        onClick={() => book.current.pageFlip().flipPrev()}
      >
        <ChevronLeft size={36} color="gray" />
      </button>

      {/* Audio Control Button with Icon */}
      <div className="absolute bottom-4  right-0 transform -translate-x-1/2 flex items-center space-x-4 border-2 border-transparent rounded-full bg-red-500 backdrop-blur-lg p-2 shadow-lg">
        <button
          className={`bg-${
            isPlaying ? "red" : "green"
          }-500 text-white font-bold py-2 px-4 rounded`}
          onClick={toggleAudio}
        >
          {isPlaying ? (
            <Pause size={24} color="white" />
          ) : (
            <Play size={24} color="white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default BookPreview;
