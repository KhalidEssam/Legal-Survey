import React, { useState } from 'react';
import { ChevronRight, Globe, Scale, CheckCircle, Languages } from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';

type Question = {
  id: string;
  q: string;
  type: 'select' | 'radio' | 'text';
  section: number;
  options?: string[];
  condition?: string;
  conditionValue?: string;
  placeholder?: string;
};

type LanguageDef = { code: string; name: string; flag: string };

type Translations = Record<string, Record<string, string>>;


export default function Survey() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const languages: LanguageDef[] = [
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'tl', name: 'Tagalog', flag: '🇵🇭' },
    { code: 'ur', name: 'اردو', flag: '🇵🇰' },
    { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
    { code: 'ms', name: 'Melayu', flag: '🇲🇾' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'so', name: 'Soomaali', flag: '🇸🇴' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' }
  ];

  const translations: Record<string, Record<string, string>> = {
    ar: {
      welcome: "استبيان احتياجات المقيمين في السعودية",
      purpose: "الغرض من هذا الاستبيان",
      purposeText: "نود معرفة احتياجاتك كمقيم في المملكة العربية السعودية فيما يتعلق بالحماية القانونية ومدى حاجتك لفهم الأنظمة والتعليمات بشكل أوضح وأسهل. إجاباتك ستساعدنا في فهم التحديات التي تواجهها وكيف يمكن دعمك بشكل أفضل.",
      confidential: "جميع المعلومات سرية وسيتم استخدامها لأغراض البحث فقط",
      selectLanguage: "اختر لغتك المفضلة",
      start: "ابدأ الاستبيان",
      next: "التالي",
      previous: "السابق",
      finish: "إنهاء",
      thankYou: "شكراً لمشاركتك!",
      thankYouMsg: "إجاباتك ستساعدنا في فهم احتياجات المقيمين بشكل أفضل",
      newSurvey: "ابدأ استبيان جديد",
      section: "القسم",
      of: "من",
      selectAnswer: "اختر إجابة..."
    },
    en: {
      welcome: "Survey for Residents in Saudi Arabia",
      purpose: "Purpose of this Survey",
      purposeText: "We would like to understand your needs as a resident in Saudi Arabia regarding legal protection and how much you need clearer and easier understanding of regulations and procedures. Your answers will help us understand the challenges you face and how we can better support you.",
      confidential: "All information is confidential and will be used for research purposes only",
      selectLanguage: "Select your preferred language",
      start: "Start Survey",
      next: "Next",
      previous: "Previous",
      finish: "Finish",
      thankYou: "Thank you for participating!",
      thankYouMsg: "Your answers will help us better understand the needs of residents",
      newSurvey: "Start new survey",
      section: "Section",
      of: "of",
      selectAnswer: "Select answer..."
    },
    tl: {
      welcome: "Survey para sa mga Residente sa Saudi Arabia",
      purpose: "Layunin ng Survey na Ito",
      purposeText: "Nais naming malaman ang iyong mga pangangailangan bilang residente sa Saudi Arabia tungkol sa legal protection at kung gaano mo kailangan ng mas malinaw at mas madaling pag-unawa sa mga regulasyon at proseso. Ang iyong mga sagot ay makakatulong sa amin na maintindihan ang mga hamon na iyong hinaharap.",
      confidential: "Lahat ng impormasyon ay kumpidensyal at gagamitin lamang para sa pananaliksik",
      selectLanguage: "Pumili ng iyong gustong wika",
      start: "Magsimula",
      next: "Susunod",
      previous: "Nakaraan",
      finish: "Tapusin",
      thankYou: "Salamat sa pakikilahok!",
      thankYouMsg: "Ang iyong mga sagot ay makakatulong sa amin na mas maunawaan ang pangangailangan",
      newSurvey: "Magsimula ng bagong survey",
      section: "Bahagi",
      of: "ng",
      selectAnswer: "Pumili ng sagot..."
    },
    ur: {
      welcome: "سعودی عرب میں مقیم افراد کے لیے سروے",
      purpose: "اس سروے کا مقصد",
      purposeText: "ہم سعودی عرب میں مقیم کے طور پر آپ کی ضروریات کو سمجھنا چاہتے ہیں، خاص طور پر قانونی تحفظ اور ضوابط و ہدایات کی واضح اور آسان سمجھ کے حوالے سے۔ آپ کے جوابات ہمیں یہ سمجھنے میں مدد کریں گے کہ آپ کو کن چیلنجز کا سامنا ہے۔",
      confidential: "تمام معلومات خفیہ ہیں اور صرف تحقیق کے مقاصد کے لیے استعمال ہوں گی",
      selectLanguage: "اپنی پسندیدہ زبان منتخب کریں",
      start: "شروع کریں",
      next: "اگلا",
      previous: "پچھلا",
      finish: "ختم",
      thankYou: "شکریہ!",
      thankYouMsg: "آپ کے جوابات مقیمین کی ضروریات کو بہتر سمجھنے میں مدد کریں گے",
      newSurvey: "نیا سروے شروع کریں",
      section: "سیکشن",
      of: "از",
      selectAnswer: "جواب منتخب کریں..."
    },
    bn: {
      welcome: "সৌদি আরবে বসবাসকারীদের জরিপ",
      purpose: "এই জরিপের উদ্দেশ্য",
      purposeText: "আমরা সৌদি আরবে একজন বাসিন্দা হিসাবে আইনি সুরক্ষা এবং নিয়ম-কানুন সহজভাবে বোঝার ক্ষেত্রে আপনার চাহিদা জানতে চাই। আপনার উত্তরগুলি আমাদের আপনার সম্মুখীন চ্যালেঞ্জগুলি বুঝতে সাহায্য করবে।",
      confidential: "সমস্ত তথ্য গোপনীয় এবং শুধুমাত্র গবেষণার উদ্দেশ্যে ব্যবহার করা হবে",
      selectLanguage: "আপনার পছন্দের ভাষা নির্বাচন করুন",
      start: "শুরু করুন",
      next: "পরবর্তী",
      previous: "পূর্ববর্তী",
      finish: "শেষ",
      thankYou: "ধন্যবাদ!",
      thankYouMsg: "আপনার উত্তর বাসিন্দাদের চাহিদা বুঝতে সাহায্য করবে",
      newSurvey: "নতুন জরিপ শুরু করুন",
      section: "বিভাগ",
      of: "এর",
      selectAnswer: "উত্তর নির্বাচন করুন..."
    },
    ms: {
      welcome: "Tinjauan untuk Penduduk di Arab Saudi",
      purpose: "Tujuan Tinjauan Ini",
      purposeText: "Kami ingin memahami keperluan anda sebagai penduduk di Arab Saudi berkaitan perlindungan undang-undang dan sejauh mana anda memerlukan pemahaman yang lebih jelas tentang peraturan dan prosedur. Jawapan anda akan membantu kami memahami cabaran yang anda hadapi.",
      confidential: "Semua maklumat adalah sulit dan akan digunakan untuk tujuan penyelidikan sahaja",
      selectLanguage: "Pilih bahasa pilihan anda",
      start: "Mula",
      next: "Seterusnya",
      previous: "Sebelumnya",
      finish: "Selesai",
      thankYou: "Terima kasih!",
      thankYouMsg: "Jawapan anda akan membantu kami memahami keperluan penduduk",
      newSurvey: "Mulakan tinjauan baharu",
      section: "Bahagian",
      of: "daripada",
      selectAnswer: "Pilih jawapan..."
    },
    zh: {
      welcome: "沙特阿拉伯居民调查",
      purpose: "本调查的目的",
      purposeText: "我们想了解您作为沙特阿拉伯居民在法律保护方面的需求，以及您对更清晰、更容易理解法规和程序的需求程度。您的回答将帮助我们了解您面临的挑战。",
      confidential: "所有信息均为保密，仅用于研究目的",
      selectLanguage: "选择您的首选语言",
      start: "开始",
      next: "下一步",
      previous: "上一步",
      finish: "完成",
      thankYou: "感谢您!",
      thankYouMsg: "您的回答将帮助我们更好地了解居民需求",
      newSurvey: "开始新调查",
      section: "部分",
      of: "的",
      selectAnswer: "选择答案..."
    },
    so: {
      welcome: "Sahanka Dadka Deggan Sacuudi Carabiya",
      purpose: "Ujeeddada Sahanka",
      purposeText: "Waxaan doonayaa inaan fahanno baahiyahaaga sida qof deggan Sacuudi Carabiya ah ee ku saabsan ilaalinta sharciga iyo sida aad u baahan tahay faham cad oo fudud oo ku saabsan xeerarka iyo habdhaqanka. Jawaabahagu waxay naga caawin doonaan inaan fahano caqabadaha aad la kulanto.",
      confidential: "Dhammaan macluumaadku waa sir oo kaliya loogu isticmaali doonaa ujeedooyinka cilmi-baarista",
      selectLanguage: "Dooro luqadda",
      start: "Bilow",
      next: "Xiga",
      previous: "Hore",
      finish: "Dhammaystir",
      thankYou: "Waad ku mahadsan tahay!",
      thankYouMsg: "Jawaabahagu waxay naga caawin doonaan inaan fahano baahiyaha",
      newSurvey: "Bilow sahan cusub",
      section: "Qaybta",
      of: "ee",
      selectAnswer: "Dooro jawaab..."
    },
    hi: {
      welcome: "सऊदी अरब में निवासियों के लिए सर्वेक्षण",
      purpose: "इस सर्वेक्षण का उद्देश्य",
      purposeText: "हम सऊदी अरब में एक निवासी के रूप में कानूनी सुरक्षा और नियमों और प्रक्रियाओं की स्पष्ट समझ के संबंध में आपकी आवश्यकताओं को समझना चाहते हैं। आपके उत्तर हमें उन चुनौतियों को समझने में मदद करेंगे जिनका आप सामना करते हैं।",
      confidential: "सभी जानकारी गोपनीय है और केवल अनुसंधान उद्देश्यों के लिए उपयोग की जाएगी",
      selectLanguage: "अपनी पसंदीदा भाषा चुनें",
      start: "शुरू करें",
      next: "अगला",
      previous: "पिछला",
      finish: "समाप्त",
      thankYou: "धन्यवाद!",
      thankYouMsg: "आपके उत्तर निवासियों की आवश्यकताओं को समझने में मदद करेंगे",
      newSurvey: "नया सर्वेक्षण शुरू करें",
      section: "भाग",
      of: "का",
      selectAnswer: "उत्तर चुनें..."
    }
  };

  const getQuestions = (lang: string): Question[] => {
    const questionSets: Record<string, Question[]> = {
      ar: [
        { id: "surveySource", q: "من أين وصلك هذا الاستبيان؟", type: "select", section: 0, options: ["فيسبوك", "قوقل", "الإيميل", "رسالة من صديق", "تويتر/X", "إنستقرام", "واتساب", "أخرى"] },
        { id: "surveySourceOther", q: "إذا اخترت أخرى، يرجى التوضيح", type: "text", section: 0, condition: "surveySource", conditionValue: "أخرى", placeholder: "اكتب هنا..." },
        { id: "nationality", q: "ما هي جنسيتك؟", type: "select", section: 0, options: ["مصري", "سوداني", "أردني", "سوري", "يمني", "خليجي (سعودي/إماراتي/كويتي/قطري/بحريني/عماني)", "صومالي", "إثيوبي", "إريتري", "أخرى"] },
        { id: "residenceYears", q: "منذ كم سنة تقيم في السعودية؟", type: "select", section: 0, options: ["أقل من سنة", "1-3 سنوات", "3-5 سنوات", "5-10 سنوات", "أكثر من 10 سنوات"] },
        { id: "age", q: "كم عمرك؟", type: "select", section: 0, options: ["18-25 سنة", "26-35 سنة", "36-45 سنة", "46-55 سنة", "أكثر من 55 سنة"] },
        { id: "income", q: "ما هو متوسط دخلك الشهري؟", type: "select", section: 0, options: ["أقل من 2,000 ريال", "2,000-4,000 ريال", "4,000-8,000 ريال", "أكثر من 8,000 ريال"] },
        { id: "legalIssues", q: "هل واجهت مشكلة قانونية في السعودية؟", type: "radio", section: 1, options: ["نعم", "لا"] },
        { id: "mainBarrier", q: "ما أكبر عائق يمنعك من الوصول للخدمات القانونية؟", type: "select", section: 1, options: ["التكلفة العالية", "حاجز اللغة", "عدم معرفة حقوقي", "الخوف من الإجراءات"] },
        { id: "quickDecision", q: "لو وجد حل للاستشارة السريعة بلغتك، هل ستشترك؟", type: "radio", section: 2, options: ["نعم، فوراً", "ربما، أحتاج للتفكير", "لا"] },
        { id: "legalTechServices", q: "هل جربت اي خدمات تقنيه قانونيه في السعودية؟", type: "radio", section: 2, options: ["نعم", "لا"] },
        { id: "legalTechServiceName", q: "اذكر اسمها", type: "text", section: 2, condition: "legalTechServices", conditionValue: "نعم", placeholder: "اكتب اسم الخدمة..." },
        { id: "legalTechConsideration", q: "هل تفكر لو توفرت بسعر معقول؟", type: "radio", section: 2, condition: "legalTechServices", conditionValue: "لا", options: ["نعم", "لا"] },
        { id: "giveawayInterest", q: "🎁 هل ترغب بالسحب على هدية مجانية؟", type: "radio", section: 2, options: ["نعم، أرغب", "لا، لا أرغب"] },
        { id: "email", q: "📧 البريد الإلكتروني (اختياري)", type: "text", section: 2, condition: "giveawayInterest", conditionValue: "نعم، أرغب", placeholder: "example@email.com" },
        { id: "phone", q: "📱 رقم الجوال (اختياري)", type: "text", section: 2, condition: "giveawayInterest", conditionValue: "نعم، أرغب", placeholder: "05xxxxxxxx" },
      ],
      en: [
        { id: "surveySource", q: "How did you find this survey?", type: "select", section: 0, options: ["Facebook", "Google", "Email", "Message from friend", "Twitter/X", "Instagram", "WhatsApp", "Other"] },
        { id: "surveySourceOther", q: "If you selected Other, please specify", type: "text", section: 0, condition: "surveySource", conditionValue: "Other", placeholder: "Type here..." },
        { id: "nationality", q: "What is your nationality? (Please write)", type: "text", section: 0, placeholder: "e.g. American, British, Canadian..." },
        { id: "residenceYears", q: "How long have you lived in Saudi Arabia?", type: "select", section: 0, options: ["Less than 1 year", "1-3 years", "3-5 years", "5-10 years", "More than 10 years"] },
        { id: "age", q: "How old are you?", type: "select", section: 0, options: ["18-25 years", "26-35 years", "36-45 years", "46-55 years", "Over 55 years"] },
        { id: "income", q: "What is your monthly income?", type: "select", section: 0, options: ["Less than 2,000 SAR", "2,000-4,000 SAR", "4,000-8,000 SAR", "More than 8,000 SAR"] },
        { id: "legalIssues", q: "Have you faced legal issues in Saudi Arabia?", type: "radio", section: 1, options: ["Yes", "No"] },
        { id: "mainBarrier", q: "What is the biggest barrier to legal services?", type: "select", section: 1, options: ["High cost", "Language barrier", "Don't know my rights", "Fear of procedures"] },
        { id: "quickDecision", q: "If there was a quick consultation solution in your language, would you subscribe?", type: "radio", section: 2, options: ["Yes, immediately", "Maybe, need to think", "No"] },
        { id: "legalTechServices", q: "Have you tried any legal tech services in Saudi Arabia?", type: "radio", section: 2, options: ["Yes", "No"] },
        { id: "legalTechServiceName", q: "Please mention its name", type: "text", section: 2, condition: "legalTechServices", conditionValue: "Yes", placeholder: "Enter service name..." },
        { id: "legalTechConsideration", q: "Would you consider it if available at a reasonable price?", type: "radio", section: 2, condition: "legalTechServices", conditionValue: "No", options: ["Yes", "No"] },
        { id: "giveawayInterest", q: "🎁 Would you like to enter a prize draw?", type: "radio", section: 2, options: ["Yes, I would", "No, thanks"] },
        { id: "email", q: "📧 Email (optional)", type: "text", section: 2, condition: "giveawayInterest", conditionValue: "Yes, I would", placeholder: "example@email.com" },
        { id: "phone", q: "📱 Mobile number (optional)", type: "text", section: 2, condition: "giveawayInterest", conditionValue: "Yes, I would", placeholder: "05xxxxxxxx" },

      ],
      tl: [
        { id: "surveySource", q: "Paano mo nahanap ang survey na ito?", type: "select", section: 0, options: ["Facebook", "Google", "Email", "Mensahe mula sa kaibigan", "Twitter/X", "Instagram", "WhatsApp", "Iba pa"] },
        { id: "surveySourceOther", q: "Kung pumili ka ng Iba pa, mangyaring tukuyin", type: "text", section: 0, condition: "surveySource", conditionValue: "Iba pa", placeholder: "Isulat dito..." },
        { id: "nationality", q: "Ano ang iyong nasyonalidad?", type: "select", section: 0, options: ["Pilipino/Pilipina", "Iba pa"] },
        { id: "residenceYears", q: "Gaano katagal ka nang nakatira sa Saudi?", type: "select", section: 0, options: ["Wala pang 1 taon", "1-3 taon", "3-5 taon", "5-10 taon", "Higit 10 taon"] },
        { id: "age", q: "Ilang taon ka na?", type: "select", section: 0, options: ["18-25", "26-35", "36-45", "46-55", "Higit 55"] },
        { id: "income", q: "Magkano ang kita mo bawat buwan?", type: "select", section: 0, options: ["Wala pang 2,000", "2,000-4,000", "4,000-8,000", "Higit 8,000"] },
        { id: "legalIssues", q: "Nakaharap ka ba ng legal na problema?", type: "radio", section: 1, options: ["Oo", "Hindi"] },
        { id: "mainBarrier", q: "Ano ang pinakamalaking hadlang?", type: "select", section: 1, options: ["Mataas ang presyo", "Language barrier", "Hindi alam ang rights", "Takot sa proseso"] },
        { id: "quickDecision", q: "Kung may mabilis na solusyon sa iyong wika, mag-subscribe ka ba?", type: "radio", section: 2, options: ["Oo, agad", "Siguro", "Hindi"] },
        { id: "legalTechServices", q: "Nakasubukang gumamit ng legal tech services sa Saudi Arabia?", type: "radio", section: 2, options: ["Oo", "Hindi"] },
        { id: "legalTechServiceName", q: "Pakisabi ang pangalan nito", type: "text", section: 2, condition: "legalTechServices", conditionValue: "Oo", placeholder: "Isulat ang pangalan ng serbisyo..." },
        { id: "legalTechConsideration", q: "Isasaalang-alang mo ba kung mura lang ang presyo?", type: "radio", section: 2, condition: "legalTechServices", conditionValue: "Hindi", options: ["Oo", "Hindi"] },
        { id: "giveawayInterest", q: "🎁 Sumali sa prize draw?", type: "radio", section: 2, options: ["Oo", "Hindi"] },
        { id: "email", q: "📧 Email (optional)", type: "text", section: 2, condition: "giveawayInterest", conditionValue: "Oo", placeholder: "example@email.com" },
        { id: "phone", q: "📱 Mobile (optional)", type: "text", section: 2, condition: "giveawayInterest", conditionValue: "Oo", placeholder: "05xxxxxxxx" },

      ],
      ur: [
        { id: "surveySource", q: "آپ کو یہ سروے کیسے ملا؟", type: "select", section: 0, options: ["فیس بک", "گوگل", "ای میل", "دوست کا پیغام", "ٹویٹر/X", "انسٹاگرام", "واٹس ایپ", "دیگر"] },
        { id: "surveySourceOther", q: "اگر آپ نے دیگر منتخب کیا تو وضاحت کریں", type: "text", section: 0, condition: "surveySource", conditionValue: "دیگر", placeholder: "یہاں لکھیں..." },
        { id: "nationality", q: "آپ کی قومیت کیا ہے؟", type: "select", section: 0, options: ["پاکستانی", "ہندوستانی", "افغانی", "بنگلہ دیشی", "دیگر"] },
        { id: "residenceYears", q: "آپ سعودی عرب میں کتنے سال سے رہ رہے ہیں؟", type: "select", section: 0, options: ["1 سال سے کم", "1-3 سال", "3-5 سال", "5-10 سال", "10 سال سے زیادہ"] },
        { id: "age", q: "آپ کی عمر کتنی ہے؟", type: "select", section: 0, options: ["18-25 سال", "26-35 سال", "36-45 سال", "46-55 سال", "55 سال سے زیادہ"] },
        { id: "income", q: "آپ کی ماہانہ آمدنی کتنی ہے؟", type: "select", section: 0, options: ["2,000 ریال سے کم", "2,000-4,000 ریال", "4,000-8,000 ریال", "8,000 ریال سے زیادہ"] },
        { id: "legalIssues", q: "کیا آپ کو قانونی مسئلہ پیش آیا؟", type: "radio", section: 1, options: ["ہاں", "نہیں"] },
        { id: "mainBarrier", q: "قانونی خدمات کی سب سے بڑی رکاوٹ کیا ہے؟", type: "select", section: 1, options: ["زیادہ قیمت", "زبان کی رکاوٹ", "اپنے حقوق نہیں جانتا", "طریقہ کار کا خوف"] },
        { id: "quickDecision", q: "اگر آپ کی زبان میں فوری مشاورت ہو، کیا آپ سبسکرائب کریں گے؟", type: "radio", section: 2, options: ["ہاں، فوری طور پر", "شاید، سوچنا پڑے گا", "نہیں"] },
        { id: "legalTechServices", q: "کیا آپ نے سعودی عرب میں کوئی قانونی ٹیک خدمات آزمائیں؟", type: "radio", section: 2, options: ["ہاں", "نہیں"] },
        { id: "legalTechServiceName", q: "براہ کرم اس کا نام بتائیں", type: "text", section: 2, condition: "legalTechServices", conditionValue: "ہاں", placeholder: "خدمت کا نام درج کریں..." },
        { id: "legalTechConsideration", q: "کیا آپ مناسب قیمت پر دستیاب ہونے کی صورت میں غور کریں گے؟", type: "radio", section: 2, condition: "legalTechServices", conditionValue: "نہیں", options: ["ہاں", "نہیں"] },
        { id: "giveawayInterest", q: "🎁 کیا آپ انعام کی قرعہ اندازی میں شامل ہونا چاہیں گے؟", type: "radio", section: 2, options: ["ہاں", "نہیں"] },
        { id: "email", q: "📧 ای میل (اختیاری)", type: "text", section: 2, condition: "giveawayInterest", conditionValue: "ہاں", placeholder: "example@email.com" },
        { id: "phone", q: "📱 موبائل نمبر (اختیاری)", type: "text", section: 2, condition: "giveawayInterest", conditionValue: "ہاں", placeholder: "05xxxxxxxx" },

      ],
      bn: [
        { id: "surveySource", q: "আপনি এই সমীক্ষা কিভাবে পেলেন?", type: "select", section: 0, options: ["ফেসবুক", "গুগল", "ইমেইল", "বন্ধুর বার্তা", "টুইটার/X", "ইনস্টাগ্রাম", "হোয়াটসঅ্যাপ", "অন্যান্য"] },
        { id: "surveySourceOther", q: "আপনি যদি অন্যান্য নির্বাচন করেন তবে দয়া করে উল্লেখ করুন", type: "text", section: 0, condition: "surveySource", conditionValue: "অন্যান্য", placeholder: "এখানে লিখুন..." },
        { id: "nationality", q: "আপনার জাতীয়তা কী?", type: "select", section: 0, options: ["বাংলাদেশী", "ভারতীয়", "পাকিস্তানি", "অন্যান্য"] },
        { id: "residenceYears", q: "আপনি কত বছর ধরে সৌদি আরবে বাস করছেন?", type: "select", section: 0, options: ["১ বছরের কম", "১-৩ বছর", "৩-৫ বছর", "৫-১০ বছর", "১০ বছরের বেশি"] },
        { id: "age", q: "আপনার বয়স কত?", type: "select", section: 0, options: ["১৮-২৫ বছর", "২৬-৩৫ বছর", "৩৬-৪৫ বছর", "৪৬-৫৫ বছর", "৫৫ বছরের বেশি"] },
        { id: "income", q: "আপনার মাসিক আয় কত?", type: "select", section: 0, options: ["২,০০০ SAR এর কম", "২,০০০-৪,০০০ SAR", "৪,০০০-৮,০০০ SAR", "৮,০০০ SAR এর বেশি"] },
        { id: "legalIssues", q: "আপনি কি সৌদি আরবে আইনি সমস্যার মুখোমুখি হয়েছেন?", type: "radio", section: 1, options: ["হ্যাঁ", "না"] },
        { id: "mainBarrier", q: "আইনি সেবায় সবচেয়ে বড় বাধা কী?", type: "select", section: 1, options: ["উচ্চ খরচ", "ভাষা বাধা", "আমার অধিকার জানি না", "পদ্ধতির ভয়"] },
        { id: "quickDecision", q: "যদি আপনার ভাষায় দ্রুত পরামর্শের সমাধান থাকে, আপনি কি সাবস্ক্রাইব করবেন?", type: "radio", section: 2, options: ["হ্যাঁ, অবিলম্বে", "হয়তো, ভাবতে হবে", "না"] },
        { id: "legalTechServices", q: "আপনি কি সৌদি আরবে কোনো আইনি প্রযুক্তি সেবা চেষ্টা করেছেন?", type: "radio", section: 2, options: ["হ্যাঁ", "না"] },
        { id: "legalTechServiceName", q: "দয়া করে এর নাম উল্লেখ করুন", type: "text", section: 2, condition: "legalTechServices", conditionValue: "হ্যাঁ", placeholder: "সেবার নাম লিখুন..." },
        { id: "legalTechConsideration", q: "যুক্তিসঙ্গত মূল্যে পাওয়া গেলে আপনি কি এটি বিবেচনা করবেন?", type: "radio", section: 2, condition: "legalTechServices", conditionValue: "না", options: ["হ্যাঁ", "না"] },
        { id: "giveawayInterest", q: "🎁 আপনি কি পুরস্কার ড্রতে প্রবেশ করতে চান?", type: "radio", section: 2, options: ["হ্যাঁ", "না"] },
        { id: "email", q: "📧 ইমেইল (ঐচ্ছিক)", type: "text", section: 2, condition: "giveawayInterest", conditionValue: "হ্যাঁ", placeholder: "example@email.com" },
        { id: "phone", q: "📱 মোবাইল নম্বর (ঐচ্ছিক)", type: "text", section: 2, condition: "giveawayInterest", conditionValue: "হ্যাঁ", placeholder: "05xxxxxxxx" },

      ],
      ms: [
        { id: "surveySource", q: "Bagaimana anda menemui tinjauan ini?", type: "select", section: 0, options: ["Facebook", "Google", "Email", "Mesej daripada rakan", "Twitter/X", "Instagram", "WhatsApp", "Lain-lain"] },
        { id: "surveySourceOther", q: "Jika anda memilih Lain-lain, sila nyatakan", type: "text", section: 0, condition: "surveySource", conditionValue: "Lain-lain", placeholder: "Taip di sini..." },
        { id: "nationality", q: "Apakah kewarganegaraan anda?", type: "select", section: 0, options: ["Malaysia", "Indonesia", "Bangladesh", "Pakistan", "India", "Lain-lain"] },
        { id: "residenceYears", q: "Berapa lama anda tinggal di Arab Saudi?", type: "select", section: 0, options: ["Kurang dari 1 tahun", "1-3 tahun", "3-5 tahun", "5-10 tahun", "Lebih dari 10 tahun"] },
        { id: "age", q: "Berapa umur anda?", type: "select", section: 0, options: ["18-25 tahun", "26-35 tahun", "36-45 tahun", "46-55 tahun", "Lebih 55 tahun"] },
        { id: "income", q: "Berapakah pendapatan bulanan anda?", type: "select", section: 0, options: ["Kurang dari 2,000 SAR", "2,000-4,000 SAR", "4,000-8,000 SAR", "Lebih dari 8,000 SAR"] },
        { id: "legalIssues", q: "Adakah anda menghadapi masalah undang-undang?", type: "radio", section: 1, options: ["Ya", "Tidak"] },
        { id: "mainBarrier", q: "Apakah halangan terbesar untuk perkhidmatan undang-undang?", type: "select", section: 1, options: ["Kos tinggi", "Halangan bahasa", "Tidak tahu hak saya", "Takut prosedur"] },
        { id: "quickDecision", q: "Jika ada penyelesaian perundingan pantas dalam bahasa anda, adakah anda akan melanggan?", type: "radio", section: 2, options: ["Ya, segera", "Mungkin, perlu berfikir", "Tidak"] },
        { id: "legalTechServices", q: "Adakah anda pernah mencuba perkhidmatan teknologi undang-undang di Arab Saudi?", type: "radio", section: 2, options: ["Ya", "Tidak"] },
        { id: "legalTechServiceName", q: "Sila nyatakan namanya", type: "text", section: 2, condition: "legalTechServices", conditionValue: "Ya", placeholder: "Masukkan nama perkhidmatan..." },
        { id: "legalTechConsideration", q: "Adakah anda akan mempertimbangkannya jika tersedia pada harga yang berpatutan?", type: "radio", section: 2, condition: "legalTechServices", conditionValue: "Tidak", options: ["Ya", "Tidak"] },
        { id: "giveawayInterest", q: "🎁 Adakah anda mahu menyertai cabutan hadiah?", type: "radio", section: 2, options: ["Ya", "Tidak"] },
        { id: "email", q: "📧 Email (pilihan)", type: "text", section: 2, condition: "giveawayInterest", conditionValue: "Ya", placeholder: "example@email.com" },
        { id: "phone", q: "📱 Nombor telefon (pilihan)", type: "text", section: 2, condition: "giveawayInterest", conditionValue: "Ya", placeholder: "05xxxxxxxx" },

      ],
      zh: [
        { id: "surveySource", q: "您如何找到此调查？", type: "select", section: 0, options: ["脸书", "谷歌", "电子邮件", "朋友的消息", "推特/X", "Instagram", "WhatsApp", "其他"] },
        { id: "surveySourceOther", q: "如果您选择其他，请说明", type: "text", section: 0, condition: "surveySource", conditionValue: "其他", placeholder: "在此输入..." },
        { id: "nationality", q: "您的国籍？", type: "select", section: 0, options: ["中国", "其他"] },
        { id: "residenceYears", q: "您在沙特阿拉伯居住多久了？", type: "select", section: 0, options: ["不到1年", "1-3年", "3-5年", "5-10年", "超过10年"] },
        { id: "age", q: "您多大年纪？", type: "select", section: 0, options: ["18-25岁", "26-35岁", "36-45岁", "46-55岁", "超过55岁"] },
        { id: "income", q: "您的月收入是多少？", type: "select", section: 0, options: ["低于2,000里亚尔", "2,000-4,000里亚尔", "4,000-8,000里亚尔", "超过8,000里亚尔"] },
        { id: "legalIssues", q: "您遇到过法律问题吗？", type: "radio", section: 1, options: ["是", "否"] },
        { id: "mainBarrier", q: "获得法律服务的最大障碍是什么？", type: "select", section: 1, options: ["费用高", "语言障碍", "不知道我的权利", "害怕程序"] },
        { id: "quickDecision", q: "如果有您语言的快速咨询解决方案，您会订阅吗？", type: "radio", section: 2, options: ["是的，立即", "也许，需要考虑", "不"] },
        { id: "legalTechServices", q: "您在沙特阿拉伯尝试过任何法律技术服务吗？", type: "radio", section: 2, options: ["是", "否"] },
        { id: "legalTechServiceName", q: "请说明其名称", type: "text", section: 2, condition: "legalTechServices", conditionValue: "是", placeholder: "输入服务名称..." },
        { id: "legalTechConsideration", q: "如果价格合理，您会考虑吗？", type: "radio", section: 2, condition: "legalTechServices", conditionValue: "否", options: ["是", "否"] },
        { id: "giveawayInterest", q: "🎁 您想参加抽奖吗？", type: "radio", section: 2, options: ["是", "否"] },
        { id: "email", q: "📧 电子邮件（可选）", type: "text", section: 2, condition: "giveawayInterest", conditionValue: "是", placeholder: "example@email.com" },
        { id: "phone", q: "📱 手机号码（可选）", type: "text", section: 2, condition: "giveawayInterest", conditionValue: "是", placeholder: "05xxxxxxxx" },

      ],
      so: [
        { id: "surveySource", q: "Sidee baad u heshay sahankan?", type: "select", section: 0, options: ["Facebook", "Google", "Email", "Fariin saaxiib", "Twitter/X", "Instagram", "WhatsApp", "Kale"] },
        { id: "surveySourceOther", q: "Haddii aad doorato Kale, fadlan sharax", type: "text", section: 0, condition: "surveySource", conditionValue: "Kale", placeholder: "Halkan qor..." },
        { id: "nationality", q: "Waa maxay qowmiyaddaada?", type: "select", section: 0, options: ["Soomaaliya", "Itoobiya", "Eritrea", "Jabuuti", "Kenya", "Kale"] },
        { id: "residenceYears", q: "Muddo intee le'eg ayaad ku nool tahay Sacuudi?", type: "select", section: 0, options: ["Ka yar 1 sano", "1-3 sano", "3-5 sano", "5-10 sano", "Ka badan 10 sano"] },
        { id: "age", q: "Waa immisa da'daada?", type: "select", section: 0, options: ["18-25 sano", "26-35 sano", "36-45 sano", "46-55 sano", "Ka badan 55 sano"] },
        { id: "income", q: "Waa immisa dakhligaaga bishii?", type: "select", section: 0, options: ["Ka yar 2,000 SAR", "2,000-4,000 SAR", "4,000-8,000 SAR", "Ka badan 8,000 SAR"] },
        { id: "legalIssues", q: "Ma wajahday dhibaato sharci?", type: "radio", section: 1, options: ["Haa", "Maya"] },
        { id: "mainBarrier", q: "Waa maxay caqabadda ugu weyn?", type: "select", section: 1, options: ["Qiimo sare", "Caqabadda luqadda", "Aan garaneyn xuquuqeyga", "Cabsi"] },
        { id: "quickDecision", q: "Haddii ay jirto xal degdeg ah luqaddaada, ma ka qayb qaadan lahayd?", type: "radio", section: 2, options: ["Haa, si degdeg ah", "Waxaa laga yaabaa", "Maya"] },
        { id: "legalTechServices", q: "Ma isku dayday adeegyo tignoolajiyad sharci ah Sacuudi Carabiya?", type: "radio", section: 2, options: ["Haa", "Maya"] },
        { id: "legalTechServiceName", q: "Fadlan sheeg magaceeda", type: "text", section: 2, condition: "legalTechServices", conditionValue: "Haa", placeholder: "Geli magaca adeegga..." },
        { id: "legalTechConsideration", q: "Ma tixgelin lahayd haddii lagu helo qiimo macquul ah?", type: "radio", section: 2, condition: "legalTechServices", conditionValue: "Maya", options: ["Haa", "Maya"] },
        { id: "giveawayInterest", q: "🎁 Ma ka qayb qaadan lahayd saami abaalmarino?", type: "radio", section: 2, options: ["Haa", "Maya"] },
        { id: "email", q: "📧 Email (ikhtiyaari)", type: "text", section: 2, condition: "giveawayInterest", conditionValue: "Haa", placeholder: "example@email.com" },
        { id: "phone", q: "📱 Lambarka (ikhtiyaari)", type: "text", section: 2, condition: "giveawayInterest", conditionValue: "Haa", placeholder: "05xxxxxxxx" },

      ],
      hi: [
        { id: "surveySource", q: "आपको यह सर्वेक्षण कैसे मिला?", type: "select", section: 0, options: ["फेसबुक", "गूगल", "ईमेल", "दोस्त का संदेश", "ट्विटर/X", "इंस्टाग्राम", "व्हाट्सएप", "अन्य"] },
        { id: "surveySourceOther", q: "यदि आपने अन्य चुना है तो कृपया बताएं", type: "text", section: 0, condition: "surveySource", conditionValue: "अन्य", placeholder: "यहाँ लिखें..." },
        { id: "nationality", q: "आपकी राष्ट्रीयता क्या है?", type: "select", section: 0, options: ["भारतीय", "पाकिस्तानी", "बांग्लादेशी", "नेपाली", "श्रीलंकाई", "अन्य"] },
        { id: "residenceYears", q: "आप सऊदी अरब में कितने समय से रह रहे हैं?", type: "select", section: 0, options: ["1 वर्ष से कम", "1-3 वर्ष", "3-5 वर्ष", "5-10 वर्ष", "10 वर्ष से अधिक"] },
        { id: "age", q: "आपकी उम्र क्या है?", type: "select", section: 0, options: ["18-25 वर्ष", "26-35 वर्ष", "36-45 वर्ष", "46-55 वर्ष", "55 वर्ष से अधिक"] },
        { id: "income", q: "आपकी मासिक आय क्या है?", type: "select", section: 0, options: ["2,000 SAR से कम", "2,000-4,000 SAR", "4,000-8,000 SAR", "8,000 SAR से अधिक"] },
        { id: "legalIssues", q: "क्या आपने कानूनी समस्याओं का सामना किया है?", type: "radio", section: 1, options: ["हाँ", "नहीं"] },
        { id: "mainBarrier", q: "कानूनी सेवाओं की सबसे बड़ी बाधा क्या है?", type: "select", section: 1, options: ["उच्च लागत", "भाषा बाधा", "अपने अधिकार नहीं जानता", "प्रक्रियाओं का डर"] },
        { id: "quickDecision", q: "यदि आपकी भाषा में त्वरित परामर्श समाधान हो, तो क्या आप सदस्यता लेंगे?", type: "radio", section: 2, options: ["हाँ, तुरंत", "शायद, सोचना होगा", "नहीं"] },
        { id: "legalTechServices", q: "क्या आपने सऊदी अरब में कोई कानूनी तकनीकी सेवाएं आजमाई हैं?", type: "radio", section: 2, options: ["हाँ", "नहीं"] },
        { id: "legalTechServiceName", q: "कृपया इसका नाम बताएं", type: "text", section: 2, condition: "legalTechServices", conditionValue: "हाँ", placeholder: "सेवा का नाम दर्ज करें..." },
        { id: "legalTechConsideration", q: "यदि उचित मूल्य पर उपलब्ध हो तो क्या आप इस पर विचार करेंगे?", type: "radio", section: 2, condition: "legalTechServices", conditionValue: "नहीं", options: ["हाँ", "नहीं"] },
        { id: "giveawayInterest", q: "🎁 क्या आप पुरस्कार ड्रॉ में भाग लेना चाहेंगे?", type: "radio", section: 2, options: ["हाँ", "नहीं"] },
        { id: "email", q: "📧 ईमेल (वैकल्पिक)", type: "text", section: 2, condition: "giveawayInterest", conditionValue: "हाँ", placeholder: "example@email.com" },
        { id: "phone", q: "📱 मोबाइल नंबर (वैकल्पिक)", type: "text", section: 2, condition: "giveawayInterest", conditionValue: "हाँ", placeholder: "05xxxxxxxx" },
      ]
    };

    return questionSets[lang] || questionSets.en;
  };

  const sectionNames: Record<string, string[]> = {
    ar: ["معلومات أساسية", "التجربة القانونية", "احتياجاتك"],
    en: ["Basic Info", "Legal Experience", "Your Needs"],
    tl: ["Pangunahing Info", "Legal Experience", "Pangangailangan"],
    ur: ["بنیادی معلومات", "قانونی تجربہ", "آپ کی ضروریات"],
    bn: ["মৌলিক তথ্য", "আইনি অভিজ্ঞতা", "আপনার চাহিদা"],
    ms: ["Maklumat Asas", "Pengalaman Legal", "Keperluan"],
    zh: ["基本信息", "法律经验", "您的需求"],
    so: ["Macluumaad", "Waayo-aragnimo", "Baahiyaha"],
    hi: ["बुनियादी जानकारी", "कानूनी अनुभव", "आवश्यकताएं"]
  };

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentSection < 2) {
      setCurrentSection(currentSection + 1);
    } else {
      setIsComplete(true);
      console.log(answers);
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const shouldShowQuestion = (question: Question) => {
    if (!question.condition) return true;
    return answers[question.condition] === question.conditionValue;
  };

  if (!selectedLanguage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 flex items-center justify-center">
        <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Scale className="w-16 h-16 text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Survey for Residents</h1>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8 text-right">
              <h2 className="text-xl font-bold text-blue-800 mb-3 flex items-center justify-center">
                <Globe className="w-6 h-6 ml-2" />
                الغرض من هذا الاستبيان
              </h2>
              <p className="text-blue-700 leading-relaxed mb-4">
                نود معرفة احتياجاتك كمقيم في المملكة العربية السعودية فيما يتعلق بالحماية القانونية ومدى حاجتك لفهم الأنظمة والتعليمات بشكل أوضح وأسهل. إجاباتك ستساعدنا في فهم التحديات التي تواجهها وكيف يمكن دعمك بشكل أفضل.
              </p>
              <p className="text-blue-600 text-sm font-semibold">
                🔒 جميع المعلومات سرية وسيتم استخدامها لأغراض البحث فقط
              </p>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-center mb-6">
              <Languages className="w-8 h-8 text-purple-600 ml-3" />
              <h2 className="text-2xl font-bold text-gray-800">اختر لغتك / Select Language</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setSelectedLanguage(lang.code)}
                  className="flex items-center justify-center p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition"
                >
                  <span className="text-3xl ml-3">{lang.flag}</span>
                  <span className="text-lg font-semibold text-gray-700">{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const t = translations[selectedLanguage || 'en'];
  const questions = getQuestions(selectedLanguage || 'en');
  const currentQuestions = questions.filter((q: Question) => q.section === currentSection);
  const sections: string[] = sectionNames[selectedLanguage || 'en'] || sectionNames.en;
  const progress = ((currentSection + 1) / sections.length) * 100;

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 flex items-center justify-center">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t.thankYou}</h2>
          <p className="text-gray-600 text-lg mb-6">{t.thankYouMsg}</p>
          <div className="bg-purple-50 rounded-lg p-6 mb-6">
            <p className="text-purple-800 font-semibold mb-2">🎁 20% Discount!</p>
            <p className="text-purple-600 text-sm">We will contact you soon</p>
          </div>
          <button
            onClick={() => {
              setIsComplete(false);
              setCurrentSection(0);
              setAnswers({});
              setSelectedLanguage(null);
            }}
            className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition"
          >
            {t.newSurvey}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Scale className="w-12 h-12 text-purple-600" />
            <h1 className="text-3xl font-bold text-gray-800 ml-3">{t.welcome}</h1>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4 text-right">
            <p className="text-blue-700 text-sm leading-relaxed">
              {t.purposeText}
            </p>
            <p className="text-blue-600 text-xs font-semibold mt-2">
              🔒 {t.confidential}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{sections[currentSection]}</h2>
          {/* Progress Bar */}
          <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-gray-600">{t.progress}</span>
              <span className="text-sm font-bold text-indigo-600">{Math.round(progress)}%</span>
            </div>

            <div className="w-full bg-gray-100 rounded-full h-3 mb-6 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500 ease-out shadow-lg"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Section Indicators */}
            <div className="flex justify-between items-center">
              {sections.map((section, index) => (
                <div key={index} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${index < currentSection
                      ? 'bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg scale-110'
                      : index === currentSection
                        ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg scale-110 ring-4 ring-indigo-100'
                        : 'bg-gray-200 text-gray-500'
                      }`}>
                      {index < currentSection ? (
                        <CheckCircle2 className="w-6 h-6" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    <span className={`text-xs mt-2 font-medium text-center ${index === currentSection ? 'text-indigo-600' : 'text-gray-500'
                      }`}>
                      {section}
                    </span>
                  </div>
                  {index < sections.length - 1 && (
                    <div className={`h-1 flex-1 mx-2 rounded-full transition-all duration-300 ${index < currentSection ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gray-200'
                      }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {currentQuestions.map((question, qIndex) => {
              if (!shouldShowQuestion(question)) return null;

              return (
                <div key={question.id} className="border-b border-gray-100 pb-6 last:border-0">
                  <label className="block text-lg font-semibold text-gray-700 mb-4">
                    {qIndex + 1}. {question.q}
                  </label>

                  {question.type === 'select' && (
                    <select
                      value={answers[question.id] || ''}
                      onChange={(e) => handleAnswer(question.id, e.target.value)}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none text-gray-700"
                    >
                      <option value="">{t.selectAnswer}</option>
                      {(question.options || []).map((option, i) => (
                        <option key={i} value={option}>{option}</option>
                      ))}
                    </select>
                  )}

                  {question.type === 'radio' && (
                    <div className="space-y-3">
                      {(question.options || []).map((option, i) => (
                        <label key={i} className="flex items-center p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-purple-50 hover:border-purple-300 transition">
                          <input
                            type="radio"
                            name={question.id}
                            value={option}
                            checked={answers[question.id] === option}
                            onChange={(e) => handleAnswer(question.id, e.target.value)}
                            className="ml-3 w-5 h-5 text-purple-600"
                          />
                          <span className="text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  )}

                  {question.type === 'text' && (
                    <input
                      type="text"
                      value={answers[question.id] || ''}
                      onChange={(e) => handleAnswer(question.id, e.target.value)}
                      placeholder={question.placeholder || ''}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none text-gray-700"
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={handlePrevious}
              disabled={currentSection === 0}
              className={`px-6 py-3 rounded-lg transition ${currentSection === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
              {t.previous}
            </button>
            <button
              onClick={handleNext}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition flex items-center"
            >
              {currentSection === 2 ? t.finish : t.next}
              <ChevronRight className="w-5 h-5 mr-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}