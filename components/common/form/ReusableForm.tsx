import React from "react";
import { FormikHelpers, useFormik } from "formik";
// import ErrorMessage from "@/components/common/form/ErrorMessage.tsx";
import { Button } from "@/components/common/";
import cx from "classnames";
import { FormField } from "@/types/global";
import { Input } from "@/components/common";
interface FormProps<Values> {
  fields: FormField;
  initialValues: { [key: string]: string };
  onSubmit: (
    values: Values,
    formikHelpers: FormikHelpers<Values>
  ) => void | Promise<void>;
  submitButtonText: string;
  submitButtonDisabled?: boolean;
  showLabel?: boolean;
}
const ReusableForm: React.FC<FormProps<any>> = ({
  fields,
  initialValues,
  onSubmit,
  submitButtonText,
  // submitButtonDisabled = true,
  showLabel,
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema: fields.validation,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} className={cx(fields.FormStyles)}>
      {fields.data.map((field) => (
        <div key={field.name} className={cx("w-full flex items-center")}>
          <label htmlFor={field.name} className={cx(!showLabel && "hidden")}>
            {field.label}
          </label>
          <Input
            type={field.type}
            id={field.name}
            placeholder={field.placeholder}
            {...formik.getFieldProps(field.name)}
            className={cx(fields.InputStyles, "")}
          />
          {/* {formik.touched[field.name] && formik.errors[field.name]
            ? toast.error(formik.errors[field.name] as string)
            : // <ErrorMessage>{formik.errors[field.name]}</ErrorMessage>
              ""} */}
        </div>
      ))}
      <Button type="submit" className={cx(fields.ButtonStyles, "")}>
        {submitButtonText}
      </Button>
    </form>
  );
};

export default ReusableForm;
