import React from "react";
import { useNavigate } from "react-router-dom";


const FlowerCorners = () => (
  <>
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
  </>
);

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap justify-center gap-6 w-full px-4 mt-[70px]">

      <div className="flex flex-col items-center w-full sm:w-[300px] lg:w-[300px]">
        <div className="bg-gray-800 rounded-lg shadow-lg w-full h-[450px]">
          <div className="relative bg-[#fdf6e3] text-black rounded-xl p-6 shadow-lg w-full h-full">
            <FlowerCorners />
            <h3 className="text-center text-xl font-bold font-serif mb-2">-: सत्युग :-</h3>
            <p className="text-center text-lg font-serif">
              "सत्ययुगे सत्यं धर्मे च वर्तमाने सर्वे  जनाः पापं न कुर्वन्ति। अस्मिन युगे ब्रह्मा सृष्टिं करोति, इति देवाः शान्तिम् अन्विच्छन्ति। सत्यं, तपः, शौचं, दानं च सम्पन्नं यत्र धर्मो निवसति, तत्र जगत् सर्वं सुखमयम् अस्ति। भगवान् विष्णुः स्वकं रूपं धारयित्वा समस्तं संसारं शुद्धिम् अभिवर्धयन्ति। अस्मिन युगे धर्मराजो युधिष्ठिरः सर्वे धर्मेण अतीव सद्धर्मवृत्तिम् आचरन्। राक्षसा राक्षसशक्ति यत्र नास्ति, एषा सत्ययुगस्य विशेषता अस्ति।"
            </p>
          </div>
        </div>
        <button
          onClick={() => navigate("/satyayuga")}
          className="mt-4 px-6 py-2 bg-yellow-500 text-black font-bold rounded-lg shadow-md hover:bg-yellow-600 transition duration-200"
        >
          Enter
        </button>
      </div>

      <div className="flex flex-col items-center w-full sm:w-[300px] lg:w-[300px]">
        <div className="bg-gray-800 rounded-lg shadow-lg w-full h-[450px]">
          <div className="relative bg-[#fdf6e3] text-black rounded-xl p-6 shadow-lg w-full h-full">
            <FlowerCorners />
            <h3 className="text-center text-xl font-bold font-serif mb-2">-: त्रेतायुग :-</h3>
            <p className="text-center text-lg font-serif">
              "त्रेतायुगे धर्मेण सत्यं च रक्ष्यते। अस्मिन युगे रघुकुलनायकः श्रीरामो भगवान् अवतीर्णः। रामस्य जीवनं धर्मनिष्ठं, सत्यप्रियं, एवं आदर्शराजा रूपेण प्रसिद्धम्। महर्षि विश्वामित्रस्य निर्देशनं, महर्षि वाल्मीकि ग्रन्थनं च त्रेतायुगे प्रकटितानि। राक्षसदर्पविनाशं रामेण समापितम्। यज्ञे तपस्वि धर्मवर्धनाय युगं प्रतिष्ठितं। त्रेतायुगे धर्मेण राजा, तपस्वि, यज्ञकर्ता च प्रमुखाः। यज्ञदृष्ट्या धर्मसंसारस्य रक्षणं सर्वदा सम्पन्नम्।"
            </p>
          </div>
        </div>
        <button
          onClick={() => navigate("/tretayuga")}
          className="mt-4 px-6 py-2 bg-yellow-500 text-black font-bold rounded-lg shadow-md hover:bg-yellow-600 transition duration-200"
        >
          Enter
        </button>
      </div>

      <div className="flex flex-col items-center w-full sm:w-[300px] lg:w-[300px]">
        <div className="bg-gray-800 rounded-lg shadow-lg w-full h-[450px]">
          <div className="relative bg-[#fdf6e3] text-black rounded-xl p-6 shadow-lg w-full h-full">
            <FlowerCorners />
            <h3 className="text-center text-xl font-bold font-serif mb-2">-: द्वापरयुग :-</h3>
            <p className="text-center text-lg font-serif">
              "द्वापरयुगे धर्मेण भ्रमितं च असत्यं सत्तामात्रं विकृतं च। यत्र कृष्णो भगवान् अवतीर्णः। द्वापरयुगे धर्मेण यत्र कुरुक्षेत्रे महायुद्धं समापितं। कृष्णेण अर्जुनस्य प्रेरितं धर्मयुद्धे विजयः प्राप्तः। महाभारते महर्षि वेदव्यासस्य लेखनं च द्वापरयुगे जातम्। राक्षसदृष्ट्या इन्द्रधनुष्प्रयुक्तं महास्त्राणि च प्राप्तानि। द्वापरयुगे कृष्णेण धर्मस्य पुनर्निर्माणं कृतम्।"
            </p>
          </div>
        </div>
        <button
          onClick={() => navigate("/dvaparayuga")}
          className="mt-4 px-6 py-2 bg-yellow-500 text-black font-bold rounded-lg shadow-md hover:bg-yellow-600 transition duration-200"
        >
          Enter
        </button>
      </div>

      <div className="flex flex-col items-center w-full sm:w-[300px] lg:w-[300px]">
        <div className="bg-gray-800 rounded-lg shadow-lg w-full h-[450px]">
          <div className="relative bg-[#fdf6e3] text-black rounded-xl p-6 shadow-lg w-full h-full">
            <FlowerCorners />
            <h3 className="text-center text-xl font-bold font-serif mb-2">-: कलियुग :-</h3>
            <p className="text-center text-lg font-serif">
              "कलियुगे धर्मेण लोपः, असत्यं प्रबलं, पापयुगं च। यत्र मानवाः स्वार्थे त्यक्तं सत्यं, धर्मं च लभन्ते। भगवान् श्री कृष्णेण कलियुगं सर्वथा विकृतं अभवत्। अस्मिन युगे दुष्कृत्येण कार्याणि प्रचुराणि, भाग्यं च सीमितम्। पापमयः युगः, यत्र धर्मेण अदृष्ट्या अस्मिन युगे जीवितं जानीत। महाभारतं केलकेषु सम्पूर्णे युगे अन्वयितम्।"
            </p>
          </div>
        </div>
        <button
          onClick={() => navigate("/kaliyuga")}
          className="mt-4 px-6 py-2 bg-yellow-500 text-black font-bold rounded-lg shadow-md hover:bg-yellow-600 transition duration-200"
        >
          Enter
        </button>
      </div>

      <img
        src="/imgs/FourPillers.jpg"
        alt="Krishna and Arjuna"
        className="w-full h-full object-cover border-2 border-yellow-600 rounded-xl"
      />
    </div>
  );
};

export default HomePage;
