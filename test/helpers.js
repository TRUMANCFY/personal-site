const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Fengyu Cai',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Fengyu Cai',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Fengyu Cai',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Fengyu Cai',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Fengyu Cai',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
