import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pages = [
  {
    id: 1,
    bgImage: "url('/imgs/sat_1.jpg')",
    music:
      "/audio/S_1WhatsApp Audio 2025-04-25 at 01.18.37_3e79ce51.dat.unknown",
    content: `सतयुग की कहानी: भगवान के दिव्य अवतारों की धरती पर यात्रा
    बहुत समय पहले, जब संसार में केवल सत्य, धर्म, शांति और तपस्या का राज्य था, वह युग था — सतयुग। लोग लंबे जीवन जीते थे, झूठ और पाप का कोई अस्तित्व नहीं था। लेकिन जब भी पृथ्वी पर कोई संकट आता, अधर्म बढ़ता या कोई राक्षस उत्पात मचाता, भगवान विष्णु किसी न किसी रूप में अवतरित होकर संसार की रक्षा करते।`,
  },
  {
    id: 2,
    bgImage: "url('/imgs/sat_1.jpg')",
    music:
      "/audio/S_2WhatsApp Audio 2025-04-25 at 01.23.21_97a8dcdc.dat.unknown",
    content:
      "सबसे पहले, एक बार जब प्रलय आया और सब कुछ जल में समा गया, तो भगवान मत्स्य अवतार (मछली रूप) में आए। उन्होंने नाव में बैठे ऋषि मनु को बचाया और वेदों की रक्षा की, ताकि ज्ञान और धर्म फिर से स्थापित हो सकें।",
  },
  {
    id: 3,
    bgImage: "url('/imgs/sat_2.jpg')",
    music:
      "/audio/S_3WhatsApp Audio 2025-04-25 at 01.25.45_56a9cf63.dat.unknown",
    content:
      "फिर आया समय समुद्र मंथन का। देवता और असुर मंथन करने लगे, लेकिन मंदराचल पर्वत डूबने लगा। तब भगवान ने कूर्म अवतार (कछुए का रूप) लिया और अपनी पीठ पर पर्वत को संभाला। यह हमें सिखाता है — धैर्य और सेवा ही जीवन की नींव हैं।",
  },
  {
    id: 4,
    bgImage: "url('/imgs/sat_3.jpg')",
    music:
      "/audio/S_4WhatsApp Audio 2025-04-25 at 01.30.43_f0705d25.dat.unknown",
    content:
      "इसके बाद, धरती पर संकट आया जब राक्षस हिरण्याक्ष ने पृथ्वी को पाताल में छुपा दिया। भगवान विष्णु ने वराह अवतार (सूअर रूप) लिया, युद्ध किया और पृथ्वी को बचाया। यह संदेश दिया कि प्रकृति की रक्षा हमारा धर्म है।",
  },
  {
    id: 5,
    bgImage: "url('/imgs/sat_4.jpeg')",
    music:
      "/audio/S_5WhatsApp Audio 2025-04-25 at 01.34.18_67a59c42.dat.unknown",
    content:
      "लेकिन सबसे चमत्कारी अवतार था — नरसिंह अवतार। भक्त प्रह्लाद पर अत्याचारी हिरण्यकशिपु का आतंक था। उसने कहा, “तेरा भगवान कहाँ है?” तभी भगवान विष्णु खंभे से आधे मानव और आधे सिंह के रूप में प्रकट हुए — न न दिन था, न रात; न घर था, न बाहर — और राक्षस का अंत कर दिया।",
  },
  {
    id: 6,
    bgImage: "url('/imgs/sat_5.jpg')",
    music:
      "/audio/S_6WhatsApp Audio 2025-04-25 at 01.34.18_67a59c42.dat.unknown",
    content: `यह कहानी सिखाती है:
    जहाँ सच्ची भक्ति होती है, वहाँ भगवान हर बंधन तोड़कर रक्षा करते हैं।
    सतयुग हमें बताता है कि सत्य, तप और धर्म से ही जीवन में सच्चा कल्याण होता है।

    यही है सतयुग की दिव्यता — एक युग, जहाँ भगवान हर रूप में हमारे साथ रहते थे।`,
  },
];

export default function AnimatedPages() {
  const [pageIndex, setPageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  const nextPage = () => {
    setPageIndex((prev) => (prev + 1) % pages.length);
  };

  const prevPage = () => {
    setPageIndex((prev) => (prev - 1 + pages.length) % pages.length);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      if (isPlaying) audioRef.current.play();
    }
  }, [pageIndex]);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={pages[pageIndex].id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backgroundImage: pages[pageIndex].bgImage,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 mt-60">
        <div className="w-full max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm md:text-base text-gray-300 font-serif bg-black bg-opacity-50 p-4 sm:p-6 rounded-lg shadow-lg mx-auto text-center">
            {pages[pageIndex].content}
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-4">
        <div className="mb-12 flex flex-col sm:flex-row gap-3 sm:gap-5 items-center">
          <button
            onClick={prevPage}
            className="bg-white text-black px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full shadow hover:bg-gray-200 transition"
          >
            Previous
          </button>
          <button
            onClick={toggleAudio}
            className="bg-white text-black px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full shadow hover:bg-gray-200 transition"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button
            onClick={nextPage}
            className="bg-white text-black px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full shadow hover:bg-gray-200 transition"
          >
            Next
          </button>
        </div>

        <div className="flex space-x-2">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => setPageIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                index === pageIndex ? "bg-white" : "bg-gray-400"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <audio ref={audioRef} autoPlay loop>
        <source src={pages[pageIndex].music} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
