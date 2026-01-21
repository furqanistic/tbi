// File: client/src/Admin/pages/AdminResources.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FolderOpen, Plus, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResourcesDataTable } from "../components/resources-table/data-table";
import { UploadResourceModal } from "../components/UploadResourceModal";

export default function AdminResources() {
  const navigate = useNavigate();
  const [uploadModalOpen, setUploadModalOpen] = useState(false);

  const handleView = (resource) => {
    // Navigate to resource detail page
    navigate(`/admin/resources/${resource.id}`);
  };

  const handleUpload = (newResource) => {
    console.log("New resource uploaded:", newResource);
    // In real app: API call to upload
  };

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <FolderOpen className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            Resource Library
          </h1>
          <p className="text-sm text-muted-foreground">
            Manage CSS/PMS study materials and documents
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="w-3.5 h-3.5" />
            <span>Click a resource to view or download</span>
          </div>
          <Button onClick={() => setUploadModalOpen(true)} className="gap-2">
            <Plus className="h-4 w-4" />
            Upload Resource
          </Button>
        </div>
      </div>

      {/* Resources Data Table */}
      <div className="rounded-lg border bg-slate-50 border-gray-300 dark:bg-card/30 dark:border-border/50 overflow-hidden">
        <ResourcesDataTable onView={handleView} />
      </div>

      {/* Upload Modal */}
      <UploadResourceModal
        open={uploadModalOpen}
        onOpenChange={setUploadModalOpen}
        onUpload={handleUpload}
      />
    </div>
  );
}
