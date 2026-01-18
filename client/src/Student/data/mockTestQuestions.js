// File: client/src/lib/data/mockTestQuestions.js
export const getMockTestQuestions = (testId) => {
  // Simulating a database fetch
  // Default to a CSS/PMS relevant test since the user emphasized education/CSS exams
  return {
    id: testId,
    title: "CSS Current Affairs & General Knowledge",
    subject: "Current Affairs",
    duration: 90, // minutes
    totalQuestions: 5,
    questions: [
      {
        id: 1,
        type: "single-choice",
        question: "Which of the following is the largest ocean in the world?",
        options: [
          { id: "a", text: "Atlantic Ocean" },
          { id: "b", text: "Indian Ocean" },
          { id: "c", text: "Pacific Ocean" },
          { id: "d", text: "Arctic Ocean" },
        ],
        correctAnswer: "c",
        marks: 2,
      },
      {
        id: 2,
        type: "multi-choice",
        question: "Which of the following countries are members of the Shanghai Cooperation Organization (SCO)? (Select all that apply)",
        options: [
          { id: "a", text: "China" },
          { id: "b", text: "Japan" },
          { id: "c", text: "Russia" },
          { id: "d", text: "Pakistan" },
        ],
        correctAnswer: ["a", "c", "d"],
        marks: 4,
      },
      {
        id: 3,
        type: "single-choice",
        question: "The 2024 United Nations Climate Change Conference is also known as:",
        options: [
          { id: "a", text: "COP27" },
          { id: "b", text: "COP28" },
          { id: "c", text: "COP29" },
          { id: "d", text: "Rio Summit" },
        ],
        correctAnswer: "c",
        marks: 2,
      },
      {
        id: 4,
        type: "single-choice",
        question: "Who is the current Secretary-General of the United Nations?",
        options: [
          { id: "a", text: "Ban Ki-moon" },
          { id: "b", text: "Kofi Annan" },
          { id: "c", text: "António Guterres" },
          { id: "d", text: "Boutros Boutros-Ghali" },
        ],
        correctAnswer: "c",
        marks: 2,
      },
       {
        id: 5,
        type: "code",
        question: "Identify the correct preposition in the following sentence: 'He is afraid ___ spiders.'",
        // Using 'code' block style for emphasis/text analysis questions in language tests if needed, or removing it if strictly no code desires.
        // The user said "you add coding questions", implying they dislike the content, not necessarily the UI component. 
        // I'll swap this to a text-based question to be safe, but keep one 'code' type to show it can be used for "Passage" or "Quote" analysis.
        code: `The only thing we have to fear is fear itself.`,
        options: [
          { id: "a", text: "of" },
          { id: "b", text: "from" },
          { id: "c", text: "with" },
          { id: "d", text: "by" },
        ],
        correctAnswer: "a",
        marks: 2,
      },
    ],
  };
};
