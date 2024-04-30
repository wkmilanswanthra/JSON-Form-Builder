import React from "react";
import { FormElement } from "./formElements/FormElements";
import { useDraggable } from "@dnd-kit/core";

function SidePanelElement({ formElement }: { formElement: FormElement }) {
  const { label, icon: Icon } = formElement.buttonProps;

  const draggable = useDraggable({
    id: formElement.type,
    data: {
      type: formElement.type,
      isSidePanelElement: true,
    },
  });

  return (
    <div
      ref={draggable.setNodeRef}
      className={`bg-white rounded-lg m-2 col-span-1 w-24 h-24 flex flex-col justify-center items-center cursor-grab border-[#19b394] border-[1px] p-1 ${
        draggable.isDragging && "ring-2 ring-[#19b394]"
      }`}
      {...draggable.listeners}
      {...draggable.attributes}
    >
      <Icon className="h-8 w-8 " />
      <p className="text-xs text-center">{label}</p>
    </div>
  );
}

export function SidePanelElementDragOverlay({
  formElement,
}: {
  formElement: FormElement;
}) {
  const { label, icon: Icon } = formElement.buttonProps;

  return (
    <div
      className={`bg-white rounded-lg m-2 col-span-1 w-24 h-24 flex flex-col justify-center items-center cursor-grab border-[#19b394] border-[1px] p-1 `}
    >
      <Icon className="h-8 w-8 " />
      <p className="text-xs text-center">{label}</p>
    </div>
  );
}

export default SidePanelElement;
