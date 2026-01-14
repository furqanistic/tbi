// File: client/src/lib/data/coursesData.js

export const courses = [
  {
    id: "ics-computer-science",
    title: "ICS Computer Science - Part 1",
    instructor: "Prof. Ahmed Khan",
    instructorRole: "Senior Computer Science Specialist",
    description: "Master the fundamentals of Computer Science with our comprehensive ICS Part 1 course. Designed for students aiming for excellence in board exams.",
    longDescription: "This course covers the entire ICS Part 1 syllabus, including Information Technology, Software, Hardware, and Programming fundamentals. Our expert instructor provides in-depth explanations and practical examples to ensure clarity and success.",
    price: 4999,
    rating: 4.8,
    students: 1250,
    lessons: 45,
    chapters: 8,
    duration: "24 Hours",
    level: "Intermediate",
    category: "ICS",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    whatYouWillLearn: [
      "Master Computer Science fundamentals for ICS Part 1",
      "Understand Hardware and Software interactions",
      "Learn about modern Information Networks",
      "Build a strong base for advanced undergraduate studies",
      "Get hands-on with practical programming concepts",
      "Master exam techniques for high scores"
    ],
    requirements: [
      "No prior Computer Science knowledge required",
      "A basic understanding of mathematics",
      "Access to a computer for practical application"
    ],
    whoThisCourseIsFor: [
      "Students currently enrolled in ICS Part 1",
      "Beginners curious about Computer Science basics",
      "Anyone wanting to strengthen their IT foundation"
    ],
    syllabus: [
      {
        title: "Basics of Information Technology",
        lessons: [
          { title: "Introduction to IT", duration: "45m" },
          { title: "Hardware and Software", duration: "60m" },
          { title: "Systems Software", duration: "50m" }
        ]
      },
      {
        title: "Information Networks",
        lessons: [
          { title: "Network Topologies", duration: "55m" },
          { title: "Data Communication", duration: "40m" },
          { title: "Transmission Media", duration: "65m" }
        ]
      }
    ]
  },
  {
    id: "css-current-affairs",
    title: "CSS Current Affairs 2026",
    instructor: "Sir Salman Ali",
    instructorRole: "CSS Mentor & Policy Analyst",
    description: "Stay ahead with the most comprehensive Current Affairs guide for CSS/PMS 2026. Focus on critical analysis and global perspectives.",
    longDescription: "Navigating the complex landscape of global and domestic affairs is key to CSS success. This course provides thematic analysis of current issues, from economic challenges to international relations, tailored specifically for competitive exam aspirants.",
    price: 8500,
    rating: 4.9,
    students: 850,
    lessons: 60,
    chapters: 12,
    duration: "35 Hours",
    level: "Advanced",
    category: "CSS",
    thumbnail: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?q=80&w=800&auto=format&fit=crop",
    whatYouWillLearn: [
      "Analyze Pakistan's current internal and external challenges",
      "Deep dive into global geopolitical shifts",
      "Understand international organizations and their roles",
      "Develop critical analysis skills for descriptive answers",
      "Connect historical trends with current events",
      "Learn to use facts and maps effectively in CSS exams"
    ],
    requirements: [
      "Interest in national and international political landscape",
      "Basic understanding of history and political science",
      "Regular habit of reading newspapers (recommended)"
    ],
    whoThisCourseIsFor: [
      "CSS / PMS Aspirants",
      "Competitive exam students",
      "Anyone interested in policy and Current Affairs"
    ],
    syllabus: [
      {
        title: "Pakistan's Internal Affairs",
        lessons: [
          { title: "Economic Challenges & Solutions", duration: "90m" },
          { title: "Political Stability in Pakistan", duration: "75m" },
          { title: "Social Issues & Human Rights", duration: "80m" }
        ]
      },
      {
        title: "Global Geopolitics",
        lessons: [
          { title: "Middle East Conflict Analysis", duration: "120m" },
          { title: "US-China Rivalry", duration: "110m" },
          { title: "Climate Change & Global Policy", duration: "95m" }
        ]
      }
    ]
  },
  {
    id: "fsc-pre-medical-biology",
    title: "FSc Pre-Medical Biology - Part 2",
    instructor: "Dr. Maria Fatima",
    instructorRole: "Educationist & Medical Advisor",
    description: "Excel in your Pre-Medical journey with detailed Biology lectures covering the complete FSc Part 2 syllabus.",
    longDescription: "Biology in Part 2 is crucial for MDCAT prep. This course simplifies complex biological concepts with diagrams, animations, and practice questions to help you score maximum in board exams.",
    price: 3999,
    rating: 4.7,
    students: 2100,
    lessons: 55,
    chapters: 10,
    duration: "30 Hours",
    level: "Intermediate",
    category: "FSc",
    thumbnail: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=800&auto=format&fit=crop",
    whatYouWillLearn: [
      "Comprehensive understanding of the FSc Part 2 Biology syllabus",
      "In-depth knowledge of Homeostasis and Support/Movement",
      "Mastery of complex biological processes through visuals",
      "Targeted preparation for MDCAT and NUML exams",
      "Effective diagram labeling and theory writing techniques",
      "Regular quizzes for progress tracking"
    ],
    requirements: [
      "Completed FSc Pre-Medical Part 1 Biology",
      "Basic interest in life sciences and medicine",
      "Willingness to practice drawing biological diagrams"
    ],
    whoThisCourseIsFor: [
      "FSc Pre-Medical Students",
      "Students preparing for MDCAT",
      "Life sciences enthusiasts"
    ],
    syllabus: [
      {
        title: "Homeostasis",
        lessons: [
          { title: "Osmoregulation in Plants", duration: "50m" },
          { title: "Excretion in Animals", duration: "60m" },
          { title: "Human Kidneys", duration: "70m" }
        ]
      },
      {
        title: "Support and Movement",
        lessons: [
          { title: "Skeletal System", duration: "65m" },
          { title: "Muscle Contraction", duration: "55m" }
        ]
      }
    ]
  }
];
