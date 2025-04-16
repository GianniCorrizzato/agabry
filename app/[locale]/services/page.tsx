import Card from '@/app/Components/Services/Card';
import { useTranslations } from 'next-intl';
import React from 'react'

const ServicesPage = () => {

  const t = useTranslations('ServicesPage');
  return (
    <>
      <div
        className="hero min-h-[calc(100vh-96px)]"
        style={{
          backgroundImage: "url(https://www.placesofjuma.com/wp-content/uploads/2023/06/Bibione-1n-scaled.jpg)",
        }}>
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center flex flex-col space-y-2">
          <div className="container mx-auto text-center">
            <h1 className="mb-5 text-9xl font-bold text-center">{t('title')}</h1>
            

          </div>
          <p className="mb-5 text-lg">
              {t('description')}
            </p>
        </div>
      </div>

      <section className='mt-20 mb-12'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
          <Card image="https://images.unsplash.com/photo-1561979608-360632b36831?q=80&w=1424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title={t('services.title1')} description={t('services.description1')} />
          <Card image="https://images.unsplash.com/photo-1589138578157-8207b7c1754f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title={t('services.title2')} description={t('services.description2')} />
          <Card image="https://www.bibione.eu/wp-content/uploads/2020/09/bibione-11072020-3487_@av-1.jpg"
            title={t('services.title3')} description={t('services.description3')} />
          <Card image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bibione_spiaggia.jpg/800px-Bibione_spiaggia.jpg"
            title={t('services.title4')} description={t('services.description4')} />
          <Card image="https://www.lampo.it/wp-content/uploads/2015/10/Bibione_casoni.jpg"
            title={t('services.title5')} description={t('services.description5')} />
          <Card image="https://luxeadventuretraveler.com/wp-content/uploads/2016/01/Bibione-Terme.jpg"
            title={t('services.title6')} description={t('services.description6')} />
          <Card image="https://images.unsplash.com/photo-1586172486224-6b48bd7b9682?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title={t('services.title7')} description={t('services.description7')} />
          <Card image="https://images.unsplash.com/photo-1519112232436-9923c6ba3d26?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title={t('services.title8')} description={t('services.description8')} />
          <Card image="https://www.ristoranteaicasoni.it/images/testata/fototestata2.jpg"
            title={t('services.title9')} description={t('services.description9')} />
        </div>
      </section>
    </>
  )
}

export default ServicesPage