import { useTranslations } from 'next-intl';
import React from 'react'

const Hero = () => {
  const t = useTranslations('HomePage');
  return (
    <div
  className="hero min-h-[calc(100vh-96px)] mb-10"
  style={{
    backgroundImage: "url(https://plus.unsplash.com/premium_photo-1663089512281-ef61fee86c46?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
  }}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{t('title')}</h1>
      <p className="mb-5">
       {t('description')}
      </p>
      <button className="btn btn-primary">{t('button')}</button>
    </div>
  </div>
</div>
  )
}

export default Hero