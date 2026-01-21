// File: client/src/Admin/pages/ResourceDetailView.jsx
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  Trash2,
  Pencil,
  FileText,
  FileType,
  Link as LinkIcon,
  Download,
  Users,
  Calendar,
  HardDrive,
  Tag,
  Lock,
  Unlock,
  User,
  ExternalLink,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { resources } from "../data/resourcesData";

// Category badge styles
const getCategoryStyles = (category) => {
  switch (category) {
    case "CSS":
      return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30";
    case "PMS":
      return "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/30";
    case "General":
      return "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/30";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

// Access badge styles
const getAccessStyles = (access) => {
  switch (access) {
    case "Free":
      return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30";
    case "Premium":
      return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

// Type icon
const getTypeIcon = (type) => {
  switch (type) {
    case "PDF":
      return <FileText className="h-5 w-5 text-red-500" />;
    case "Document":
      return <FileType className="h-5 w-5 text-blue-500" />;
    case "Link":
      return <LinkIcon className="h-5 w-5 text-green-500" />;
    default:
      return <FileText className="h-5 w-5 text-muted-foreground" />;
  }
};

export default function ResourceDetailView() {
  const { resourceId } = useParams();
  const navigate = useNavigate();

  // Find resource by ID
  const resource = resources.find((r) => r.id === resourceId);

  if (!resource) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh] space-y-4">
        <p className="text-lg text-muted-foreground">Resource not found</p>
        <Button variant="outline" onClick={() => navigate("/admin/resources")}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Library
        </Button>
      </div>
    );
  }

  const handleDelete = () => {
    console.log("Deleting resource:", resource.id);
    navigate("/admin/resources");
  };

  const handleEdit = () => {
    console.log("Edit resource:", resource.id);
    // In real app: open edit modal or navigate to edit page
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col gap-4">
        {/* Top Row: Back button + Actions */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/admin/resources")}
            className="gap-2 text-muted-foreground hover:text-foreground -ml-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Library
          </Button>
          <div className="flex items-center gap-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  className="gap-2 text-destructive border-destructive/50 hover:bg-destructive/10"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete Resource
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="border border-gray-300 dark:border-border/50">
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete Resource?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently delete "{resource.name}". This action
                    cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="border-gray-300 dark:border-border/50">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleDelete}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Button onClick={handleEdit} className="gap-2">
              <Pencil className="h-4 w-4" />
              Edit Details
            </Button>
          </div>
        </div>

        {/* Title Row */}
        <div className="flex items-start gap-3">
          <div className="p-3 rounded-lg border border-gray-300 dark:border-border/50 bg-slate-100 dark:bg-card/30">
            {getTypeIcon(resource.type)}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              {resource.name}
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Uploaded by{" "}
              <span className="font-medium text-foreground">
                {resource.uploadedBy}
              </span>{" "}
              • The Bureaucrats Institute
            </p>
          </div>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Column - File Info + Analytics */}
        <div className="lg:col-span-1 space-y-4">
          {/* File Info Card */}
          <div className="rounded-lg border border-gray-300 dark:border-border/50 bg-slate-50 dark:bg-card/30 p-4">
            <h3 className="text-sm font-semibold text-foreground mb-4">
              File Information
            </h3>
            <div className="space-y-3">
              {/* File Size */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <HardDrive className="h-4 w-4" />
                  <span className="text-xs">File Size</span>
                </div>
                <span className="text-sm font-medium">{resource.fileSize}</span>
              </div>
              {/* Type */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <FileText className="h-4 w-4" />
                  <span className="text-xs">Type</span>
                </div>
                <span className="text-sm font-medium">{resource.type}</span>
              </div>
              {/* Category */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Tag className="h-4 w-4" />
                  <span className="text-xs">Category</span>
                </div>
                <Badge
                  variant="outline"
                  className={cn(
                    "text-[10px] font-semibold",
                    getCategoryStyles(resource.category),
                  )}
                >
                  {resource.category}
                </Badge>
              </div>
              {/* Access */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                  {resource.access === "Premium" ? (
                    <Lock className="h-4 w-4" />
                  ) : (
                    <Unlock className="h-4 w-4" />
                  )}
                  <span className="text-xs">Access</span>
                </div>
                <Badge
                  variant="outline"
                  className={cn(
                    "text-[10px] font-semibold",
                    getAccessStyles(resource.access),
                  )}
                >
                  {resource.access}
                </Badge>
              </div>
              {/* Upload Date */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-xs">Uploaded</span>
                </div>
                <span className="text-sm font-medium">
                  {new Date(resource.uploadDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              {/* Uploaded By */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span className="text-xs">Uploaded By</span>
                </div>
                <span className="text-sm font-medium">
                  {resource.uploadedBy}
                </span>
              </div>
            </div>
          </div>

          {/* Analytics Card */}
          <div className="rounded-lg border border-gray-300 dark:border-border/50 bg-slate-50 dark:bg-card/30 p-4">
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Resource Analytics
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {/* Total Downloads */}
              <div className="rounded-lg border border-gray-300 dark:border-border/50 bg-white dark:bg-card/50 p-3 text-center">
                <Download className="h-5 w-5 mx-auto text-primary mb-1" />
                <p className="text-2xl font-bold text-foreground">
                  {resource.downloads.toLocaleString()}
                </p>
                <p className="text-xs text-muted-foreground">Total Downloads</p>
              </div>
              {/* Active Students */}
              <div className="rounded-lg border border-gray-300 dark:border-border/50 bg-white dark:bg-card/50 p-3 text-center">
                <Users className="h-5 w-5 mx-auto text-emerald-500 mb-1" />
                <p className="text-2xl font-bold text-foreground">
                  {resource.activeStudents}
                </p>
                <p className="text-xs text-muted-foreground">Active Students</p>
              </div>
            </div>
          </div>

          {/* Description Card */}
          <div className="rounded-lg border border-gray-300 dark:border-border/50 bg-slate-50 dark:bg-card/30 p-4">
            <h3 className="text-sm font-semibold text-foreground mb-2">
              Description
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {resource.description}
            </p>
          </div>
        </div>

        {/* Right Column - Preview Card */}
        <div className="lg:col-span-2">
          <div className="rounded-lg border border-gray-300 dark:border-border/50 bg-slate-50 dark:bg-card/30 p-4 h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-foreground">
                Document Preview
              </h3>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-gray-300 dark:border-border/50"
                onClick={() => window.open(resource.fileUrl, "_blank")}
              >
                {resource.type === "Link" ? (
                  <>
                    <ExternalLink className="h-3.5 w-3.5" />
                    Open Link
                  </>
                ) : (
                  <>
                    <Download className="h-3.5 w-3.5" />
                    Download
                  </>
                )}
              </Button>
            </div>

            {/* Preview Area */}
            <div className="rounded-lg border border-gray-300 dark:border-border/50 bg-white dark:bg-card/50 min-h-125 flex flex-col">
              {resource.type === "Link" ? (
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                  <div className="p-4 rounded-full bg-green-500/10 mb-4">
                    <LinkIcon className="h-10 w-10 text-green-500" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">External Link</h4>
                  <p className="text-sm text-muted-foreground mb-4 max-w-md">
                    This resource links to an external website. Click the button
                    below to open it in a new tab.
                  </p>
                  <Button
                    onClick={() => window.open(resource.fileUrl, "_blank")}
                    className="gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Open External Link
                  </Button>
                </div>
              ) : (
                <>
                  {/* PDF Viewer Header */}
                  <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-border/50 bg-slate-100 dark:bg-card/30">
                    <div className="flex items-center gap-2">
                      {getTypeIcon(resource.type)}
                      <span className="text-xs font-medium text-muted-foreground truncate max-w-50">
                        {resource.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <span>Page 1 of 24</span>
                    </div>
                  </div>

                  {/* PDF Preview Placeholder */}
                  <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-[#f5f5f5] dark:bg-[#1a1a1a]">
                    <div className="p-6 rounded-lg border-2 border-dashed border-gray-300 dark:border-border/50 max-w-md">
                      <FileText className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
                      <h4 className="text-sm font-medium text-foreground mb-2">
                        Document Preview
                      </h4>
                      <p className="text-xs text-muted-foreground mb-4">
                        PDF viewer integration pending. In production, the
                        document would be rendered here using a library like
                        react-pdf or embedded iframe.
                      </p>
                      <div className="flex gap-2 justify-center">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs border-gray-300 dark:border-border/50"
                          onClick={() =>
                            window.open(resource.fileUrl, "_blank")
                          }
                        >
                          <Download className="h-3 w-3 mr-1" />
                          Download to View
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* PDF Viewer Footer */}
                  <div className="flex items-center justify-center gap-2 px-4 py-2 border-t border-gray-200 dark:border-border/50 bg-slate-100 dark:bg-card/30">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 px-2 text-xs"
                    >
                      ← Previous
                    </Button>
                    <span className="text-xs text-muted-foreground px-4">
                      100%
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 px-2 text-xs"
                    >
                      Next →
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
