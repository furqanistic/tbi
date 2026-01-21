// File: client/src/Admin/components/AdminLayout.jsx
import logoLight from "@/assets/icon-dark-mini.png";
import logoDark from "@/assets/logo-1-mini.png";
import { ModeToggle } from "@/components/ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  CheckSquare,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Circle,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Menu,
  Search,
  Settings,
  User,
  Users,
} from "lucide-react";
import { NotificationBell } from "./NotificationBell";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/admin" },
  { icon: Users, label: "Users", href: "/admin/users" },
  {
    icon: CheckSquare,
    label: "Course Approvals",
    href: "/admin/approvals",
  },

  {
    icon: Settings,
    label: "Settings",
    href: "/admin/settings",
    subItems: [
      { label: "General", href: "/admin/settings?tab=general", default: true },
      { label: "Security", href: "/admin/settings?tab=security" },
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
        "flex items-center transition-all duration-300 group font-semibold relative overflow-hidden",
        isCollapsed && !isMobile
          ? "justify-center h-12 w-12 rounded-xl mx-auto mb-2"
          : "gap-4 px-4 py-3 rounded-2xl mx-3 mb-1",
        isActive
          ? "bg-primary text-primary-foreground shadow-none scale-[1.02]"
          : isDanger
            ? "text-red-500 hover:bg-red-500/10 hover:text-red-600"
            : "text-muted-foreground/80 hover:bg-accent/80 hover:text-foreground",
      )}
    >
      <item.icon
        className={cn(
          "shrink-0 transition-all duration-300",
          isCollapsed && !isMobile ? "size-4.5" : "size-5",
          isActive ? "text-primary-foreground" : "text-current",
        )}
      />
      {(!isCollapsed || isMobile) && (
        <span
          className={cn(
            "text-sm flex-1 tracking-tight",
            isActive && "font-extrabold",
          )}
        >
          {item.label}
        </span>
      )}
      {hasSubItems && !isCollapsed && !isMobile && (
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform duration-300",
            isActive
              ? "rotate-0 text-primary-foreground"
              : "text-muted-foreground/30 group-hover:text-muted-foreground",
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
            // Parse the tab parameter from the subItem href
            const subItemUrl = new URL(subItem.href, window.location.origin);
            const subItemTab = subItemUrl.searchParams.get("tab");

            // Get the current tab from URL search params
            const currentTab = new URLSearchParams(location.search).get("tab");

            // Check if this sub-item is active
            const isSubActive =
              location.pathname === item.href &&
              (currentTab === subItemTab || (subItem.default && !currentTab));

            return (
              <Link
                key={subItem.label}
                to={subItem.href}
                className={cn(
                  "text-[12px] py-1.5 px-2.5 rounded-md transition-all duration-200 flex items-center gap-2 group/sub",
                  isSubActive
                    ? "text-primary bg-primary/10 font-semibold shadow-none"
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
        "flex flex-col border-b border-border/40 transition-all px-4 relative",
        isCollapsed && !isMobile
          ? "h-20 items-center justify-center"
          : "py-6 items-center",
      )}
    >
      <Link
        to="/"
        className={cn(
          "flex flex-col items-center gap-2 overflow-hidden transition-all",
          isCollapsed && !isMobile && "gap-0",
        )}
      >
        <div className="flex items-center justify-center shrink-0">
          <img
            src={logoLight}
            alt="Logo"
            className={cn(
              "w-auto object-contain transition-all duration-500 dark:hidden block",
              isCollapsed && !isMobile ? "h-8" : "h-12",
            )}
          />
          <img
            src={logoDark}
            alt="Logo"
            className={cn(
              "w-auto object-contain transition-all duration-500 hidden dark:block",
              isCollapsed && !isMobile ? "h-8" : "h-12",
            )}
          />
        </div>
        {(!isCollapsed || isMobile) && (
          <div className="flex flex-col items-center">
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-primary animate-in fade-in slide-in-from-top-2 duration-1000">
              Admin Portal
            </span>
          </div>
        )}
      </Link>
      {!isMobile && !isCollapsed && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-all"
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
            (item.href !== "/admin" && location.pathname.startsWith(item.href))
          }
          isCollapsed={isCollapsed}
          isMobile={isMobile}
          location={location}
          onClick={() => setIsMobileMenuOpen && setIsMobileMenuOpen(false)}
        />
      ))}
    </div>

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
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="right" align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-muted-foreground">
                  admin@tbi.edu.pk
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/admin/settings">
                <User className="mr-2 h-4 w-4" />
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/admin/settings?tab=general">
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
                  AD
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-semibold leading-none truncate text-foreground">
                  Admin User
                </p>
                <p className="text-[11px] text-muted-foreground truncate mt-1.5">
                  admin@tbi.edu.pk
                </p>
              </div>
              <ChevronDown className="w-4 h-4 text-muted-foreground/50 group-hover:text-foreground transition-colors" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" align="end" className="w-56 mb-2">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/admin/settings">
                <User className="mr-2 h-4 w-4" />
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/admin/settings?tab=general">
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

export default function AdminLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  // Page titles mapping for breadcrumb
  const pageTitles = {
    "/admin": "Overview",
    "/admin/teachers": "Teachers",
    "/admin/students": "Students",
    "/admin/approvals": "Course Approvals",

    "/admin/settings": "Settings",
  };

  // Page descriptions for breadcrumb
  const pageDescriptions = {
    "/admin": "Welcome to the admin dashboard",
    "/admin/teachers": "Manage all teachers",
    "/admin/students": "Manage all students",
    "/admin/approvals": "Review and approve courses",

    "/admin/settings": "Manage admin settings",
  };

  // Get current page title
  const getCurrentPageTitle = () => {
    if (pageTitles[location.pathname]) {
      return pageTitles[location.pathname];
    }

    for (const [path, title] of Object.entries(pageTitles)) {
      if (path !== "/admin" && location.pathname.startsWith(path)) {
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
          "hidden md:block bg-background/90 dark:bg-[#080808] backdrop-blur-2xl border-r border-border/50 fixed inset-y-0 z-50 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) shadow-none",
          isCollapsed ? "w-16" : "w-64",
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
            className="absolute -right-3 top-3 h-6 w-6 rounded-full border border-border bg-background shadow-none z-50 flex items-center justify-center hover:bg-accent text-muted-foreground"
            onClick={toggleCollapse}
          >
            <ChevronRight className="h-3 w-3" />
          </Button>
        )}
      </aside>

      {/* Main Content */}
      <main
        className={cn(
          "flex-1 min-h-screen flex flex-col transition-all duration-500 ease-in-out",
          isCollapsed ? "md:ml-16" : "md:ml-64",
        )}
      >
        {/* Enhanced Header */}
        <header className="h-14 sticky top-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border/40 flex items-center justify-between px-4 sm:px-6 shadow-none">
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
                  Admin
                </span>
                <span className="hidden sm:inline-block text-muted-foreground/40">
                  /
                </span>
                <span className="font-semibold text-foreground truncate">
                  {getCurrentPageTitle()}
                </span>
              </div>
              <p className="hidden lg:block text-[11px] text-muted-foreground/60 truncate">
                {pageDescriptions[location.pathname] || "Manage your platform"}
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

            <NotificationBell />
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
                        AD
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">Admin User</p>
                      <p className="text-xs text-muted-foreground">
                        admin@tbi.edu.pk
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/admin/settings">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/admin/settings?tab=general">
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
        <div className="p-4 sm:p-6 lg:p-8 w-full flex-1">
          {/* Welcome Message - Only on Dashboard Overview */}
          {location.pathname === "/admin" && (
            <div className="mb-3 md:mb-0 space-y-0.5">
              <h1 className="text-lg md:text-xl font-bold tracking-tight text-foreground">
                Welcome back, Admin!
              </h1>
              <p className="text-muted-foreground text-sm md:text-base">
                Here&apos;s an overview of your platform activity.
              </p>
            </div>
          )}

          <Outlet />
        </div>
      </main>
    </div>
  );
}
