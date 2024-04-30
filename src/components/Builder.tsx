import React, { useState } from "react";
import { Input, Form, Divider, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Page from "./Page";
import { setForm, setConfig } from "../store/builder.slice";
import { PlusCircleOutlined } from "@ant-design/icons";

const Builder: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const { config, form } = useSelector((state: any) => state.builder);

  const dispatch = useDispatch();

  const handleInputChange = (key: string, value: string) => {
    if (value === "") {
      delete form[key];
      dispatch(setForm({ form: form }));
    }
    setFormData({ ...formData, [key]: value });
  };

  const addPage = () => {
    const newConfig = [
      ...config,
      { name: `page ${config.length + 1}`, elements: [] },
    ];
    console.log(newConfig);
    dispatch(setConfig(newConfig));
  };

  return (
    <div className="  bg-gray-200 p-4 h-full">
      <div className="px-56 mt-10">
        <Input
          variant="borderless"
          placeholder="Survey Title"
          className="mb-4 text-3xl font-bold"
          value={formData.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
        />
        <Input
          variant="borderless"
          placeholder="Description"
          className="mb-4 text-lg "
          value={formData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
        />
        <Divider style={{ backgroundColor: "#19b394" }} />
        {config?.map((question: any, index: number) => (
          <div key={index} className="mb-4">
            <Page index={index} />
          </div>
        ))}
        <div className="flex w-full justify-center">
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            onClick={addPage}
            style={{
              backgroundColor: "#f0f0f0",
              textAlign: "center",
              height: "50px",
              color: "#19b394",
            }}
          >
            Add Page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Builder;
