import { createContext } from "react";
import { formInitialValues } from "../../utill/validationForm";

export const FormContext = createContext(formInitialValues);

export function submitFormData(formData) {
  return formData;
}

export function storeFormData(key, value, setFormData) {
  setFormData((prev) => ({ ...prev, [key]: value }));
}
