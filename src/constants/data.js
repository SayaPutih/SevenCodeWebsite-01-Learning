import images from './images';

const other = [
  {
    nama : 'Sweet Tea',
    harga : 'Rp 8.000,00',
    det : 'Drinks'
  },
  {
    nama : 'Tea',
    harga : 'Rp 5.000,00',
    det : 'Drinks'
  },
  {
    nama : 'Mineral Water',
    harga : 'Rp 5.000,00',
    det  : 'Drinks'
  },
  {
    nama : 'Siomay (A Serving)',
    harga : 'Rp 5.000,00',
    det  : 'Food'
  }
];


const coffee = [
  {
    nama : 'Palm Sugar Coffee',
    harga : 'Rp 15.000,00',
    det : 'Coffee'
  },
  {
    nama : 'Cappucino',
    harga : 'Rp 15.000,00',
    det : 'Coffee'
  },
  {
    nama : 'Americano',
    harga : 'Rp 10.000,00',
    det  : 'Coffee'
  },
  {
    nama : 'Latte',
    harga: 'Rp 15.000,00',
    det  : 'Coffee'
  },
  {
    nama : 'Old Time Traditional Coffee',
    harga: 'Rp 14.000,00',
    det  : 'Coffee'
  }
];


const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards ,coffee,other};
