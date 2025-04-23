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
    content: <div className="page-content "></div>,
  },

  {
    type: "content",
    content: (
      <div className="page-content h-full p-20">
        <h3 className="text-xl font-bold text-red-700">
          द्वितीय अध्याय, श्लोक 37
        </h3>
        <h3 className="text-xl font-bold text-red-700">
          द्वितीय अध्याय, श्लोक 47
        </h3>
        <h3 className="text-xl font-bold text-red-700">
        द्वितीय अध्याय, श्लोक 62
        </h3>
        <h3 className="text-xl font-bold text-red-700">
        द्वितीय अध्याय, श्लोक 63
        </h3>
        <h3 className="text-xl font-bold text-red-700">
        तृतीय अध्याय, श्लोक 21
        </h3>
        <h3 className="text-xl font-bold text-red-700">
        तृतीय अध्याय, श्लोक 23
        </h3>
        <h3 className="text-xl font-bold text-red-700">
        चतुर्थ अध्याय, श्लोक 7
        </h3>
        <h3 className="text-xl font-bold text-red-700">
        चतुर्थ अध्याय, श्लोक 8
        </h3>
        <h3 className="text-xl font-bold text-red-700">
        चतुर्थ अध्याय, श्लोक 39
        </h3>
        <h3 className="text-xl font-bold text-red-700">
        चतुर्थ अध्याय, श्लोक 7
        </h3>
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="page-content p-[50px]">
        <h2 className="text-xl font-bold text-red-700">
          द्वितीय अध्याय, श्लोक 37
        </h2>
        <p className="text-base mt-8 text-gray-700 italic">
          हे कौन्तेय (अर्जुन), और निश्चय करके युद्ध करो...
        </p>
        <p className="mt-8 whitespace-pre-line text-base text-gray-900">
          हतो वा प्राप्यसि स्वर्गम्, जित्वा वा भोक्ष्यसे महिम्। तस्मात् उत्तिष्ठ
          कौन्तेय युद्धाय कृतनिश्चय:॥
        </p>
        <p className="mt-10 text-lg font-bold text-gray-700">अर्थात:</p>
        <p className="text-base mt-6  text-gray-900">
          यदि तुम (अर्जुन) युद्ध में वीरगति को प्राप्त होते हो तो तुम्हें स्वर्ग
          मिलेगा और यदि विजयी होते हो तो धरती का सुख पा जाओगे... इसलिए उठो, हे
          कौन्तेय (अर्जुन), और निश्चय करके युद्ध करो।
        </p>
      </div>
    ),
  },
  {
    type: "image",
    content: (
      <div className="page-image h-full w-full flex items-center justify-center">
        <img
          src="/imgs/yudh1.jpg"
          alt="Krishna and Arjuna"
          className="w-full h-full object-cover rounded-xl border-4 border-yellow-600"
        />
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="page-content p-[50px]">
        <h2 className="text-xl font-bold text-red-700">
          द्वितीय अध्याय, श्लोक 47
        </h2>
        <p className="text-base mt-8 text-gray-700 italic">
          कर्म को फल के लिए मत करो...
        </p>
        <p className="mt-8 whitespace-pre-line text-base text-gray-900">
          कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते
          सङ्गोऽस्त्वकर्मणि॥
        </p>
        <p className="mt-10 text-lg font-bold text-gray-700">अर्थात:</p>
        <p className="text-base mt-6  text-gray-900">
          कर्म पर ही तुम्हारा अधिकार है, कर्म के फलों में कभी नहीं... इसलिए कर्म
          को फल के लिए मत करो। कर्तव्य-कर्म करने में ही तेरा अधिकार है फलों में
          कभी नहीं। अतः तू कर्मफल का हेतु भी मत बन और तेरी अकर्मण्यता में भी
          आसक्ति न हो।
        </p>
      </div>
    ),
  },
  {
    type: "image",
    content: (
      <div className="page-image h-full w-full flex items-center justify-center">
        <img
          src="/imgs/karam.jpg"
          alt="Krishna and Arjuna"
          className="w-full h-full object-cover rounded-xl border-4 border-yellow-600"
        />
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="page-content p-[50px]">
        <h2 className="text-xl font-bold text-red-700">
          द्वितीय अध्याय, श्लोक 62
        </h2>
        <p className="text-base mt-8 text-gray-700 italic">
          कर्म में लीन रहा जाए...
        </p>
        <p className="mt-8 whitespace-pre-line text-base text-gray-900">
          ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते। सङ्गात्संजायते कामः
          कामात्क्रोधोऽभिजायते॥
        </p>
        <p className="mt-10 text-lg font-bold text-gray-700">अर्थात:</p>
        <p className="text-base mt-6  text-gray-900">
          विषय-वस्तुओं के बारे में सोचते रहने से मनुष्य को उनसे आसक्ति हो जाती
          है। इससे उनमें कामना यानी इच्छा पैदा होती है और कामनाओं में विघ्न आने
          से क्रोध की उत्पत्ति होती है। इसलिए कोशिश करें कि विषयाशक्ति से दूर
          रहते हुए कर्म में लीन रहा जाए।
        </p>
      </div>
    ),
  },
  {
    type: "image",
    content: (
      <div className="page-image h-full w-full flex items-center justify-center">
        <img
          src="/imgs/yudh.jpg"
          alt="Krishna and Arjuna"
          className="w-full h-full object-cover rounded-xl border-4 border-yellow-600"
        />
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="page-content p-[50px]">
        <h2 className="text-xl font-bold text-red-700">
          द्वितीय अध्याय, श्लोक 63
        </h2>
        <p className="text-base mt-8 text-gray-700 italic">
          मनुष्य खुद अपना ही का नाश कर बैठता है...
        </p>
        <p className="mt-8 whitespace-pre-line text-base text-gray-900">
          क्रोधाद्भवति संमोह: संमोहात्स्मृतिविभ्रम:। स्मृतिभ्रंशाद्बुद्धिनाशो
          बुद्धिनाशात्प्रणश्यति॥
        </p>
        <p className="mt-10 text-lg font-bold text-gray-700">अर्थात:</p>
        <p className="text-base mt-6  text-gray-900">
          क्रोध से मनुष्य की मति-बुदि्ध मारी जाती है यानी मूढ़ हो जाती है, कुंद
          हो जाती है। इससे स्मृति भ्रमित हो जाती है। स्मृति-भ्रम हो जाने से
          मनुष्य की बुद्धि नष्ट हो जाती है और बुद्धि का नाश हो जाने पर मनुष्य
          खुद अपना ही का नाश कर बैठता है।
        </p>
      </div>
    ),
  },
  {
    type: "image",
    content: (
      <div className="page-image h-full w-full flex items-center justify-center">
        <img
          src="/imgs/apna_nash.jpg"
          alt="Krishna and Arjuna"
          className="w-full h-full object-cover rounded-xl border-4 border-yellow-600"
        />
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="page-content p-[50px]">
        <h2 className="text-xl font-bold text-red-700">
          तृतीय अध्याय, श्लोक 21
        </h2>
        <p className="text-base mt-8 text-gray-700 italic">
          मानव उसी का अनुसरण करने लग जाते हैं...
        </p>
        <p className="mt-8 whitespace-pre-line text-base text-gray-900">
          यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जन:। स यत्प्रमाणं कुरुते
          लोकस्तदनुवर्तते॥
        </p>
        <p className="mt-10 text-lg font-bold text-gray-700">अर्थात:</p>
        <p className="text-base mt-6  text-gray-900">
          श्रेष्ठ पुरुष जो-जो आचरण यानी जो-जो काम करते हैं, दूसरे मनुष्य (आम
          इंसान) भी वैसा ही आचरण, वैसा ही काम करते हैं। श्रेष्ठ पुरुष जो प्रमाण
          या उदाहरण प्रस्तुत करते हैं, समस्त मानव-समुदाय उसी का अनुसरण करने लग
          जाते हैं।
        </p>
      </div>
    ),
  },
  {
    type: "image",
    content: (
      <div className="page-image h-full w-full flex items-center justify-center">
        <img
          src="/imgs/anusharan.jpg"
          alt="Krishna and Arjuna"
          className="w-full h-full object-cover rounded-xl border-4 border-yellow-600"
        />
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="page-content p-[50px]">
        <h2 className="text-xl font-bold text-red-700">
          तृतीय अध्याय, श्लोक 23
        </h2>
        <p className="text-base mt-8 text-gray-700 italic">
          आत्मा को न शस्त्र काट सकते हैं...
        </p>
        <p className="mt-8 whitespace-pre-line text-base text-gray-900">
          नैनं छिद्रन्ति शस्त्राणि नैनं दहति पावक:। न चैनं क्लेदयन्त्यापो न
          शोषयति मारुत॥
        </p>
        <p className="mt-10 text-lg font-bold text-gray-700">अर्थात:</p>
        <p className="text-base mt-6  text-gray-900">
          आत्मा को न शस्त्र काट सकते हैं, न आग उसे जला सकती है। न पानी उसे भिगो
          सकता है, न हवा उसे सुखा सकती है। यहां श्रीकृष्ण ने आत्मा के अजर-अमर और
          शाश्वत होने की बात की है।
        </p>
      </div>
    ),
  },
  {
    type: "image",
    content: (
      <div className="page-image h-full w-full flex items-center justify-center">
        <img
          src="/imgs/aatma.jpg"
          alt="Krishna and Arjuna"
          className="w-full h-full object-cover rounded-xl border-4 border-yellow-600"
        />
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="page-content p-[50px]">
        <h2 className="text-xl font-bold text-red-700">
          चतुर्थ अध्याय, श्लोक 7
        </h2>
        <p className="text-base mt-8 text-gray-700 italic">
          जब-जब अधर्म में वृद्धि होती है....
        </p>
        <p className="mt-8 whitespace-pre-line text-base text-gray-900">
          यदा यदा हि धर्मस्य ग्लानिर्भवति भारत:। अभ्युत्थानमधर्मस्य तदात्मानं
          सृजाम्यहम्॥
        </p>
        <p className="mt-10 text-lg font-bold text-gray-700">अर्थात:</p>
        <p className="text-base mt-6  text-gray-900">
          हे भारत (अर्जुन), जब-जब धर्म की ग्लानि-हानि यानी उसका क्षय होता है और
          अधर्म में वृद्धि होती है, तब-तब मैं श्रीकृष्ण धर्म के अभ्युत्थान के
          लिए स्वयं की रचना करता हूं अर्थात अवतार लेता हूं।
        </p>
      </div>
    ),
  },
  {
    type: "image",
    content: (
      <div className="page-image h-full w-full flex items-center justify-center">
        <img
          src="/imgs/dharam.jpg"
          alt="Krishna and Arjuna"
          className="w-full h-full object-cover rounded-xl border-4 border-yellow-600"
        />
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="page-content p-[50px]">
        <h2 className="text-xl font-bold text-red-700">
          चतुर्थ अध्याय, श्लोक 8
        </h2>
        <p className="text-base mt-8 text-gray-700 italic">
          युगों-युगों से प्रत्येक युग में जन्म लेता आया हूं...
        </p>
        <p className="mt-8 whitespace-pre-line text-base text-gray-900">
          परित्राणाय साधूनाम् विनाशाय च दुष्कृताम्। धर्मसंस्थापनार्थाय सम्भवामि
          युगे-युगे॥
        </p>
        <p className="mt-10 text-lg font-bold text-gray-700">अर्थात:</p>
        <p className="text-base mt-6  text-gray-900">
          सीधे साधे सरल पुरुषों के कल्याण के लिए और दुष्कर्मियों के विनाश के
          लिए...धर्म की स्थापना के लिए मैं (श्रीकृष्ण) युगों-युगों से प्रत्येक
          युग में जन्म लेता आया हूं।
        </p>
      </div>
    ),
  },
  {
    type: "image",
    content: (
      <div className="page-image h-full w-full flex items-center justify-center">
        <img
          src="/imgs/janam.webp"
          alt="Krishna and Arjuna"
          className="w-full h-full object-cover rounded-xl border-4 border-yellow-600"
        />
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="page-content p-[50px]">
        <h2 className="text-xl font-bold text-red-700">
          चतुर्थ अध्याय, श्लोक 39
        </h2>
        <p className="text-base mt-8 text-gray-700 italic">
          अपनी इन्द्रियों पर संयम रखने वाले मनुष्य...
        </p>
        <p className="mt-8 whitespace-pre-line text-base text-gray-900">
          श्रद्धावान्ल्लभते ज्ञानं तत्पर: संयतेन्द्रिय:। ज्ञानं लब्ध्वा परां
          शान्तिमचिरेणाधिगच्छति॥
        </p>
        <p className="mt-10 text-lg font-bold text-gray-700">अर्थात:</p>
        <p className="text-base mt-6  text-gray-900">
          श्रद्धा रखने वाले मनुष्य, अपनी इन्द्रियों पर संयम रखने वाले मनुष्य,
          साधन पारायण हो अपनी तत्परता से ज्ञान प्राप्त करते हैं, फिर ज्ञान मिल
          जाने पर जल्द ही परम-शान्ति को प्राप्त होते हैं।
        </p>
      </div>
    ),
  },
  {
    type: "image",
    content: (
      <div className="page-image h-full w-full flex items-center justify-center">
        <img
          src="/imgs/sant.jpg"
          alt="Krishna and Arjuna"
          className="w-full h-full object-cover rounded-xl border-4 border-yellow-600"
        />
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="page-content p-[50px]">
        <h2 className="text-xl font-bold text-red-700">
          अठारहवां अध्याय, श्लोक 66
        </h2>
        <p className="text-base mt-8 text-gray-700 italic">
          सभी धर्मों को त्याग कर...
        </p>
        <p className="mt-8 whitespace-pre-line text-base text-gray-900">
          सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज। अहं त्वां सर्वपापेभ्यो
          मोक्षयिष्यामि मा शुच:॥
        </p>
        <p className="mt-10 text-lg font-bold text-gray-700">अर्थात:</p>
        <p className="text-base mt-6  text-gray-900">
          (हे अर्जुन) सभी धर्मों को त्याग कर अर्थात हर आश्रय को त्याग कर केवल
          मेरी शरण में आओ, मैं (श्रीकृष्ण) तुम्हें सभी पापों से मुक्ति दिला
          दूंगा, इसलिए शोक मत करो।
        </p>
      </div>
    ),
  },
  {
    type: "image",
    content: (
      <div className="page-image h-full w-full flex items-center justify-center">
        <img
          src="/imgs/mukt.jpg"
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
