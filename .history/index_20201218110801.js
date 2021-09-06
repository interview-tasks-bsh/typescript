const teasers = [{
    locale: 'en',
    title: 'en title'
  },
  {
    locale: 'de',
    title: 'de title'
  },
  {
    locale: 'fr',
    title: 'fr title'
  },
  {
    locale: 'zh',
    title: 'zh title'
  }
];

const res = teasers.find(el =>
  el.locale.includes('en') ||
  el.locale.includes('de') ||
  !el.locale.includes('zh')
);

console.log(res);