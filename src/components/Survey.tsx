import React, { useState } from 'react';
import { ChevronRight, Globe, Scale, CheckCircle, Languages, AlertCircle } from 'lucide-react';
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
  required?: boolean;
};

type LanguageDef = { code: string; name: string; flag: string };

type Translations = Record<string, Record<string, string>>;

type ValidationErrors = Record<string, string>;

export default function Survey() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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
      selectAnswer: "اختر إجابة...",
      required: "هذا الحقل مطلوب",
      invalidEmail: "البريد الإلكتروني غير صحيح",
      invalidPhone: "رقم الجوال غير صحيح",
      submitting: "جاري الإرسال...",
      submitError: "حدث خطأ أثناء إرسال الاستبيان. يرجى المحاولة مرة أخرى.",
      progress: "التقدم"
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
      selectAnswer: "Select answer...",
      required: "This field is required",
      invalidEmail: "Invalid email address",
      invalidPhone: "Invalid phone number",
      submitting: "Submitting...",
      submitError: "An error occurred while submitting the survey. Please try again.",
      progress: "Progress"
    },
    tl: {
      welcome: "Survey para sa mga Residente sa Saudi Arabia",
      purpose: "Layunin ng Survey na Ito",
      purposeText: "Nais naming malaman ang iyong mga pangangailangan bilang residente sa Saudi Arabia tungkol sa legal protection at kung gaano mo kailangan ng mas malinaw at mas madaling pag-unawa sa mga regulasyon at proseso.",
      confidential: "Lahat ng impormasyon ay kumpidensyal",
      selectLanguage: "Pumili ng iyong gustong wika",
      start: "Magsimula",
      next: "Susunod",
      previous: "Nakaraan",
      finish: "Tapusin",
      thankYou: "Salamat!",
      thankYouMsg: "Ang iyong mga sagot ay makakatulong",
      newSurvey: "Magsimula ng bagong survey",
      section: "Bahagi",
      of: "ng",
      selectAnswer: "Pumili ng sagot...",
      required: "Kinakailangan ang field na ito",
      invalidEmail: "Hindi wastong email",
      invalidPhone: "Hindi wastong numero",
      submitting: "Isinusumite...",
      submitError: "May error sa pagsumite. Subukan muli.",
      progress: "Progreso"
    },
    ur: {
      welcome: "سعودی عرب میں مقیم افراد کے لیے سروے",
      purpose: "اس سروے کا مقصد",
      purposeText: "ہم سعودی عرب میں مقیم کے طور پر آپ کی ضروریات کو سمجھنا چاہتے ہیں",
      confidential: "تمام معلومات خفیہ ہیں",
      selectLanguage: "اپنی پسندیدہ زبان منتخب کریں",
      start: "شروع کریں",
      next: "اگلا",
      previous: "پچھلا",
      finish: "ختم",
      thankYou: "شکریہ!",
      thankYouMsg: "آپ کے جوابات مدد کریں گے",
      newSurvey: "نیا سروے شروع کریں",
      section: "سیکشن",
      of: "از",
      selectAnswer: "جواب منتخب کریں...",
      required: "یہ فیلڈ ضروری ہے",
      invalidEmail: "غلط ای میل",
      invalidPhone: "غلط نمبر",
      submitting: "بھیجا جا رہا ہے...",
      submitError: "ایک خرابی پیش آئی۔ دوبارہ کوشش کریں۔",
      progress: "پیش رفت"
    },
    bn: {
      welcome: "সৌদি আরবে বসবাসকারীদের জরিপ",
      purpose: "এই জরিপের উদ্দেশ্য",
      purposeText: "আমরা আপনার চাহিদা জানতে চাই",
      confidential: "সমস্ত তথ্য গোপনীয়",
      selectLanguage: "আপনার ভাষা নির্বাচন করুন",
      start: "শুরু করুন",
      next: "পরবর্তী",
      previous: "পূর্ববর্তী",
      finish: "শেষ",
      thankYou: "ধন্যবাদ!",
      thankYouMsg: "আপনার উত্তর সাহায্য করবে",
      newSurvey: "নতুন জরিপ শুরু করুন",
      section: "বিভাগ",
      of: "এর",
      selectAnswer: "উত্তর নির্বাচন করুন...",
      required: "এই ক্ষেত্রটি প্রয়োজনীয়",
      invalidEmail: "অবৈধ ইমেল",
      invalidPhone: "অবৈধ ফোন নম্বর",
      submitting: "জমা দেওয়া হচ্ছে...",
      submitError: "একটি ত্রুটি ঘটেছে। আবার চেষ্টা করুন।",
      progress: "অগ্রগতি"
    },
    ms: {
      welcome: "Tinjauan untuk Penduduk di Arab Saudi",
      purpose: "Tujuan Tinjauan",
      purposeText: "Kami ingin memahami keperluan anda",
      confidential: "Semua maklumat adalah sulit",
      selectLanguage: "Pilih bahasa",
      start: "Mula",
      next: "Seterusnya",
      previous: "Sebelumnya",
      finish: "Selesai",
      thankYou: "Terima kasih!",
      thankYouMsg: "Jawapan anda membantu",
      newSurvey: "Mulakan tinjauan baharu",
      section: "Bahagian",
      of: "daripada",
      selectAnswer: "Pilih jawapan...",
      required: "Medan ini diperlukan",
      invalidEmail: "Email tidak sah",
      invalidPhone: "Nombor telefon tidak sah",
      submitting: "Menghantar...",
      submitError: "Ralat berlaku. Cuba lagi.",
      progress: "Kemajuan"
    },
    zh: {
      welcome: "沙特阿拉伯居民调查",
      purpose: "调查目的",
      purposeText: "我们想了解您的需求",
      confidential: "所有信息均为保密",
      selectLanguage: "选择语言",
      start: "开始",
      next: "下一步",
      previous: "上一步",
      finish: "完成",
      thankYou: "感谢!",
      thankYouMsg: "您的回答将有所帮助",
      newSurvey: "开始新调查",
      section: "部分",
      of: "的",
      selectAnswer: "选择答案...",
      required: "此字段为必填项",
      invalidEmail: "无效的电子邮件",
      invalidPhone: "无效的电话号码",
      submitting: "提交中...",
      submitError: "发生错误。请重试。",
      progress: "进度"
    },
    so: {
      welcome: "Sahanka Dadka Deggan Sacuudi",
      purpose: "Ujeeddada",
      purposeText: "Waxaan doonayaa inaan fahanno",
      confidential: "Macluumaadku waa sir",
      selectLanguage: "Dooro luqadda",
      start: "Bilow",
      next: "Xiga",
      previous: "Hore",
      finish: "Dhammaystir",
      thankYou: "Mahadsanid!",
      thankYouMsg: "Jawaabahagu waa caawi",
      newSurvey: "Bilow sahan cusub",
      section: "Qaybta",
      of: "ka mid ah",
      selectAnswer: "Dooro jawaab...",
      required: "Goobtan waa lagama maarmaan",
      invalidEmail: "Email aan sax ahayn",
      invalidPhone: "Lambarka ma sax aha",
      submitting: "La dirayo...",
      submitError: "Khalad ayaa dhacay. Isku day mar kale.",
      progress: "Hormarka"
    },
    hi: {
      welcome: "सऊदी अरब में निवासियों के लिए सर्वेक्षण",
      purpose: "सर्वेक्षण का उद्देश्य",
      purposeText: "हम आपकी जरूरतों को समझना चाहते हैं",
      confidential: "सभी जानकारी गोपनीय है",
      selectLanguage: "भाषा चुनें",
      start: "शुरू करें",
      next: "अगला",
      previous: "पिछला",
      finish: "समाप्त",
      thankYou: "धन्यवाद!",
      thankYouMsg: "आपके उत्तर मदद करेंगे",
      newSurvey: "नया सर्वेक्षण शुरू करें",
      section: "अनुभाग",
      of: "का",
      selectAnswer: "उत्तर चुनें...",
      required: "यह फ़ील्ड आवश्यक है",
      invalidEmail: "अमान्य ईमेल",
      invalidPhone: "अमान्य फ़ोन नंबर",
      submitting: "सबमिट किया जा रहा है...",
      submitError: "एक त्रुटि हुई। पुनः प्रयास करें।",
      progress: "प्रगति"
    }
  };

  const getQuestions = (lang: string): Question[] => {
    const questionSets: Record<string, Question[]> = {
      ar: [
        { id: "surveySource", q: "من أين وصلك هذا الاستبيان؟", type: "select", section: 0, options: ["فيسبوك", "قوقل", "الإيميل", "رسالة من صديق", "تويتر/X", "إنستقرام", "واتساب", "أخرى"], required: true },
        { id: "surveySourceOther", q: "إذا اخترت أخرى، يرجى التوضيح", type: "text", section: 0, condition: "surveySource", conditionValue: "أخرى", placeholder: "اكتب هنا...", required: true },
        { id: "nationality", q: "ما هي جنسيتك؟", type: "select", section: 0, options: ["مصري", "سوداني", "أردني", "سوري", "يمني", "خليجي (سعودي/إماراتي/كويتي/قطري/بحريني/عماني)", "صومالي", "إثيوبي", "إريتري", "أخرى"], required: true },
        { id: "residenceYears", q: "منذ كم سنة تقيم في السعودية؟", type: "select", section: 0, options: ["أقل من سنة", "1-3 سنوات", "3-5 سنوات", "5-10 سنوات", "أكثر من 10 سنوات"], required: true },
        { id: "age", q: "كم عمرك؟", type: "select", section: 0, options: ["18-25 سنة", "26-35 سنة", "36-45 سنة", "46-55 سنة", "أكثر من 55 سنة"], required: true },
        { id: "income", q: "ما هو متوسط دخلك الشهري؟", type: "select", section: 0, options: ["أقل من 2,000 ريال", "2,000-4,000 ريال", "4,000-8,000 ريال", "أكثر من 8,000 ريال"], required: true },
        { id: "legalIssues", q: "هل واجهت مشكلة قانونية في السعودية؟", type: "radio", section: 1, options: ["نعم", "لا"], required: true },
        { id: "mainBarrier", q: "ما أكبر عائق يمنعك من الوصول للخدمات القانونية؟", type: "select", section: 1, options: ["التكلفة العالية", "حاجز اللغة", "عدم معرفة حقوقي", "الخوف من الإجراءات"], required: true },
        { id: "quickDecision", q: "لو وجد حل للاستشارة السريعة بلغتك، هل ستشترك؟", type: "radio", section: 2, options: ["نعم، فوراً", "ربما، أحتاج للتفكير", "لا"], required: true },
        { id: "giveawayInterest", q: "🎁 هل ترغب بالسحب على هدية مجانية؟", type: "radio", section: 2, options: ["نعم، أرغب", "لا، لا أرغب"], required: true },
        { id: "email", q: "📧 البريد الإلكتروني (اختياري)", type: "text", section: 2, condition: "giveawayInterest", conditionValue: "نعم، أرغب", placeholder: "example@email.com", required: false },
        { id: "phone", q: "📱 رقم الجوال (اختياري)", type: "text", section: 2, condition: "giveawayInterest", conditionValue: "نعم، أرغب", placeholder: "05xxxxxxxx", required: false },
        { id: "legalTechServices", q: "هل جربت اي خدمات تقنيه قانونيه في السعودية؟", type: "radio", section: 2, options: ["نعم", "لا"], required: true },
        { id: "legalTechServiceName", q: "اذكر اسمها", type: "text", section: 2, condition: "legalTechServices", conditionValue: "نعم", placeholder: "اكتب اسم الخدمة...", required: true },
        { id: "legalTechConsideration", q: "هل تفكر لو توفرت بسعر معقول؟", type: "radio", section: 2, condition: "legalTechServices", conditionValue: "لا", options: ["نعم", "لا"], required: true }
      ],
      en: [
        { id: "surveySource", q: "How did you find this survey?", type: "select", section: 0, options: ["Facebook", "Google", "Email", "Message from friend", "Twitter/X", "Instagram", "WhatsApp", "Other"], required: true },
        { id: "surveySourceOther", q: "If you selected Other, please specify", type: "text", section: 0, condition: "surveySource", conditionValue: "Other", placeholder: "Type here...", required: true },
        { id: "nationality", q: "What is your nationality? (Please write)", type: "text", section: 0, placeholder: "e.g. American, British, Canadian...", required: true },
        { id: "residenceYears", q: "How long have you lived in Saudi Arabia?", type: "select", section: 0, options: ["Less than 1 year", "1-3 years", "3-5 years", "5-10 years", "More than 10 years"], required: true },
        { id: "age", q: "How old are you?", type: "select", section: 0, options: ["18-25 years", "26-35 years", "36-45 years", "46-55 years", "Over 55 years"], required: true },
        { id: "income", q: "What is your monthly income?", type: "select", section: 0, options: ["Less than 2,000 SAR", "2,000-4,000 SAR", "4,000-8,000 SAR", "More than 8,000 SAR"], required: true },
        { id: "legalIssues", q: "Have you faced legal issues in Saudi Arabia?", type: "radio", section: 1, options: ["Yes", "No"], required: true },
        { id: "mainBarrier", q: "What is the biggest barrier to legal services?", type: "select", section: 1, options: ["High cost", "Language barrier", "Don't know my rights", "Fear of procedures"], required: true },
        { id: "quickDecision", q: "If there was a quick consultation solution in your language, would you subscribe?", type: "radio", section: 2, options: ["Yes, immediately", "Maybe, need to think", "No"], required: true },
        { id: "giveawayInterest", q: "🎁 Would you like to enter a prize draw?", type: "radio", section: 2, options: ["Yes, I would", "No, thanks"], required: true },
        { id: "email", q: "📧 Email (optional)", type: "text", section: 2, condition: "giveawayInterest", conditionValue: "Yes, I would", placeholder: "example@email.com", required: false },
        { id: "phone", q: "📱 Mobile number (optional)", type: "text", section: 2, condition: "giveawayInterest", conditionValue: "Yes, I would", placeholder: "05xxxxxxxx", required: false },
        { id: "legalTechServices", q: "Have you tried any legal tech services in Saudi Arabia?", type: "radio", section: 2, options: ["Yes", "No"], required: true },
        { id: "legalTechServiceName", q: "Please mention its name", type: "text", section: 2, condition: "legalTechServices", conditionValue: "Yes", placeholder: "Enter service name...", required: true },
        { id: "legalTechConsideration", q: "Would you consider it if available at a reasonable price?", type: "radio", section: 2, condition: "legalTechServices", conditionValue: "No", options: ["Yes", "No"], required: true }
      ],
      // Add other languages similarly...
      tl: [
        { id: "surveySource", q: "Paano mo nahanap ang survey na ito?", type: "select", section: 0, options: ["Facebook", "Google", "Email", "Mensahe mula sa kaibigan", "Twitter/X", "Instagram", "WhatsApp", "Iba pa"], required: true },
        { id: "surveySourceOther", q: "Kung pumili ka ng Iba pa, mangyaring tukuyin", type: "text", section: 0, condition: "surveySource", conditionValue: "Iba pa", placeholder: "Isulat dito...", required: true },
        { id: "nationality", q: "Ano ang iyong nasyonalidad?", type: "select", section: 0, options: ["Pilipino/Pilipina", "Iba pa"], required: true },
        { id: "residenceYears", q: "Gaano katagal ka nang nakatira sa Saudi?", type: "select", section: 0, options: ["Wala pang 1 taon", "1-3 taon", "3-5 taon", "5-10 taon", "Higit 10 taon"], required: true },
        { id: "age", q: "Ilang taon ka na?", type: "select", section: 0, options: ["18-25", "26-35", "36-45", "46-55", "Higit 55"], required: true },
        { id: "income", q: "Magkano ang kita mo bawat buwan?", type: "select", section: 0, options: ["Wala pang 2,000", "2,000-4,000", "4,000-8,000", "Higit 8,000"], required: true },
        { id: "legalIssues", q: "Nakaharap ka ba ng legal na problema?", type: "radio", section: 1, options: ["Oo", "Hindi"], required: true },
        { id: "mainBarrier", q: "Ano ang pinakamalaking hadlang?", type: "select", section: 1, options: ["Mataas ang presyo", "Language barrier", "Hindi alam ang rights", "Takot sa proseso"], required: true },
        { id: "quickDecision", q: "Kung may mabilis na solusyon sa iyong wika, mag-subscribe ka ba?", type: "radio", section: 2, options: ["Oo, agad", "Siguro", "Hindi"], required: true },
        { id: "giveawayInterest", q: "🎁 Sumali sa prize draw?", type: "radio", section: 2, options: ["Oo", "Hindi"], required: true },
        { id: "email", q: "📧 Email (optional)", type: "text", section: 2, condition: "giveawayInterest", conditionValue: "Oo", placeholder: "example@email.com", required: false },
        { id: "phone", q: "📱 Mobile (optional)", type: "text", section: 2, condition: "giveawayInterest", conditionValue: "Oo", placeholder: "05xxxxxxxx", required: false },
        { id: "legalTechServices", q: "Nakasubukang gumamit ng legal tech services sa Saudi Arabia?", type: "radio", section: 2, options: ["Oo", "Hindi"], required: true },
        { id: "legalTechServiceName", q: "Pakisabi ang pangalan nito", type: "text", section: 2, condition: "legalTechServices", conditionValue: "Oo", placeholder: "Isulat ang pangalan...", required: true },
        { id: "legalTechConsideration", q: "Isasaalang-alang mo ba kung mura lang?", type: "radio", section: 2, condition: "legalTechServices", conditionValue: "Hindi", options: ["Oo", "Hindi"], required: true }
      ]
      // Add remaining languages (ur, bn, ms, zh, so, hi) with similar structure
    };

    return questionSets[lang] || questionSets.en;
  };

  const t = selectedLanguage ? translations[selectedLanguage] : translations.en;
  const questions = selectedLanguage ? getQuestions(selectedLanguage) : [];

  const sections = questions.length > 0 
    ? [...new Set(questions.map(q => q.section))].map(s => `${t.section} ${s + 1}`)
    : [];

  const currentQuestions = questions.filter(q => q.section === currentSection);

  // Calculate progress
  const totalQuestions = questions.filter(q => shouldShowQuestion(q)).length;
  const answeredQuestions = questions.filter(q => shouldShowQuestion(q) && answers[q.id]).length;
  const progress = totalQuestions > 0 ? (answeredQuestions / totalQuestions) * 100 : 0;

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // Saudi phone number format: 05XXXXXXXX (10 digits starting with 05)
    const phoneRegex = /^05\d{8}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const validateField = (questionId: string, value: string): string | null => {
    const question = questions.find(q => q.id === questionId);
    if (!question) return null;

    // Check if field is required and empty
    if (question.required && !value.trim()) {
      return t.required;
    }

    // Email validation
    if (questionId === 'email' && value.trim() && !validateEmail(value)) {
      return t.invalidEmail;
    }

    // Phone validation
    if (questionId === 'phone' && value.trim() && !validatePhone(value)) {
      return t.invalidPhone;
    }

    return null;
  };

  const validateSection = (): boolean => {
    const newErrors: ValidationErrors = {};
    let isValid = true;

    currentQuestions.forEach(question => {
      if (!shouldShowQuestion(question)) return;

      const error = validateField(question.id, answers[question.id] || '');
      if (error) {
        newErrors[question.id] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  function shouldShowQuestion(question: Question): boolean {
    if (!question.condition) return true;
    return answers[question.condition] === question.conditionValue;
  }

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[questionId]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[questionId];
        return newErrors;
      });
    }

    // Clear dependent answers if condition changes
    const dependentQuestions = questions.filter(
      q => q.condition === questionId && q.conditionValue !== value
    );
    if (dependentQuestions.length > 0) {
      setAnswers(prev => {
        const newAnswers = { ...prev };
        dependentQuestions.forEach(q => delete newAnswers[q.id]);
        return newAnswers;
      });
    }
  };

  const handleNext = () => {
    // Validate current section before moving forward
    if (!validateSection()) {
      // Scroll to first error
      const firstErrorElement = document.querySelector('.border-red-500');
      if (firstErrorElement) {
        firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    if (currentSection < sections.length - 1) {
      setCurrentSection(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(prev => prev - 1);
      setErrors({}); // Clear errors when going back
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async () => {
    // Final validation of all sections
    let allValid = true;
    const allErrors: ValidationErrors = {};

    questions.forEach(question => {
      if (!shouldShowQuestion(question)) return;
      
      const error = validateField(question.id, answers[question.id] || '');
      if (error) {
        allErrors[question.id] = error;
        allValid = false;
      }
    });

    if (!allValid) {
      setErrors(allErrors);
      // Go back to first section with errors
      const firstErrorSection = questions.find(q => allErrors[q.id])?.section || 0;
      setCurrentSection(firstErrorSection);
      return;
    }

    // Prepare data for API
    const surveyData = {
      ...answers,
      language: selectedLanguage,
      submittedAt: new Date().toISOString()
    };

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Replace with your actual API endpoint
      const API_ENDPOINT = '/api/api/survey/submit';
      
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(surveyData),
      });
      console.log(response);

      if (!response.ok) {

        throw new Error('Failed to submit survey');
      }

      const result = await response.json();
      console.log('Survey submitted successfully:', result);
      
      setIsComplete(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error submitting survey:', error);
      setSubmitError(t.submitError);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Language selection screen
  if (!selectedLanguage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
          <div className="text-center mb-8">
            <Languages className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {translations.en.selectLanguage}
            </h1>
            <p className="text-gray-600">{translations.ar.selectLanguage}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setSelectedLanguage(lang.code)}
                className="p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition text-center"
              >
                <div className="text-3xl mb-2">{lang.flag}</div>
                <div className="font-semibold text-gray-800">{lang.name}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Completion screen
  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-12 max-w-md w-full text-center">
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
              setErrors({});
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
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                      index < currentSection
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
                    <span className={`text-xs mt-2 font-medium text-center ${
                      index === currentSection ? 'text-indigo-600' : 'text-gray-500'
                    }`}>
                      {section}
                    </span>
                  </div>
                  {index < sections.length - 1 && (
                    <div className={`h-1 flex-1 mx-2 rounded-full transition-all duration-300 ${
                      index < currentSection ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Error Alert */}
          {Object.keys(errors).length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <p className="text-red-800 font-semibold mb-1">Please fix the following errors:</p>
                <ul className="text-red-700 text-sm space-y-1">
                  {Object.entries(errors).map(([key, error]) => (
                    <li key={key}>• {error}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Submit Error Alert */}
          {submitError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-red-800">{submitError}</p>
            </div>
          )}

          <div className="space-y-8">
            {currentQuestions.map((question, qIndex) => {
              if (!shouldShowQuestion(question)) return null;

              const hasError = !!errors[question.id];
              const isRequired = question.required;

              return (
                <div key={question.id} className="border-b border-gray-100 pb-6 last:border-0">
                  <label className="block text-lg font-semibold text-gray-700 mb-4">
                    {qIndex + 1}. {question.q}
                    {isRequired && <span className="text-red-500 ml-1">*</span>}
                  </label>

                  {question.type === 'select' && (
                    <div>
                      <select
                        value={answers[question.id] || ''}
                        onChange={(e) => handleAnswer(question.id, e.target.value)}
                        className={`w-full p-3 border-2 rounded-lg focus:outline-none text-gray-700 transition ${
                          hasError
                            ? 'border-red-500 focus:border-red-500 bg-red-50'
                            : 'border-gray-300 focus:border-purple-500'
                        }`}
                      >
                        <option value="">{t.selectAnswer}</option>
                        {(question.options || []).map((option, i) => (
                          <option key={i} value={option}>{option}</option>
                        ))}
                      </select>
                      {hasError && (
                        <p className="text-red-600 text-sm mt-2 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors[question.id]}
                        </p>
                      )}
                    </div>
                  )}

                  {question.type === 'radio' && (
                    <div>
                      <div className="space-y-3">
                        {(question.options || []).map((option, i) => (
                          <label 
                            key={i} 
                            className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition ${
                              hasError
                                ? 'border-red-300 bg-red-50'
                                : answers[question.id] === option
                                ? 'border-purple-500 bg-purple-50'
                                : 'border-gray-200 hover:bg-purple-50 hover:border-purple-300'
                            }`}
                          >
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
                      {hasError && (
                        <p className="text-red-600 text-sm mt-2 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors[question.id]}
                        </p>
                      )}
                    </div>
                  )}

                  {question.type === 'text' && (
                    <div>
                      <input
                        type="text"
                        value={answers[question.id] || ''}
                        onChange={(e) => handleAnswer(question.id, e.target.value)}
                        placeholder={question.placeholder || ''}
                        className={`w-full p-3 border-2 rounded-lg focus:outline-none text-gray-700 transition ${
                          hasError
                            ? 'border-red-500 focus:border-red-500 bg-red-50'
                            : 'border-gray-300 focus:border-purple-500'
                        }`}
                      />
                      {hasError && (
                        <p className="text-red-600 text-sm mt-2 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors[question.id]}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={handlePrevious}
              disabled={currentSection === 0}
              className={`px-6 py-3 rounded-lg transition ${
                currentSection === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {t.previous}
            </button>
            <button
              onClick={handleNext}
              disabled={isSubmitting}
              className={`px-8 py-3 rounded-lg transition flex items-center ${
                isSubmitting
                  ? 'bg-purple-400 cursor-not-allowed'
                  : 'bg-purple-600 hover:bg-purple-700'
              } text-white`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  {t.submitting}
                </>
              ) : (
                <>
                  {currentSection === 2 ? t.finish : t.next}
                  <ChevronRight className="w-5 h-5 mr-2" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}