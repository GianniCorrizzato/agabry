import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  const t = useTranslations('Footer');
  return (
    <footer className="footer sm:footer-horizontal bg-blue-950 text-gray-50 p-10">
  <nav>
    <h6 className="footer-title">{t('menu')}</h6>
    <Link href={`/`} className="link link-hover">{t('home')}</Link>
    <Link href={`/services`} className="link link-hover">{t('services')}</Link>
    <Link href={`/apartaments`} className="link link-hover">{t('apartaments')}</Link>
    <Link href={`/sell`} className="link link-hover">{t('sell')}</Link>
  </nav>
  <nav>
    <h6 className="footer-title">{t('company')}</h6>
    <Link href={`/about`}  className="link link-hover">{t('about')}</Link >
    <Link href={`/contact`} className="link link-hover">{t('contact')}</Link >
    <Link href={`/jobs`}  className="link link-hover">{t('jobs')}</Link >
  </nav>
  <nav>
    <h6 className="footer-title">{t('legal')}</h6>
    <Link href={`/terms`} className="link link-hover">{t('terms')}</Link >
    <Link href={`/privacy`} className="link link-hover">{t('privacy')}</Link >
    <Link href={`/cookie`} className="link link-hover">{t('cookie')}</Link >
  </nav>
  <form>
    <h6 className="footer-title">{t('newsletter')}</h6>
    <fieldset className="w-80">
      <label>{t('email')}</label>
      <div className="join">
        <input
          type="text"
          placeholder="test@example.com"
          className="input input-bordered join-item text-gray-600" />
        <button className="btn btn-primary join-item">{t('subscribe')}</button>
      </div>
    </fieldset>
  </form>
</footer>
  )
}

export default Footer