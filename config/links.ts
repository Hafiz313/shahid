// ============================================
// External Links — Projects & Certifications
// ============================================

export interface ProjectLink {
  playStore?: string;
  appStore?: string;
  website?: string;
  github?: string;
}

export const projectLinks: Record<string, ProjectLink> = {
  "Be MindPower": {
    playStore: "https://play.google.com/store/apps/details?id=chat.bemindepower.bmpchat",
    appStore: "https://apps.apple.com/us/app/be-mindpower/id6759084577",
  },
  "American Lyceum (Staff App)": {
    playStore: "https://play.google.com/store/apps/details?id=com.americanlyceum.staff&hl=en",
    appStore: "https://apps.apple.com/pk/app/american-lyceum/id1602226260",
  },
  "Musandam Winter": {
    playStore: "https://drive.google.com/drive/folders/1rIexdXB3o7TqfXu5D-lJernBDUX8dum8",
    appStore: "https://apps.apple.com/pk/app/musandam-winter/id6743926200",
  },
  "SLMS 360": {
    playStore: "https://play.google.com/store/apps/details?id=com.brainstormer.slms360_management_app&pcampaignid=web_share",
    appStore: "https://apps.apple.com/pk/app/slms-360/id6740049911",
  },
  "Cyan Care (Care Cyan)": {
    playStore: "https://play.google.com/store/apps/details?id=com.app.cyan&hl=en",
    appStore: "https://apps.apple.com/pk/app/cyan-care-%D9%86%D8%A7%D9%8A%D8%B3-%D8%B1%D9%8A%D9%83/id6450167672",
  },
  "Cyan Doctor App": {
    playStore: "https://play.google.com/store/apps/details?id=com.app.cyan_doctor&hl=en",
    appStore: "https://apps.apple.com/pk/app/cyan-care-doctors/id6450171639",
  },
  "E WorkForce Employee Portal": {
    playStore: "",
    appStore: "",
  },
  "Toddlers App": {
    playStore: "https://play.google.com/store/apps/details?id=com.brainstormers.toddlers&pcampaignid=web_share",
    appStore: "https://apps.apple.com/pk/app/toddlers-app/id6670381835",
  },
  "GPT Stories For Kids": {
    appStore: "https://apps.apple.com/pk/app/gpt-stories-for-kids/id1668803305",
  },
  "ETolling": {
    playStore: "https://play.google.com/store/apps/details?id=com.connectslutions.e_tolling",
  },
  "Sahara (Hum Sab Ka Sahara)": {
    playStore: "https://play.google.com/store/apps/details?id=com.sahara.food.share&hl=en",
  },
  "Food Delivery & Rider App": {
    playStore: "https://play.google.com/store/apps/details?id=com.housecafe.android&hl=en_US&gl=PK",
  },
  "Al Fatah Electronics Store App": {
    playStore: "",
    appStore: "",
  },
  "DogluvUser": {
    playStore: "",
    appStore: "",
  },
  "Pak Earth4u App": {
    playStore: "https://play.google.com/store/apps/details?id=com.app.PAK.EARTH4U&hl=en",
  },
  "American Lyceum (Student App)": {
    playStore: "https://play.google.com/store/apps/details?id=com.lyceumgroupofschools.student&hl=en",
    appStore: "https://apps.apple.com/pk/app/american-lyceum-student/id1596906287",
  },
  "British Lyceum": {
    playStore: "https://play.google.com/store/apps/details?id=com.britishlyceum.blis",
  },
};

export interface CertificationLink {
  url: string;
  issuer?: string;
}

export const certificationLinks: Record<string, CertificationLink> = {
  "Android Application Development Certificate": {
    url: "",
    issuer: "Punjab Board of Technical Education (PBTE) / PSDA",
  },
};
