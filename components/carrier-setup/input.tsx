import { Input, Button } from "@nextui-org/react";
import { FieldAttributes, useField } from "formik";

interface CustomInputProps {
  name: string;
  label?: string;
  type?: string;
  touched?: boolean;
  error?: string;
  onChange?: (event: any) => void;
}

const CustomInput = ({ name, label, type, touched, error, onChange }: CustomInputProps) => {
  return (
    <div style={{ paddingRight: '25px' }}>
      {type === 'file' ? (
        <Button
          auto
          flat
          color="primary"
          onPress={() => document.getElementById(name)?.click()}
        >
          {label || 'Upload File'}
          <input
            id={name}
            type="file"
            name={name}
            style={{ display: 'none' }}
            onChange={onChange ? (e) => onChange(e) : undefined}
          />
        </Button>
      ) : (
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          labelPlaceholder={label}
          name={name}
          type={type}
          onChange={onChange ? (e) => onChange(e) : undefined}
          helperText={touched && error ? error : ''}
          helperColor={touched && error ? "error" : "default"}
          status={touched && error ? "error" : "default"}
        />
      )}
    </div>
  );
};

export default CustomInput;
