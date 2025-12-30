import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
      // Navigation
      nav: {
        home: 'Inicio',
        properties: 'Propiedades',
        about: 'Nosotros',
        altruistic: 'Proyecto Altruista',
        contact: 'Contacto',
        dashboard: 'Panel',
        login: 'Iniciar Sesión',
        logout: 'Cerrar Sesión',
      },
      // Home page
      home: {
        hero: {
          title1: "Exclusividad y",
          title2: "Confidencialidad",
          title3: "en Bienes Raíces de Lujo",
          subtitle: "Conectamos clientes de alto patrimonio con propiedades excepcionales, manteniendo su privacidad como máxima prioridad",
          cta1: "Explorar Propiedades",
          cta2: "Solicitar Consultoría"
        },
        stats: {
          transactions: "En Transacciones",
          clients: "Clientes UHNW",
          satisfaction: "Satisfacción",
          countries: "Países"
        },
        showcase: {
          title: "Historias de Éxito Recientes",
          subtitle: "Un vistazo a las propiedades excepcionales que hemos transaccionado con éxito"
        },
        private: {
          title: "Colección Privada",
          subtitle: "Accede a nuestro portafolio exclusivo de propiedades off-market. Disponible solo para compradores verificados con capacidad financiera comprobada.",
          feature1: "50+ Listados Exclusivos",
          feature2: "Solo Compradores Verificados",
          feature3: "Protegido por NDA",
          cta: "Solicitar Acceso",
          note: "Requiere verificación KYC y prueba de fondos"
        },
        privacy: {
          title: "Cómo Protegemos Tu Privacidad",
          subtitle: "Tu confidencialidad es primordial. Así es como la garantizamos."
        },
        services: {
          confidentiality: {
            title: "Confidencialidad Absoluta",
            desc: "Tu privacidad es nuestra máxima prioridad. Todas las transacciones se manejan con la máxima discreción."
          },
          verification: {
            title: "Solo Compradores Verificados",
            desc: "Verificación rigurosa de KYC y prueba de fondos garantiza solo compradores serios."
          },
          offmarket: {
            title: "Acceso Off-Market",
            desc: "Acceso exclusivo a propiedades nunca listadas públicamente, protegiendo la privacidad del vendedor."
          },
          altruistic: {
            title: "Lujo con Propósito",
            desc: "Parte de cada transacción apoya nuestra misión de proporcionar refugio a quienes lo necesitan."
          }
        },
        altruistic: {
          badge: "Lujo con Propósito",
          title: "Cada Transacción Crea Impacto",
          description: "Creemos que quienes han sido bendecidos con riqueza tienen la responsabilidad de ayudar a quienes no tienen hogar. Una parte de cada transacción va directamente a proporcionar vivienda segura para personas sin hogar.",
          stat1: "Personas Alojadas",
          stat2: "Donados",
          cta: "Conoce Nuestra Misión"
        },
        cta: {
          title: "¿Listo para Comenzar tu Viaje?",
          subtitle: "Ya sea comprando o vendiendo, proporcionamos la discreción y experiencia que mereces.",
          buy: "Quiero Comprar",
          sell: "Quiero Vender"
        }
      },
      // Services
      services: {
        title: 'Nuestros Servicios',
        confidentiality: {
          title: 'Confidencialidad Absoluta',
          description: 'Protegemos la identidad de nuestros clientes con estrictos protocolos de seguridad y acuerdos de confidencialidad.',
        },
        kyc: {
          title: 'Verificación KYC',
          description: 'Sistema de conocimiento del cliente que garantiza transacciones seguras y filtrado de propiedades según capacidad.',
        },
        matching: {
          title: 'Matching Inteligente',
          description: 'Ahorramos tiempo mostrando únicamente propiedades que se ajustan perfectamente al perfil y presupuesto del cliente.',
        },
        global: {
          title: 'Alcance Global',
          description: 'Acceso a propiedades exclusivas en los mercados más prestigiosos del mundo, desde Dubai hasta Marbella.',
        },
      },
      // Properties
      properties: {
        title: 'Propiedades Exclusivas',
        filters: 'Filtros',
        type: 'Tipo',
        priceRange: 'Rango de Precio',
        location: 'Ubicación',
        bedrooms: 'Habitaciones',
        apply: 'Aplicar Filtros',
        clear: 'Limpiar',
        noResults: 'No se encontraron propiedades',
        requestInfo: 'Solicitar Información',
        saveProperty: 'Guardar Propiedad',
        scheduleViewing: 'Agendar Visita',
      },
      // Dashboard
      dashboard: {
        welcome: 'Bienvenido',
        buyer: {
          title: 'Panel de Comprador',
          savedProperties: 'Propiedades Guardadas',
          viewings: 'Visitas Programadas',
          kycStatus: 'Estado KYC',
          pofStatus: 'Estado Prueba de Fondos',
        },
        seller: {
          title: 'Panel de Vendedor',
          myProperties: 'Mis Propiedades',
          addProperty: 'Añadir Propiedad',
          statistics: 'Estadísticas',
        },
        agent: {
          title: 'Panel de Agente',
          clients: 'Clientes',
          properties: 'Propiedades Asignadas',
          requests: 'Solicitudes Pendientes',
        },
      },
      // KYC & POF
      verification: {
        kyc: {
          title: 'Verificación KYC',
          subtitle: 'Complete su verificación para acceder a propiedades exclusivas',
          submit: 'Enviar Documentos',
          pending: 'En Revisión',
          approved: 'Aprobado',
          rejected: 'Rechazado',
        },
        pof: {
          title: 'Prueba de Fondos',
          subtitle: 'Verifique su capacidad financiera para acceder a propiedades premium',
          amount: 'Monto Disponible',
          submit: 'Enviar Prueba',
        },
      },
      // Altruistic Project
      altruistic: {
        title: 'Proyecto Altruista',
        subtitle: 'Dando oportunidades a quienes no tienen un techo',
        description: 'Parte de nuestros beneficios se destinan a crear plataformas de acceso a vivienda para personas sin hogar. Cada transacción de lujo contribuye a cambiar vidas.',
        impact: 'Nuestro Impacto',
        beneficiaries: 'Beneficiarios',
        donated: 'Donado',
        projects: 'Proyectos Activos',
      },
      // Contact
      contact: {
        title: 'Contacto',
        subtitle: 'Estamos aquí para ayudarle',
        name: 'Nombre',
        email: 'Email',
        phone: 'Teléfono',
        subject: 'Asunto',
        message: 'Mensaje',
        send: 'Enviar',
        success: 'Mensaje enviado correctamente',
      },
      // Common
      common: {
        loading: 'Cargando...',
        error: 'Error',
        success: 'Éxito',
        save: 'Guardar',
        cancel: 'Cancelar',
        delete: 'Eliminar',
        edit: 'Editar',
        view: 'Ver',
        back: 'Volver',
        next: 'Siguiente',
        previous: 'Anterior',
        submit: 'Enviar',
        search: 'Buscar',
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        properties: 'Properties',
        about: 'About',
        altruistic: 'Altruistic Project',
        contact: 'Contact',
        dashboard: 'Dashboard',
        login: 'Login',
        logout: 'Logout',
      },
      home: {
        hero: {
          title1: "Exclusivity and",
          title2: "Confidentiality",
          title3: "in Luxury Real Estate",
          subtitle: "We connect high-net-worth clients with exceptional properties, keeping their privacy as our top priority",
          cta1: "Explore Properties",
          cta2: "Request Consultation"
        },
        stats: {
          transactions: "In Transactions",
          clients: "UHNW Clients",
          satisfaction: "Satisfaction Rate",
          countries: "Countries"
        },
        showcase: {
          title: "Recent Success Stories",
          subtitle: "A glimpse of the exceptional properties we've successfully transacted"
        },
        private: {
          title: "Private Collection",
          subtitle: "Access our exclusive portfolio of off-market properties. Available only to verified buyers with proven financial capacity.",
          feature1: "50+ Exclusive Listings",
          feature2: "Verified Buyers Only",
          feature3: "NDA Protected",
          cta: "Request Access",
          note: "Requires KYC verification and proof of funds"
        },
        privacy: {
          title: "How We Protect Your Privacy",
          subtitle: "Your confidentiality is paramount. Here's how we ensure it."
        },
        services: {
          confidentiality: {
            title: "Absolute Confidentiality",
            desc: "Your privacy is our top priority. All transactions are handled with the utmost discretion."
          },
          verification: {
            title: "Verified Buyers Only",
            desc: "Rigorous KYC and proof of funds verification ensures serious buyers only."
          },
          offmarket: {
            title: "Off-Market Access",
            desc: "Exclusive access to properties never listed publicly, protecting seller privacy."
          },
          altruistic: {
            title: "Luxury with Purpose",
            desc: "Part of every transaction supports our mission to provide shelter for those in need."
          }
        },
        altruistic: {
          badge: "Luxury with Purpose",
          title: "Every Transaction Creates Impact",
          description: "We believe that those who have been blessed with wealth have a responsibility to help those without shelter. A portion of every transaction goes directly to providing safe housing for people experiencing homelessness.",
          stat1: "People Housed",
          stat2: "Donated",
          cta: "Learn About Our Mission"
        },
        cta: {
          title: "Ready to Begin Your Journey?",
          subtitle: "Whether buying or selling, we provide the discretion and expertise you deserve.",
          buy: "I Want to Buy",
          sell: "I Want to Sell"
        }
      },
      services: {
        title: 'Our Services',
        confidentiality: {
          title: 'Absolute Confidentiality',
          description: 'We protect our clients\' identity with strict security protocols and confidentiality agreements.',
        },
        kyc: {
          title: 'KYC Verification',
          description: 'Customer knowledge system that ensures secure transactions and property filtering based on capacity.',
        },
        matching: {
          title: 'Intelligent Matching',
          description: 'We save time by showing only properties that perfectly match the client\'s profile and budget.',
        },
        global: {
          title: 'Global Reach',
          description: 'Access to exclusive properties in the world\'s most prestigious markets, from Dubai to Marbella.',
        },
      },
      properties: {
        title: 'Exclusive Properties',
        filters: 'Filters',
        type: 'Type',
        priceRange: 'Price Range',
        location: 'Location',
        bedrooms: 'Bedrooms',
        apply: 'Apply Filters',
        clear: 'Clear',
        noResults: 'No properties found',
        requestInfo: 'Request Information',
        saveProperty: 'Save Property',
        scheduleViewing: 'Schedule Viewing',
      },
      dashboard: {
        welcome: 'Welcome',
        buyer: {
          title: 'Buyer Dashboard',
          savedProperties: 'Saved Properties',
          viewings: 'Scheduled Viewings',
          kycStatus: 'KYC Status',
          pofStatus: 'Proof of Funds Status',
        },
        seller: {
          title: 'Seller Dashboard',
          myProperties: 'My Properties',
          addProperty: 'Add Property',
          statistics: 'Statistics',
        },
        agent: {
          title: 'Agent Dashboard',
          clients: 'Clients',
          properties: 'Assigned Properties',
          requests: 'Pending Requests',
        },
      },
      verification: {
        kyc: {
          title: 'KYC Verification',
          subtitle: 'Complete your verification to access exclusive properties',
          submit: 'Submit Documents',
          pending: 'Under Review',
          approved: 'Approved',
          rejected: 'Rejected',
        },
        pof: {
          title: 'Proof of Funds',
          subtitle: 'Verify your financial capacity to access premium properties',
          amount: 'Available Amount',
          submit: 'Submit Proof',
        },
      },
      altruistic: {
        title: 'Altruistic Project',
        subtitle: 'Giving opportunities to those without a roof',
        description: 'Part of our profits go towards creating housing access platforms for homeless people. Every luxury transaction contributes to changing lives.',
        impact: 'Our Impact',
        beneficiaries: 'Beneficiaries',
        donated: 'Donated',
        projects: 'Active Projects',
      },
      contact: {
        title: 'Contact',
        subtitle: 'We are here to help you',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        subject: 'Subject',
        message: 'Message',
        send: 'Send',
        success: 'Message sent successfully',
      },
      common: {
        loading: 'Loading...',
        error: 'Error',
        success: 'Success',
        save: 'Save',
        cancel: 'Cancel',
        delete: 'Delete',
        edit: 'Edit',
        view: 'View',
        back: 'Back',
        next: 'Next',
        previous: 'Previous',
        submit: 'Submit',
        search: 'Search',
      },
    },
  },
  ar: {
    translation: {
      nav: {
        home: 'الرئيسية',
        properties: 'العقارات',
        about: 'من نحن',
        altruistic: 'المشروع الخيري',
        contact: 'اتصل بنا',
        dashboard: 'لوحة التحكم',
        login: 'تسجيل الدخول',
        logout: 'تسجيل الخروج',
      },
      home: {
        hero: {
          title1: "التفرد و",
          title2: "السرية",
          title3: "في العقارات الفاخرة",
          subtitle: "نربط العملاء ذوي الثروات العالية بعقارات استثنائية، مع الحفاظ على خصوصيتهم كأولوية قصوى",
          cta1: "استكشف العقارات",
          cta2: "طلب استشارة"
        },
        stats: {
          transactions: "في المعاملات",
          clients: "عملاء UHNW",
          satisfaction: "معدل الرضا",
          countries: "دول"
        },
        showcase: {
          title: "قصص نجاح حديثة",
          subtitle: "لمحة عن العقارات الاستثنائية التي تم تداولها بنجاح"
        },
        private: {
          title: "المجموعة الخاصة",
          subtitle: "الوصول إلى محفظتنا الحصرية من العقارات خارج السوق. متاح فقط للمشترين المعتمدين ذوي القدرة المالية المثبتة.",
          feature1: "50+ قوائم حصرية",
          feature2: "مشترون معتمدون فقط",
          feature3: "محمي بـ NDA",
          cta: "طلب الوصول",
          note: "يتطلب التحقق من KYC وإثبات الأموال"
        },
        privacy: {
          title: "كيف نحمي خصوصيتك",
          subtitle: "سريتك هي الأهم. إليك كيف نضمن ذلك."
        },
        services: {
          confidentiality: {
            title: "السرية المطلقة",
            desc: "خصوصيتك هي أولويتنا القصوى. يتم التعامل مع جميع المعاملات بأقصى قدر من السرية."
          },
          verification: {
            title: "مشترون معتمدون فقط",
            desc: "التحقق الصارم من KYC وإثبات الأموال يضمن مشترين جاديين فقط."
          },
          offmarket: {
            title: "الوصول خارج السوق",
            desc: "وصول حصري إلى عقارات لم يتم إدراجها علنًا أبدًا، مما يحمي خصوصية البائع."
          },
          altruistic: {
            title: "الفخامة بهدف",
            desc: "جزء من كل معاملة يدعم مهمتنا لتوفير المأوى لمن يحتاجون إليه."
          }
        },
        altruistic: {
          badge: "الفخامة بهدف",
          title: "كل معاملة تخلق تأثيرًا",
          description: "نعتقد أن أولئك الذين تم منحهم الثروة لديهم مسؤولية لمساعدة أولئك الذين ليس لديهم مأوى. يذهب جزء من كل معاملة مباشرة لتوفير سكن آمن للأشخاص الذين يعانون من التشرد.",
          stat1: "أشخاص تم إيواؤهم",
          stat2: "تم التبرع به",
          cta: "تعرف على مهمتنا"
        },
        cta: {
          title: "هل أنت مستعد لبدء رحلتك؟",
          subtitle: "سواء كنت تشتري أو تبيع، نحن نقدم السرية والخبرة التي تستحقها.",
          buy: "أريد الشراء",
          sell: "أريد البيع"
        }
      },
      services: {
        title: 'خدماتنا',
        confidentiality: {
          title: 'السرية المطلقة',
          description: 'نحمي هوية عملائنا ببروتوكولات أمنية صارمة واتفاقيات سرية.',
        },
        kyc: {
          title: 'التحقق من العميل',
          description: 'نظام معرفة العميل الذي يضمن معاملات آمنة وتصفية العقارات حسب القدرة.',
        },
        matching: {
          title: 'المطابقة الذكية',
          description: 'نوفر الوقت من خلال عرض العقارات التي تتناسب تمامًا مع ملف العميل وميزانيته.',
        },
        global: {
          title: 'الوصول العالمي',
          description: 'الوصول إلى عقارات حصرية في أرقى أسواق العالم، من دبي إلى ماربيا.',
        },
      },
      properties: {
        title: 'عقارات حصرية',
        filters: 'الفلاتر',
        type: 'النوع',
        priceRange: 'نطاق السعر',
        location: 'الموقع',
        bedrooms: 'غرف النوم',
        apply: 'تطبيق الفلاتر',
        clear: 'مسح',
        noResults: 'لم يتم العثور على عقارات',
        requestInfo: 'طلب معلومات',
        saveProperty: 'حفظ العقار',
        scheduleViewing: 'جدولة المعاينة',
      },
      dashboard: {
        welcome: 'مرحباً',
        buyer: {
          title: 'لوحة المشتري',
          savedProperties: 'العقارات المحفوظة',
          viewings: 'المعاينات المجدولة',
          kycStatus: 'حالة التحقق',
          pofStatus: 'حالة إثبات الأموال',
        },
        seller: {
          title: 'لوحة البائع',
          myProperties: 'عقاراتي',
          addProperty: 'إضافة عقار',
          statistics: 'الإحصائيات',
        },
        agent: {
          title: 'لوحة الوكيل',
          clients: 'العملاء',
          properties: 'العقارات المخصصة',
          requests: 'الطلبات المعلقة',
        },
      },
      verification: {
        kyc: {
          title: 'التحقق من العميل',
          subtitle: 'أكمل التحقق للوصول إلى العقارات الحصرية',
          submit: 'إرسال المستندات',
          pending: 'قيد المراجعة',
          approved: 'موافق عليه',
          rejected: 'مرفوض',
        },
        pof: {
          title: 'إثبات الأموال',
          subtitle: 'تحقق من قدرتك المالية للوصول إلى العقارات المميزة',
          amount: 'المبلغ المتاح',
          submit: 'إرسال الإثبات',
        },
      },
      altruistic: {
        title: 'المشروع الخيري',
        subtitle: 'إعطاء الفرص لمن ليس لديهم سقف',
        description: 'يتم تخصيص جزء من أرباحنا لإنشاء منصات الوصول إلى السكن للأشخاص المشردين. كل معاملة فاخرة تساهم في تغيير الحياة.',
        impact: 'تأثيرنا',
        beneficiaries: 'المستفيدون',
        donated: 'المتبرع به',
        projects: 'المشاريع النشطة',
      },
      contact: {
        title: 'اتصل بنا',
        subtitle: 'نحن هنا لمساعدتك',
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        phone: 'الهاتف',
        subject: 'الموضوع',
        message: 'الرسالة',
        send: 'إرسال',
        success: 'تم إرسال الرسالة بنجاح',
      },
      common: {
        loading: 'جاري التحميل...',
        error: 'خطأ',
        success: 'نجاح',
        save: 'حفظ',
        cancel: 'إلغاء',
        delete: 'حذف',
        edit: 'تعديل',
        view: 'عرض',
        back: 'رجوع',
        next: 'التالي',
        previous: 'السابق',
        submit: 'إرسال',
        search: 'بحث',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    supportedLngs: ['es', 'en', 'ar'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
