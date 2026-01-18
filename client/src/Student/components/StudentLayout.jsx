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
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
  { icon: BookOpen, label: "My Courses", href: "/student/courses" },
  { icon: FileText, label: "Mock Tests", href: "/student/mocks" },
  {
    icon: BarChart,
    label: "Results",
    href: "/student/results",
  },
  { icon: Settings, label: "Settings", href: "/student/profile" },
];

const SidebarItem = ({ item, isActive, isCollapsed, isMobile, onClick }) => {
  const LinkComponent = (
    <Link
      to={item.href}
      onClick={onClick}
      className={cn(
        "flex items-center transition-all duration-200 group font-medium relative",
        isCollapsed && !isMobile
          ? "justify-center h-9 w-9 rounded-sm mx-auto"
          : "gap-3 px-3 py-1.5 rounded-sm mx-2",
        isActive
          ? "bg-accent text-accent-foreground shadow-sm"
          : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
      )}
    >
      <item.icon
        className={cn(
          "shrink-0 transition-colors",
          isCollapsed && !isMobile ? "w-4 h-4" : "w-4 h-4",
          isActive
            ? "text-foreground"
            : "text-muted-foreground group-hover:text-foreground",
        )}
      />
      {(!isCollapsed || isMobile) && (
        <span className="text-[13px]">{item.label}</span>
      )}
      {isActive && !isCollapsed && !isMobile && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-primary rounded-r-full" />
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

  return LinkComponent;
};

const SidebarContent = ({
  location,
  setIsMobileMenuOpen,
  isCollapsed,
  toggleCollapse,
  isMobile = false,
}) => (
  <div className="flex flex-col h-full bg-card/50 backdrop-blur-xl">
    {/* Sidebar Header */}
    <div
      className={cn(
        "h-14 flex items-center border-b border-dashed border-border/60 transition-all",
        isCollapsed && !isMobile
          ? "justify-center px-0"
          : "px-4 justify-between",
      )}
    >
      <Link to="/" className="flex items-center gap-2.5 overflow-hidden group">
        <div className="w-7 h-7 rounded-sm bg-primary/10 flex items-center justify-center shrink-0 border border-primary/10">
          <img
            src={logoLight}
            alt="Logo"
            className="w-4 h-4 object-contain opacity-90 group-hover:opacity-100 transition-opacity dark:hidden block scale-200"
          />
          <img
            src={logoDark}
            alt="Logo"
            className="w-4 h-4 scale-200 object-contain opacity-90 group-hover:opacity-100 transition-opacity hidden dark:block"
          />
        </div>
        {(!isCollapsed || isMobile) && (
          <span className="font-bold text-sm tracking-tight truncate text-foreground/90">
            TBI Student
          </span>
        )}
      </Link>
      {!isMobile && !isCollapsed && (
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 text-muted-foreground hover:text-foreground"
          onClick={toggleCollapse}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      )}
    </div>

    {/* Sidebar Links */}
    <div className="flex-1 py-4 space-y-1 overflow-y-auto">
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
          onClick={() => setIsMobileMenuOpen && setIsMobileMenuOpen(false)}
        />
      ))}
    </div>
  </div>
);

export default function StudentLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false); // Default expanded for clearer first impression
  const location = useLocation();

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

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
        {/* Header - Minimal & Blended */}
        <header className="h-14 sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/40 flex items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden -ml-2 text-muted-foreground"
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

            <div className="flex items-center gap-2 text-sm text-muted-foreground/80">
              <span className="hidden sm:inline-block">Dashboard</span>
              <span className="hidden sm:inline-block text-muted-foreground/40">
                /
              </span>
              <span className="font-medium text-foreground">
                {sidebarItems.find((i) => i.href === location.pathname)
                  ?.label || "Overview"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Use global search instead of local input for cleaner look */}
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex h-8 w-48 justify-between text-xs text-muted-foreground bg-secondary/20 border-border/40 shadow-none hover:bg-accent hover:text-accent-foreground"
            >
              <span>Search...</span>
              <span className="text-[10px] opacity-60">⌘K</span>
            </Button>

            <NotificationDropdown />

            <ModeToggle />

            <div className="w-px h-4 bg-border/60 mx-1 hidden sm:block" />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-8 w-8 rounded-full p-0 ml-1"
                >
                  <Avatar className="h-7 w-7 border border-border/50">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem className="text-red-500">
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-4 sm:p-6 lg:p-8 max-w-400 mx-auto w-full flex-1 animate-in fade-in duration-500">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
