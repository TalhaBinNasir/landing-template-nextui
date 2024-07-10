import React, { useState } from "react";
import {
  Modal,
  Input,
  Button,
  Text,
  Navbar,
  Textarea,
} from "@nextui-org/react";

export const ModalLogin = () => {
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
    <div>
      <Navbar.Link onClick={handler}>Contact Us</Navbar.Link>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        style={{minHeight:'60vh'}}
      >
        <Modal.Header>
          <div>
            <Text b size={18}>
              We'd Love to Hear from You!
            </Text>
            <Text id="modal-title" size={18}>
              Please fill out the form below, and we will get back to you as
              soon as possible.
            </Text>
          </div>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "33px",
            paddingTop: "30px",
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
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={handleSubmit}>
            Send Message
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
