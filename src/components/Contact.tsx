import React, { useState } from "react";
import Button from "../libs/Button";
import { sendContactForm } from "../libs/api";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  notify: () => void;
}

const Contact = ({ notify }: Props) => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if(!details.name || !details.message || !details.email) {

      return;
    }
    
    setLoading(true);
    try {
      const res = await sendContactForm(details);
      await res.json();
      setLoading(false);
      notify();
      setDetails({ name: "", email: "", message: "" });
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="w-full md:px-20 px-5 pb-5 py-10">
      <div className="flex justify-center mb-5 text-5xl font-black text-secondary-text-color">
        Contact
      </div>
      <div className="md:flex flex-col items-center justify-center">
        <div className="w-full md:grid md:w-4/5 grid-cols-2 gap-4">
          <input
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            type="text"
            className="w-full px-10 py-3 rounded bg-zinc-800"
            placeholder="Name"
            value={details.name}
          />
          <input
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            type="email"
            className="w-full md:mt-0 mt-4 px-10 py-3 rounded bg-zinc-800"
            placeholder="Email"
            value={details.email}
          />
        </div>
        <div className="md:w-4/5">
          <textarea
            onChange={(e) =>
              setDetails({ ...details, message: e.target.value })
            }
            placeholder="Message"
            className="w-full mt-4 rounded px-10 py-3 resize-none bg-zinc-800"
            rows={10}
            value={details.message}
          ></textarea>
        </div>
      </div>
      <div className="md:ml-28 mt-3">
        <Button loading={loading} title="Submit" action={handleSubmit} />
      </div>
    </div>
  );
};

export default Contact;
