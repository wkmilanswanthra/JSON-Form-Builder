"use client";

import { ElementsType, FormElementInstance } from "../FormElements";
import { MdTextFields } from "react-icons/md";

const type: ElementsType = "input";

const extraAttributes = {
  label: "Input Field",
  placeholder: "Enter your text here",
  required: false,
};

export const InputFieldFormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  buttonProps: {
    label: "Input Field",
    icon: MdTextFields,
  },
  builderComponent: BuilderComponent,
  formComponent: () => <div>Input Field Form Elements</div>,
  propertiesComponent: () => <div>Input Field Properties</div>,
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
  return (
    <div
      className="
                  h-full w-full
                  border-2  border-gray-300
                  rounded-xl px-4
                  py-2
                  w-[70%] m-auto mb-4
              "
    >
      {element.extraAttributes.label && (
        <label className="text-lg font-bold">
          {element.extraAttributes.label}
        </label>
      )}
    </div>
  );
}
