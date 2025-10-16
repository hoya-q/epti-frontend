export const NAV_LINKS = [
  { id: 'intro', label: { ko: '소개', en: 'About' } },
  { id: 'experience', label: { ko: '체험', en: 'Experience' } },
  { id: 'pricing', label: { ko: '요금제', en: 'Pricing' } },
  { id: 'contact', label: { ko: '문의', en: 'Contact' } },
];

export const HERO_CONTENT = {
  logo: 'https://static.readdy.ai/image/3d1f995d6140e9665f4f4bca24deac17/3eac101c27b11ef3daa8aed6d1d434b9.png',
  videoSrc: '/logo(fin).mp4',
  message: {
    ko: [
      '기존의 복잡한 EPUB 제작 과정을 AI로 완전히 자동화하여,',
      '목소리와 효과음까지 생생하게 구현된 동화책을 단 한 번에 완성합니다.',
    ],
    en: [
      'AI completely automates the once-complex EPUB creation process,',
      'bringing every story to life with vivid voices and immersive soundscapes in a single step.',
    ],
  },
};

export const INTRO_PAIN_HEADING = {
  highlight: { ko: '기존 EPUB', en: 'Traditional EPUBs' },
  postfix: { ko: '을 이용하셨을 때', en: '' },
  question: {
    ko: '어떤 점이 불편하셨나요?',
    en: 'What felt inconvenient?',
  },
};

export const TESTIMONIALS = [
  {
    emoji: '⚡',
    text: {
      ko: '전문 인력이 없으면 완성도 있는 EPUB을 만들기가 거의 불가능했어요.',
      en: 'Without specialists, creating a high-quality EPUB was nearly impossible.',
    },
  },
  {
    emoji: '⚠️',
    text: {
      ko: '조금만 포맷이 틀어져도 EPUB이 깨져서 다시 처음부터 고쳐야 했어요.',
      en: 'Even minor formatting issues broke the EPUB, forcing us to start over.',
    },
  },
  {
    emoji: '⏳',
    text: {
      ko: '책 한 권 만드는 데 며칠, 길면 몇 주가 걸렸어요.',
      en: 'Creating a single book took days—sometimes weeks.',
    },
  },
  {
    emoji: '🛠️',
    text: {
      ko: '텍스트 정리부터 오디오 편집까지 전부 수작업이라 너무 비효율적이었죠.',
      en: 'From text cleanup to audio editing, everything was manual and inefficient.',
    },
  },
  {
    emoji: '🎧',
    text: {
      ko: '장면마다 효과음을 넣는 게 번거로워서 결국 포기하는 경우도 많았어요.',
      en: 'Adding sound effects to each scene was tedious—often we just gave up.',
    },
  },
  {
    emoji: '💰',
    text: {
      ko: '시간과 비용이 너무 많이 들어서, 작은 출판사는 엄두도 못 냈죠.',
      en: 'Time and cost were overwhelming—small publishers couldn’t even consider it.',
    },
  },
];

export const MID_HERO_COPY = {
  title: {
    ko: 'epti는 이 복잡한 과정을 AI로 완전히 새롭게 정의했습니다.',
    en: 'epti has completely redefined this complex process with AI.',
  },
  description: {
    ko: `텍스트를 인식하고, 장면을 분석하며, 음성과 효과음을 자동으로 생성합니다. 한 번의 클릭만으로 이야기가 생명을 얻고, EPUB 파일은 곧바로 '듣고 보고 느끼는' 실감형 책으로 변합니다. 이제 더 이상 전문 편집 툴이나 긴 제작 절차가 필요하지 않습니다. AI가 모든 단계를 자동화하여, 누구나 손쉽게 완성도 높은 오디오북·AR북을 만들 수 있습니다.`,
    en: `epti recognizes text, analyzes scenes, and automatically generates voice and sound effects. With a single click, your story comes alive and the EPUB instantly becomes an immersive book you can hear, see, and feel. No more advanced editing tools or lengthy production. AI automates every step so anyone can create high-quality audiobooks and AR books easily.`,
  },
  emphasis: {
    ko: `epti는 출판의 기술적 장벽을 허물고, 출판사에게는 <strong style="color: #25C9FF;">시간과 효율을</strong>, 독자에게는 <strong style="color: #25C9FF;">생생한 몰입 경험을</strong> 선사합니다.`,
    en: `epti lowers technical barriers—offering <strong style="color: #25C9FF;">time savings and efficiency</strong> for publishers, and <strong style="color: #25C9FF;">immersive experiences</strong> for readers.`,
  },
  lead: {
    ko: 'AI가 EPUB 제작의 전 과정을 자동화해, 누구나 빠르고 생생하게 동화책을 완성할 수 있습니다.',
    en: 'AI automates the entire EPUB production process so anyone can instantly create vivid storybooks.',
  },
};

export const INTRO_FEATURES = [
  {
    icon: 'ri-robot-line',
    title: {
      ko: 'AI 완전 자동화',
      en: '100% AI Automation',
    },
    description: {
      ko: 'PDF 한 번 업로드로, AI가 텍스트 분석부터 EPUB 변환·음성·효과음 삽입까지 전 과정을 자동으로 처리합니다.',
      en: 'Upload a PDF — AI handles text analysis, EPUB conversion, narration, and sound effects automatically.',
    },
  },
  {
    icon: 'ri-sound-module-line',
    title: {
      ko: '지능형 사운드 구성과 자연스러운 AI 내레이션',
      en: 'Intelligent Sound Design & Natural AI Narration',
    },
    description: {
      ko: 'AI가 문맥과 감정을 이해해 원하는 목소리로 자연스럽게 읽어주고, 장면의 분위기에 맞춰 배경음과 효과음을 함께 구성해 진짜 살아있는 이야기처럼 완성합니다.',
      en: 'AI understands context and emotion to read naturally in the voice you want, composing background and effects to make the story feel truly alive.',
    },
  },
  {
    icon: 'ri-flashlight-line',
    title: {
      ko: '초고속·고품질 제작',
      en: 'Ultra-Fast, High-Quality Production',
    },
    description: {
      ko: '수작업 편집 없이 몇 분 만에 완성되며, 모든 페이지에서 일관된 품질과 음성 톤을 유지합니다.',
      en: 'Finish in minutes without manual editing, maintaining consistent quality and tone across pages.',
    },
  },
  {
    icon: 'ri-global-line',
    title: {
      ko: '글로벌 접근성 확장',
      en: 'Global Accessibility',
    },
    description: {
      ko: '다국어 음성 지원과 텍스트 변환 기능으로, 연령·언어·시각적 제약 없이 누구나 이용할 수 있습니다.',
      en: 'With multilingual voice and text conversion, anyone can enjoy it regardless of age, language, or visual constraints.',
    },
  },
];

export const CTA_CONTENT = {
  title: {
    ko: '지금 바로 시작해보세요',
    en: 'Get started now',
  },
  description: {
    ko: 'PDF 파일 하나로 완전히 새로운 독서 경험을 만들어보세요',
    en: 'Create a completely new reading experience with just one PDF file',
  },
  primary: {
    label: { ko: '무료 체험하기', en: 'Try for Free' },
  },
  secondary: {
    label: { ko: '데모 보기', en: 'View Demo' },
  },
};

export const EXPERIENCE_CONTENT = {
  title: {
    ko: 'epti를 직접 체험해보세요',
    en: 'Experience epti Directly',
  },
  description: {
    ko: 'AI가 텍스트를 인식하고, 목소리와 효과음을 입혀 실감형 책으로 전환합니다.',
    en: 'Watch AI recognize text and transform it into immersive books with lifelike voices and sound effects.',
  },
  stepsTitle: { ko: '사용 방법', en: 'How to Use' },
  steps: [
    {
      title: { ko: '파일 업로드', en: 'Upload files' },
      description: {
        ko: '변환할 책의 PDF 혹은 EPUB 파일을 업로드합니다.',
        en: 'Upload a PDF or EPUB file to convert.',
      },
    },
    {
      title: { ko: '음성 프롬프트 작성', en: 'Create a voice prompt' },
      description: {
        ko: '원하는 <strong class="text-white">목소리 톤·속도·분위기</strong>를 선택하여 프롬프트를 직접 설정하고 입력합니다.',
        en: 'Choose the <strong class="text-white">voice tone, speed, and mood</strong>, then set and enter your prompt.',
      },
    },
    {
      title: { ko: 'AI 분석 & 생성', en: 'AI analysis & generation' },
      description: {
        ko: 'AI가 내용을 분석하고 <strong class="text-white">음성·효과음·장면 구성</strong>을 자동으로 생성합니다.',
        en: 'AI analyzes the content and automatically generates <strong class="text-white">narration, effects, and scene composition</strong>.',
      },
    },
    {
      title: { ko: 'EPUB 다운로드', en: 'Download EPUB' },
      description: {
        ko: '완성된 EPUB 파일을 즉시 다운로드하여 리더기나 플랫폼에서 즐겨보세요.',
        en: 'Download the created EPUB file instantly and enjoy it on readers or platforms for EPUB.',
      },
    },
  ],
  highlights: [
    {
      icon: 'ri-mouse-line',
      title: { ko: '한 번의 클릭', en: 'One-click start' },
      description: {
        ko: '복잡한 편집 없이 한 번의 클릭으로 변환 시작',
        en: 'Start conversion with one click—no complex editing required.',
      },
    },
    {
      icon: 'ri-sound-module-line',
      title: { ko: '맞춤형 사운드 제공', en: 'Tailored sound' },
      description: {
        ko: '나레이션 목소리 직접 설정<br />AI의 대사, 분위기, 상황에 따른 지능적 사운드 조합',
        en: 'Set narration voice yourself<br />AI composes intelligent sounds by dialogue, mood, and context',
      },
    },
  ],
  demoTitle: { ko: '데모 파일 체험', en: 'Try Demo' },
  demoDescription: {
    ko: '직접 변환된 EPUB 파일을 체험해보세요',
    en: 'Try a demo EPUB file converted directly by epti.',
  },
};

export const PRICING_CONTENT = {
  title: { ko: 'epti 요금 안내', en: 'epti Pricing Plans' },
  description: {
    ko: '출판의 효율을 넘어, 새로운 시대의 표준으로. AI가 만들어가는 새로운 제작의 표준, 지금 epti로 시작하세요.',
    en: "Beyond publishing efficiency, toward the new era's standard. Experience the new production standard powered by AI. Start with epti today.",
  },
  plans: [
    {
      name: { ko: '베이직', en: 'Basic' },
      price: '₩19,000',
      unit: { ko: '/월', en: '/month' },
      description: {
        ko: '개인 사용자를 위한 기본 플랜',
        en: 'A starter plan for individual creators',
      },
      features: [
        {
          ko: '월 5권 EPUB 변환 포함',
          en: '5 EPUB conversions per month included',
        },
        {
          ko: '추가 권당 5,000원',
          en: '5,000 KRW per additional book',
        },
        {
          ko: '기본 음성 옵션',
          en: 'Basic voice options',
        },
        {
          ko: '표준 효과음',
          en: 'Standard sound effects',
        },
        {
          ko: '이메일 지원',
          en: 'Email support',
        },
      ],
      cta: { ko: '시작하기', en: 'Get Started' },
      highlight: false,
    },
    {
      name: { ko: '프로', en: 'Pro' },
      badge: { ko: '인기', en: 'Popular' },
      price: '₩59,000',
      unit: { ko: '/월', en: '/month' },
      description: {
        ko: '출판사와 교육기관을 위한 전문 플랜',
        en: 'A professional plan for publishers and educational institutions',
      },
      features: [
        {
          ko: '월 20권 EPUB 변환 포함',
          en: '20 EPUB conversions per month included',
        },
        {
          ko: '추가 권당 3,500원',
          en: '3,500 KRW per additional book',
        },
        {
          ko: '프리미엄 음성 옵션',
          en: 'Premium voice options',
        },
        {
          ko: '고품질 효과음',
          en: 'High-quality sound effects',
        },
        {
          ko: '우선 지원',
          en: 'Priority support',
        },
      ],
      cta: { ko: '시작하기', en: 'Get Started' },
      highlight: true,
    },
    {
      name: { ko: '엔터프라이즈', en: 'Enterprise' },
      price: '₩199,000',
      unit: { ko: '/월', en: '/month' },
      description: {
        ko: '대규모 조직을 위한 맞춤 솔루션',
        en: 'A tailored solution for large organizations',
      },
      features: [
        {
          ko: '월 100권 EPUB 변환 포함',
          en: '100 EPUB conversions per month included',
        },
        {
          ko: '추가 권당 2,000원',
          en: '2,000 KRW per additional book',
        },
        {
          ko: '커스텀 음성 생성',
          en: 'Custom voice generation',
        },
        {
          ko: '전용 효과음 라이브러리',
          en: 'Dedicated sound effects library',
        },
        {
          ko: '24/7 전담 지원',
          en: '24/7 dedicated support',
        },
      ],
      cta: { ko: '시작하기', en: 'Get Started' },
      highlight: false,
    },
  ],
  guaranteeTitle: {
    ko: '믿을 수 있는 서비스, 확실한 보장',
    en: 'Reliable Service, Guaranteed',
  },
  guarantees: [
    {
      icon: 'ri-shield-check-line',
      title: { ko: '안전한 결제 시스템', en: 'Secure Payment System' },
      description: {
        ko: '최신 보안 프로토콜과 암호화 결제 기술을 적용하여, 모든 결제 정보가 안전하게 보호됩니다.',
        en: 'Advanced security protocols and encrypted payment technology ensure all payment information is safely protected.',
      },
    },
    {
      icon: 'ri-server-line',
      title: { ko: '안정적인 서버 환경', en: 'Stable Server Environment' },
      description: {
        ko: 'epti의 독립 클라우드 인프라를 기반으로, 언제 어디서나 끊김 없이 EPUB을 제작하고 저장할 수 있습니다.',
        en: "Based on epti's independent cloud infrastructure, you can create and store EPUBs seamlessly anytime, anywhere.",
      },
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: {
        ko: '7일 이내 전액 환불 보장',
        en: '7-Day Full Refund Guarantee',
      },
      description: {
        ko: '만족하지 못하셨다면, 구매 후 7일 이내 전액 환불을 약속드립니다. 고객님의 신뢰를 가장 우선시 하겠습니다.',
        en: "If you're not satisfied, we guarantee a full refund within 7 days of purchase. Your trust is our top priority.",
      },
    },
  ],
};

export const CONTACT_CONTENT = {
  title: { ko: '문의하기', en: 'Contact Us' },
  formTitle: { ko: '메시지 보내기', en: 'Send Message' },
  placeholders: {
    firstName: { ko: '이름', en: 'Name' },
    lastName: { ko: '성', en: 'Last Name' },
    email: { ko: '이메일 주소', en: 'Email Address' },
    organization: { ko: '조직', en: 'Organization' },
    message: { ko: '메시지', en: 'Message' },
  },
  questionLabel: {
    ko: '어떻게 도와드릴까요?',
    en: 'How can we help you?',
  },
  submit: { ko: '메시지 보내기', en: 'Send Message' },
  companyTitle: { ko: '회사 정보', en: 'Company Information' },
  address: {
    label: { ko: '주소', en: 'Address' },
    line1: {
      ko: '서울 강남구 테헤란로43길 8',
      en: '8, Teheran-ro 43-gil, Gangnam-gu, Seoul',
    },
    line2: {
      ko: '코데코타워 2층 아티젠스페이스 R&D센터',
      en: 'ArtygenSpace R&D Center, 2F, Codeco Tower',
    },
  },
  phone: { label: { ko: '전화', en: 'Phone' }, value: '0507-1332-0564' },
  website: {
    label: { ko: '웹사이트', en: 'Website' },
    url: 'https://www.artygenspace.com/',
    text: 'www.artygenspace.com',
  },
  faq: {
    title: { ko: 'FAQ 보기', en: 'View FAQ' },
    description: {
      ko: '빠른 답변이 필요하신가요? 즉시 도움을 받을 수 있는 자주 묻는 질문을 확인해주세요.',
      en: 'Need a quick answer? Check our frequently asked questions for instant help.',
    },
    cta: { ko: 'FAQ 보기', en: 'View FAQ' },
  },
};

export const FOOTER_CONTENT = {
  description: {
    ko: 'AI 기술로 모든 책을 생생하게 만드는 혁신적인 플랫폼',
    en: 'An innovative platform that brings all books to life with AI technology.',
  },
  tagline: {
    ko: '클릭 한 번으로 모든 책에 생명을 불어넣습니다',
    en: 'Bring every book to life with a single click.',
  },
  product: {
    title: { ko: '제품', en: 'Product' },
    links: [
      { label: { ko: 'epti 사용하기', en: 'Use epti' }, href: '#' },
      { label: { ko: '요금제', en: 'Pricing' }, href: '#' },
      { label: { ko: '기능', en: 'Features' }, href: '#' },
    ],
  },
  support: {
    title: { ko: '지원', en: 'Support' },
    links: [
      { label: { ko: '문의하기', en: 'Contact Us' }, href: '#' },
      { label: { ko: '도움말 센터', en: 'Help Center' }, href: '#' },
      { label: { ko: '개인정보 처리방침', en: 'Privacy Policy' }, href: '#' },
      { label: { ko: '서비스 이용약관', en: 'Terms of Service' }, href: '#' },
    ],
  },
  copyright: '© 2025 epti. All rights reserved.',
};
