"use client";

import { useState, useEffect } from "react";
import { Card, Toast } from "flowbite-react";
import { HiCheckCircle, HiExclamationCircle } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000); // Auto-hide after 3 seconds
      return () => clearTimeout(timer); // Clear timeout if toast changes
    }
  }, [toast]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setToast({ message: "Message sent successfully!", type: "success" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setToast({ message: "Failed to send message.", type: "error" });
      }
    } catch (error) {
      setToast({
        message: "An error occurred while sending the message.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      {toast && (
        <div className="fixed right-4 top-4 z-50">
          <Toast>
            <div className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500">
              {toast.type === "success" ? (
                <HiCheckCircle className="size-5" />
              ) : (
                <HiExclamationCircle className="size-5" />
              )}
            </div>
            <div className="ml-3 text-sm font-normal">{toast.message}</div>
            <Toast.Toggle onClick={() => setToast(null)} />
          </Toast>
        </div>
      )}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">Get in Touch</h1>
        <p className="text-lg text-gray-600">
          We'd love to hear from you! Whether you have a question, feedback, or
          just want to say hello, feel free to drop us a message.
        </p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Contact Form */}
        <div className="w-full lg:w-2/3">
          <Card className="p-8">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="johndoe@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Subject of your message"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Type your message here..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </Card>
        </div>

        {/* Right box with contact information */}
        <div className="w-full lg:w-1/3">
          <Card className="space-y-6 p-8">
            <div className="flex items-center text-lg">
              <FaInstagram className="mr-3 text-pink-600" />
              <a
                href="https://www.instagram.com/heymohdasif/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @heymohdasif
              </a>
            </div>
            <div className="flex items-center text-lg">
              <HiExclamationCircle className="mr-3 text-blue-600" />
              <a
                href="mailto:hellomohdasif@gmail.com"
                className="hover:underline"
              >
                hellomohdasif@gmail.com
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
