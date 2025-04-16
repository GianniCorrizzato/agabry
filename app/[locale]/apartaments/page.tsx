import Image from 'next/image'
import { useTranslations } from 'next-intl';
import React from 'react'

import { MapPin } from 'lucide-react'

const ApartamentsPage = () => {
  const t = useTranslations('ApartmentsPage');
  return (
    <div className='h-[calc(100vh-96px)] mb-8 mt-8'>
      <div
        className='container mx-auto flex flex-col justify-center items-center space-y-4  '>
        <h2 className='font-bold text-5xl'>{t('title')}</h2>
        <p className='text-lg'>{t('description')}</p>
      </div>
      <div className='container mx-auto flex justify-center items-center mt-9 mb-20'>
        <div className="carousel w-full h-[400px]">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="card lg:card-side bg-base-100 shadow-sm lg:w-full">
              <figure>
                <Image
                  src={"https://imgs.search.brave.com/iVZGlzN9dgwLV2tIHi7uAz62y_WfyNP2oUPElcZVPCA/rs:fit:860:0:0:0/g:ce/aHR0cDovL3d3dy5i/aWJpb25lLWFwcGFy/dGFtZW50aS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTIv/MDYvY29uZG9taW5p/b19jaXR5X2JpYmlv/bmVfYXBwYXJ0YW1l/bnRpNi0zMDB4MjA1/LmpwZw"}
                  alt="Album"
                  width={500}
                  height={300} />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold text-3xl">{t('apartaments.title1')}</h2>
                <div className='flex gap-2 items-center'>
                  <MapPin className='w-6 h-6' />
                  <p className='text-sm uppercase'>{t('apartaments.position1')}</p>

                </div>
                <p>{t('apartaments.description1')}</p>
                <div className="card-actions justify-end">

                </div>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
          <div className="card lg:card-side bg-base-100 shadow-sm lg:w-full">
              <figure className='flex-1/2'>
                <Image
                  src={"https://cf.bstatic.com/xdata/images/hotel/max1024x768/360902636.jpg?k=1c7e5e2f355cea12be35bc2e9a07f669883b706f66c2f2ad3c8bec4b81dc4509&o=&hp=1"}
                  alt="Album"
                  width={500}
                  height={300} />
              </figure>
              <div className="card-body flex-1/2">
                <h2 className="card-title font-bold text-3xl">{t('apartaments.title2')}</h2>
                <div className='flex gap-2 items-center'>
                  <MapPin className='w-6 h-6' />
                  <p className='text-sm uppercase'>{t('apartaments.position2')}</p>

                </div>
                <p>{t('apartaments.description2')}</p>
                <div className="card-actions justify-end">

                </div>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
          <div className="card lg:card-side bg-base-100 shadow-sm lg:w-full">
              <figure>
                <Image
                  src={"https://www.bibione.net/ambient.cache/54/r3943635265.jpg"}
                  alt="Album"
                  width={500}
                  height={300} />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold text-3xl">{t('apartaments.title3')}</h2>
                <div className='flex gap-2 items-center'>
                  <MapPin className='w-6 h-6' />
                  <p className='text-sm uppercase'>{t('apartaments.position3')}</p>

                </div>
                <p>{t('apartaments.description3')}</p>
                <div className="card-actions justify-end">

                </div>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
          <div className="card lg:card-side bg-base-100 shadow-sm lg:w-full">
              <figure>
                <Image
                  src={"https://www.lampo.it/wp-content/uploads/2019/10/21CORM-CORM_1.jpg"}
                  alt="Album"
                  width={500}
                  height={300} />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold text-3xl">{t('apartaments.title4')}</h2>
                <div className='flex gap-2 items-center'>
                  <MapPin className='w-6 h-6' />
                  <p className='text-sm uppercase'>{t('apartaments.position4')}</p>

                </div>
                <p>{t('apartaments.description4')}</p>
                <div className="card-actions justify-end">

                </div>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApartamentsPage