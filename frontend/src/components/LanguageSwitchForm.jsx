import React, { useEffect, useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LanguageContext } from "../components/LanguageContext";

const FormSchema = z.object({
  language: z.string().default("en"),
});

export function LanguageSwitchForm() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      language,
    },
  });

  useEffect(() => {
    form.setValue("language", language);
  }, [language, form]);

  function onSubmit() {
    toggleLanguage();
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
      <div className="flex items-center justify-between rounded-lg border p-4">
        <div className="space-y-0.5">
          <label className="text-base">
            {language === "en" ? "Language" : "Dil"}
          </label>
          <p>
            {language === "en"
              ? "Toggle between English and Turkish"
              : "İngilizce ve Türkçe arasında geçiş yapın"}
          </p>
        </div>
        <div>
          <input
            type="checkbox"
            checked={language === "tr"}
            onChange={() =>
              form.setValue("language", language === "en" ? "tr" : "en")
            }
            className="toggle-checkbox"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {language === "en" ? "Submit" : "Gönder"}
      </button>
    </form>
  );
}
