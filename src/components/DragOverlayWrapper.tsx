import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import React, { useState } from "react";
import { SidePanelElementDragOverlay } from "./SidePanelElement";
import { ElementsType, formElements } from "./formElements/FormElements";

function DragOverlayWrapper() {
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);

  useDndMonitor({
    onDragStart: (event) => {
      setDraggedItem(event.active);
    },
    onDragCancel: () => {
      setDraggedItem(null);
    },
    onDragEnd: () => {
      setDraggedItem(null);
    },
  });

  const node = draggedItem?.id ? (
    <SidePanelElementDragOverlay
      formElement={formElements[draggedItem.id as ElementsType]}
    />
  ) : (
    <div>{draggedItem?.data?.current?.type}</div>
  );
  //   if (draggedItem) {
  //     const type = draggedItem.data?.current?.type as ElementsType;
  //     return <SidePanelElementDragOverlay formElement={formElements[type]} />;
  //   }
  return <DragOverlay>{node}</DragOverlay>;
}

export default DragOverlayWrapper;
