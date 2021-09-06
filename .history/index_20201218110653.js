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
  locale.includes('en') ||
  locale.includes('de') ||
  !locale.includes('zh')
);

console.log(res);