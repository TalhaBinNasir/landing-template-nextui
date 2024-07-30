import { Formik, Form } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { Flex } from "../styles/flex";
import { Box } from "../styles/box";
import CustomInput from "./input";

interface FormValues {
  name: string;
  date: string;
  name1: string;
  date1: string;
  name2: string;
  date2: string;
  name3: string;
  date3: string;
  name4: string;
  date4: string;
  file1: File | null;
  file2: File | null;
  file3: File | null;
}

const CarrierForm = () => {
  const formFields = [
    { name: "name", label: "Name", type: "text" },
    { name: "date", label: "Date", type: "text" },
    { name: "name1", label: "Name 1", type: "text" },
    { name: "date1", label: "Date 1", type: "text" },
    { name: "name2", label: "Name 2", type: "text" },
    { name: "date2", label: "Date 2", type: "text" },
    { name: "name3", label: "Name 3", type: "text" },
    { name: "date3", label: "Date 3", type: "text" },
    { name: "name4", label: "Name 4", type: "text" },
    { name: "date4", label: "Date 4", type: "text" },
    { name: "file1", label: "File 1", type: "file" },
    { name: "file2", label: "File 2", type: "file" },
    { name: "file3", label: "File 3", type: "file" },
  ];

  const groupedFields: Array<any> = [];
  for (let i = 0; i < formFields.length; i += 3) {
    groupedFields.push(formFields.slice(i, i + 3));
  }

  const validationSchema = Yup.object(
    formFields.reduce((schema, field) => {
      if (field.type === "file") {
        schema[field.name] = Yup.mixed()
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
          );
      } else {
        schema[field.name] = Yup.string().required("Name is required");
      }
      return schema;
    }, {} as Record<string, Yup.AnySchema>)
  );

  const [initialValues, setInitialValues] = useState<FormValues>({
    name: "",
    date: "",
    name1: "",
    date1: "",
    name2: "",
    date2: "",
    name3: "",
    date3: "",
    name4: "",
    date4: "",
    file1: null,
    file2: null,
    file3: null,
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
          <Box style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            {groupedFields.map((row, rowIndex) => (
              <Flex
                justify="between"
                align="center"
                css={{ width: "100%", flexWrap: "wrap" }}
                key={rowIndex}
              >
                {row.map((field: any) => (
                  <div key={field.name} className="input-container">
                    <CustomInput
                      label={field.label}
                      name={field.name}
                      type={field.type}
                      onChange={
                        field.type === "file"
                          ? (event: React.ChangeEvent<HTMLInputElement>) => {
                              setFieldValue(
                                field.name,
                                event.currentTarget.files
                                  ? event.currentTarget.files[0]
                                  : null
                              );
                            }
                          : undefined
                      }
                      touched={touched[field.name as keyof FormValues]}
                      error={errors[field.name as keyof FormValues]}
                    />
                  </div>
                ))}
              </Flex>
            ))}
          </Box>
          <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '20px' }}>
            <button type="submit">Submit</button>
          </Box>
          <style jsx>{`
            .input-container {
              flex: 1 1 30%;
              margin: 0 10px;
              padding-top:50px;
            }

            @media (max-width: 768px) {
              .input-container {
                flex: 1 1 100%;
                paddingTop:10px;
              }
            }
          `}</style>
        </Form>
      )}
    </Formik>
  );
};

export default CarrierForm;
