// File: client/src/Teacher/pages/TeacherTestEditor.jsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { testFormSchema, defaultValues } from "../data/schemas";
import TestEditorLayout from "../components/TestEditor/TestEditorLayout";
import InfoTab from "../components/TestEditor/InfoTab";
import QuestionsTab from "../components/TestEditor/QuestionsTab";
import SettingsTab from "../components/TestEditor/SettingsTab";
import { useState } from "react";

export default function TeacherTestEditor() {
  const [activeTab, setActiveTab] = useState("basic");
  // const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(testFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    // In real app, API call here
    // toast({ title: "Test Saved", description: "Your changes have been saved successfully." });
    alert("Test Saved! Check console for data.");
  };

  const handleError = (errors) => {
    console.log("Form Errors:", errors);
    // Logic to switch tab if error is in another tab
    if (errors.questions && activeTab !== "questions") {
      setActiveTab("questions");
    } else if (
      (errors.title || errors.description || errors.subject) &&
      activeTab !== "basic"
    ) {
      setActiveTab("basic");
    }
  };

  return (
    <TestEditorLayout
      form={form}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      onSave={form.handleSubmit(onSubmit, handleError)}
    >
      <InfoTab />
      <QuestionsTab />
      <SettingsTab />
    </TestEditorLayout>
  );
}
