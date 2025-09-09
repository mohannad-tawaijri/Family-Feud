export type Answer = { text: string; points: number }
export type Question = { question: string; answers: Answer[] }

// 10 ألعاب × 6 أسئلة = 60 سؤال فريد مستوحى من أسلوب الاستبيانات
export const games: Question[][] = [
  // اللعبة 1
  [
    {
      question: 'أشياء تجدها في غرفة المعيشة',
      answers: [
        { text: 'الأريكة', points: 35 },
        { text: 'التلفاز', points: 25 },
        { text: 'طاولة القهوة', points: 15 },
        { text: 'السجاد', points: 10 },
        { text: 'الريموت', points: 8 },
        { text: 'الستائر', points: 7 }
      ]
    },
    {
      question: 'سبب يجعلك تتأخر عن العمل',
      answers: [
        { text: 'الزحام', points: 40 },
        { text: 'النوم المتأخر', points: 22 },
        { text: 'تعطل السيارة', points: 15 },
        { text: 'الطقس', points: 10 },
        { text: 'نسيان شيء', points: 7 },
        { text: 'حادث على الطريق', points: 6 }
      ]
    },
    {
      question: 'شيء لا تغادر المنزل بدونه',
      answers: [
        { text: 'الجوال', points: 38 },
        { text: 'المفاتيح', points: 22 },
        { text: 'المحفظة', points: 18 },
        { text: 'الكمامة/المناديل', points: 10 },
        { text: 'الماء', points: 7 },
        { text: 'سماعات', points: 5 }
      ]
    },
    {
      question: 'نشاط شائع في عطلة نهاية الأسبوع',
      answers: [
        { text: 'التسوّق', points: 28 },
        { text: 'الخروج مع العائلة/الأصدقاء', points: 24 },
        { text: 'مشاهدة فيلم', points: 18 },
        { text: 'مطعم/قهوة', points: 12 },
        { text: 'نوم/راحة', points: 10 },
        { text: 'رياضة', points: 8 }
      ]
    },
    {
      question: 'شيء تجده دائماً في الثلاجة',
      answers: [
        { text: 'الماء', points: 26 },
        { text: 'الحليب', points: 24 },
        { text: 'البيض', points: 18 },
        { text: 'الخضار', points: 14 },
        { text: 'صلصات/كيتشب', points: 10 },
        { text: 'الجبن', points: 8 }
      ]
    },
    {
      question: 'تطبيق تستخدمه يومياً',
      answers: [
        { text: 'واتساب/رسائل', points: 32 },
        { text: 'سناب', points: 22 },
        { text: 'يوتيوب', points: 18 },
        { text: 'خرائط/ملاحة', points: 12 },
        { text: 'تيك توك', points: 9 },
        { text: 'بريد إلكتروني', points: 7 }
      ]
    },
    {
      question: 'شيء يلفت انتباهك في أول لقاء',
      answers: [
        { text: 'الابتسامة', points: 26 },
        { text: 'الاهتمام بالنظافة', points: 22 },
        { text: 'أسلوب الكلام', points: 18 },
        { text: 'الثقة/الهدوء', points: 14 },
        { text: 'اللبس/التنسيق', points: 12 },
        { text: 'العيون/النظرات', points: 8 }
      ]
    }
  ],
  // اللعبة 2
  [
    {
      question: 'أكلة شعبية عربية',
      answers: [
        { text: 'كبسة', points: 34 },
        { text: 'مندي', points: 22 },
        { text: 'مجبوس', points: 14 },
        { text: 'منسف', points: 12 },
        { text: 'محشي', points: 10 },
        { text: 'شاورما', points: 8 }
      ]
    },
    {
      question: 'شيء تضعه على البيتزا',
      answers: [
        { text: 'جبن', points: 36 },
        { text: 'فطر', points: 18 },
        { text: 'زيتون', points: 16 },
        { text: 'بيبروني', points: 12 },
        { text: 'فلفل', points: 10 },
        { text: 'بصل', points: 8 }
      ]
    },
    {
      question: 'شيء تفعله قبل النوم',
      answers: [
        { text: 'تفقد الجوال', points: 28 },
        { text: 'تنظيف الأسنان', points: 22 },
        { text: 'وضوء/صلاة', points: 18 },
        { text: 'قراءة/ذكر', points: 14 },
        { text: 'مشاهدة شيء', points: 10 },
        { text: 'إعداد المنبه', points: 8 }
      ]
    },
    {
      question: 'أشياء في الحقيبة',
      answers: [
        { text: 'محفظة', points: 28 },
        { text: 'مفاتيح', points: 22 },
        { text: 'معقم/مناديل', points: 16 },
        { text: 'عطر', points: 12 },
        { text: 'سماعات', points: 12 },
        { text: 'جوال', points: 10 }
      ]
    },
    {
      question: 'كيف تعرف أن المطعم ممتاز؟',
      answers: [
        { text: 'الازدحام/طوابير', points: 28 },
        { text: 'تقييمات عالية', points: 24 },
        { text: 'نظافة المكان', points: 18 },
        { text: 'رائحة الأكل', points: 14 },
        { text: 'التقديم/الشكل', points: 10 },
        { text: 'ترشيح الأصدقاء', points: 6 }
      ]
    },
    {
      question: 'شيء تبحث عنه قبل شراء هاتف جديد',
      answers: [
        { text: 'عمر البطارية', points: 28 },
        { text: 'الكاميرا', points: 24 },
        { text: 'السعر', points: 18 },
        { text: 'المعالج/الأداء', points: 14 },
        { text: 'التخزين/الرام', points: 10 },
        { text: 'المراجعات/الدعم', points: 6 }
      ]
    }
  ],
  // اللعبة 3
  [
    {
      question: 'مهنة يحلم بها الأطفال',
      answers: [
        { text: 'طيار', points: 28 },
        { text: 'طبيب', points: 24 },
        { text: 'شرطي', points: 18 },
        { text: 'لاعب كرة', points: 14 },
        { text: 'مهندس', points: 10 },
        { text: 'رائد فضاء', points: 6 }
      ]
    },
    
    {
      question: 'شيء تسمعه في المطار',
      answers: [
        { text: 'النداءات', points: 30 },
        { text: 'أصوات العفش', points: 20 },
        { text: 'إقلاع الطائرات', points: 18 },
        { text: 'أصوات عربات', points: 12 },
        { text: 'بكاء أطفال', points: 10 },
        { text: 'صافرات/تفتيش', points: 10 }
      ]
    },
    {
      question: 'سبب يوقظك ليلاً',
      answers: [
        { text: 'الحمام', points: 26 },
        { text: 'طفل يبكي', points: 22 },
        { text: 'كابوس', points: 18 },
        { text: 'عطش/جوع', points: 14 },
        { text: 'ضجيج', points: 12 },
        { text: 'منبه', points: 8 }
      ]
    },
    {
      question: 'شيء يسبب الحساسية',
      answers: [
        { text: 'غبار', points: 40 },
        { text: ' الحيوانات', points:28 },
        { text: 'مكسرات', points: 12 },
        { text: 'عطور', points: 10 },
        { text: 'أدوية', points: 10 }
      ]
    },
    {
      question: 'نوع من الحلويات',
      answers: [
        { text: 'آيس كريم', points: 30 },
        { text: 'كيك', points: 22 },
        { text: 'كنافة/بقلاوة', points: 18 },
        { text: 'بسكويت', points: 12 },
        { text: 'معمول/تمر', points: 10 },
        { text: 'تشيز كيك', points: 8 }
      ]
    },
    {
      question: 'شيء تفعله قبل السفر',
      answers: [
        { text: 'تحضير الشنط', points: 30 },
        { text: 'تفقد الجواز/التذاكر', points: 24 },
        { text: 'تفقد الطقس/الخطة', points: 18 },
        { text: 'صرف عملة/نقود', points: 12 },
        { text: 'إبلاغ الأسرة', points: 10 },
        { text: 'شحن الأجهزة', points: 6 }
      ]
    }
  ],
  // اللعبة 4
  [
    {
      question: 'سبب لزيارة الطبيب',
      answers: [
        { text: 'نزلة برد', points: 28 },
        { text: 'ألم معدة', points: 22 },
        { text: 'صداع', points: 18 },
        { text: 'فحص دوري', points: 14 },
        { text: 'تحسس جلدي', points: 10 },
        { text: 'إصابة/التواء', points: 8 }
      ]
    },
    {
      question: 'شيء تشتريه من الصيدلية',
      answers: [
        { text: 'مسكنات', points: 32 },
        { text: 'فيتامينات', points: 20 },
        { text: 'مطهر/معقم', points: 16 },
        { text: 'ضمادات', points: 12 },
        { text: 'مرهم', points: 10 },
        { text: 'أدوات عناية', points: 10 }
      ]
    },
    {
      question: 'جهاز إلكتروني في المنزل',
      answers: [
        { text: 'تلفاز', points: 28 },
        { text: 'ثلاجة', points: 24 },
        { text: 'ميكرويف', points: 16 },
        { text: 'غسالة', points: 14 },
        { text: 'مكيف', points: 10 },
        { text: 'حاسوب', points: 8 }
      ]
    },
    {
      question: 'شيء تفعله لتخفيف التوتر',
      answers: [
        { text: 'المشي/رياضة', points: 26 },
        { text: 'الاستحمام', points: 20 },
        { text: 'القراءة/قرآن', points: 18 },
        { text: 'موسيقى', points: 14 },
        { text: 'قهوة/شاي', points: 12 },
        { text: 'تأمل/تنفس', points: 10 }
      ]
    },
    {
      question: 'مهمة منزلية يكرهها الكثير',
      answers: [
        { text: 'تنظيف الحمام', points: 28 },
        { text: 'غسيل الصحون', points: 24 },
        { text: 'كي الملابس', points: 16 },
        { text: 'كنس/مسح', points: 14 },
        { text: 'ترتيب الدولاب', points: 10 },
        { text: 'إخراج القمامة', points: 8 }
      ]
    },
    {
      question: 'أشياء على مكتب العمل',
      answers: [
        { text: 'حاسوب', points: 30 },
        { text: 'قلم/دفتر', points: 22 },
        { text: 'سماعة/هاتف', points: 16 },
        { text: 'زجاجة ماء', points: 12 },
        { text: 'منظّم/مشابك', points: 10 },
        { text: 'صورة عائلية', points: 10 }
      ]
    }
  ],
  // اللعبة 5
  [
    {
      question: 'مكان لأول موعد',
      answers: [
        { text: 'مقهى', points: 30 },
        { text: 'مطعم', points: 28 },
        { text: 'منتزه/مشي', points: 16 },
        { text: 'سينما', points: 12 },
        { text: 'فعالية/معرض', points: 8 },
        { text: 'شاطئ', points: 6 }
      ]
    },
    {
      question: 'هدية عيد ميلاد شائعة',
      answers: [
        { text: 'عطر', points: 32 },
        { text: 'ساعة/إكسسوار', points: 28 },
        { text: 'زهور/شوكولاتة', points: 18 },
        { text: 'بطاقة هدية', points: 12 },
  { text: 'ملابس', points: 10 },
  { text: 'أجهزة/سماعات', points: 8 }
      ]
    },
    {
      question: 'شيء يضيع كثيراً',
      answers: [
        { text: 'المفاتيح', points: 30 },
        { text: 'الجوال', points: 22 },
        { text: 'المحفظة', points: 18 },
        { text: 'الريموت', points: 12 },
        { text: 'السماعات', points: 10 },
        { text: 'الأقلام', points: 8 }
      ]
    },
    {
      question: 'شيء يذوب بالحرارة',
      answers: [
        { text: 'ثلج', points: 32 },
        { text: 'آيس كريم', points: 22 },
        { text: 'زبدة', points: 18 },
        { text: 'شمع', points: 12 },
        { text: 'جبن', points: 10 },
        { text: 'شكولاتة', points: 6 }
      ]
    },
 
    {
      question: 'شيء يدل على ذوقك الراقي',
      answers: [
        { text: 'اختيار العطر', points: 26 },
        { text: 'تنسيق الملابس', points: 22 },
        { text: 'ترتيب المنزل', points: 18 },
        { text: 'اختيارات الموسيقى', points: 14 },
        { text: 'الهدايا التي تقدّمها', points: 10 },
        { text: 'أسلوب الكلام', points: 8 }
      ]
    }
  ],
  // اللعبة 6
  [
    {
      question: 'شيء على شاطئ البحر',
      answers: [
        { text: 'رمال', points: 30 },
        { text: 'أمواج', points: 22 },
        { text: 'مظلات/كراسي', points: 16 },
        { text: 'صدف', points: 12 },
        { text: 'منقذ', points: 10 },
        { text: 'نظارات شمس', points: 10 }
      ]
    },
    {
      question: 'سبب يفشل الرجيم',
      answers: [
        { text: 'حب الحلويات', points: 28 },
        { text: 'مطاعم/عزومات', points: 24 },
        { text: 'قلة الالتزام', points: 18 },
        { text: 'تعب/جوع', points: 12 },
        { text: 'سفر', points: 10 },
        { text: 'ضغط نفسي', points: 8 }
      ]
    },
    {
      question: 'نشاط صباحي',
      answers: [
        { text: 'القهوة', points: 28 },
        { text: 'الاستحمام', points: 20 },
        { text: 'الفطور', points: 18 },
        { text: 'صلاة/ذكر', points: 14 },
        { text: 'رياضة خفيفة', points: 12 },
        { text: 'تفقد البريد', points: 8 }
      ]
    },
    {
      question: 'عادة تزيد إنتاجيتك',
      answers: [
        { text: 'تنظيم اليوم/قائمة مهام', points: 28 },
        { text: 'النوم الجيد', points: 22 },
        { text: 'التركيز بلا مشتتات', points: 18 },
        { text: 'ممارسة الرياضة', points: 14 },
        { text: 'فواصل قصيرة', points: 10 },
      ]
    },
    {
      question: 'شيء يميّز القائد الجيد',
      answers: [
        { text: 'العدل/الإنصاف', points: 26 },
        { text: 'الاستماع الجيد', points: 22 },
        { text: 'القدوة', points: 18 },
        { text: 'الحزم الهادئ', points: 14 },
        { text: 'تحفيز الفريق', points: 10 },
        { text: 'اتخاذ القرار', points: 8 }
      ]
    },
    {
      question: 'شيء تندم على شرائه أحياناً',
      answers: [
        { text: 'اشتراك لا تستخدمه', points: 28 },
        { text: 'ملابس غير مناسبة', points: 22 },
        { text: 'جهاز مبالغ فيه', points: 18 },
        { text: 'أكل زيادة', points: 14 },
        { text: 'أغراض مكررة', points: 10 },
      ]
    }
  ],
  // اللعبة 7
  [
    {
      question: 'شيء تفعله أثناء الانتظار',
      answers: [
        { text: 'الهاتف/سوشيال', points: 34 },
        { text: 'قراءة', points: 18 },
        { text: 'الاستماع للموسيقى', points: 16 },
        { text: 'ألعاب جوال', points: 12 },
        { text: 'تفكير/تخطيط', points: 10 },
        { text: 'محادثة', points: 10 }
      ]
    },
  {
      question: 'موضوع يثير الجدل في العائلة',
      answers: [
        { text: 'السياسة', points: 26 },
        { text: 'المال/الميراث', points: 24 },
        { text: 'اختيارات الزواج', points: 16 },
        { text: 'تربية الأبناء', points: 14 },
        { text: 'الرياضة', points: 10 },
        { text: 'من يقود السيارة', points: 10 }
      ]
    },
    {
      question: 'شيء يخاف منه الناس',
      answers: [
        { text: 'العناكب/حشرات', points: 24 },
        { text: 'الظلام', points: 22 },
        { text: 'الارتفاعات', points: 18 },
        { text: 'الزحافات/ثعابين', points: 14 },
        { text: 'الضيق/الازدحام', points: 12 },
        { text: 'التحدث أمام جمهور', points: 10 }
      ]
    },
    {
      question: 'مدينة سياحية مشهورة',
      answers: [
        { text: 'دبي', points: 28 },
        { text: 'باريس', points: 24 },
        { text: 'إسطنبول', points: 18 },
        { text: 'لندن', points: 14 },
        { text: 'كوالالمبور', points: 8 },
        { text: 'القاهرة', points: 8 }
      ]
    },
    {
      question: 'طبق شائع في الإفطار',
      answers: [
        { text: 'فول/حمص', points: 24 },
        { text: 'بيض', points: 22 },
        { text: 'فطائر/تميس', points: 18 },
        { text: 'جبن/لبنة', points: 14 },
        { text: 'كبدة', points: 12 },
        { text: 'كورنفلكس', points: 10 }
      ]
    },
    {
      question: 'لو ربحت وقت فراغ إضافي… ماذا تفعل؟',
      answers: [
        { text: 'نوم وتعويض راحة', points: 26 },
        { text: 'رياضة/مشّي', points: 22 },
        { text: 'قراءة/تعلم', points: 18 },
        { text: 'مشاهدة/ألعاب', points: 14 },
        { text: 'خروج مع الأصدقاء', points: 10 },
        { text: 'هواية مؤجلة', points: 8 }
      ]
    }
  ],
  // اللعبة 8
  [
    {
      question: 'أول شيء تفعله إذا مرضت',
      answers: [
        { text: 'راحة/نوم', points: 26 },
        { text: 'دواء منزلي', points: 20 },
        { text: 'زيارة طبيب', points: 18 },
        { text: 'شرب سوائل', points: 16 },
        { text: 'اتصال بالأهل', points: 10 },
        { text: 'بحث على الإنترنت', points: 10 }
      ]
    },
    {
      question: 'أشياء على طاولة الطعام',
      answers: [
        { text: 'أطباق/ملاعق', points: 28 },
        { text: 'ملح/فلفل', points: 20 },
        { text: 'ماء/عصير', points: 18 },
        { text: 'مناديل', points: 12 },
        { text: 'مفرش', points: 8 }
      ]
    },
    {
      question: 'هواية مكلفة',
      answers: [
        { text: 'تصوير', points: 24 },
        { text: 'سفر', points: 22 },
        { text: 'جمع الساعات/التحف', points: 18 },
        { text: 'أجهزة ألعاب', points: 14 },
        { text: 'غوص/رياضات', points: 12 },
        { text: 'RC/درون', points: 10 }
      ]
    },
    {
      question: 'شيء تفعله عندما تغضب',
      answers: [
        { text: 'الصمت/الانسحاب', points: 24 },
        { text: 'المشي/هواء', points: 22 },
        { text: 'التنفّس بعمق', points: 18 },
        { text: 'الاتصال بصديق', points: 14 },
        { text: 'أكل/شرب', points: 12 },
        { text: 'النوم', points: 10 }
      ]
    },
    {
      question: 'سبب يوقفك فيه شرطي المرور',
      answers: [
        { text: 'تجاوز السرعة', points: 34 },
        { text: 'استخدام الجوال', points: 20 },
        { text: 'عدم حزام الأمان', points: 18 },
        { text: 'قطع إشارة', points: 12 },
        { text: 'تظليل مخالف', points: 9 },
        { text: 'مخالفة وقوف', points: 7 }
      ]
    },
    {
      question: 'علامة على أن الشخص ذكي',
      answers: [
        { text: 'يلاحظ التفاصيل', points: 26 },
        { text: 'يسأل أسئلة جيدة', points: 22 },
        { text: 'حلول عملية', points: 18 },
        { text: 'هدوء وتركيز', points: 14 },
        { text: 'تعابير/لغة جسد', points: 10 },
        { text: 'يتعلم بسرعة', points: 8 }
      ]
    }
  ],
  // اللعبة 9
  [
   
    {
      question: 'وظيفة يمكن العمل بها من المنزل',
      answers: [
        { text: 'مبرمج/تقنية', points: 24 },
        { text: 'كاتب/مترجم', points: 20 },
        { text: 'مصمم', points: 18 },
        { text: 'مدرّب/دروس', points: 14 },
        { text: 'خدمة عملاء', points: 12 },
        { text: 'تسويق رقمي', points: 12 }
      ]
    },
    {
      question: 'شيء يذكرك بالطفولة',
      answers: [
        { text: 'رسوم كرتون', points: 24 },
        { text: 'حلويات/نستولوجيا', points: 20 },
        { text: 'ألعاب قديمة', points: 18 },
        { text: 'مدرسة/أصدقاء', points: 14 },
        { text: 'زيارات العائلة', points: 12 },
        { text: 'صور قديمة', points: 12 }
      ]
    },
    {
      question: 'سبب للاستيقاظ مبكراً',
      answers: [
        { text: 'العمل/المدرسة', points: 34 },
        { text: 'رحلة/سفر', points: 20 },
        { text: 'صلاة/عبادة', points: 18 },
        { text: 'رياضة', points: 12 },
        { text: 'موعد مهم', points: 10 },
        { text: 'الهدوء/الإنتاجية', points: 6 }
      ]
    },

    {
      question: 'عادة صغيرة تغيّر يومك للأفضل',
      answers: [
        { text: 'الشكر/الامتنان', points: 26 },
        { text: 'ترتيب السرير', points: 22 },
        { text: 'شرب ماء مبكرًا', points: 18 },
        { text: '10 دقائق مشي', points: 14 },
        { text: 'تحديد 3 مهام', points: 10 },
        { text: 'عدم لمس الهاتف أولاً', points: 8 }
      ]
    },
    {
      question: 'شيء تفعله لتحسين مزاجك بسرعة',
      answers: [
        { text: 'قهوة/شاي', points: 24 },
        { text: 'موسيقى', points: 20 },
        { text: 'مشوار قصير/مشي', points: 18 },
        { text: 'التواصل مع شخص تحبه', points: 14 },
        { text: 'حلو/شوكولاتة', points: 12 },
        { text: 'قيلولة قصيرة', points: 12 }
      ]
    },
    {
      question: 'موقف يسبب توتراً في العمل',
      answers: [
        { text: 'موعد نهائي قريب', points: 28 },
        { text: 'اجتماع مهم', points: 22 },
        { text: 'عرض تقديمي', points: 18 },
        { text: 'مشكلة مع عميل', points: 14 },
        { text: 'رسالة من المدير', points: 10 },
        { text: 'خلل تقني', points: 8 }
      ]
    },

  ],
  // اللعبة 10
  [
    {
      question: 'شيء تفعله في العيد',
      answers: [
        { text: 'زيارة الأقارب', points: 30 },
        { text: 'العيدية', points: 24 },
        { text: 'لبس جديد', points: 20 },
        { text: 'حلويات/قهوة', points: 12 },
        { text: 'تصوير/ذكريات', points: 10 },
      ]
    },
    {
      question: 'طبق رمضاني مشهور',
      answers: [
        { text: 'شوربة', points: 26 },
        { text: 'سمبوسة', points: 24 },
        { text: 'تمر', points: 18 },
        { text: 'فطاير', points: 14 },
        { text: 'سلطة', points: 10 },
        { text: 'مهلبية/قمر الدين', points: 8 }
      ]
    },
    {
      question: 'وجهة مفضلة في الشتاء',
      answers: [
        { text: 'البر/التخييم', points: 28 },
        { text: 'الجبل/منتجع', points: 20 },
        { text: 'مدينة دافئة', points: 18 },
        { text: 'استراحة/شاليه', points: 14 },
        { text: 'رحلة عمرة', points: 12 },
        { text: 'فعالية/مهرجان', points: 8 }
      ]
    },
    {
      question: 'شيء يسبب الإحراج',
      answers: [
        { text: 'التعثّر/السقوط', points: 34 },
        { text: 'نسيان الاسم', points: 25 },
        { text: 'بقعة على الملابس', points: 18 },
        { text: 'الانزلاق بالحديث', points: 12 },
        { text: 'صوت المعدة', points: 8 }
      ]
    },
    {
      question: 'نشاط ممتع مع الأصدقاء',
      answers: [
        { text: 'كشتة/رحلة', points: 26 },
        { text: 'ألعاب لوحية/ورقية', points: 22 },
        { text: 'مطعم/كوفي', points: 18 },
        { text: 'كرة قدم/رياضة', points: 14 },
        { text: 'سينما', points: 10 },
        { text: 'حفلة منزلية', points: 10 }
      ]
    },
    {
      question: 'عادة تريد التخلص منها',
      answers: [
        { text: 'تأجيل/مماطلة', points: 28 },
        { text: 'السهر', points: 22 },
        { text: 'الإفراط بالأكل', points: 18 },
        { text: 'الهاتف طول الوقت', points: 14 },
        { text: 'التدخين/مشروبات', points: 10 },
        { text: 'الفوضى', points: 8 }
      ]
    }
  ]
]

export default games
