import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pages = [
  {
    id: 1,
    bgImage: "url('/imgs/K_2.jpg')",
    music:
      "/audio/K_1WhatsApp Audio 2025-04-25 at 11.23.19_4f97d271.dat.unknown",
    content: `कलियुग की कहानी: अंधकार में भी उजाले की खोज

कलियुग, चार युगों में अंतिम युग है — एक ऐसा युग जिसमें धर्म का केवल एक पाद (स्तंभ) शेष रह गया है। इस युग की शुरुआत भगवान श्रीकृष्ण के धरती से प्रस्थान के बाद होती है। जैसे ही वे अपने लोक को लौटे, धरती पर अज्ञान, अधर्म और कलह का प्रभाव बढ़ने लगा।
`,
  },
  {
    id: 2,
    bgImage: "url('/imgs/K_7.jpg')",
    music:
      "/audio/K_2WhatsApp Audio 2025-04-25 at 11.25.34_3b1a4a82.dat.unknown",
    content: `कलियुग की विशेषताएँ:

धर्म की हानि: सत्य, दया, संयम और तप जैसे गुणों में कमी आई। लोग स्वार्थी, क्रोधी और लालची हो गए।

झूठ और छल की वृद्धि: न्याय और नैतिकता पीछे छूटने लगे, छल-कपट बढ़ने लगा।

संपत्ति और पद की भूख:।
`,
  },
  {
    id: 3,
    bgImage: "url('/imgs/K_4.jpg')",
    music:
      "/audio/K_3WhatsApp Audio 2025-04-25 at 13.28.51_38fa2a38.dat.unknown",
    content: `
     व्यक्ति अब सद्गुणों से नहीं, बल्कि धन और प्रतिष्ठा से मूल्यांकन होने लगा।

अंधश्रद्धा और पाखंड: धर्म का स्वरूप बदलने लगा, असली भक्ति की जगह दिखावा और पाखंड ने ले ली

कलियुग में भी आशा है:

हालाँकि कलियुग को अंधकारमय माना जाता है, फिर भी इस युग की सबसे बड़ी विशेषता यह है कि,
`,
  },
  {
    id: 4,
    bgImage: "url('/imgs/K_9.jpg')",
    music:
      "/audio/K_4WhatsApp Audio 2025-04-25 at 13.31.46_a5358e2a.dat.unknown",
    content: `भगवान का स्मरण और भक्ति सबसे सरल और फलदायक है। 
  [कलियुग केवल नाम अधारा, सुमिर-सुमिर नर उतरहि पारा।]
अर्थात – इस युग में भगवान का नाम जपना ही मोक्ष का मार्ग है।कलियुग से मिलने वाली सीख:

चाहे संसार में कितना भी अधर्म हो,
`,
  },
  {
    id: 5,
    bgImage: "url('/imgs/K_3.jpg')",
    music:
      "/audio/K_5WhatsApp Audio 2025-04-25 at 13.33.34_edf1cd94.dat.unknown",
    content: ` सच्ची भक्ति और सत्य से इंसान बच सकता है।

भगवान का नाम, सेवा और श्रद्धा ही इस युग में धर्म की रक्षा करने वाले साधन हैं।युग चाहे कोई भी हो, अच्छे कर्म और सच्चे दिल की शक्ति अमर रहती है।
`,
  },
  {
    id: 6,
    bgImage: "url('/imgs/K_8.jpg')",
    music:
      "/audio/K_6WhatsApp Audio 2025-04-25 at 13.39.22_7b657281.dat.unknown",
    content: `

जब अधर्म अपने चरम पर होगा, तब भगवान विष्णु कल्कि अवतार लेकर फिर से धर्म की स्थापना करेंगे।

कलियुग एक परीक्षा है — जहाँ बुराई आम है, लेकिन अच्छाई चुनना ही सच्चा साहस और धर्म है।`,
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
