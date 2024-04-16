import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [invalidForm, setInvalidForm] = useState({
    isFormInvalid: false,
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Clear the error message when any field is changed
    setInvalidForm({
      isFormInvalid: false,
      message: "",
    });

    // Check if the name field has at least 2 characters
    if (name === "name" && value.length < 2) {
      setInvalidForm({
        isFormInvalid: true,
        message: "Name must be at least 2 characters.",
      });
    }

    // Check if the email field is missing "@" and "."
    if (name === "email" && (!value.includes("@") || !value.includes("."))) {
      setInvalidForm({
        isFormInvalid: true,
        message: "Invalid email format. Must contain '@' and '.'",
      });
    }

    // Check if the message field is empty
    if (name === "message" && value.trim() === "") {
      setInvalidForm({
        isFormInvalid: true,
        message: "Message cannot be empty.",
      });
    }
  };

  const handleCloseErrorMessage = () => {
    setInvalidForm({
      isFormInvalid: false,
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the form fields are empty
    if (form.name === "" || form.email === "" || form.message === "") {
      // Change the button text to "Sending..."
      setLoading(true);

      // Start a timeout to change it back to "Send" after 2 seconds
      setTimeout(() => {
        setLoading(false);
      }, 2000);

      setInvalidForm({
        isFormInvalid: true,
        message: "Name, email, and message are required.",
      });
    } else {
      setLoading(true);

      emailjs
        .send(
          "service_s611s5x",
          "template_uoj8ntz",
          {
            from_name: form.name,
            to_name: "Sodiq",
            form_email: form.email,
            to_email: "sodiqworks3@gmail.com",
            message: form.message,
          },
          "-N_NsBSneUWuDJ-5K"
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");

            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.log(error);
            alert("Something went wrong.");
          }
        );
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
          {invalidForm.isFormInvalid && (
            <div className="bg-red-500 text-white rounded-lg p-2 mt-2 flex justify-between items-center">
              <span className="ml-2">
                {invalidForm.message}
              </span>
              <button
                className="text-white"
                onClick={handleCloseErrorMessage}
              >
                X
              </button>
            </div>
          )}
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
