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

const res = teasers.find(el =>
  el.locale.includes('en') ||
  el.locale.includes('de') ||
  !el.locale.includes('zh')
);

console.log(res);