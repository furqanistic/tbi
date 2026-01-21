// File: client/src/Admin/data/usersData.js
// Mock data for 30 users with static data (no faker.js)

const mockUsers = [
  { id: 1, name: "Ahmed Khan", email: "ahmed.khan@example.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed", role: "Teacher", status: "Active", joinDate: "2024-03-15" },
  { id: 2, name: "Fatima Ali", email: "fatima.ali@example.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima", role: "Student", status: "Active", joinDate: "2024-05-22" },
  { id: 3, name: "Muhammad Hassan", email: "m.hassan@example.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hassan", role: "Teacher", status: "Verified", joinDate: "2023-11-10" },
  { id: 4, name: "Aisha Begum", email: "aisha.begum@example.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha", role: "Student", status: "Active", joinDate: "2024-01-08" },
  { id: 5, name: "Omar Farooq", email: "omar.farooq@example.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Omar", role: "Student", status: "Pending", joinDate: "2025-01-02" },
  { id: 6, name: "Zainab Malik", email: "zainab.malik@example.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zainab", role: "Teacher", status: "Active", joinDate: "2023-08-20" },
  { id: 7, name: "Bilal Ahmed", email: "bilal.ahmed@example.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bilal", role: "Student", status: "Verified", joinDate: "2024-02-14" },
  { id: 8, name: "Maryam Ansari", email: "maryam.ansari@example.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maryam", role: "Student", status: "Active", joinDate: "2024-06-30" },
  { id: 9, name: "Yusuf Qureshi", email: "yusuf.qureshi@example.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yusuf", role: "Teacher", status: "Suspended", joinDate: "2023-04-12" },
  { id: 10, name: "Khadija Hussain", email: "khadija.h@example.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Khadija", role: "Student", status: "Active", joinDate: "2024-09-05" },
  { id: 11, name: "Ibrahim Siddiqui", email: "ibrahim.s@example.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ibrahim", role: "Teacher", status: "Active", joinDate: "2023-12-01" },
  { id: 12, name: "Hafsa Noor", email: "hafsa.noor@example.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hafsa", role: "Student", status: "Pending", joinDate: "2025-01-10" },
  { id: 13, name: "Hamza Raza", email: "hamza.raza@example.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hamza", role: "Student", status: "Active", joinDate: "2024-04-18" },
  { id: 14, name: "Amina Sheikh", email: "amina.sheikh@example.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amina", role: "Teacher", status: "Verified", joinDate: "2023-07-25" },
  { id: 15, name: "Usman Tariq", email: "usman.tariq@example.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Usman", role: "Student", status: "Active", joinDate: "2024-08-11" },
  { id: 16, name: "Rabia Javed", email: "rabia.javed@example.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rabia", role: "Student", status: "Suspended", joinDate: "2023-10-03" },
  { id: 17, name: "Ali Raza", email: "ali.raza@example.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AliR", role: "Teacher", status: "Active", joinDate: "2024-01-20" },
  { id: 18, name: "Sana Iqbal", email: "sana.iqbal@example.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sana", role: "Student", status: "Active", joinDate: "2024-07-07" },
  { id: 19, name: "Imran Abbasi", email: "imran.abbasi@example.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Imran", role: "Student", status: "Verified", joinDate: "2023-09-14" },
  { id: 20, name: "Nadia Butt", email: "nadia.butt@example.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nadia", role: "Teacher", status: "Active", joinDate: "2024-03-28" },
  { id: 21, name: "Saad Mehmood", email: "saad.mehmood@example.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Saad", role: "Student", status: "Active", joinDate: "2024-11-15" },
  { id: 22, name: "Hira Shahid", email: "hira.shahid@example.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hira", role: "Student", status: "Pending", joinDate: "2025-01-05" },
  { id: 23, name: "Faisal Nawaz", email: "faisal.nawaz@example.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Faisal", role: "Teacher", status: "Verified", joinDate: "2023-06-19" },
  { id: 24, name: "Ayesha Riaz", email: "ayesha.riaz@example.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ayesha", role: "Student", status: "Active", joinDate: "2024-10-22" },
  { id: 25, name: "Waqar Ahmad", email: "waqar.ahmad@example.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Waqar", role: "Student", status: "Active", joinDate: "2024-02-28" },
  { id: 26, name: "Lubna Karim", email: "lubna.karim@example.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lubna", role: "Teacher", status: "Active", joinDate: "2023-05-08" },
  { id: 27, name: "Tariq Jameel", email: "tariq.jameel@example.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tariq", role: "Student", status: "Suspended", joinDate: "2024-04-01" },
  { id: 28, name: "Saima Akram", email: "saima.akram@example.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Saima", role: "Student", status: "Active", joinDate: "2024-12-10" },
  { id: 29, name: "Kashif Zafar", email: "kashif.zafar@example.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kashif", role: "Teacher", status: "Active", joinDate: "2023-02-17" },
  { id: 30, name: "Mehwish Hayat", email: "mehwish.h@example.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mehwish", role: "Student", status: "Verified", joinDate: "2024-08-25" },
];

export const getAllUsers = () => {
  return mockUsers;
};

export const getUserById = (id) => {
  return mockUsers.find((u) => u.id === parseInt(id));
};

// Simulated server-side pagination
export const fetchUsers = async ({
  pageIndex = 0,
  pageSize = 10,
  sorting = [],
  filters = {},
}) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  let users = [...mockUsers];

  // Apply search filter
  if (filters.search) {
    const search = filters.search.toLowerCase();
    users = users.filter(
      (user) =>
        user.name.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search)
    );
  }

  // Apply role filter
  if (filters.role && filters.role !== "all") {
    users = users.filter((user) => user.role === filters.role);
  }

  // Apply status filter
  if (filters.status && filters.status !== "all") {
    users = users.filter((user) => user.status === filters.status);
  }

  // Apply sorting
  if (sorting.length > 0) {
    const { id, desc } = sorting[0];
    users.sort((a, b) => {
      let aVal = a[id];
      let bVal = b[id];
      if (typeof aVal === "string") {
        aVal = aVal.toLowerCase();
        bVal = bVal.toLowerCase();
      }
      if (aVal < bVal) return desc ? 1 : -1;
      if (aVal > bVal) return desc ? -1 : 1;
      return 0;
    });
  }

  // Calculate pagination
  const totalCount = users.length;
  const pageCount = Math.ceil(totalCount / pageSize);
  const start = pageIndex * pageSize;
  const end = start + pageSize;
  const paginatedUsers = users.slice(start, end);

  return {
    data: paginatedUsers,
    pageCount,
    totalCount,
  };
};

// Filter options
export const roleOptions = [
  { value: "all", label: "All Roles" },
  { value: "Teacher", label: "Teacher" },
  { value: "Student", label: "Student" },
];

export const statusOptions = [
  { value: "all", label: "All Status" },
  { value: "Active", label: "Active" },
  { value: "Pending", label: "Pending" },
  { value: "Verified", label: "Verified" },
  { value: "Suspended", label: "Suspended" },
];
