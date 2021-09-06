const teasers = [
 {
    locale: 'zh',
    title: 'zh title'
  },
  {
    locale: 'xy',
    title: 'fr title'
  }, {
    locale: 'ab',
    title: 'fr title'
  },
 
  {
    locale: 'fr',
    title: 'fr title'
  },
  {
    locale: 'en',
    title: 'en title'
  },

];

const res = teasers.find(el =>
  ((el.locale.includes('en') ||
      el.locale.includes('de')) &&
    !el.locale.includes('zh')) 
);

// const locales = ['en', 'de'];

// let t;
// for (const locale of locales) {
//   t = res.find(el => el.locale === locale)
//   if (t) break;
// }


console.log(res)