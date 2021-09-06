const teasers = [

 {
    locale: 'zh',
    title: 'zh title'
  },

  
];

const res = teasers.find(el =>
  el.locale.includes('en') ||
  el.locale.includes('de') ||
  !el.locale.includes('zh')
);

console.log(res);