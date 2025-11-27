/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://itnfitness-newyear-event.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  changefreq: 'weekly',
  priority: 1.0,
  sitemapSize: 5000,
}
