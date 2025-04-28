import React from "react"

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100 pt-20 p-8"
    >
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-700 text-center max-w-2xl">
        Feel free to reach out via email at{" "}
        <span className="text-blue-600 font-semibold">
          your-email@example.com
        </span>
        .
      </p>
    </section>
  )
}

export default Contact
