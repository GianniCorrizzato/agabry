"use client"
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';



const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert(t("alert"));
      return;
    }

    console.log('Dati inviati:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };
const t = useTranslations('contactPage');
  return (
    <div className=" max-w-2xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold mb-6 text-center">{t("title")}</h2>
      <p>{t("description")}</p>

      {submitted && (
        <div className="mb-4 text-green-600 text-center font-medium">
          {t("success")}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium">{t("name")}</label>
          <input
            type="text"
            name="name"
            placeholder={t("namePlaceholder")}
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">{t("email")}</label>
          <input
            type="email"
            name="email"
            placeholder={t("emailPlaceholder")}
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">{t("message")}</label>
          <textarea
            name="message"
            rows={3}
            placeholder={t("messagePlaceholder")}
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-blue-950 transition duration-200"
        >
          {t("submit")}
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
