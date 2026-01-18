// File: client/src/Student/data/profileData.js
// Mock data for student profile
export const profileData = {
  user: {
    name: "Ali Khan",
    email: "ali.khan@example.com",
    phone: "+92 300 1234567",
    avatar: "https://github.com/shadcn.png",
    initials: "AK",
    emailVerified: true,
  },
};

export const notificationSettings = {
  email: [
    {
      id: "marketing",
      label: "Marketing Emails",
      description: "Receive news and product updates.",
      defaultChecked: true,
      disabled: false,
    },
    {
      id: "security",
      label: "Security Emails",
      description: "Receive security alerts and activity.",
      defaultChecked: true,
      disabled: true,
    },
    {
      id: "course-updates",
      label: "Course Updates",
      description: "Get notified when new content is added.",
      defaultChecked: true,
      disabled: false,
    },
    {
      id: "exam-reminders",
      label: "Exam Reminders",
      description: "Receive reminders before scheduled exams.",
      defaultChecked: true,
      disabled: false,
    },
  ],
  push: [
    {
      id: "direct-messages",
      label: "Direct Messages",
      description: "Receive messages from mentors and group.",
      defaultChecked: true,
      disabled: false,
    },
    {
      id: "study-tips",
      label: "Study Tips",
      description: "Daily tips to improve your preparation.",
      defaultChecked: false,
      disabled: false,
    },
    {
      id: "progress-updates",
      label: "Progress Updates",
      description: "Weekly summary of your learning progress.",
      defaultChecked: true,
      disabled: false,
    },
  ],
};
