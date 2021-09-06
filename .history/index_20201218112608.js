const teasers = [

  {
    locale: 'zh',
    title: 'zh title'
  },


  {
    locale: 'fr',
    title: 'fr title'
  },


  {
    locale: 'en',
    title: 'en title'
  },
  {
    locale: 'de',
    title: 'de title'
  },
];

const res = teasers.filter(el =>
  el.locale.includes('en') ||
  el.locale.includes('de') ||
  !el.locale.includes('zh')
);

const locales = ['en', 'de'];

let t;
locales.forEach(locale => {
  const found = res.find(el => el.locale === locale)
  if (found) return t = found;
});

// const final = res.find(el => el.locale === 'en' );

console.log(t)