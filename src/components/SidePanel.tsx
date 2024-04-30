import React from "react";
import { Menu } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import SidePanelElement from "./SidePanelElement";
import { formElements } from "./formElements/FormElements";

const SidePanel: React.FC<{
  onAddQuestion: (questionType: string) => void;
}> = ({ onAddQuestion }) => {
  const questionTypes = [
    { type: "text", label: "Text" },
    { type: "boolean", label: "Boolean (Yes/No)" },
    { type: "checkbox", label: "Checkbox" },
    { type: "comment", label: "Comment" },
    { type: "dropdown", label: "Dropdown" },
    { type: "tagbox", label: "Tag Box" },
    { type: "expression", label: "Expression" },
    { type: "file", label: "File Upload" },
    { type: "html", label: "HTML" },
    { type: "image", label: "Image" },
    { type: "imagepicker", label: "Image Picker" },
    { type: "matrix", label: "Matrix" },
    { type: "matrixdropdown", label: "Matrix Dropdown" },
    { type: "matrixdynamic", label: "Matrix Dynamic" },
    { type: "multipletext", label: "Multiple Text" },
    { type: "panel", label: "Panel (Group Questions)" },
    { type: "paneldynamic", label: "Panel Dynamic" },
    { type: "radiogroup", label: "Multiple Choice" },
    { type: "rating", label: "Rating" },
    { type: "ranking", label: "Ranking" },
    { type: "signaturepad", label: "Signature Pad" },
  ];

  return (
    <aside className="bg-gray-200 p-4 h-full min-h-screen grid grid-cols-2 gap-2 ">
      {/* <Menu
        mode="vertical"
        style={{
          width: "100%",
          backgroundColor: "#e5e7eb",
          border: "none",
        }}
      >
        {questionTypes.map((question, index) => (
          <Menu.Item
            key={index}
            style={{ backgroundColor: "#e5e7eb" }}
            icon={<PlusCircleOutlined />}
            onClick={() => onAddQuestion(question.type)}
          >
            {question.label}
          </Menu.Item>
        ))}
      </Menu> */}
      {/* {questionTypes.map((question, index) => (
        <div
          key={index}
          className="bg-white rounded-lg m-2 col-span-1 w-24 h-24 flex justify-center items-center cursor-grab border-[#19b394] border-[1px] p-1"
          onClick={() => onAddQuestion(question.type)}
        >
          <p className="text-xs text-center">{question.label}</p>
        </div>
      ))} */}
      <SidePanelElement formElement={formElements.input} />
    </aside>
  );
};

export default SidePanel;
