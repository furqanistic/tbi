// File: client/src/Teacher/components/TestEditor/QuestionsTab.jsx
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useFormContext, useFieldArray } from "react-hook-form";
import { useState } from "react";
import QuestionCard from "./QuestionCard";
import { Button } from "@/components/ui/button";
import { Plus, HelpCircle } from "lucide-react";
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export default function QuestionsTab() {
  const { control, getValues } = useFormContext();
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: "questions",
    keyName: "key", // use 'key' for internal React keys
  });

  const [activeId, setActiveId] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = fields.findIndex((field) => field.id === active.id);
      const newIndex = fields.findIndex((field) => field.id === over.id);
      move(oldIndex, newIndex);
    }
    setActiveId(null);
  };

  const handleAddQuestion = () => {
    // Add a default question structure
    const newId = Math.max(...fields.map((f) => Number(f.id) || 0), 0) + 1;
    append({
      id: newId,
      text: "New Question",
      type: "MCQ",
      marks: 1,
      difficulty: "Easy",
      explanation: "",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctAnswer: "Option 1",
    });
    setEditingId(newId);
  };

  return (
    <TabsContent
      value="questions"
      className="space-y-4 focus-visible:ring-0 outline-none"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-muted-foreground flex items-center gap-2">
          <HelpCircle className="w-4 h-4" />
          {fields.length} Questions Added
        </h3>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={fields.map((f) => f.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-3">
            {fields.map((field, index) => (
              <QuestionCard
                key={field.key} // important for useFieldArray
                question={field}
                index={index}
                onRemove={remove}
                isEditing={editingId === field.id}
                onEdit={() => setEditingId(field.id)}
                onCancelEdit={() => setEditingId(null)}
                onSaveEdit={() => setEditingId(null)}
              />
            ))}
          </div>
        </SortableContext>

        {/* Drag Overlay for smooth visual */}
        <DragOverlay>
          {activeId ? (
            <QuestionCard
              question={fields.find((f) => f.id === activeId)}
              index={fields.findIndex((f) => f.id === activeId)}
              onRemove={() => {}}
              onEdit={() => {}}
              onCancelEdit={() => {}}
              onSaveEdit={() => {}}
            />
          ) : null}
        </DragOverlay>
      </DndContext>

      {/* Add Question Button */}
      <Button
        type="button"
        variant="outline"
        onClick={handleAddQuestion}
        className="w-full h-14 border-dashed border-2 border-muted-foreground/20 hover:border-primary/50 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all flex flex-col gap-1 items-center justify-center rounded-xl"
      >
        <Plus className="w-5 h-5" />
        <span className="text-xs font-semibold">Add New Question</span>
      </Button>
    </TabsContent>
  );
}
