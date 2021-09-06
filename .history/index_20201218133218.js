const teasers = [
   {
    locale: 'ch',
    title: 'en title'
  },
  {
    locale: 'zh',
    title: 'zh title'
  },
  {
    locale: 'dd',
    title: 'fr title'
  }, {
    locale: 'ab',
    title: 'fr title'
  },

  {
    locale: 'fr',
    title: 'fr title'
  },
 
];

// const res = teasers.find(el =>
//   (el.locale.includes('en') ||
//     el.locale.includes('de'))
// );

const locales = ['en', 'de'];

let t;
for (const locale of locales) {
  t = teasers.find(el => el.locale === locale)
  if (t) break;
}

if (!t) {
  t = teasers.find(t => t.locale != 'zh');
}

console.log(t);