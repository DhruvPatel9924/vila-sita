import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

//service_58glton Service ID
//template_qcmfxeo template ID
//MkCling1126Rp1Ha- public ID

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_58glton",
        "template_qcmfxeo",
        {
          from_name: form.name,
          to_name: "Vraj",
          from_email: form.email,
          to_email: "vrajp771@gmail.com",
          message: form.message,
        },
        "MkCling1126Rp1Ha-"
      )
      .then(
        () => {
          setLoading(false);
          alert("Mail Send");
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
    setLoading(true);
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <p>Get in touch for a free consultation.</p>
      <form ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">{loading ? "Sending..." : "Send"}</button>
      </form>
    </section>
  );
};

export default Contact;
