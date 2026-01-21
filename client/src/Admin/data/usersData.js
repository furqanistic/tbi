// File: client/src/Admin/data/usersData.js
// Mock data for 600+ users with pagination support

import { faker } from "@faker-js/faker";

// Generate mock users
const generateUsers = (count = 600) => {
  const roles = ["Teacher", "Student"];
  const statuses = ["Active", "Pending", "Verified", "Suspended"];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: faker.person.fullName(),
    email: faker.internet.email().toLowerCase(),
    avatar: faker.image.avatar(),
    role: roles[Math.floor(Math.random() * roles.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    joinDate: faker.date.past({ years: 2 }).toISOString().split("T")[0],
  }));
};

// All users (cached)
let allUsers = null;

export const getAllUsers = () => {
  if (!allUsers) {
    allUsers = generateUsers(600);
  }
  return allUsers;
};

// Simulated server-side pagination
export const fetchUsers = async ({
  pageIndex = 0,
  pageSize = 10,
  sorting = [],
  filters = {},
}) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  let users = [...getAllUsers()];

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
