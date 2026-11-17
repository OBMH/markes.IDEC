export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: 'core' | 'preventive';
  categoryLabel: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
}

export interface DoctorItem {
  id: string;
  name: string;
  roleLabel: string;
  description: string;
  focusPoints: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  aspectLabel: string;
}

export interface WorkingDay {
  day: string;
  dayIndex: number; // JS Date.getDay(): 0 = Sunday ... 5 = Friday, 6 = Saturday
  hours: string;
  isOpen: boolean;
}

export interface WhyChooseUsItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: 'implant' | 'shield' | 'sparkles' | 'stethoscope' | 'calendar' | 'mapPin';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const CLINIC_INFO = {
  nameEn: 'Elegant Dental Center Smile (EDCS )',
  nameShort: 'EDCS',
  nameAr: 'مركز إيدكس لتقويم وزراعة وتجميل الأسنان',
  heroTitle: 'ابتسامتك تستحق عناية تليق بها',
  heroDescription:
    'في مركز إيدكس Elegant Dental Center Smile (EDCS ) نجمع بين العناية بصحة أسنانك وجمال ابتسامتك، لنمنحك تجربة طبية تهتم بك في كل تفصيلة.',
  aboutTitle: 'نعتني بصحة ابتسامتك، لأن التفاصيل تصنع الفرق',
  aboutDescription:
    'في مركز إيدكس Elegant Dental Center Smile (EDCS ) نؤمن أن الابتسامة الصحية تبدأ من العناية الصحيحة. نقدم خدمات متخصصة في زراعة وتقويم وتجميل الأسنان، إلى جانب خدمات العناية بصحة الفم واللثة، مع اهتمام براحة المراجع وجودة تجربته منذ لحظة وصوله إلى المركز.',
  doctorsSectionTitle: 'خبرة طبية واهتمام بابتسامتك',
  doctorsSectionSubtitle:
    'يحرص الفريق الطبي في مركز إيدكس Elegant Dental Center Smile (EDCS ) على تقديم رعاية علاجية ووقائية متكاملة، تقوم على الاستماع الدقيق لاحتياجات كل مراجع، وشرح الخطة العلاجية بوضوح، وتوفير بيئة مريحة تضمن أعلى درجات الاهتمام.',
  gallerySectionTitle: 'جولة داخل Elegant Dental Center Smile (EDCS )',
  reviewsSectionTitle: 'ثقة مراجعيننا هي أجمل تقييم',
  reviewsDescription:
    'نعتز بثقة مراجعيننا ونسعى دائمًا لتقديم تجربة طبية تليق بتوقعاتهم، والاهتمام بكل ابتسامة يضعونها بين أيدينا.',
  bookingSectionTitle: 'خطوتك نحو ابتسامة أجمل تبدأ من هنا',
  locationSectionTitle: 'نحن بالقرب منك',
  workingHoursNote: 'نحن هنا لخدمتكم على مدار الساعة خلال أيام العمل.',
  // Exact verbatim address required by prompt — DO NOT shorten or alter
  fullAddressAr:
    'صنعاء - دار سلم - المقالح الجديد - قبل مستشفى ابو حرب الملصي 17 يوليو سابقا امام معهد رادفورد',
  cityCountryEn: "Sana'a, Yemen",
  googleMapsUrl: 'https://maps.app.goo.gl/pk1bqa4oQ8wCQHLi8',
  facebookUrl: 'https://www.facebook.com/share/1E5ruwxLq2/',
  phoneDisplay: '0776 800 058',
  phoneTel: '+967776800058',
  whatsappDisplay: '+967 776 800 058',
  whatsappNumber: '967776800058',
  whatsappUrl: 'https://wa.me/967776800058',
  secondaryPhoneDisplay: '+967 785 000 899',
  secondaryPhoneTel: '+967785000899',
  ratingValue: '4.9',
  ratingMax: '5',
  reviewsCount: 39,
  assets: {
    logo: '/assets/optimized/logo.webp',
    center1: '/assets/optimized/center1.webp',
    center2: '/assets/optimized/center2.webp',
    center3: '/assets/optimized/center3.webp',
  },
} as const;

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'dental-implants',
    number: '01',
    title: 'زراعة الأسنان',
    category: 'core',
    categoryLabel: 'التخصصات الأساسية',
    description:
      'تعويض الأسنان المفقودة بخيارات علاجية مدروسة تستعيد الوظيفة الطبيعية للأسنان والمظهر المتناسق للابتسامة مع المتابعة الدقيقة لكل مرحلة.',
    highlights: ['تقييم شامل لحالة الفك واللثة', 'خطة تعويضية مخصصة لكل مراجع'],
    image: '/assets/services/dental-implant.webp',
    imageAlt: 'نموذج طبي متخصص لزراعة الأسنان وتعويض الأسنان المفقودة',
  },
  {
    id: 'orthodontics',
    number: '02',
    title: 'تقويم الأسنان',
    category: 'core',
    categoryLabel: 'التخصصات الأساسية',
    description:
      'تصحيح اصطفاف الأسنان وإطباق الفكين بخطط تقويمية متدرجة تهدف إلى تحقيق توازن وظيفي وجمالي يمنحك ابتسامة متناسقة ومريحة.',
    highlights: ['دراسة اصطفاف الأسنان والإطباق', 'متابعة دورية منتظمة لتقدم الخطة'],
    image: '/assets/services/orthodontics.webp',
    imageAlt: 'تقويم الأسنان لتحسين اصطفاف الأسنان وتناسق الابتسامة',
  },
  {
    id: 'cosmetic-dentistry',
    number: '03',
    title: 'تجميل الأسنان',
    category: 'core',
    categoryLabel: 'التخصصات الأساسية',
    description:
      'العناية بالمظهر الجمالي للأسنان من حيث اللون والشكل والتناسق العام، بما ينسجم مع ملامح الوجه ويحافظ على سلامة الأسنان الطبيعية.',
    highlights: ['تحسين مظهر ولون الأسنان', 'عناية دقيقة بالتفاصيل الجمالية'],
    image: '/assets/services/cosmetic-dentistry.webp',
    imageAlt: 'فحص وتجميل الأسنان للعناية بجمال وتناسق الابتسامة',
  },
  {
    id: 'smile-care-design',
    number: '04',
    title: 'علاج وتجميل الابتسامة',
    category: 'core',
    categoryLabel: 'التخصصات الأساسية',
    description:
      'رعاية شاملة تجمع بين المعالجة السنية والتجميلية لإعادة الحيوية لابتسامتك، مع الاهتمام بصحة الأسنان واللثة كأساس لكل نتيجة جميلة.',
    highlights: ['دمج الرعاية العلاجية والتجميلية', 'اهتمام متكامل بصحة وجمال الابتسامة'],
    image: '/assets/services/smile-design.webp',
    imageAlt: 'استشارة وتخطيط علاج وتجميل الابتسامة في العيادة',
  },
];

export const PREVENTIVE_SERVICES: ServiceItem[] = [
  {
    id: 'scaling-stain-removal',
    number: '05',
    title: 'إزالة الجير والتصبغات',
    category: 'preventive',
    categoryLabel: 'العناية بصحة الفم والأسنان',
    description:
      'تنظيف احترافي لإزالة الرواسب الجيرية والتصبغات السطحية المتراكمة على الأسنان، مما يساعد على استعادة نظافة الأسنان وانتعاش الفم.',
    highlights: ['إزالة الرواسب الجيرية السطحية', 'تخفيف التصبغات الخارجية بأمان'],
    image: '/assets/services/scaling-polishing.webp',
    imageAlt: 'جلسة تنظيف الأسنان وإزالة الجير والتصبغات بأدوات طبية معقمة',
  },
  {
    id: 'gum-health',
    number: '06',
    title: 'الحفاظ على صحة اللثة',
    category: 'preventive',
    categoryLabel: 'العناية بصحة الفم والأسنان',
    description:
      'عناية وقائية مخصصة لدعم سلامة الأنسجة اللثوية وحمايتها من التهيج والالتهابات، لأن اللثة السليمة هي الركيزة الأساسية لثبات الأسنان.',
    highlights: ['فحص دوري لسلامة اللثة', 'إرشادات وقائية للعناية اليومية'],
    image: '/assets/services/gum-care.webp',
    imageAlt: 'فحص اللثة والعناية الوقائية بصحة الأنسجة الفموية',
  },
  {
    id: 'bacteria-reduction',
    number: '07',
    title: 'تقليل تراكم البكتيريا',
    category: 'preventive',
    categoryLabel: 'العناية بصحة الفم والأسنان',
    description:
      'إجراءات تنظيف وعناية وقائية تهدف إلى الحد من تراكم اللويحات البكتيرية في المناطق التي يصعب الوصول إليها بالفرشاة العادية.',
    highlights: ['تنظيف المناطق الدقيقة بين الأسنان', 'دعم بيئة فموية صحية ومتوازنة'],
    image: '/assets/aistudio/IMG-20261117-WA0018_241d26e5.jpg',
    imageAlt: 'عيادة معقمة ومجهزة في مركز إيدكس للعناية بنظافة الفم وتقليل تراكم البكتيريا',
  },
  {
    id: 'cavity-gum-prevention',
    number: '08',
    title: 'الوقاية من التسوس ومشاكل اللثة',
    category: 'preventive',
    categoryLabel: 'العناية بصحة الفم والأسنان',
    description:
      'المتابعة الدورية والكشف المبكر لحماية الأسنان من التسوس وتجنب تطور مشاكل اللثة قبل الحاجة إلى تدخلات علاجية معقدة.',
    highlights: ['فحص وقائي شامل ومبكر', 'حماية مستمرة لمينا الأسنان واللثة'],
    image: '/assets/aistudio/IMG-20261117-WA0017_3c7930ab.jpg',
    imageAlt: 'مرافق واستقبال مركز إيدكس المتكامل للعناية الوقائية والوقاية من التسوس ومشاكل اللثة',
  },
  {
    id: 'clean-healthy-smile',
    number: '09',
    title: 'الحفاظ على ابتسامة نظيفة وصحية',
    category: 'preventive',
    categoryLabel: 'العناية بصحة الفم والأسنان',
    description:
      'برنامج رعاية مستمر يمنحك إشراقة طبيعية ونظافة دائمة لأسنانك، ويعزز ثقتك بابتسامتك في حياتك اليومية.',
    highlights: ['متابعة دورية لصحة الفم', 'ابتسامة صحية ونظيفة تدوم طويلاً'],
    image: '/assets/aistudio/IMG-20261117-WA0015_a5f9c760.jpg',
    imageAlt: 'مرافق مركز إيدكس المجهزة للعناية المستمرة والحفاظ على ابتسامة نظيفة وصحية',
  },
];

export const ALL_SERVICES: ServiceItem[] = [...CORE_SERVICES, ...PREVENTIVE_SERVICES];

export const DOCTORS_LIST: DoctorItem[] = [
  {
    id: 'dr-mohammed-alfakhri',
    name: 'الدكتور محمد الفخري',
    roleLabel: 'الفريق الطبي — Elegant Dental Center Smile (EDCS )',
    description:
      'يقدم الرعاية الطبية السنية باهتمام بالغ بدقة الفحص ووضوح الخطة العلاجية، مع الحرص على راحة المراجع وتقديم تجربة علاجية هادئة ومطمئنة في كل زيارة.',
    focusPoints: [
      'عناية دقيقة بتشخيص الحالة وشرح خطوات الرعاية للمراجع',
      'اهتمام بأدق التفاصيل لضمان راحة المراجع وجودة النتيجة',
    ],
  },
  {
    id: 'dr-ghada-basha',
    name: 'الدكتورة غادة باشا',
    roleLabel: 'الفريق الطبي — Elegant Dental Center Smile (EDCS )',
    description:
      'تولي اهتمامًا خاصًا بتجربة المراجعين وتقديم رعاية لطيفة ومتأنية تجمع بين الحفاظ على صحة الفم والأسنان والعناية بالمظهر الجمالي للابتسامة.',
    focusPoints: [
      'رعاية طبية متأنية تراعي راحة واطمئنان المراجعين',
      'تركيز متوازن على صحة الأسنان واللثة وجمال الابتسامة',
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'clinic-suite-3',
    title: 'الجناح العلاجي والاستقبال الرئيسي',
    subtitle: 'بيئة طبية متكاملة',
    description:
      'تصميم عصري يجمع بين مكتب الاستشارة الطبية ووحدة المعالجة السنية المتطورة في مساحة واسعة ومريحة تحمل هوية إيدكس (EDCS ).',
    image: '/assets/optimized/center3.webp',
    aspectLabel: 'جناح العيادة والاستقبال',
  },
  {
    id: 'clinic-operatory-1',
    title: 'غرفة المعالجة والعناية السنية',
    subtitle: 'تجهيزات العيادة',
    description:
      'وحدة علاج أسنان حديثة مجهزة بشاشة عرض وإضاءة دقيقة في بيئة نظيفة وهادئة مصممة لراحة المراجع أثناء الجلسة.',
    image: '/assets/optimized/center1.webp',
    aspectLabel: 'وحدة المعالجة الطبية',
  },
  {
    id: 'clinic-lounge-2',
    title: 'صالة الاستقبال وانتظار المراجعين',
    subtitle: 'تجربة المراجعين — Elegant Dental Center Smile (EDCS )',
    description:
      'مساحة انتظار رحبة ومضاءة بعناية مع لمسات دافئة تمنح المراجعين شعورًا بالراحة والترحيب منذ لحظة وصولهم إلى المركز.',
    image: '/assets/optimized/center2.webp',
    aspectLabel: 'صالة الانتظار والترحيب',
  },
];

export const WORKING_HOURS: WorkingDay[] = [
  { day: 'الأحد', dayIndex: 0, hours: 'مفتوح 24 ساعة', isOpen: true },
  { day: 'الاثنين', dayIndex: 1, hours: 'مفتوح 24 ساعة', isOpen: true },
  { day: 'الثلاثاء', dayIndex: 2, hours: 'مفتوح 24 ساعة', isOpen: true },
  { day: 'الأربعاء', dayIndex: 3, hours: 'مفتوح 24 ساعة', isOpen: true },
  { day: 'الخميس', dayIndex: 4, hours: 'مفتوح 24 ساعة', isOpen: true },
  { day: 'الجمعة', dayIndex: 5, hours: 'مغلق', isOpen: false },
  { day: 'السبت', dayIndex: 6, hours: 'مفتوح 24 ساعة', isOpen: true },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: 'specialized-services',
    number: '01',
    title: 'خدمات متخصصة في زراعة وتقويم وتجميل الأسنان',
    description:
      'نوفر في مركز واحد التخصصات الأساسية لزراعة الأسنان وتقويمها وتجميل الابتسامة وفق خطط رعاية مدروسة.',
    iconName: 'implant',
  },
  {
    id: 'oral-gum-care',
    number: '02',
    title: 'اهتمام بصحة الفم واللثة',
    description:
      'نؤمن أن جمال الابتسامة يبدأ من لثة صحية وأسنان نظيفة، لذلك نخصص عناية متكاملة لإزالة الجير والوقاية من التسوس.',
    iconName: 'shield',
  },
  {
    id: 'patient-comfort',
    number: '03',
    title: 'عناية بالتفاصيل وراحة المراجع',
    description:
      'صُممت مرافق المركز وعياداته لتوفير أجواء هادئة ومريحة تهتم بتجربة المراجع منذ الاستقبال وحتى انتهاء الزيارة.',
    iconName: 'sparkles',
  },
  {
    id: 'known-doctors',
    number: '04',
    title: 'مجموعة من الأطباء بأسمائهم المعروفة',
    description:
      'يشرف على رعايتكم الدكتور محمد الفخري والدكتورة غادة باشا بحرص مباشر على جودة الرعاية واهتمام شخصي بكل مراجع.',
    iconName: 'stethoscope',
  },
  {
    id: 'easy-booking',
    number: '05',
    title: 'سهولة التواصل والحجز',
    description:
      'إمكانية طلب حجز موعدك مباشرة عبر واتساب أو الاتصال الهاتفي على مدار 24 ساعة طوال أيام العمل الأسبوعية.',
    iconName: 'calendar',
  },
  {
    id: 'accessible-location',
    number: '06',
    title: 'موقع واضح وسهل الوصول',
    description:
      'يقع المركز في صنعاء - دار سلم - المقالح الجديد أمام معهد رادفورد، مع إمكانية الوصول المباشر عبر خرائط Google.',
    iconName: 'mapPin',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-services',
    question: 'ما الخدمات التي يقدمها المركز؟',
    answer:
      'يقدم مركز إيدكس Elegant Dental Center Smile (EDCS ) خدمات متخصصة في زراعة الأسنان، تقويم الأسنان، تجميل الأسنان، وعلاج وتجميل الابتسامة، بالإضافة إلى خدمات العناية بصحة الفم والأسنان التي تشمل إزالة الجير والتصبغات، الحفاظ على صحة اللثة، تقليل تراكم البكتيريا، والوقاية من التسوس ومشاكل اللثة.',
  },
  {
    id: 'faq-booking',
    question: 'كيف يمكنني حجز موعد؟',
    answer:
      'يمكنك حجز موعد بسهولة من خلال تعبئة نموذج الحجز في الموقع (الاسم، رقم الهاتف، الخدمة المطلوبة، اليوم والوقت المناسبين) ثم الضغط على "إرسال طلب الحجز عبر واتساب" ليتم إرسال طلبك مباشرة إلى الرقم +967 776 800 058 لتأكيد الموعد من قبل المركز، أو عبر الاتصال المباشر على 0776 800 058 أو +967 785 000 899.',
  },
  {
    id: 'faq-location',
    question: 'أين يقع المركز؟',
    answer:
      'يقع المركز في: صنعاء - دار سلم - المقالح الجديد - قبل مستشفى ابو حرب الملصي 17 يوليو سابقا امام معهد رادفورد (Sana\'a, Yemen). كما يمكنك الضغط على زر "احصل على الاتجاهات" للوصول المباشر عبر Google Maps.',
  },
  {
    id: 'faq-whatsapp',
    question: 'كيف يمكنني التواصل عبر واتساب؟',
    answer:
      'يمكنك التواصل معنا مباشرة عبر واتساب على الرقم +967 776 800 058 في أي وقت، أو استخدام نموذج الحجز السريع في الموقع الذي يقوم بتجهيز رسالتك تلقائيًا وتحويلك إلى المحادثة المباشرة.',
  },
  {
    id: 'faq-implants',
    question: 'هل يقدم المركز خدمات زراعة الأسنان؟',
    answer:
      'نعم، تعد زراعة الأسنان من التخصصات الأساسية في مركز إيدكس Elegant Dental Center Smile (EDCS )، حيث يتم تقييم حالة المراجع ووضع خطة تعويضية مناسبة لاستعادة وظيفة ومظهر الأسنان.',
  },
  {
    id: 'faq-ortho-cosmetic',
    question: 'هل يقدم المركز خدمات تقويم وتجميل الأسنان؟',
    answer:
      'نعم، يقدم المركز خدمات متخصصة في تقويم الأسنان لتصحيح الاصطفاف، إلى جانب خدمات تجميل الأسنان وعلاج وتجميل الابتسامة والعناية الوقائية بنظافة الأسنان وصحة اللثة.',
  },
];
