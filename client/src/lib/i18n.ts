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
          claim: "Where Luxury is a Wise Investment",
          title1: "Exclusividad y Confidencialidad",
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
        values: {
          since: {
            value: "Desde 2020",
            label: "Experiencia en Lujo"
          },
          network: {
            value: "Red Global",
            label: "Presencia Internacional"
          },
          satisfaction: {
            value: "Excelencia",
            label: "Satisfacción del Cliente"
          }
        },
        method: {
          title: "El Método LF CAPITAL",
          subtitle: "Nuestra red global de agentes elite conecta propiedades excepcionales con compradores cualificados en todo el mundo. Una villa en Toscana puede encontrar su comprador ideal en Dubai. Un penthouse en Tokio, su dueño perfecto en Nueva York.",
          pillar1: {
            title: "Red Global de Agentes Elite",
            desc: "Colaboramos con los mejores agentes del top 1% en 20+ ciudades clave. Barcelona, Londres, Dubai, Nueva York, Tokio, Seúl, Singapur..."
          },
          pillar2: {
            title: "Matching Inteligente Cross-Continental",
            desc: "Identificamos al comprador perfecto para cada propiedad, sin importar dónde se encuentre en el mundo. Analizamos patrones de viaje, intereses y capacidad financiera."
          },
          pillar3: {
            title: "Garantía de Exposición Cualificada",
            desc: "Tu propiedad será presentada a los 50 compradores más cualificados del mundo en 30 días. No publicidad masiva, solo matching preciso."
          },
          example: {
            title: "Ejemplo Real de Matching Global",
            property: "Villa en Marbella",
            propertyDesc: "€12M, vista al mar, 8 habitaciones",
            buyer: "Comprador en Dubai",
            buyerDesc: "UHNWI, busca segunda residencia en Europa",
            result: "\"Nuestro agente en Dubai identificó al comprador perfecto que viaja a Marbella cada verano. Venta cerrada en 45 días, sin publicidad pública.\""
          },
          guarantee: "\ud83c\udfaf Garantía: Tu propiedad será vista por los 50 compradores más cualificados del mundo en 30 días"
        },
        showcase: {
          title: "Transacciones Exitosas",
          subtitle: "Ejemplos de propiedades excepcionales que hemos vendido con total discreción y profesionalismo"
        },
        properties: {
          toscana: {
            title: "Villa Renacentista - Toscana",
            location: "Chianti, Toscana, Italia"
          },
          barcelona: {
            title: "Ático Modernista - Barcelona",
            location: "Eixample, Barcelona, España"
          },
          madrid: {
            title: "Palacete Histórico - Madrid",
            location: "Salamanca, Madrid, España"
          },
          london: {
            title: "Townhouse Georgiano - Londres",
            location: "Mayfair, Londres, Reino Unido"
          },
          seoul: {
            title: "Penthouse Ultramoderno - Seúl",
            location: "Gangnam, Seúl, Corea del Sur"
          },
          tokyo: {
            title: "Residencia Zen - Tokio",
            location: "Shibuya, Tokio, Japón"
          },
          singapore: {
            title: "Apartamento Marina Bay - Singapur",
            location: "Marina Bay, Singapur"
          },
          begur: {
            title: "Villa Mediterránea - Begur",
            location: "Costa Brava, Begur, España"
          }
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
        protection: {
          title: "Cómo Protegemos Tu Privacidad",
          subtitle: "Tu confidencialidad es primordial. Así es como la garantizamos."
        },
        altruistic: {
          badge: "Lujo con Propósito",
          title: "Lujo con Propósito Social",
          description: "Creemos que el éxito debe compartirse. Parte de nuestros beneficios se destinan a crear una plataforma que proporcione acceso a vivienda para personas que, por cualquier motivo, no tienen un techo. Ganando con personas adineradas, damos oportunidades a quienes más lo necesitan.",
          stat1: "Personas Alojadas",
          stat2: "Donados",
          cta: "Conocer Nuestro Proyecto"
        },
        finalCta: {
          title: "¿Listo para Comenzar?",
          subtitle: "Contáctenos para una consulta confidencial sobre sus necesidades inmobiliarias de lujo",
          cta: "Contactar Ahora"
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
          claim: "Where Luxury is a Wise Investment",
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
        values: {
          since: {
            value: "Since 2020",
            label: "Luxury Expertise"
          },
          network: {
            value: "Global Network",
            label: "International Presence"
          },
          satisfaction: {
            value: "Excellence",
            label: "Client Satisfaction"
          }
        },
        method: {
          title: "The LF CAPITAL Method",
          subtitle: "Our global network of elite agents connects exceptional properties with qualified buyers worldwide. A villa in Tuscany can find its ideal buyer in Dubai. A penthouse in Tokyo, its perfect owner in New York.",
          pillar1: {
            title: "Global Network of Elite Agents",
            desc: "We collaborate with the best agents in the top 1% across 20+ key cities. Barcelona, London, Dubai, New York, Tokyo, Seoul, Singapore..."
          },
          pillar2: {
            title: "Intelligent Cross-Continental Matching",
            desc: "We identify the perfect buyer for each property, regardless of where they are in the world. We analyze travel patterns, interests, and financial capacity."
          },
          pillar3: {
            title: "Qualified Exposure Guarantee",
            desc: "Your property will be presented to the 50 most qualified buyers in the world within 30 days. No mass advertising, only precise matching."
          },
          example: {
            title: "Real Global Matching Example",
            property: "Villa in Marbella",
            propertyDesc: "€12M, sea view, 8 bedrooms",
            buyer: "Buyer in Dubai",
            buyerDesc: "UHNWI, seeking second home in Europe",
            result: "\"Our agent in Dubai identified the perfect buyer who travels to Marbella every summer. Sale closed in 45 days, no public advertising.\""
          },
          guarantee: "\ud83c\udfaf Guarantee: Your property will be seen by the 50 most qualified buyers in the world within 30 days"
        },
        showcase: {
          title: "Successful Transactions",
          subtitle: "Examples of exceptional properties we have sold with complete discretion and professionalism"
        },
        properties: {
          toscana: {
            title: "Renaissance Villa - Tuscany",
            location: "Chianti, Tuscany, Italy"
          },
          barcelona: {
            title: "Modernist Penthouse - Barcelona",
            location: "Eixample, Barcelona, Spain"
          },
          madrid: {
            title: "Historic Mansion - Madrid",
            location: "Salamanca, Madrid, Spain"
          },
          london: {
            title: "Georgian Townhouse - London",
            location: "Mayfair, London, United Kingdom"
          },
          seoul: {
            title: "Ultra-Modern Penthouse - Seoul",
            location: "Gangnam, Seoul, South Korea"
          },
          tokyo: {
            title: "Zen Residence - Tokyo",
            location: "Shibuya, Tokyo, Japan"
          },
          singapore: {
            title: "Marina Bay Apartment - Singapore",
            location: "Marina Bay, Singapore"
          },
          begur: {
            title: "Mediterranean Villa - Begur",
            location: "Costa Brava, Begur, Spain"
          }
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
        protection: {
          title: "How We Protect Your Privacy",
          subtitle: "Your confidentiality is paramount. Here's how we ensure it."
        },
        altruistic: {
          badge: "Luxury with Purpose",
          title: "Luxury with Social Purpose",
          description: "We believe success should be shared. Part of our profits goes towards creating a platform that provides access to housing for people who, for any reason, don't have a roof over their heads. By earning with wealthy individuals, we give opportunities to those who need it most.",
          stat1: "People Housed",
          stat2: "Donated",
          cta: "Learn About Our Project"
        },
        finalCta: {
          title: "Ready to Get Started?",
          subtitle: "Contact us for a confidential consultation about your luxury real estate needs",
          cta: "Contact Now"
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
          claim: "Where Luxury is a Wise Investment",
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
        values: {
          since: {
            value: "منذ 2020",
            label: "خبرة في الفخامة"
          },
          network: {
            value: "شبكة عالمية",
            label: "حضور دولي"
          },
          satisfaction: {
            value: "التميز",
            label: "رضا العملاء"
          }
        },
        method: {
          title: "طريقة LF CAPITAL",
          subtitle: "شبكتنا العالمية من الوكلاء النخبة تربط العقارات الاستثنائية بالمشترين المؤهلين في جميع أنحاء العالم. فيلا في توسكانا يمكن أن تجد مشتريها المثالي في دبي. بنتهاوس في طوكيو، مالكه المثالي في نيويورك.",
          pillar1: {
            title: "شبكة عالمية من الوكلاء النخبة",
            desc: "نتعاون مع أفضل الوكلاء في أعلى 1٪ في أكثر من 20 مدينة رئيسية. برشلونة، لندن، دبي، نيويورك، طوكيو، سيول، سنغافورة..."
          },
          pillar2: {
            title: "مطابقة ذكية عبر القارات",
            desc: "نحدد المشتري المثالي لكل عقار، بغض النظر عن مكان وجوده في العالم. نحلل أنماط السفر والاهتمامات والقدرة المالية."
          },
          pillar3: {
            title: "ضمان التعرض المؤهل",
            desc: "سيتم عرض عقارك على أفضل 50 مشترٍ مؤهل في العالم خلال 30 يومًا. لا إعلانات جماعية، فقط مطابقة دقيقة."
          },
          example: {
            title: "مثال حقيقي للمطابقة العالمية",
            property: "فيلا في ماربيلا",
            propertyDesc: "12 مليون يورو، إطلالة على البحر، 8 غرف نوم",
            buyer: "مشترٍ في دبي",
            buyerDesc: "UHNWI، يبحث عن منزل ثانٍ في أوروبا",
            result: "\"حدد وكيلنا في دبي المشتري المثالي الذي يسافر إلى ماربيلا كل صيف. أغلق البيع في 45 يومًا، بدون إعلانات عامة.\""
          },
          guarantee: "\ud83c\udfaf ضمان: سيشاهد عقارك أفضل 50 مشترٍ مؤهل في العالم خلال 30 يومًا"
        },
        showcase: {
          title: "معاملات ناجحة",
          subtitle: "أمثلة على العقارات الاستثنائية التي بعناها بسرية واحترافية كاملة"
        },
        properties: {
          toscana: {
            title: "فيلا عصر النهضة - توسكانا",
            location: "كيانتي، توسكانا، إيطاليا"
          },
          barcelona: {
            title: "بنتهاوس حداثي - برشلونة",
            location: "إيكسامبل، برشلونة، إسبانيا"
          },
          madrid: {
            title: "قصر تاريخي - مدريد",
            location: "سالامانكا، مدريد، إسبانيا"
          },
          london: {
            title: "منزل جورجي - لندن",
            location: "مايفير، لندن، المملكة المتحدة"
          },
          seoul: {
            title: "بنتهاوس فائق الحداثة - سيول",
            location: "غانغنام، سيول، كوريا الجنوبية"
          },
          tokyo: {
            title: "مقر زن - طوكيو",
            location: "شيبويا، طوكيو، اليابان"
          },
          singapore: {
            title: "شقة مارينا باي - سنغافورة",
            location: "مارينا باي، سنغافورة"
          },
          begur: {
            title: "فيلا متوسطية - بيغور",
            location: "كوستا برافا، بيغور، إسبانيا"
          }
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
        protection: {
          title: "كيف نحمي خصوصيتك",
          subtitle: "سريتك هي الأهم. إليك كيف نضمن ذلك."
        },
        altruistic: {
          badge: "الفخامة بهدف",
          title: "الفخامة بهدف اجتماعي",
          description: "نعتقد أن أولئك الذين تم منحهم الثروة لديهم مسؤولية لمساعدة أولئك الذين ليس لديهم مأوى. يذهب جزء من كل معاملة مباشرة لتوفير سكن آمن للأشخاص الذين يعانون من التشرد.",
          stat1: "أشخاص تم إيواؤهم",
          stat2: "تم التبرع به",
          cta: "تعرف على مهمتنا"
        },
        finalCta: {
          title: "هل أنت مستعد للبدء؟",
          subtitle: "اتصل بنا للحصول على استشارة سرية حول احتياجاتك العقارية الفاخرة",
          cta: "اتصل الآن"
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
