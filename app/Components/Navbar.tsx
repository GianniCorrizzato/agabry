"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";



const Navbar = ({ locale }: { locale: string }) => {
  const t = useTranslations("NavbarLinks");
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };
  return (
    <div className="w-full flex justify-between border-b h-24 px-6">
      <div className="flex items-center">
        <div className="flex flex-col items-center gap-0.5">
          <Image src={"/logo.svg"} height={50} width={50} alt="logo" />
        <p className="text-blue-950 font-extrabold text-lg">agabry</p><span className="text-xs">TOURIST AGENCY</span>
        </div>
        
      </div>
      <div className="flex gap-5 items-center text-2xl font-boldg text-blue-950 
      transition-all duration-300">
        <Link className="font-bold  hover:text-blue-600" href={`/${locale}/`}>{t("home")}</Link>
        <Link className="font-bold  hover:text-blue-600" href={`/${locale}/services`}>{t("services")}</Link>
        <Link className="font-bold  hover:text-blue-600" href={`/${locale}/apartaments`}>{t("apartaments")}</Link>
        <Link className="font-bold  hover:text-blue-600" href={`/${locale}/sell`}>{t("sell")}</Link>
        <Link className="font-bold  hover:text-blue-600" href={`/${locale}/contact`}>{t("contact")}</Link>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-blue-950  hover:bg-blue-600 text-white font-bold py-2 px-5 rounded-2xl">{t("button")}</button>
      
      <select
        value={locale}
        onChange={handleLanguageChange}
        className="rounded-md px-4 py-2 bg-transparent hover:outline-none focus:outline-none"
      >
        <option value="it">
          IT
        </option>
        <option value="de">DE</option>
        <option value="en">EN</option>
        <option value="fr">FR</option>
        <option value="es">ES</option>
        <option value="pt">PT</option>
        <option value="ru">RU</option>
        <option value="jp">JP</option>
        <option value="pl">PL</option>
      </select>
      </div>
    </div>
  );
};

export default Navbar;