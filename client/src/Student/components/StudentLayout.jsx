// File: client/src/components/dashboard/StudentLayout.jsx
import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  BarChart,
  Settings,
  Menu,
  Search,
  LogOut,
  User,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Circle,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import logoLight from "@/assets/icon-dark.png";
import logoDark from "@/assets/logo-1.png";
import { NotificationDropdown } from "./NotificationDropdown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/student" },
  {
    icon: BookOpen,
    label: "My Courses",
    href: "/student/courses",
    subItems: [
      { label: "All Courses", href: "/student/courses", default: true },
      { label: "In Progress", href: "/student/courses?filter=in-progress" },
      { label: "Completed", href: "/student/courses?filter=completed" },
    ],
  },
  {
    icon: FileText,
    label: "Mock Tests",
    href: "/student/mocks",
    subItems: [
      {
        label: "Available Tests",
        href: "/student/mocks?tab=available",
        default: true,
      },
      { label: "Upcoming", href: "/student/mocks?tab=upcoming" },
      { label: "Past Results", href: "/student/mocks?tab=past" },
    ],
  },
  {
    icon: BarChart,
    label: "Results",
    href: "/student/results",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/student/profile",
    subItems: [
      { label: "General", href: "/student/profile?tab=general", default: true },
      { label: "Security", href: "/student/profile?tab=security" },
    ],
  },
];

const SidebarItem = ({
  item,
  isActive,
  isCollapsed,
  isMobile,
  onClick,
  isDanger = false,
  location,
}) => {
  const hasSubItems = item.subItems && item.subItems.length > 0;

  const LinkComponent = (
    <Link
      to={item.href}
      onClick={onClick}
      className={cn(
        "flex items-center transition-all duration-200 group font-medium relative overflow-hidden",
        isCollapsed && !isMobile
          ? "justify-center h-10 w-10 rounded-lg mx-auto mb-1.5"
          : "gap-3 px-3 py-2.5 rounded-lg mx-2 mb-0.5",
        isActive
          ? "bg-primary/10 text-primary shadow-sm"
          : isDanger
            ? "text-red-500 hover:bg-red-500/10 hover:text-red-600"
            : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
      )}
    >
      {/* Active indicator bar */}
      {isActive && !isCollapsed && !isMobile && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3/5 bg-primary rounded-r-full animate-in fade-in slide-in-from-left-1 duration-200" />
      )}

      <item.icon
        className={cn(
          "shrink-0 transition-all duration-200",
          isCollapsed && !isMobile ? "w-5 h-5" : "w-4.5 h-4.5",
          isActive ? "text-primary scale-105" : "text-current",
        )}
      />
      {(!isCollapsed || isMobile) && (
        <span className={cn("text-[13px] flex-1", isActive && "font-semibold")}>
          {item.label}
        </span>
      )}
      {/* Chevron for items with sub-items */}
      {hasSubItems && !isCollapsed && !isMobile && (
        <ChevronDown
          className={cn(
            "w-3.5 h-3.5 transition-transform duration-200",
            isActive ? "rotate-0 text-primary" : "text-muted-foreground/50",
          )}
        />
      )}
    </Link>
  );

  if (isCollapsed && !isMobile) {
    return (
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>{LinkComponent}</TooltipTrigger>
        <TooltipContent side="right" className="font-medium text-xs">
          {item.label}
        </TooltipContent>
      </Tooltip>
    );
  }

  return (
    <div className="flex flex-col">
      {LinkComponent}
      {isActive && !isCollapsed && !isMobile && hasSubItems && (
        <div className="flex flex-col gap-0.5 ml-8 mt-1 mb-2 border-l-2 border-border/30 pl-3 animate-in slide-in-from-left-2 fade-in duration-300">
          {item.subItems.map((subItem) => {
            const currentPath = location.pathname + location.search;
            const isSubActive =
              currentPath === subItem.href ||
              (subItem.default &&
                location.pathname === item.href &&
                (!location.search || location.search === ""));

            return (
              <Link
                key={subItem.label}
                to={subItem.href}
                className={cn(
                  "text-[12px] py-1.5 px-2.5 rounded-md transition-all duration-200 flex items-center gap-2 group/sub",
                  isSubActive
                    ? "text-primary bg-primary/10 font-semibold shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/40 font-medium",
                )}
              >
                <Circle
                  className={cn(
                    "w-1.5 h-1.5 shrink-0 transition-all duration-200",
                    isSubActive
                      ? "fill-primary text-primary scale-125"
                      : "fill-muted-foreground/40 text-muted-foreground/40 group-hover/sub:fill-foreground group-hover/sub:text-foreground",
                  )}
                />
                <span className="flex-1">{subItem.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

const SidebarContent = ({
  location,
  setIsMobileMenuOpen,
  isCollapsed,
  toggleCollapse,
  isMobile = false,
}) => (
  <div className="flex flex-col h-full bg-linear-to-b from-card/60 to-card/40 backdrop-blur-xl">
    {/* Sidebar Header */}
    <div
      className={cn(
        "h-14 flex items-center border-b border-border/40 transition-all px-3",
        isCollapsed && !isMobile ? "justify-center px-2" : "justify-between",
      )}
    >
      <Link
        to="/"
        className={cn(
          "flex items-center gap-2.5 overflow-hidden group transition-all",
          isCollapsed && !isMobile && "gap-0",
        )}
      >
        <div className="flex items-center justify-center shrink-0">
          <img
            src={logoLight}
            alt="Logo"
            className="w-auto h-12 object-contain opacity-90 transition-all duration-200 dark:hidden block"
          />
          <img
            src={logoDark}
            alt="Logo"
            className="w-auto h-12 object-contain opacity-90 transition-all duration-200 hidden dark:block"
          />
        </div>
        {(!isCollapsed || isMobile) && (
          <span className="font-bold text-sm tracking-tight truncate text-foreground/95 group-hover:text-foreground transition-colors">
            TBI Student
          </span>
        )}
      </Link>
      {!isMobile && !isCollapsed && (
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-all"
          onClick={toggleCollapse}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      )}
    </div>

    {/* Sidebar Navigation */}
    <div className="flex-1 py-3 space-y-0.5 overflow-y-auto scrollbar-thin">
      {/* Main navigation label */}
      {!isCollapsed && !isMobile && (
        <div className="px-4 mb-2 mt-1">
          <p className="text-[10px] font-semibold text-muted-foreground/70 tracking-wider uppercase">
            Navigation
          </p>
        </div>
      )}
      {sidebarItems.map((item) => (
        <SidebarItem
          key={item.href}
          item={item}
          isActive={
            location.pathname === item.href ||
            (item.href !== "/student" &&
              location.pathname.startsWith(item.href))
          }
          isCollapsed={isCollapsed}
          isMobile={isMobile}
          location={location}
          onClick={() => setIsMobileMenuOpen && setIsMobileMenuOpen(false)}
        />
      ))}
    </div>

    {/* Quick Actions / Help Section */}
    {!isCollapsed && !isMobile && (
      <div className="px-2 pb-3 border-t border-border/40 pt-3">
        <div className="px-4 mb-2">
          <p className="text-[10px] font-semibold text-muted-foreground/70 tracking-wider uppercase">
            Support
          </p>
        </div>
        <Link
          to="/student/help"
          className="flex items-center gap-3 px-3 py-2.5 mx-2 rounded-lg text-muted-foreground hover:bg-accent/50 hover:text-foreground transition-all duration-200 group"
        >
          <HelpCircle className="w-4.5 h-4.5 shrink-0 transition-transform group-hover:scale-105" />
          <span className="text-[13px] font-medium">Help & Support</span>
        </Link>
      </div>
    )}

    {isCollapsed && !isMobile && (
      <div className="px-2 pb-3 border-t border-border/40 pt-3">
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Link
              to="/student/help"
              className="flex items-center justify-center h-10 w-10 rounded-lg mx-auto text-muted-foreground hover:bg-accent/50 hover:text-foreground transition-all duration-200"
            >
              <HelpCircle className="w-5 h-5" />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right" className="font-medium text-xs">
            Help & Support
          </TooltipContent>
        </Tooltip>
      </div>
    )}

    {/* Sidebar Footer - User Profile with Dropdown */}
    <div className="p-3 border-t border-border/40">
      {isCollapsed && !isMobile ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-10 w-10 rounded-lg p-0 mx-auto hover:bg-accent/50 transition-all"
            >
              <Avatar className="h-9 w-9 border border-border/50">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AK</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="right" align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">Ali Khan</p>
                <p className="text-xs text-muted-foreground">
                  ali.khan@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/student/profile">
                <User className="mr-2 h-4 w-4" />
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/student/profile?tab=general">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              asChild
              className="text-red-500 focus:text-red-600"
            >
              <Link to="/auth">
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              className={cn(
                "flex items-center gap-3 p-2.5 rounded-lg transition-all duration-200 hover:bg-accent/50 cursor-pointer group",
              )}
            >
              <Avatar className="h-9 w-9 border-2 border-border/50 transition-all duration-200 group-hover:border-primary/30 group-hover:scale-105">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback className="text-xs font-semibold">
                  AK
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-semibold leading-none truncate text-foreground">
                  Ali Khan
                </p>
                <p className="text-[11px] text-muted-foreground truncate mt-1.5">
                  ali.khan@example.com
                </p>
              </div>
              <ChevronDown className="w-4 h-4 text-muted-foreground/50 group-hover:text-foreground transition-colors" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" align="end" className="w-56 mb-2">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/student/profile">
                <User className="mr-2 h-4 w-4" />
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/student/profile?tab=general">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              asChild
              className="text-red-500 focus:text-red-600"
            >
              <Link to="/auth">
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  </div>
);

export default function StudentLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  // Page titles mapping for breadcrumb
  const pageTitles = {
    "/student": "Overview",
    "/student/courses": "My Courses",
    "/student/mocks": "Mock Tests",
    "/student/results": "Results",
    "/student/profile": "Settings",
    "/student/help": "Help & Support",
  };

  // Page descriptions for breadcrumb
  const pageDescriptions = {
    "/student": "Welcome back to your learning hub",
    "/student/courses": "Browse and manage your courses",
    "/student/mocks": "Practice with mock tests",
    "/student/results": "Track your performance",
    "/student/profile": "Manage your account settings",
    "/student/help": "Get assistance and find answers",
  };

  // Get current page title
  const getCurrentPageTitle = () => {
    // Check exact match first
    if (pageTitles[location.pathname]) {
      return pageTitles[location.pathname];
    }

    // Check if it's a nested route (e.g., /student/courses/123)
    for (const [path, title] of Object.entries(pageTitles)) {
      if (path !== "/student" && location.pathname.startsWith(path)) {
        return title;
      }
    }

    return "Overview";
  };

  return (
    <div className="min-h-screen bg-muted/20 dark:bg-[#0C0C0C] flex font-sans antialiased text-foreground">
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden md:block bg-background/95 border-r border-border/60 fixed inset-y-0 z-50 transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1)",
          isCollapsed ? "w-15" : "w-56",
        )}
      >
        <SidebarContent
          location={location}
          isCollapsed={isCollapsed}
          toggleCollapse={toggleCollapse}
        />
        {/* Floating Expand button when collapsed */}
        {isCollapsed && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute -right-3 top-3 h-6 w-6 rounded-full border border-border bg-background shadow-xs z-50 flex items-center justify-center hover:bg-accent text-muted-foreground"
            onClick={toggleCollapse}
          >
            <ChevronRight className="h-3 w-3" />
          </Button>
        )}
      </aside>

      {/* Main Content */}
      <main
        className={cn(
          "flex-1 min-h-screen flex flex-col transition-all duration-300 ease-in-out",
          isCollapsed ? "md:ml-15" : "md:ml-56",
        )}
      >
        {/* Enhanced Header */}
        <header className="h-14 sticky top-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border/40 flex items-center justify-between px-4 sm:px-6 shadow-sm">
          <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden -ml-2 text-muted-foreground hover:text-foreground"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="p-0 w-72 border-r border-border/60"
              >
                <SheetHeader className="sr-only">
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <SidebarContent
                  location={location}
                  setIsMobileMenuOpen={setIsMobileMenuOpen}
                  isMobile={true}
                />
              </SheetContent>
            </Sheet>

            {/* Enhanced Breadcrumb with Description */}
            <div className="flex flex-col gap-0.5 min-w-0">
              <div className="flex items-center gap-2 text-sm">
                <span className="hidden sm:inline-block text-muted-foreground/70">
                  Dashboard
                </span>
                <span className="hidden sm:inline-block text-muted-foreground/40">
                  /
                </span>
                <span className="font-semibold text-foreground truncate">
                  {getCurrentPageTitle()}
                </span>
              </div>
              <p className="hidden lg:block text-[11px] text-muted-foreground/60 truncate">
                {pageDescriptions[location.pathname] || "Manage your learning"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Enhanced Search Bar */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/50 pointer-events-none z-10" />
              <Input
                type="search"
                placeholder="Search..."
                className="h-8 w-64 pl-9 pr-8 bg-secondary/20 border-border shadow-none hover:bg-accent/40 focus-visible:ring-1 focus-visible:ring-primary/20 transition-all text-[12px] placeholder:text-muted-foreground/60"
              />
            </div>

            <NotificationDropdown />

            <ModeToggle />

            {/* Profile - Only on Small/Medium Screens */}
            <div className="lg:hidden flex items-center gap-2">
              <div className="w-px h-4 bg-border/60" />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 rounded-full p-0">
                    <Avatar className="h-7 w-7 border border-border/50">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback className="text-xs font-semibold">
                        AK
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">Ali Khan</p>
                      <p className="text-xs text-muted-foreground">
                        ali.khan@example.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/student/profile">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/student/profile?tab=general">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    asChild
                    className="text-red-500 focus:text-red-600"
                  >
                    <Link to="/auth">
                      <LogOut className="mr-2 h-4 w-4" />
                      Log out
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-4 sm:p-6 lg:p-8  w-full flex-1">
          {/* Welcome Message - Only on Dashboard Overview */}
          {location.pathname === "/student" && (
            <div className="mb-3 md:mb-0 space-y-0.5">
              <h1 className="text-lg md:text-xl font-bold tracking-tight text-foreground">
                Welcome back, Ali!
              </h1>
              <p className="text-muted-foreground text-sm md:text-base">
                Here&apos;s an overview of your learning progress.
              </p>
            </div>
          )}

          <Outlet />
        </div>
      </main>
    </div>
  );
}
