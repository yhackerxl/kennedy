import type { User } from "@/features/portfolio/types/user";

export const USER = {
  firstName: "Kennedy",
  lastName: "Nnko",
  displayName: "Kennedy nnko",
  username: "yhackerxl",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Computer Repair",
    "Hardware & Software Troubleshooting",
    "Full Stack Web developer",
  ],
  address: "Arusha ,Tanzania",
  phoneNumber: "KzI1NTc1Mjk5NDM4MQ==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "a2VubmVkeW5ua29AZ21haWwuY29t", // base64 encoded
  website: "https://kennedynnko.com",
  jobTitle: "Full Stuck web Developer",
  jobs: [
    {
      title: "Senior Frontend Developer & UI Lead",
      company: "Teksafari",
      website: "https://teksafari.org",
    },
    // {
    //   title: "Founder",
    //   company: "Quaric",
    //   website: "https://quaric.com",
    // },
  ],
  //   about: `
  // Hello, World! I am Chánh Đại — a Design Engineer passionate about creating high-performance, user-centric software solutions with intuitive and engaging designs.

  // With 5+ years of experience, I specialize in building high-quality web and mobile applications using Next.js, React, TypeScript, and modern front-end technologies. Beyond work, I love exploring new technologies and turning ideas into reality through personal projects.

  // One of my key projects, [ZaDark](https://zadark.com), launched in 2022, enhances the Zalo experience on PC and Web, surpassing 80k+ downloads on [SourceForge](https://sourceforge.net/projects/zadark) and reaching 20k+ active users on the [Chrome Web Store](https://chromewebstore.google.com/detail/llfhpkkeljlgnjgkholeppfnepmjppob) (as of Sep 2025).

  // I'm also the creator of [React Wheel Picker](https://react-wheel-picker.chanhdai.com) — iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support. It has earned 4k+ weekly downloads on [npm](https://www.npmjs.com/package/@ncdai/react-wheel-picker) and was selected for [▲Vercel OSS Program](https://vercel.com/blog/summer-2025-oss-program#react-wheel-picker) summer 2025 cohort.

  // Let's connect and collaborate!
  //   `,
  //
  about: `
- **Technology Enthusiast & Software Developer** with hands-on experience in real-world problem solving and digital innovation.
- Skilled in **Web Development**, **Computer Repair**, **Phone Flashing & Unlocking**, **Hardware & Software Troubleshooting**, and **Graphic Design**.
- Experienced with **Next.js**, **React**, **TypeScript**, **HTML**, **CSS**, and modern development tools; focused on building functional, user-centered solutions.
- Founder of **VOTEC (Voice of Technology)**: providing tech services including device repairs, system installations, software solutions, and digital design.
- Passionate about learning, mentoring, and using technology to empower society; driven to become a producer, not just a consumer, of technology.
- Actively exploring **software development**, **automation**, and **emerging technologies** to create impactful personal and community-based projects.
`,
  avatar: "/audio/kenny.webp",
  ogImage: "/audio/kenny.webp",

  namePronunciationUrl: "/audio/chanhdai.mp3",
  timeZone: "Africa/Dar_es_Salaam",
  keywords: [
    "kennedy pandele",
    "kennedy nnko",
    "kenny",
    "vp creations",
    "vl creations",
    "votec",
    "voice of technology",
    "software developer tanzania",
    "web developer tanzania",
    "tech innovator",
    "computer repair expert",
    "phone flashing and unlocking",
    "graphic designer",
    "it support specialist",
    "technology mentor",
  ],

  dateCreated: "2025-12-31", // YYYY-MM-DD
} satisfies User;
