"use client";

import { Input } from "antd";
import { ElementsType, FormElementInstance } from "../FormElements";
import { MdTextFields } from "react-icons/md";
import { useState } from "react";

const { TextArea } = Input;

const type: ElementsType = "longInput";

const extraAttributes = {
  label: "Long Text Input Field",
  placeholder: "Enter your text here",
  required: true,
};

export const LongInputFieldFormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  buttonProps: {
    label: "Long Text",
    icon: MdTextFields,
  },
  builderComponent: BuilderComponent,
  formComponent: () => <div>Long Input Field Form Elements</div>,
  propertiesComponent: () => <div>Long Input Field Properties</div>,
};

type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

function BuilderComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as CustomInstance;

  const [value, setValue] = useState<string>(`Question `);

  const { placeholder, required } = element.extraAttributes;
  return (
    <div className="h-full w-full border-2  border-gray-300 rounded-xl px-4 py-2 w-[70%] m-auto mb-4">
      <div className="flex align-middle">
        <label className="mb-4 text-lg p-1">2.</label>
        <Input
          variant="borderless"
          placeholder={placeholder}
          value={value}
          className="mb-4 text-lg w-fit"
          onChange={(e) => {
            if (e.target.value.length > 0) {
              setValue(e.target.value);
            } else {
              setValue(`Question `);
            }
          }}
          required={required}
        />
        {required && (
          <span className="text-red-500 ml-2 text-xl">
            <sup>*</sup>
          </span>
        )}
      </div>
      <TextArea
        variant="filled"
        rows={4}
        disabled
        className="mb-4 text-lg !cursor-default"
      />
      <div className="flex align-middle justify-end">
        <label className="mr-2 p-1">Required</label>
        <input type="checkbox" checked={required} className="mr-2 p-1" />
      </div>
    </div>
  );
}
