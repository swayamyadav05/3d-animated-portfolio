import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/ContactExperience";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      if (!formRef.current) {
        throw new Error("Form reference is null");
      }
      const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check environment variables."
        );
      }
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully!",
      });
    } catch (error) {
      console.log("EMAILJS ERROR,", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get In Touch With Me"
          sub="📧 Contact Information"
        />

        <div className="grid-12-cols mt-16">
          {/* Left side - Contact Form */}
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                onSubmit={handleSubmit}
                className="w-full h-full flex flex-col gap-7"
                ref={formRef}>
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" disabled={loading}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
              {submitStatus.type && (
                <div
                  className={`mt-4 p-3 rounded ${
                    submitStatus.type === "success"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}>
                  {submitStatus.message}
                </div>
              )}
            </div>
          </div>

          {/* Right side - 3D Experience */}
          <div className="xl:col-span-7 min-h-96">
            <div className="w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
