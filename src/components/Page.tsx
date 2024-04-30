import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setConfig } from "../store/builder.slice";
import { useDndMonitor, useDroppable } from "@dnd-kit/core";
import {
  ElementsType,
  FormElementInstance,
  formElements,
} from "./formElements/FormElements";
import { GenerateId } from "../utils/GenerateId";
import { addQuestion } from "../store/builder.slice";

function Page({ index }: { index: number }) {
  const { config } = useSelector((state: any) => state.builder);

  const dispatch = useDispatch();

  const handleDelete = () => {
    const newConfig = config.filter((_: any, i: number) => i !== index);
    dispatch(setConfig(newConfig));
  };

  const droppable = useDroppable({
    id: `page-${index}`,
    data: {
      isQuestionDropArea: true,
    },
  });

  useDndMonitor({
    onDragEnd: (event) => {
      console.log(event.active.data.current);
      const { active, over } = event;
      if (!active || !over) return;

      const isSidePanelElement = active?.data?.current?.isSidePanelElement;

      if (isSidePanelElement) {
        const type = active?.data?.current?.type;
        const newElement = formElements[type as ElementsType].construct(
          GenerateId()
        );

        dispatch(
          addQuestion({
            page: index,
            question: newElement,
          })
        );

        console.log(newElement);
      }
    },
  });

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <Input
            variant="borderless"
            placeholder={config[index].name}
            className=" text-lg font-bold"
            onInput={(e) => {
              if (e.currentTarget.value === "") {
                const newConfig = (config[index].name = `Page ${index + 1}`);
                dispatch(setConfig(newConfig));
              } else {
                const newConfig = (config[index].name = e.currentTarget.value);
                dispatch(setConfig(newConfig));
              }
            }}
          />
          <Input
            variant="borderless"
            placeholder="Description"
            className="mb-4 text-lg "
          />
        </div>
        <div className="mx-6 py-8">
          <Button
            type="default"
            danger
            onClick={handleDelete}
            icon={<DeleteOutlined color="#ffffff" />}
          />
        </div>
      </div>
      <div
        ref={droppable.setNodeRef}
        className={`min-h-10 w-full rounded-xl bg-white px-8 py-8 ${
          droppable.isOver ? "ring-2 ring-[#19b394]" : ""
        }`}
      >
        {config[index]?.elements.length > 0 &&
          config[index].elements.map((element: any, index: number) => (
            <PageElementWrapper key={element.id} element={element} />
          ))}
        <div
          className="
            flex justify-center items-center
            h-full w-full text-gray-300
            border-2 border-dashed border-gray-300
            rounded-xl p-8
            w-[70%] m-auto
        "
        >
          Drag and drop questions here
        </div>
      </div>
    </div>
  );
}

function PageElementWrapper({ element }: { element: FormElementInstance }) {
  const BuilderComponent = formElements[element.type].builderComponent;
  return <BuilderComponent elementInstance={element} />;
}

export default Page;
