import React from "react";
import { InputFieldFormElement } from "./elements/InputField";

export type ElementsType = "input";

export interface FormElement {
  construct: (id: string) => FormElementInstance;
  buttonProps: {
    label: string;
    icon: React.ElementType;
  };
  type: ElementsType;
  builderComponent: React.FC<{
    elementInstance: FormElementInstance;
  }>;
  formComponent: React.FC;
  propertiesComponent: React.FC;
}

export interface FormElementInstance {
  id: string;
  type: ElementsType;
  extraAttributes?: Record<string, any>;
}

type FormElementsType = {
  [key in ElementsType]: FormElement;
};

export const formElements: FormElementsType = {
  input: InputFieldFormElement,
};
