import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
    output: 'standalone',
    images:{
        remotePatterns: [new URL('https://mowijat.wordpress.com')]
    }
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);