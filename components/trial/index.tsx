import { Button, Divider, Input, Text, Textarea } from "@nextui-org/react";
import React, { useRef, useState } from "react";
import { Flex } from "../styles/flex";

interface props {
  ref: any;
}

export const AboutUs = ({ ref }: props) => {
  const [visible, setVisible] = React.useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const handler = () => setVisible(true);

  const closeHandler = () => {
    setForm({ name: "", email: "", message: "" });
    setErrors({ name: "", email: "", message: "" });
    setVisible(false);
  };

  const validate = () => {
    const newErrors = { name: "", email: "", message: "" };
    if (!form.name) newErrors.name = "Full Name is required";
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!form.message) newErrors.message = "Message is required";

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log("Form submitted:", form);
      closeHandler();
    }
  };

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div
        ref={ref}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Text b size={18}>
            We'd Love to Hear from You!
          </Text>
          <Text id="modal-title" size={18}>
            Please fill out the form below, and we will get back to you as soon
            as possible.
          </Text>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "33px",
            paddingTop: "20px",
            width: "50%",
          }}
        >
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            labelPlaceholder="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            helperText={errors.name}
            helperColor="error"
            status={errors.name ? "error" : "default"}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            labelPlaceholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            helperText={errors.email}
            helperColor="error"
            status={errors.email ? "error" : "default"}
          />
          <Textarea
            bordered
            fullWidth
            color="primary"
            size="lg"
            labelPlaceholder="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            minRows={4}
            maxRows={10}
            helperText={errors.message}
            helperColor="error"
            status={errors.message ? "error" : "default"}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingTop: 20,
            justifyContent: "flex-end",
            width: "50%",
          }}
        >
          <Button
            auto
            flat
            color="error"
            onClick={closeHandler}
            style={{ marginRight: 10 }}
          >
            Close
          </Button>
          <Button auto onClick={handleSubmit}>
            Send Message
          </Button>
        </div>
      </div>
      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
