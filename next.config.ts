import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
    
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.unsplash.com'
            
            },
            {
              protocol: 'https',
              hostname: 'www.bibione.eu'
            
            },
            {
              protocol: 'https',
              hostname: 'upload.wikimedia.org'
            
            },
            {
              protocol: 'https',
              hostname: 'www.lampo.it'
            
            },
            {
              protocol: 'https',
              hostname: 'luxeadventuretraveler.com'
            
            },
            {
              protocol: 'https',
              hostname: 'www.ristoranteaicasoni.it'
            
            },
            {
              protocol: 'https',
              hostname: 'imgs.search.brave.com'
            
            },
            {
              protocol: 'https',
              hostname: 'cf.bstatic.com'
            
            },
            {
              protocol: 'https',
              hostname: 'www.bibione.net'
            
            },
            {
              protocol: 'https',
              hostname: 'plus.unsplash.com'
            
            },
          ],
        },
      

};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);