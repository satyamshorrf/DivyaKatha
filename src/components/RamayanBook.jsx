import React, { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  VolumeX,
  Volume2,
  VolumeOff,
} from "lucide-react";

const FlowerCorners = ({ children }) => (
  <div className="relative w-full h-full">
    <div className="absolute top-0 left-0 w-10 h-10">
      <img
        src="/imgs/l_t_f.png"
        alt="flower corner"
        className="w-full h-full object-contain"
      />
    </div>
    <div className="absolute top-0 right-0 w-10 h-10">
      <img
        src="/imgs/r_t_f.png"
        alt="flower corner"
        className="w-full h-full object-contain"
      />
    </div>
    <div className="absolute bottom-0 left-0 w-10 h-10">
      <img
        src="/imgs/l_b_f.png"
        alt="flower corner"
        className="w-full h-full object-contain"
      />
    </div>
    <div className="absolute bottom-0 right-0 w-10 h-10">
      <img
        src="/imgs/r_b_f.png"
        alt="flower corner"
        className="w-full h-full object-contain"
      />
    </div>
    {children}
  </div>
);

const pages = [
  {
    type: "cover",
    content: (
      <div className="page-cover w-full h-full ">
        <img
          src="/imgs/ramayan.webp"
          alt="Cover"
          className="  w-full h-full rounded  "
        />
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="page-content h-full p-6 text-center ">
        <h3 className="text-sm font-semibold text-neutral-800 mt-4 mb-2 ">
          सत्यं शिवं सुन्दरम्
        </h3>
        <h3 className="text-base font-bold mt-4 text-black mb-4">
          ॥ श्रीराम ॥
        </h3>

        <h3 className="text-sm font-semibold text-neutral-800 mb-6 ">
          श्रीमद्‌गोस्वामी तुलसीदासजीविरचित
        </h3>

        <h1 className="text-5xl font-bold text-black mb-4">श्रीरामचरितमानस </h1>

        <h3 className=" font-medium text-neutral-700 mb-2 ">
          श्रीमद्वाल्मीकीय रामायण, श्रीशिवमहापुराण- भाषा, श्रीयोगवासिष्ठ - भाषा
          श्रीमद्भागवत का अनुवादरूप सुखसागर तथा महाभारत आदि ग्रन्थों के अनुवादक
          एवं अनेक पुस्तकों के मूल रचयिता
        </h3>

        <h3 className="text-sm font-medium text-neutral-700 mb-2"></h3>

        <h3 className="text-sm font-bold text-black mb-2"></h3>

        <div className="justify-center h-20 w-20 mx-auto mt-8 mb-2">
          <img src="/imgs/s_w_t.png" alt="flower" />
        </div>
      </div>
    ),
  },
  {
    type: "content",
    content: (
      <div className="page-content h-full p-20 text-center">
        <h3 className="text-4xl font-bold text-black mb-4">समर्पण</h3>
        <h3 className="text-lg font-semibold text-neutral-800 mb-3">
          यह रामायण
        </h3>
        <h3 className="text-sm mb-2 font-medium text-neutral-700">
          श्रद्धेय श्रीरामचन्द्र जी के चरणों में, जिनकी मर्यादा, त्याग और
          धर्मपरायणता से यह सृष्टि आज भी प्रेरणा लेती है।
        </h3>
        <h3 className="text-sm font-medium text-neutral-700 mb-3">साथ ही,</h3>
        <h3 className=" font-bold text-black ">
          उन सभी गुरुओं, माता-पिता, और मेरे मार्गदर्शकों को समर्पित जिनके
          आशीर्वाद से यह कार्य संभव हुआ।
        </h3>

        <div className="justify-center h-20 w-20 mx-auto mt-8 mb-2">
          <img src="/imgs/g_f_f.png" alt="flower" />
        </div>
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="page-content p-[4rem]">
        <h2 className="text-xl font-bold text-red-700">रामायण चौपाई १</h2>
        <pre>
          <p className="mt-6 whitespace-pre-line text-base text-gray-900">
            बिनु सत्संग विवेक न होई। राम कृपा बिनु सुलभ न सोई॥ सठ सुधरहिं
            सत्संगति पाई। पारस परस कुघात सुहाई॥
          </p>
        </pre>
        <p className="mt-10 text-lg font-bold text-gray-700">अर्थात:</p>
        <p className="text-base mt-6  text-gray-900">
          सत्संग के बिना विवेक नहीं होता और राम जी की कृपा के बिना वह सत्संग
          नहीं मिलता, सत्संगति आनंद और कल्याण की जड़ है। दुष्ट भी सत्संगति पाकर
          सुधर जाते हैं जैसे पारस के स्पर्श से लोहा सुंदर सोना बन जाता है।
        </p>
      </div>
    ),
  },
  {
    type: "image",
    content: (
      <div className="page-image h-full w-full flex items-center justify-center">
        <img
          src="/imgs/ram_1.jpg"
          alt="Krishna and Arjuna"
          className="w-full h-full object-cover rounded-xl border-4 border-yellow-600"
        />
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="page-content p-[4rem]">
        <h2 className="text-xl font-bold text-red-700">रामायण चौपाई २</h2>

        <pre>
          <p className="mt-6 whitespace-pre-line text-base text-gray-900">
            जा पर कृपा राम की होई। ता पर कृपा करहिं सब कोई॥ जिनके कपट, दम्भ नहिं
            माया। तिनके ह्रदय बसहु रघुराया॥
          </p>
        </pre>
        <p className="mt-10 text-lg font-bold text-gray-700">अर्थात:</p>
        <p className="text-base mt-5  text-gray-900">
          जिन पर राम की कृपा होती है, उन्हें कोई सांसारिक दुःख छू तक नहीं सकता।
          परमात्मा जिस पर कृपा करते है उस पर तो सभी की कृपा अपने आप होने लगती है
          । और जिनके अंदर कपट, दम्भ (पाखंड) और माया नहीं होती, उन्हीं के हृदय
          में रघुपति बसते हैं अर्थात उन्हीं पर प्रभु की कृपा होती है।
        </p>
      </div>
    ),
  },
  {
    type: "image",
    content: (
      <div className="page-image h-full w-full flex items-center justify-center">
        <img
          src="/imgs/ram_2.jpg"
          alt="Krishna and Arjuna"
          className="w-full h-full object-cover rounded-xl border-4 border-yellow-600"
        />
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="page-content p-[4rem]">
        <h2 className="text-xl font-bold text-red-700">रामायण चौपाई ३</h2>
        <pre>
          <p className="mt-6 whitespace-pre-line text-base text-gray-900">
            कहेहु तात अस मोर प्रनामा। सब प्रकार प्रभु पूरनकामा॥ दीन दयाल बिरिदु
            संभारी। हरहु नाथ मम संकट भारी॥
          </p>
        </pre>
        <p className="mt-10 text-lg font-bold text-gray-700">अर्थात:</p>
        <p className="text-base mt-6  text-gray-900">
          हे तात ! मेरा प्रणाम और आपसे निवेदन है – हे प्रभु! यद्यपि आप सब प्रकार
          से पूर्ण काम हैं (आपको किसी प्रकार की कामना नहीं है), तथापि
          दीन-दुःखियों पर दया करना आपका विरद (प्रकृति) है, अतः हे नाथ ! आप मेरे
          भारी संकट को हर लीजिए (मेरे सारे कष्टों को दूर कीजिए)॥
        </p>
      </div>
    ),
  },
  {
    type: "image",
    content: (
      <div className="page-image h-full w-full flex items-center justify-center">
        <img
          src="/imgs/ram_3.jpg"
          alt="Krishna and Arjuna"
          className="w-full h-full object-cover rounded-xl border-4 border-yellow-600"
        />
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="page-content p-[4rem]">
        <h2 className="text-xl font-bold text-red-700">रामायण चौपाई ४</h2>
        <pre>
          <p className="mt-8 whitespace-pre-line text-base text-gray-900">
            हरि अनंत हरि कथा अनंता। कहहिं सुनहिं बहुबिधि सब संता॥ रामचंद्र के
            चरित सुहाए। कलप कोटि लगि जाहिं न गाए॥
          </p>
        </pre>
        <p className="mt-10 text-lg font-bold text-gray-700">अर्थात:</p>
        <p className="text-base mt-6  text-gray-900">
          हरि अनंत हैं (उनका कोई पार नहीं पा सकता) और उनकी कथा भी अनंत है। सब
          संत लोग उसे बहुत प्रकार से कहते-सुनते हैं। रामचंद्र के सुंदर चरित्र
          करोड़ों कल्पों में भी गाए नहीं जा सकते।
        </p>
      </div>
    ),
  },
  {
    type: "image",
    content: (
      <div className="page-image h-full w-full flex items-center justify-center">
        <img
          src="/imgs/ram_4.jpg"
          alt="Krishna and Arjuna"
          className="w-full h-full object-cover rounded-xl border-4 border-yellow-600"
        />
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="page-content p-[4rem]">
        <h2 className="text-xl font-bold text-red-700">रामायण चौपाई ५</h2>
        <pre>
          <p className="mt-8 whitespace-pre-line text-base text-gray-900">
            जासु नाम जपि सुनहु भवानी। भव बंधन काटहिं नर ग्यानी॥ तासु दूत कि बंध
            तरु आवा। प्रभु कारज लगि कपिहिं बँधावा॥
          </p>
        </pre>
        <p className="mt-10 text-lg font-bold text-gray-700">अर्थात:</p>
        <p className="text-base mt-6  text-gray-900">
          (शिवजी कहते हैं) हे भवानी सुनो – जिनका नाम जपकर ज्ञानी मनुष्य संसार
          रूपी जन्म-मरण के बंधन को काट डालते हैं, क्या उनका दूत किसी बंधन में
          बंध सकता है? लेकिन प्रभु के कार्य के लिए हनुमान जी ने स्वयं को शत्रु
          के हाथ से बंधवा लिया।
        </p>
      </div>
    ),
  },
  {
    type: "image",
    content: (
      <div className="page-image h-full w-full flex items-center justify-center">
        <img
          src="/imgs/ram_5.webp"
          alt="Krishna and Arjuna"
          className="w-full h-full object-cover rounded-xl border-4 border-yellow-600"
        />
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="page-content p-[4rem]">
        <h2 className="text-xl font-bold text-red-700">रामायण चौपाई ६</h2>
        <pre>
          <p className="mt-8 whitespace-pre-line text-base text-gray-900">
            एहि महँ रघुपति नाम उदारा। अति पावन पुरान श्रुति सारा॥ मंगल भवन अमंगल
            हारी। उमा सहित जेहि जपत पुरारी॥
          </p>
        </pre>
        <p className="mt-10 text-lg font-bold text-gray-700">अर्थात:</p>
        <p className="text-base mt-6  text-gray-900">
          रामचरितमानस में श्री रघुनाथजी का उदार नाम है, जो अत्यन्त पवित्र है,
          वेद-पुराणों का सार है, मंगल (कल्याण) करने वाला और अमंगल को हरने वाला
          है, जिसे पार्वती जी सहित स्वयं भगवान शिव सदा जपा करते हैं।
        </p>
      </div>
    ),
  },
  {
    type: "image",
    content: (
      <div className="page-image h-full w-full flex items-center justify-center">
        <img
          src="/imgs/ram_6.jpg"
          alt="Krishna and Arjuna"
          className="w-full h-full object-cover rounded-xl border-4 border-yellow-600"
        />
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="page-content p-[4rem]">
        <h2 className="text-xl font-bold text-red-700">रामायण चौपाई ७</h2>
        <pre>
          <p className="mt-8 whitespace-pre-line text-base text-gray-900">
            होइहि सोइ जो राम रचि राखा। को करि तर्क बढ़ावै साखा॥ अस कहि लगे जपन
            हरिनामा। गईं सती जहँ प्रभु सुखधामा॥
          </p>
        </pre>
        <p className="mt-10 text-lg font-bold text-gray-700">अर्थात:</p>
        <p className="text-base mt-6  text-gray-900">
          जो कुछ राम ने रच रखा है, वही होगा। तर्क करके कौन शाखा (विस्तार)
          बढ़ावे। अर्थात इस विषय में तर्क करने से कोई लाभ नहीं। (मन में) ऐसा
          कहकर भगवान शिव हरि का नाम जपने लगे और सती वहाँ गईं जहाँ सुख के धाम
          प्रभु राम थे।
        </p>
      </div>
    ),
  },
  {
    type: "image",
    content: (
      <div className="page-image h-full w-full flex items-center justify-center">
        <img
          src="/imgs/ram-7.webp"
          alt="Krishna and Arjuna"
          className="w-full h-full object-cover rounded-xl border-4 border-yellow-600"
        />
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="page-content p-[4rem]">
        <h2 className="text-xl font-bold text-red-700">रामायण चौपाई ८</h2>
        <pre>
          <p className="mt-8 whitespace-pre-line text-base text-gray-900">
            करमनास जल सुरसरि परई, तेहि काे कहहु सीस नहिं धरई। उलटा नाम जपत जग
            जाना, बालमीकि भये ब्रह्म समाना।।
          </p>
        </pre>
        <p className="mt-10 text-lg font-bold text-gray-700">अर्थात:</p>
        <p className="text-base mt-6  text-gray-900">
          कर्मनास का जल (अशुद्ध से अशुद्ध जल भी) यदि गंगा में पड़ जाए तो कहो उसे
          कौन नहीं सिर पर रखता है? अर्थात अशुद्ध जल भी गंगा के समान पवित्र हो
          जाता है। सारे संसार को विदित है की उल्टा नाम का जाप करके वाल्मीकि जी
          ब्रह्म के समान हो गए।
        </p>
      </div>
    ),
  },
  {
    type: "image",
    content: (
      <div className="page-image h-full w-full flex items-center justify-center">
        <img
          src="/imgs/ram_8.jpg"
          alt="Krishna and Arjuna"
          className="w-full h-full object-cover rounded-xl border-4 border-yellow-600"
        />
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="page-content p-[4rem]">
        <h2 className="text-xl font-bold text-red-700">रामायण चौपाई ९</h2>
        <pre>
          <p className="mt-8 whitespace-pre-line text-base text-gray-900">
            भक्ति हीन गुण सब सुख कैसे, लवण बिना बहु व्यंजन जैसे। भक्ति हीन सुख
            कवने काजा, अस बिचारि बोलेऊं खगराजा॥
          </p>
        </pre>
        <p className="mt-10 text-lg font-bold text-gray-700">अर्थात:</p>
        <p className="text-base mt-6  text-gray-900">
          भक्ति के बिना गुण और सब सुख ऐसे फीके हैं, जैसे नमक के बिना विभिन्न
          प्रकार के व्यंजन। भजन विहीन सुख किस काम का। यह विचार कर पक्षीराज
          कागभुशुण्डि जी बोले- (यदि आप मुझ पर प्रसन्न हो तो हे शरणागतों के
          हितकारी, कृपा के सागर और सुख के धाम कृपा करके मुझे अपनी भक्ति प्रदान
          कीजिए।)
        </p>
      </div>
    ),
  },
  {
    type: "image",
    content: (
      <div className="page-image h-full w-full flex items-center justify-center">
        <img
          src="/imgs/ram_9.jpg"
          alt="Krishna and Arjuna"
          className="w-full h-full object-cover rounded-xl border-4 border-yellow-600"
        />
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="page-content p-[4rem]">
        <h2 className="text-xl font-bold text-red-700">रामायण चौपाई १०</h2>
        <pre>
          <p className="mt-8 whitespace-pre-line text-base text-gray-900">
            अनुचित उचित काज कछु होई, समुझि करिय भल कह सब कोई। सहसा करि पाछे
            पछिताहीं, कहहिं बेद बुध ते बुध नाहीं।।
          </p>
        </pre>
        <p className="mt-10 text-lg font-bold text-gray-700">अर्थात:</p>
        <p className="text-base mt-6  text-gray-900">
          किसी भी कार्य का परिणाम उचित होगा या अनुचित, यह जानकर करना चाहिए, उसी
          को सभी लोग भला कहते हैं। जो बिना विचारे काम करते हैं वे बाद में पछताते
          हैं, उनको वेद और विद्वान कोई भी बुद्धिमान नहीं कहता।
        </p>
      </div>
    ),
  },
  {
    type: "image",
    content: (
      <div className="page-image h-full w-full flex items-center justify-center">
        <img
          src="/imgs/ram_10.jpg"
          alt="Krishna and Arjuna"
          className="w-full h-full object-cover rounded-xl border-4 border-yellow-600"
        />
      </div>
    ),
  },

  {
    type: "text",
    content: (
      <div className="page-content p-[22px] bg-white text-center">
        <h2 className="text-3xl font-bold text-red-700 mt-3">
          श्रीरामचरितमानस
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 italic text-justify mt-4">
          श्रीराम का जीवन केवल एक कथा नहीं, धर्म, मर्यादा और प्रेम की अमर गाथा
          है। यह रामायण हमें सिखाती है - कैसे एक राजा अपने कर्तव्यों के लिए अपना
          सर्वस्व त्याग सकता है। यह कथा हमें बताती है कि सत्य की राह कठिन ज़रूर
          होती है, पर अंततः विजय उसी की होती है। जो राम को हृदय से स्मरण करता
          है, उसके जीवन में भी अयोध्या बसती है।
        </p>
          <p className="text-center mt-2 text-2xl font-bold text-red-700 mb-2">🌸 जय श्रीराम 🌸</p>
        <div className="h-20 w-20 mx-auto  mb-9">
          <img src="/imgs/o_o.png" alt="flower" />
        </div>
      </div>
    ),
  },
];


const RamayanBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const book = useRef();
  const audioRef = useRef();

  const backgrounds = [
    "bg-gradient-to-br from-yellow-100 to-red-200",
    "bg-gradient-to-br from-blue-100 to-indigo-200",
    "bg-gradient-to-br from-green-100 to-emerald-200",
    "bg-gradient-to-br from-pink-100 to-rose-200",
    "bg-gradient-to-br from-purple-100 to-fuchsia-200",
    "bg-gradient-to-br from-orange-100 to-amber-200",
    "bg-gradient-to-br from-teal-100 to-lime-200",
    "bg-gradient-to-br from-cyan-100 to-sky-200",
    "bg-gradient-to-br from-slate-100 to-zinc-200",
    "bg-gradient-to-br from-neutral-100 to-stone-200",
  ];

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);

    setShowPrevButton(pageIndex > 0);
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current
          .play()
          .catch((e) => console.error("Audio play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
 
    if (audioRef.current) {
      audioRef.current.src = "/audio/Ramayan2WhatsApp Audio 2025-04-25 at 04.38.57_abe4fa7e.mp3";
      audioRef.current.preload = "auto";
    }
  }, []);

  return (
    <div
      className={`min-h-screen ${
        backgrounds[currentPage % backgrounds.length]
      } flex items-center justify-center relative`}
    >
   
      {showPrevButton && (
        <button
          className="absolute left-4 md:left-10 lg:left-20 xl:left-[285px] bottom-4 md:bottom-auto mb-[90px] md:mt-0 border-[3px] border-gray-400 rounded-full bg-white backdrop-blur-lg p-4 shadow-lg z-10"
          onClick={() => book.current.pageFlip().flipPrev()}
        >
          <ChevronLeft size={36} color="gray" />
        </button>
      )}

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
            className="page bg-white border-4 border-yellow-600 rounded-xl shadow-lg"
          >
            <FlowerCorners>{page.content}</FlowerCorners>
          </div>
        ))}
      </HTMLFlipBook>

  
      {currentPage < pages.length - 1 && (
        <button
          className="absolute right-4 md:right-10 lg:right-20 xl:right-[285px] bottom-4 md:bottom-auto mb-[90px] md:mt-0 border-[3px] border-gray-400 rounded-full bg-white backdrop-blur-lg p-4 shadow-lg z-10"
          onClick={() => book.current.pageFlip().flipNext()}
        >
          <ChevronRight size={36} color="gray" />
        </button>
      )}

      <button
        className="absolute top-4 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0 border-2 border-transparent rounded-full bg-red-500 backdrop-blur-lg p-3 shadow-lg z-10 md:mb-0 mb-[90px]"
        onClick={toggleAudio}
      >
        {isPlaying ? (
          <Volume2 size={24} color="white" />
        ) : (
          <VolumeOff size={24} color="white" />
        )}
      </button>

      <audio ref={audioRef} loop />
    </div>
  );
};

export default RamayanBook;
