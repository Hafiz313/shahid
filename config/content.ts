// ============================================
// Centralized Content — All text sourced here
// ============================================

const basePath = "/shahid";

export const siteConfig = {
  title: "Muhammad Shahid — Senior Application Developer",
  description:
    "Senior Mobile Application Developer & Team Lead with 6+ years of experience in Android (Java, Kotlin) and 4+ years in Flutter (Dart). Building high-performance cross-platform apps.",
  url: "https://mshahid.dev", // TODO: Update with your domain URL
  ogImage: `${basePath}/images/profile.png`,
};

export const personal = {
  name: "Muhammad Shahid",
  firstName: "Shahid",
  role: "Senior Application Developer",
  email: "m.shahid3313@gmail.com",
  phone: "(+92) 03214180710",
  // TODO: Add your LinkedIn profile URL below
  linkedin: "https://linkedin.com/in/muhammad-shahid",
  // TODO: Add your GitHub profile URL below
  github: "https://github.com/muhammad-shahid",
  location: "Lahore, Pakistan",
  profileImage: `${basePath}/images/profile.png?v=3`,
  // TODO: Place your PDF resume in public/ directory and update this path if needed
  resumeUrl: `${basePath}/Talha_resume.pdf`,
};

export const hero = {
  greeting: "Hello, I'm",
  name: "Muhammad Shahid",
  title: "Senior Application Developer & Team Lead",
  tagline:
    "Mobile Development Expert with ~6 years of experience in native Android (Java/Kotlin) and ~4 years in cross-platform Flutter (Dart). I design, build, and deploy high-performance applications on Apple App Store, Google Play Store, and Huawei AppGallery.",
  cta: {
    primary: "View My Projects",
    secondary: "Get in Touch",
  },
  stats: [
    { value: "6+", label: "Years Experience" },
    { value: "4+", label: "Years Flutter" },
    { value: "16+", label: "Apps Delivered" },
    { value: "3", label: "App Stores Published" },
  ],
};

export const about = {
  heading: "About Me",
  paragraphs: [
    "I am a Senior Mobile Application Developer and Team Lead with around 6 years of experience in Android Mobile App Development (Java, Kotlin) and 4 years of experience specializing in Flutter Hybrid Mobile App Development (Dart). I combine deep technical expertise with a strong focus on clean architecture, scalable code, and delivering exceptional user experiences.",
    "Throughout my career, I have played a pivotal role in designing, architecting, and managing mobile solutions across multiple domains — including Fintech, Healthcare, Workforce Management, Education, E-commerce, and Tourism. I oversee the full app lifecycle from concept and API integration to App Store, Play Store, and Huawei AppGallery deployments.",
    "My core strength lies in leveraging modern architectural patterns (MVVM, BLoC, Provider, GetX), integrating complex third-party APIs (Agora real-time Video/Audio calls, Stripe payment gateways, Google Maps), and writing reliable, maintainable code backed by continuous testing and post-deployment monitoring.",
    "I pride myself on a professional attitude, strong communication skills, and delivering high-quality, value-driven applications that exceed client expectations and drive business growth.",
  ],
  resumeLabel: "Download Resume",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  description: string;
  tags: string[];
  highlights: string[];
  image: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: "be-mindpower",
    title: "Be MindPower",
    subtitle: "FinTech Crypto Wallet & Encrypted Communication Platform",
    role: "Senior Application Developer & Team Lead",
    description:
      "A comprehensive FinTech crypto ecosystem featuring a multi-currency digital wallet supporting USDC, USDT, BTC, and ETH. Integrated with PayCrypto and Bridge payment gateways, Matrix Protocol encrypted messaging, KYC identity verification, and Multi-Factor Authentication (MFA).",
    tags: ["Flutter", "Crypto Wallet", "PayCrypto", "Matrix Protocol", "KYC", "MFA"],
    highlights: [
      "Multi-currency digital crypto wallet supporting USDC, USDT, BTC, and ETH",
      "Secure payment gateway integration with PayCrypto and Bridge",
      "End-to-end encrypted real-time communication powered by Matrix Protocol",
      "Automated identity verification (KYC) and Multi-Factor Authentication (MFA)",
    ],
    image: "/images/projects/be_mindpower.png",
    color: "#3B82F6",
  },
  {
    id: "american-lyceum-staff",
    title: "American Lyceum (Staff App)",
    subtitle: "SLMS School Management Platform",
    role: "Senior Application Developer / Flutter Specialist",
    description:
      "A versatile SLMS School app made with Flutter featuring HR, Accountant, and Attendance management functionalities. Offers an intuitive interface for staff members to register for courses, track progress, and manage certificates.",
    tags: ["Flutter", "Dart", "HR Management", "Firebase", "REST APIs"],
    highlights: [
      "Integrated HR, Accountant, and Attendance management workflows",
      "Course registration, progress tracking, and certificate management",
      "Modern Flutter interface optimized for performance and reliability",
    ],
    image: "/images/projects/american_lyceum.png",
    color: "#3B82F6",
  },
  {
    id: "musandam-winter",
    title: "Musandam Winter",
    subtitle: "Government Tourism Application (Oman)",
    role: "Lead Mobile Application Developer",
    description:
      "A government tourism application designed for the Musandam province of Oman. Enhances travel experiences with seamless booking services for hotels, rental cars, flights, and local events.",
    tags: ["Flutter", "Google Maps", "Stripe", "REST APIs", "Localization"],
    highlights: [
      "Hotel, Flight, and Car Rental booking integrations",
      "Interactive Google Maps navigation and location-based discovery",
      "Secure online payment processing via Stripe Gateway",
    ],
    image: "/images/projects/musandam.png",
    color: "#10B981",
  },
  {
    id: "slms-360",
    title: "SLMS 360",
    subtitle: "Smart Workforce & HR Management Platform",
    role: "Senior Application Developer",
    description:
      "A smart workforce management application designed to streamline employee operations and HR processes, enhancing organizational productivity through centralized management.",
    tags: ["Flutter", "Dart", "Payroll", "HR Integration", "SQLite"],
    highlights: [
      "Attendance, Leave, and Overtime management modules",
      "Salary management, payroll details, and employee vouchers",
      "Streamlined communication and operations with HR departments",
    ],
    image: "/images/projects/slms360.png",
    color: "#8B5CF6",
  },
  {
    id: "cyan-care",
    title: "Cyan Care (Care Cyan)",
    subtitle: "Doctor Appointment & Patient Booking App",
    role: "Mobile Application Developer",
    description:
      "A healthcare app operating in Saudi Arabia that makes healthcare accessible by enabling patients to search for doctors, consult recommendations, and book appointments easily.",
    tags: ["Flutter", "Healthcare", "REST APIs", "App Localization", "Saudi Arabia"],
    highlights: [
      "Easy doctor search and appointment booking system",
      "Localized user interface tailored for Saudi Arabian users",
      "Streamlined patient-doctor communication channels",
    ],
    image: "/images/projects/cyan_care.png",
    color: "#06B6D4",
  },
  {
    id: "cyan-doctor",
    title: "Cyan Doctor App",
    subtitle: "Health Management & Doctor Portal",
    role: "Mobile Application Developer",
    description:
      "A cutting-edge health management application for healthcare professionals in Saudi Arabia. Facilitates symptom checkers, virtual consultations, and medication reminders.",
    tags: ["Flutter", "Virtual Consultations", "Real-Time Chat", "Node.js", "Firebase"],
    highlights: [
      "Virtual patient consultations and real-time communication",
      "Symptom checker integration and medication reminders",
      "Personalized health insights dashboard",
    ],
    image: "/images/projects/cyan_doctor.png",
    color: "#0284C7",
  },
  {
    id: "eworkforce-portal",
    title: "E WorkForce Employee Portal",
    subtitle: "Comprehensive HR & Employee System",
    role: "Senior Application Developer",
    description:
      "An enterprise-grade employee management portal designed to simplify HR processes, boost productivity, and automate employee shift and request tracking.",
    tags: ["Flutter", "Enterprise HR", "State Management", "REST APIs"],
    highlights: [
      "Attendance & Overtime request approvals",
      "Quizzes, assessments, and paystub digital access",
      "Substitute employee requests and history tracking",
    ],
    image: "/images/projects/eworkforce.png",
    color: "#EC4899",
  },
  {
    id: "toddlers-app",
    title: "Toddlers App",
    subtitle: "Early Childhood Care & Education Platform",
    role: "Mobile Application Developer",
    description:
      "An all-in-one management solution for early childhood care and education. Handles daily activities, meal plans, health records, and caregiver-parent communications.",
    tags: ["Flutter", "Child Care", "Push Notifications", "Firebase", "UI/UX"],
    highlights: [
      "Daily activity and check-in / check-out attendance tracking",
      "Meal, nutrition plans, health and vaccination records",
      "Direct, real-time communication between caregivers and parents",
    ],
    image: "/images/projects/toddlers.png",
    color: "#F59E0B",
  },
  {
    id: "gpt-stories-for-kids",
    title: "GPT Stories For Kids",
    subtitle: "AI Dynamic Children's Storytelling",
    role: "Mobile Application Developer",
    description:
      "An interactive iOS/Android app utilizing ChatGPT API to generate customized children's stories based on selected themes, characters, and educational settings.",
    tags: ["Flutter", "ChatGPT API", "AI Integration", "iOS", "Dart"],
    highlights: [
      "AI-driven dynamic story generator with ChatGPT API",
      "Customizable theme, character, and setting selections",
      "Engaging UI designed for young readers and parents",
    ],
    image: "/images/projects/gpt_stories.png",
    color: "#A855F7",
  },
  {
    id: "etolling",
    title: "ETolling",
    subtitle: "E-Tolling & Parking Management System",
    role: "Android / Flutter Developer",
    description:
      "A robust application for managing e-tolling and parking services. Streamlines payment processing, tracks toll/parking usage, and delivers real-time updates.",
    tags: ["Flutter", "Android Native", "Payment Gateway", "GPS Tracking"],
    highlights: [
      "Real-time parking and toll usage tracking",
      "Automated payment gateway processing",
      "Instant status updates and digital receipts",
    ],
    image: "/images/projects/etolling.png",
    color: "#10B981",
  },
  {
    id: "sahara-app",
    title: "Sahara (Hum Sab Ka Sahara)",
    subtitle: "Community Welfare & Aid Platform",
    role: "Mobile Application Developer",
    description:
      "A community welfare application helping connect people in need of food or rations with local donors and volunteers for swift assistance.",
    tags: ["Flutter", "Android", "Google Maps", "Community Aid"],
    highlights: [
      "Location-based food and ration request posting",
      "Direct contact facilitation between donors and recipients",
      "Community aid network for quick relief dispatch",
    ],
    image: "/images/projects/sahara.png",
    color: "#EF4444",
  },
  {
    id: "food-delivery",
    title: "Food Delivery & Rider App",
    subtitle: "Order & Dispatch Platform",
    role: "Android Native / Flutter Developer",
    description:
      "A comprehensive food ordering system facilitating customer menu browsing, restaurant preparation, and rider delivery tracking without waiting in line.",
    tags: ["Android (Java/Kotlin)", "Flutter", "GPS Tracking", "Order Dispatch"],
    highlights: [
      "Dual application ecosystem (Customer & Rider apps)",
      "Real-time order tracking and queue-less pickup management",
      "Location-based restaurant search and ordering",
    ],
    image: "/images/projects/food_delivery.png",
    color: "#F97316",
  },
  {
    id: "alfatah-electronics",
    title: "Al Fatah Electronics Store App",
    subtitle: "Retail B2B Pricing & Inventory Portal",
    role: "Mobile Application Developer",
    description:
      "A retail application giving shopkeepers real-time access to electronic product rates, live pricing updates, and inventory stock availability.",
    tags: ["Flutter", "Inventory Management", "B2B Retail", "REST APIs"],
    highlights: [
      "Live price updates and stock availability tracking",
      "User-friendly product browsing and order management",
      "Seamless backend synchronization for retail purchasing decisions",
    ],
    image: "/images/projects/alfatah.png",
    color: "#3B82F6",
  },
  {
    id: "dogluv-user",
    title: "DogluvUser",
    subtitle: "Pet Matchmaking & Social App",
    role: "Mobile Application Developer",
    description:
      "An innovative mobile application using a swipe-based interface to connect dog lovers for pet adoption, playdates, or responsible breeding.",
    tags: ["Flutter", "Swipe Interface", "In-App Chat", "Geolocation"],
    highlights: [
      "Swipe-based pet matching algorithm",
      "In-app messaging and pet user profiles",
      "Location-based matching to foster community engagement",
    ],
    image: "/images/projects/dogluv.png",
    color: "#EC4899",
  },
  {
    id: "pak-earth4u",
    title: "Pak Earth4u App",
    subtitle: "Property Search & Real Estate App",
    role: "Junior Android Developer",
    description:
      "A real estate property sale application featuring map navigation, property search, and detailed property specification listings.",
    tags: ["Android Native", "Java", "Retrofit", "REST APIs", "JSON Parsing"],
    highlights: [
      "Custom layout designs with responsive XML interfaces",
      "Web API integration and JSON parsing using Retrofit library",
      "Property search by location and filters",
    ],
    image: "/images/projects/pak_earth4u.png",
    color: "#84CC16",
  },
  {
    id: "american-lyceum-student",
    title: "American Lyceum (Student App)",
    subtitle: "Student Educational Portal",
    role: "Mobile Application Developer",
    description:
      "An educational portal application for students of American Lyceum International School, supporting course materials, announcements, and school community interaction.",
    tags: ["Flutter", "iOS", "Android", "Education Portal"],
    highlights: [
      "Cross-platform student dashboard for iOS & Android",
      "Streamlined access to course materials and notices",
      "School-family communication bridge",
    ],
    image: "/images/projects/lyceum_student.png",
    color: "#6366F1",
  },
  {
    id: "british-lyceum",
    title: "British Lyceum",
    subtitle: "Online Educational System Portal",
    role: "Mobile Application Developer",
    description:
      "An online educational portal providing accessible, quality distance learning resources for students worldwide.",
    tags: ["Flutter", "Online Learning", "REST APIs", "Dart"],
    highlights: [
      "Global online education accessibility",
      "Structured learning modules and student resources",
      "Smooth performance across low and high-spec devices",
    ],
    image: "/images/projects/british_lyceum.png",
    color: "#0EA5E9",
  },
];

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  type: "fulltime" | "internship" | "contract";
  accomplishments: string[];
}

export const experiences: Experience[] = [
  {
    id: "smart-computing",
    company: "Smart Computing Pvt Ltd",
    role: "Mobile Application Developer",
    duration: "06/2025 – Present",
    type: "fulltime",
    accomplishments: [
      "Leading Super App development across Android, iOS, and Windows platforms using Flutter & cross-platform technologies",
      "Integrated Matrix Protocol with End-to-End Encryption (E2EE) and WebRTC for secure real-time communication",
      "Built FinTech infrastructure incorporating PayCrypto, Bridge, and digital crypto wallet functionality",
      "Architected modular application design, implemented push notifications, and enforced rigorous security protocols",
    ],
  },
  {
    id: "brain-stormers",
    company: "THE BRAIN STORMERS (AMERICAN LYCEUM)",
    role: "Senior Application Developer & Team Lead",
    duration: "01/04/2021 – 05/2025",
    type: "fulltime",
    accomplishments: [
      "Lead mobile application development team, designing and shipping scalable Flutter & Dart apps",
      "Oversee deployment and lifecycle management on Apple App Store, Google Play Store, and Huawei AppGallery",
      "Implement Agora Video/Audio Call integrations, Push Notifications, and Stripe Payment Gateways",
      "Manage Application Localization, App Theming, Google Maps API, SQLite, and Firebase integration",
      "Conduct extensive multi-device cross-platform testing, debugging, and post-deployment performance optimization",
    ],
  },
  {
    id: "khalis-group",
    company: "KHALIS GROUP OF INDUSTRIES",
    role: "Android / Flutter Developer",
    duration: "01/02/2020 – 30/03/2021",
    type: "fulltime",
    accomplishments: [
      "Developed native Android (Java, Kotlin) and hybrid Flutter applications in a collaborative agile environment",
      "Built Food Delivery, Food Delivery Rider App, ETolling, and Sahara (Hum Sab Ka Sahara) applications",
      "Implemented RESTful API services, SQLite databases, and responsive UI components",
    ],
  },
  {
    id: "ak-tech-zone",
    company: "AK TECH ZONE",
    role: "Android Developer",
    duration: "01/06/2019 – 30/12/2019",
    type: "fulltime",
    accomplishments: [
      "Worked as Junior Application Developer building native Android solutions in Java",
      "Developed Transport On Demand (TOD), Pak Earth4u App, 99 Names Of Allah, and Lahore Motorway City App",
      "Integrated Retrofit library for JSON parsing and RESTful API consumption",
    ],
  },
  {
    id: "house-of-professionals",
    company: "HOUSE OF PROFESSIONALS",
    role: "Internship in Android Application Development",
    duration: "01/06/2018 – 31/12/2018",
    type: "internship",
    accomplishments: [
      "Completed intensive Android Development program under Punjab Skills Development Authority (PSDA)",
      "Mastered fundamental Android SDK, Java programming, UI layouts, and database handling",
      "Awarded official certificate by The Punjab Board of Technical Education (PBTE)",
    ],
  },
];

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Mobile Development",
    icon: "📱",
    skills: [
      "Flutter Hybrid App Dev",
      "Android Native (Java, Kotlin)",
      "iOS Development",
      "Dart",
      "Android Studio",
      "Xcode",
    ],
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: ["RESTful APIs", "Node.js", "Retrofit API Integration", "Postman", "WebSockets"],
  },
  {
    title: "Programming Languages",
    icon: "💻",
    skills: ["Dart", "Java", "Kotlin", "JavaScript"],
  },
  {
    title: "State Management",
    icon: "⚡",
    skills: ["BLoC", "GetX", "Provider", "State Management"],
  },
  {
    title: "Architecture",
    icon: "🏗️",
    skills: ["MVVM Architecture", "Clean Architecture", "Repository Pattern", "Design Patterns"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["Firebase Firestore", "SQLite", "Firebase Realtime DB"],
  },
  {
    title: "Cloud Services",
    icon: "☁️",
    skills: ["Firebase Services", "Firebase Push Notifications", "Google Cloud APIs"],
  },
  {
    title: "Tools & Platforms",
    icon: "🔧",
    skills: [
      "Google Play Store Deployment",
      "Apple App Store Deployment",
      "Huawei AppGallery Deployment",
      "Git / GitHub",
      "Google Maps & GPS Tracking",
      "Stripe Payment Gateway",
      "PayTab Payment Gateway",
      "Agora Video/Audio Call Integration",
      "App Theming & Localization",
    ],
  },
];

// Tech stack items for the animated marquee
export const techStackItems = [
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
  { name: "Apple iOS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
  { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Xcode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg" },
  { name: "Stripe", icon: "https://cdn.simpleicons.org/stripe/635BFF" },
  { name: "Google Maps", icon: "https://cdn.simpleicons.org/googlemaps/4285F4" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
];

export const educationList = [
  {
    degree: "BS Computer Science",
    institution: "Bahauddin Zakariya University",
    duration: "03/04/2013 – 04/04/2018",
    location: "Pakistan",
    website: "https://www.bzu.edu.pk/",
  },
  {
    degree: "ICS (Intermediate in Computer Science)",
    institution: "Kips College Lahore",
    duration: "01/03/2011 – 01/03/2013",
    location: "Lahore, Pakistan",
    website: "https://kipscolleges.com/",
  },
  {
    degree: "Matriculation",
    institution: "KIPS School Lahore",
    duration: "01/03/2009 – 01/03/2011",
    location: "Lahore, Pakistan",
    website: "",
  },
];

export const achievements = [
  {
    id: "pbte-cert",
    name: "Android Application Development Certificate",
    issuer: "Punjab Board of Technical Education (PBTE) / PSDA",
    year: "2018",
  },
];

export const contact = {
  heading: "Let's Build Mobile Apps Together",
  subheading:
    "Have a mobile app idea, need a senior Flutter/Android consultant, or looking to scale your engineering team? Get in touch with me.",
  form: {
    namePlaceholder: "Your Name",
    emailPlaceholder: "your.email@example.com",
    messagePlaceholder: "Tell me about your project or opportunity...",
    submitLabel: "Send Message",
    submittingLabel: "Sending...",
  },
  success: "Message sent successfully! I'll get back to you promptly.",
  error: "Something went wrong. Please try again or email me directly at m.shahid3313@gmail.com.",
  emailTarget: "m.shahid3313@gmail.com",
};

export const footer = {
  copyright: `© ${new Date().getFullYear()} Muhammad Shahid. All rights reserved.`,
  tagline: "Building high-performance Android & Flutter applications.",
};
