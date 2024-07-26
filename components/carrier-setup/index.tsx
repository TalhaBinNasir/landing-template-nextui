import { Formik, Field, ErrorMessage, Form } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { Flex } from "../styles/flex";
import { Box } from "../styles/box";
import { Input } from "@nextui-org/react";
import CustomInput from "./input";

interface FormValues {
  name: string;
  date: string;
  file: File | null;
}

const CarrierForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    date: Yup.date().required("Date is required"),
    file: Yup.mixed()
      .required("File is required")
      .test(
        "fileSize",
        "File size is too large",
        (value: any) => value && value.size <= 2000000
      ) // 2MB
      .test(
        "fileFormat",
        "Unsupported Format",
        (value: any) =>
          value &&
          ["image/jpg", "image/jpeg", "image/gif", "image/png"].includes(
            value.type
          )
      ),
  });

  const [initialValues, setInitialValues] = useState<FormValues>({
    name: "",
    date: "",
    file: null,
  });

  const handleSubmit = (values: any) => {
    console.log(values);
    // Handle form submission
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, errors, touched }) => (
        <Form>
          <Box>
            <Flex
              justify={"between"}
              align={"center"}
              css={{
                pt: "$20",
                maxWidth:'800px'
              }}
            >
              <div>
                <CustomInput
                  label={"Name"}
                  name={"name"}
                  touched={touched.name}
                  error={
                    errors.name
                  }
                />
              </div>

              <div>
              <CustomInput
                  label={"Date"}
                  name={"date"}
                  touched={touched.date}
                  error={
                    errors.date
                  }
                />
              </div>
            </Flex>
            <div>
              <CustomInput
                label="Upload File"
                type="file"
                name="file"
                onChange={(event: any) => {
                  setFieldValue(
                    "file",
                    event.currentTarget.files
                      ? event.currentTarget.files[0]
                      : null
                  );
                }}
                touched={touched.file}
                error={errors.file}
              />
            </div>

            <button type="submit">Submit</button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default CarrierForm;
