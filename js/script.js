// ======== SVG ICONS ========
const icons = {
  store:
    '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  play: '<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15C4.34,1.91 4.93,1.97 5.37,2.31L21.37,12.31C21.71,12.58 21.91,12.98 21.91,13.41C21.91,13.83 21.72,14.23 21.38,14.5L5.38,21.69C5.15,21.87 4.87,21.97 4.58,21.97C4.36,21.97 4.15,21.92 3.95,21.82C3.38,21.56 3,20.97 3,20.5Z"/></svg>',
  apple:
    '<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>',
  github:
    '<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>',
  package:
    '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0022 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
  link: '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>',
  lock: '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>',
};

// ======== PROJECT DATA ========
const projects = [
  {
    title: "WiseTrack SDK",
    company: "WiseTrack — Tehran, Iran",
    role: "Senior Mobile Engineer | SDK Architect",
    year: "2025 – Present",
    icon: "📡",
    logo: "wisetrack.png",
    iconBg: "rgb(72 91 119 / 36%)",
    platforms: ["sdk", "android", "ios", "flutter", "web", "unity"],
    description:
      "Production-grade multi-platform analytics and attribution SDK with deep linking, deferred attribution, fingerprint-based matching, and session lifecycle tracking across 5 platforms.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/wisetrack-io",
        icon: "github",
      },
      {
        label: "Maven",
        url: "https://central.sonatype.com/artifact/io.wisetrack.sdk/core",
        icon: "package",
      },
      {
        label: "CocoaPods",
        url: "https://cocoapods.org/pods/WiseTrackLib",
        icon: "package",
      },
      {
        label: "npm",
        url: "https://www.npmjs.com/package/wisetrack",
        icon: "package",
      },
      {
        label: "pub.dev",
        url: "https://pub.dev/packages/wisetrack",
        icon: "package",
      },
    ],
  },
  {
    title: "Tablo",
    company: "KiyaCo Group — USA",
    role: "Senior Flutter Developer",
    year: "2025 – 2026",
    icon: "💬",
    logo: "tablo.png",
    iconBg: "#0097b255",
    platforms: ["flutter", "android", "ios", "web"],
    description:
      "Real-time social messaging platform for group collaboration and private communication. Scalable chat architecture with persistent WebSocket connections and responsive PWA.",
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=group.tablo.app",
        icon: "play",
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/tablo-group/id6745711357",
        icon: "apple",
      },
    ],
  },
  {
    title: "Samdad Transportation",
    company: "Samdad Company — Iran",
    role: "Mobile Lead & Senior Flutter Developer",
    year: "2024 – 2025",
    icon: "🚍",
    logo: "samdad.png",
    iconBg: "rgb(96 26 233 / 30%)",
    platforms: ["sdk", "flutter", "android", "ios", "web"],
    description:
      "Nationwide multi-role school transportation system with 3 interconnected apps (Service, Family, Driver). Real-time GPS tracking, secure payments, and multilingual support.",
    links: [
      {
        label: "CafeBazaar",
        url: "https://cafebazaar.ir/developer/569968913163",
        icon: "store",
      },
      {
        label: "Myket",
        url: "https://myket.ir/developer/dev-84955",
        icon: "store",
      },
      {
        label: "pub.dev",
        url: "https://pub.dev/packages/traccar_flutter",
        icon: "package",
      },
      { label: "Samdad", url: "https://samdadapp.ir", icon: "link" },
    ],
  },
  {
    title: "Municipal Audit GIS",
    company: "Saafaa Co. — Mashhad & Karaj Municipality",
    role: "Senior Flutter Developer",
    year: "2024",
    icon: "🗺️",
    logo: "audit.png",
    iconBg: "rgb(67 75 222 / 43%)",
    platforms: ["flutter", "android", "ios"],
    description:
      "Offline-first geospatial audit platform with custom Spatialite database built from scratch in Flutter. Multi-layer map visualization (WMS, WFS, MBTiles) and dynamic form builder.",
    links: [{ label: "Government (Private)", url: null, icon: "lock" }],
  },
  {
    title: "Koomek",
    company: "Dayan Co. — Iran",
    role: "Senior Flutter Developer",
    year: "2024",
    icon: "🚗",
    logo: "koomek.png",
    iconBg: "rgb(65 65 144 / 33%)",
    platforms: ["flutter", "android", "web"],
    description:
      "Smart automotive marketplace connecting customers with service providers. Real-time service tracking and in-app payment workflows.",
    links: [
      {
        label: "CafeBazaar",
        url: "https://cafebazaar.ir/developer/713141075675",
        icon: "store",
      },
      { label: "Koomek", url: "https://koomek.com/", icon: "link" },
    ],
  },
  {
    title: "Etlo Super App",
    company: "Turkey Rahyab — Turkey",
    role: "Technical Lead & Flutter Developer",
    year: "2023 – 2024",
    icon: "🏦",
    logo: "etlo.png",
    iconBg: "rgb(12 133 253 / 33%)",
    platforms: ["flutter", "android", "ios"],
    description:
      "Large-scale consumer super application combining fintech, insurance, business services, and real estate. Modular architecture for rapid feature expansion across Turkish market.",
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/tr/app/etlo-find-business-services/id6633443866",
        icon: "apple",
      },
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=app.etlo",
        icon: "play",
      },
    ],
  },

  {
    title: "Hamechizdan",
    company: "Hamechizdan.ir — Iran",
    role: "Flutter Developer",
    year: "2023",
    icon: "🎓",
    logo: "hamechizdan.png",
    iconBg: "rgb(150 41 102 / 39%)",
    platforms: ["flutter", "android"],
    description:
      "Multimedia children's learning platform with offline content access, parental controls, multilingual experience, and subscription-based monetization.",
    links: [
      {
        label: "CafeBazaar",
        url: "https://cafebazaar.ir/app/com.hamechizdan.kids",
        icon: "store",
      },
    ],
  },
  {
    title: "Fleet Management System",
    company: "Shiraz Municipality — Iran",
    role: "Flutter Developer",
    year: "2023",
    icon: "🚐",
    logo: "fms.png",
    iconBg: "rgb(41 182 176 / 16%)",
    platforms: ["flutter", "android", "ios"],
    description:
      "Real-time fleet monitoring for public transportation with live map visualization, reporting dashboards, and reliable background location tracking.",
    links: [{ label: "Government (Private)", url: null, icon: "lock" }],
  },
  {
    title: "Beauticket",
    company: "Beauticket — Turkey",
    role: "Flutter Developer",
    year: "2022 – 2023",
    icon: "💄",
    logo: "beauticket.png",
    iconBg: "rgb(251 104 138 / 26%)",
    platforms: ["flutter", "android", "ios", "web"],
    description:
      "Beauty services marketplace with 3 interconnected apps (Business, Bookings, Admin Panel). Real-time booking, chat, location discovery, and secure payments.",
    links: [
      {
        label: "Bookings (App Store)",
        url: "https://apps.apple.com/tr/app/beauticket-bookings/id6448267879",
        icon: "apple",
      },
      {
        label: "Bookings (Google Play)",
        url: "https://play.google.com/store/apps/details?id=app.beauticket.customer",
        icon: "play",
      },
      {
        label: "Business (App Store)",
        url: "https://apps.apple.com/tr/app/beauticket-for-business/id1642896178",
        icon: "apple",
      },
      {
        label: "Business (Google Play)",
        url: "https://play.google.com/store/apps/details?id=app.beauticket.provider",
        icon: "play",
      },
    ],
  },
  {
    title: "APEX Logistics",
    company: "APEX Company — Iran",
    role: "Lead Mobile Application Developer",
    year: "2019 – 2022",
    icon: "🚚",
    logo: "apex.png",
    iconBg: "rgb(253 206 23 / 22%)",
    platforms: ["flutter", "android", "ios", "web"],
    description:
      "Cross-platform logistics system (iOS/Swift, Android/Java, Flutter/Web) for enterprise load management with real-time tracking and driver assignment workflows.",
    links: [],
  },
  {
    title: "Airwork",
    company: "Airwork — Canada",
    role: "iOS Developer",
    year: "2018 – 2019",
    icon: "📍",
    logo: "airwork.png",
    iconBg: "rgb(220 62 67 / 19%)",
    platforms: ["ios"],
    description:
      "iOS service request and workforce coordination platform with real-time communication and geolocation workflows.",
    links: [],
  },
  {
    title: "Municipal GIS & Billboard",
    company: "Saafaa Company — Iran",
    role: "Android Developer",
    year: "2016 – 2018",
    icon: "🗺️",
    logo: "saafaa.png",
    iconBg: "rgb(111 122 180 / 18%)",
    platforms: ["android"],
    description:
      "Advanced GIS applications for Yazd Municipality with multi-layer online/offline maps, routing, spatial visualization, and field documentation tools.",
    links: [],
  },
];

// ======== PLATFORM LABELS ========
const platformLabels = {
  sdk: "SDK",
  android: "Android",
  ios: "iOS",
  flutter: "Flutter",
  web: "Web",
  unity: "Unity",
};
const platformTagClass = {
  sdk: "tag-sdk",
  android: "tag-android",
  ios: "tag-ios",
  flutter: "tag-flutter",
  web: "tag-web",
  unity: "tag-unity",
};

// ======== RENDER ========
function renderProjects(filter = "all") {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = "";

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.platforms.includes(filter));

  filtered.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.style.animationDelay = `${i * 0.08}s`;

    const platformTags = p.platforms
      .filter((pl) => pl !== "sdk" || p.platforms.includes("sdk"))
      .map(
        (pl) =>
          `<span class="platform-tag ${platformTagClass[pl]}">${platformLabels[pl]}</span>`
      )
      .join("");

    const linkElements = p.links
      .map((l) => {
        if (!l.url) {
          return `<span class="card-link disabled">${icons[l.icon] || ""}${
            l.label
          }</span>`;
        }
        return `<a href="${l.url}" target="_blank" class="card-link">${
          icons[l.icon] || ""
        }${l.label}</a>`;
      })
      .join("");

    const iconContent = p.logo
      ? `<img src="assets/${p.logo}" alt="${p.title}" class="card-icon-img" />`
      : p.icon;

    card.innerHTML = `
      <div class="card-header">
        <div class="card-icon" style="background:${
          p.iconBg
        }">${iconContent}</div>
        <span class="card-year">${p.year}</span>
      </div>
      <div class="card-title">${p.title}</div>
      <div class="card-company">${p.company}</div>
      <div class="card-role">${p.role}</div>
      <div class="card-description">${p.description}</div>
      <div class="card-platforms">${platformTags}</div>
      ${p.links.length ? `<div class="card-links">${linkElements}</div>` : ""}
    `;

    grid.appendChild(card);

    // Trigger animation
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        card.classList.add("visible");
      });
    });
  });
}

// ======== FILTER ========
function filterProjects(filter) {
  // Update active button
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filter === filter);
  });

  renderProjects(filter);
}

// ======== COUNTS ========
function updateCounts() {
  document.getElementById("count-all").textContent = projects.length;
  ["sdk", "flutter", "android", "ios", "web"].forEach((p) => {
    const count = projects.filter((pr) => pr.platforms.includes(p)).length;
    const el = document.getElementById("count-" + p);
    if (el) el.textContent = count;
  });
}

// ======== SCROLL OBSERVER ========
function initObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".stat-item, .filter-bar").forEach((el) => {
    observer.observe(el);
  });
}

// ======== INIT ========
document.addEventListener("DOMContentLoaded", () => {
  updateCounts();
  renderProjects();
  initObserver();
});
