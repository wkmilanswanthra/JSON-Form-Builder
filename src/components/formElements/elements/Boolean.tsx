"use client";

import { ElementsType, FormElementInstance } from "../FormElements";
import { MdOutlineToggleOn } from "react-icons/md";

const type: ElementsType = "boolean";

const extraAttributes = {
  label: "Yes/No",
  placeholder: "",
  required: false,
};

export const BooleanFormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  buttonProps: {
    label: "Yes/No",
    icon: MdOutlineToggleOn,
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
