// File: client/src/Admin/components/UploadResourceModal.jsx
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, X, FileText, Link as LinkIcon } from "lucide-react";
import { categories } from "../data/resourcesData";

export function UploadResourceModal({ open, onOpenChange, onUpload }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("PDF");
  const [isPremium, setIsPremium] = useState(false);
  const [file, setFile] = useState(null);
  const [linkUrl, setLinkUrl] = useState("");
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const newResource = {
      id: `res-${Date.now()}`,
      name: title,
      category,
      type,
      access: isPremium ? "Premium" : "Free",
      uploadDate: new Date().toISOString().split("T")[0],
      fileUrl: type === "Link" ? linkUrl : file?.name || "",
    };
    onUpload?.(newResource);
    resetForm();
    onOpenChange(false);
  };

  const resetForm = () => {
    setTitle("");
    setCategory("");
    setType("PDF");
    setIsPremium(false);
    setFile(null);
    setLinkUrl("");
  };

  const isValid =
    title.trim() && category && (type === "Link" ? linkUrl.trim() : file);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border border-gray-300 dark:border-border/50 bg-white dark:bg-card">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Upload New Resource
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          {/* Resource Title */}
          <div className="space-y-1.5">
            <Label
              htmlFor="title"
              className="text-xs font-medium text-muted-foreground"
            >
              Resource Title
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter resource title"
              className="h-9 text-sm border-gray-300 dark:border-border/50 bg-transparent"
            />
          </div>

          {/* Category */}
          <div className="space-y-1.5">
            <Label className="text-xs font-medium text-muted-foreground">
              Category
            </Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="h-9 text-sm border-gray-300 dark:border-border/50 bg-transparent">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Resource Type */}
          <div className="space-y-1.5">
            <Label className="text-xs font-medium text-muted-foreground">
              Resource Type
            </Label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger className="h-9 text-sm border-gray-300 dark:border-border/50 bg-transparent">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="PDF">PDF</SelectItem>
                <SelectItem value="Document">Document</SelectItem>
                <SelectItem value="Link">External Link</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Access Level Toggle */}
          <div className="flex items-center justify-between p-3 rounded-md border border-gray-300 dark:border-border/50">
            <div className="space-y-0.5">
              <Label
                htmlFor="premium"
                className="text-sm font-medium cursor-pointer"
              >
                Premium Access
              </Label>
              <p className="text-xs text-muted-foreground">
                Restrict to premium subscribers only
              </p>
            </div>
            <Switch
              id="premium"
              checked={isPremium}
              onCheckedChange={setIsPremium}
            />
          </div>

          {/* File Upload or Link Input */}
          {type === "Link" ? (
            <div className="space-y-1.5">
              <Label className="text-xs font-medium text-muted-foreground">
                External URL
              </Label>
              <div className="relative">
                <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  placeholder="https://..."
                  className="h-9 pl-9 text-sm border-gray-300 dark:border-border/50 bg-transparent"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-1.5">
              <Label className="text-xs font-medium text-muted-foreground">
                Upload File
              </Label>
              <div
                className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                  dragActive
                    ? "border-primary bg-primary/5"
                    : "border-gray-300 dark:border-border/50"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {file ? (
                  <div className="flex items-center justify-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium truncate max-w-50">
                      {file.name}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => setFile(null)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <>
                    <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Drag & drop or{" "}
                      <label className="text-primary cursor-pointer hover:underline">
                        browse
                        <input
                          type="file"
                          className="hidden"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                        />
                      </label>
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      PDF, DOC up to 10MB
                    </p>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2 pt-2">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="border-gray-300 dark:border-border/50"
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={!isValid}>
            <Upload className="h-4 w-4 mr-2" />
            Upload
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
