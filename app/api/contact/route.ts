import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Define the POST handler
export async function POST(req: NextRequest) {
  const body: ContactFormData = await req.json();

  const { name, email, subject, message } = body;

  // Log environment variables for debugging purposes (remove in production)
  console.log("EMAIL_USER:", process.env.EMAIL_USER);
  console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Not Loaded");

  // Set up the Nodemailer transport using the Gmail App Password
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address from environment variables
      pass: process.env.EMAIL_PASS, // Your Gmail App Password from environment variables
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // Your Gmail address
    to: "hellomohdasif@gmail.com", // The email address to receive the contact form submission
    replyTo: email, // Set the reply-to address to the user's email
    subject: `New Contact Form Submission: ${subject}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 },
    );
  }
}

// Handle other HTTP methods
export function otherMethods(req: NextRequest) {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
