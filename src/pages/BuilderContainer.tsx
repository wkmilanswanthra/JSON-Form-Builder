import React from "react";
import Builder from "../components/Builder";
import SidePanel from "../components/SidePanel";
import { DndContext } from "@dnd-kit/core";
import DragOverlayWrapper from "../components/DragOverlayWrapper";

function BuilderContainer() {
  const onAddQuestion = (questionType: string) => {
    console.log(`Adding question of type: ${questionType}`);
  };

  return (
    <DndContext>
      <div className="flex flex-row h-auto w-full">
        <div className="min-w-56 min-h-full h-auto">
          <SidePanel onAddQuestion={onAddQuestion} />
        </div>
        <div className="flex-1 min-h-full h-auto">
          <Builder />
        </div>
        <DragOverlayWrapper />
      </div>
    </DndContext>
  );
}

export default BuilderContainer;
