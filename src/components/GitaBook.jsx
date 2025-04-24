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
      <div className="page-content h-full p-6 text-center ">
        <h3 className="text-xs text-black mb-2">
          ।। श्रीश्रीगुरु-गौराङ्गौ जयतः ।।
        </h3>

        <h3 className="text-xs font-semibold text-neutral-800 mb-2 ">
          श्रीमत्कृष्णद्वैपायन-वेदव्यास द्वारा रचित
        </h3>

        <h3 className="text-4xl font-bold text-black mb-3">श्रीमद्भगवद्गीता</h3>

        <h3 className="text-sm font-medium text-neutral-700 mb-2 ">
          श्रीगौड़ीयवैष्णवाचार्य-मुकुटमणि श्रीमद्विश्वनाथ चक्रवर्ती ठाकुर विरचित
          सारार्थवर्षिणी टीकासहित
        </h3>

        <h3 className="text-sm font-medium text-neutral-700 mb-2">
          श्रीगौड़ीय वेदान्त समिति एवं तदन्तर्गत भारतव्यापी श्रीगौड़ीय मठोंके
          प्रतिष्ठाता, श्रीकृष्णचैतन्याम्नाय दशमाधस्तनवर श्रीगौड़ीयाचार्यकेशरी
          नित्यलीलाप्रविष्ट ॐ विष्णुपाद अष्टोत्तरशतश्री
        </h3>

        <h3 className="text-sm font-bold text-black mb-2">
          श्रीमद्भक्तिप्रज्ञान केशव गोस्वामी महाराजजीके अनुगृहीत
        </h3>

        <h3 className="text-sm font-bold text-black mb-2 ">त्रिदण्डिस्वामी</h3>

        <h3 className="text-sm font-bold text-black mb-2">
          श्रीश्रीमद्भक्तिवेदान्त नारायण गोस्वामी महाराज
        </h3>

        <h3 className="text-sm font-medium text-neutral-700 mb-3 ">
          द्वारा सम्पादित एवं तत्कृत अन्वय, अनुवाद, सारार्थवर्षिणी-भावानुवाद तथा
          सारार्थवर्षिणी-प्रकाशिका-वृत्तिसहित
        </h3>
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
        <h3 className="text-lg font-semibold text-neutral-800 mb-2">
          श्रीगुरुपादपद्म
        </h3>
        <h3 className="text-sm font-medium text-neutral-700">
          श्रीकृष्णचैतन्याम्नाय दशमाधस्तनवर श्रीगौड़ीयवेदान्ताचार्यकेशरी
        </h3>
        <h3 className="text-sm font-medium text-neutral-700 mb-2">
          ॐ विष्णुपाद १०८श्री
        </h3>
        <h3 className="text-xs font-bold text-black ">
          श्रीमद्भक्तिप्रज्ञां केशव गोस्वामी महाराजजीके
        </h3>
        <h3 className="text-xs font-bold text-black mb-1">कमलपुष्पेषु</h3>
        <h3 className="text-sm font-medium text-neutral-700">
          [आविर्भाव शतवार्षिकीके उपलक्ष्यमें]
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
      <div className="page-content p-[50px]">
        <h2 className="text-xl font-bold text-red-700">
          द्वितीय अध्याय, श्लोक ३७
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
          द्वितीय अध्याय, श्लोक ४७
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
          द्वितीय अध्याय, श्लोक ६२
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
          द्वितीय अध्याय, श्लोक ६३
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
          तृतीय अध्याय, श्लोक २१
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
          तृतीय अध्याय, श्लोक २३
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
          चतुर्थ अध्याय, श्लोक ७
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
          चतुर्थ अध्याय, श्लोक ८
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
          चतुर्थ अध्याय, श्लोक ३९
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
          अठारहवां अध्याय, श्लोक ६६
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
      <div className="page-content p-[22px] bg-white text-center">
        <h2 className="text-4xl font-bold text-red-700 mt-3">
          श्रीमद्भगवद्गीता
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 italic text-justify mt-4">
          धर्मक्षेत्रे कुरुक्षेत्रे — युद्धभूमौ अर्जुनस्य विषादे श्रीकृष्णेन
          प्रदत्तं दिव्योपदेशरूपं अमृतवाक्यम्। कर्तव्यं, धर्मः, भक्ति, ज्ञानं,
          मोक्षः — एतेषां विषयेषु श्रीकृष्णस्य उपदेशः आत्मविकासाय मार्गदर्शकः।
          जीवनस्य गूढप्रश्नानां उत्तरार्थं, आत्मज्ञानस्य प्राप्त्यर्थं,
          भगवद्गीता एकं अमूल्यं ग्रन्थम्। ​यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।
          अभ्युत्थानमधर्मस्य तदाऽऽत्मानं सृजाम्यहम्॥ श्रीमद्भगवद्गीता —
          आत्मज्ञानस्य, धर्मस्य च अमूल्यं कोशः।
        </p>
        <div className="h-20 w-20 mx-auto  mb-9">
          <img src="/imgs/o_o.png" alt="flower" />
        </div>
      </div>
    ),
  },
];

const GitaBook = () => {
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
      audioRef.current.src = "/audio/GitaWhatsApp Audio 2025-04-25 at 04.08.23_b6b0bb20.mp3";
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

export default GitaBook;
