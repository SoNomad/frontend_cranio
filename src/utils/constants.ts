import image from '@/assets/news-image.png';
import photo from '@/assets/default-photo.svg';
import lang from '@/assets/lang_ru.svg';

export const therapistsCards = [
  {
    id: '1',
    photo: '',
    name: 'Рыспаева Алия Шаяхметовна',
    position: 'Врач-остеопат',
    experience: '3 года',
    location: 'Москва',
    distance: '5 км',
    clinic: 'Клиника «Доктор»',
    address: 'ул. Новостроистельная, 25',
    price: '2500',
    phone: '+7 (999) 444-44 44',
  },
  {
    id: '2',
    photo: '',
    name: 'Авдеева-Миронюк Ирина Викторовна',
    position: 'Врач-остеопат',
    experience: '5 лет',
    location: 'Санкт-Петербург',
    distance: '5 км',
    clinic: 'Клиника «Доктор»',
    address: 'ул. Новостроистельная, 25',
    price: '4000',
    phone: '+7 (999) 444-44 44',
  },
  {
    id: '3',
    photo: '',
    name: 'Иванов Иван Иванович',
    position: 'Врач-остеопат',
    experience: '12 лет',
    location: 'Петропавловск-Камчатский',
    distance: '5 км',
    clinic: 'Клиника «Доктор»',
    address: 'ул. Новостроистельная, 25',
    price: '2500',
    phone: '+7 (999) 444-44 44',
  },
  {
    id: '4',
    photo: '',
    name: 'Петров Сергей Викторович',
    position: 'Врач-остеопат',
    experience: '3 года',
    location: 'Петропавловск-Камчатский',
    distance: '5 км',
    clinic: 'Клиника «Доктор»',
    address: 'ул. Новостроистельная, 25',
    price: '7500',
    phone: '+7 (999) 444-44 44',
  },
  {
    id: '5',
    photo: '',
    name: 'Пушкин Николай Сергеевич',
    position: 'Врач-остеопат',
    experience: '3 года',
    location: 'Петропавловск-Камчатский',
    distance: '5 км',
    clinic: 'Клиника «Доктор»',
    address: 'ул. Новостроистельная, 25',
    price: '7500',
    phone: '+7 (999) 444-44 44',
  },
  {
    id: '6',
    photo: '',
    name: 'Пупкин Николай Сергеевич',
    position: 'Врач-остеопат',
    experience: '3 года',
    location: 'Петропавловск-Камчатский',
    distance: '5 км',
    clinic: 'Клиника «Доктор»',
    address: 'ул. Новостроистельная, 25',
    price: '7500',
    phone: '+7 (999) 444-44 44',
  },
];

export const news = [
  {
    id: '1',
    photo: image,
    title: 'Открытие новой клиники состоялось 12 сентября. Были проведены',
  },
  {
    id: '2',
    photo: image,
    title: '17 мая — Мы представим новое поколение современных технологий',
  },
  {
    id: '3',
    photo: image,
    title: 'Главные события уходящего года мы обсудили вместе с нашими',
  },
  {
    id: '4',
    photo: image,
    title: 'Открытие новой клиники состоялось 12 сентября. Были проведены',
  },
  {
    id: '5',
    photo: image,
    title: '17 мая — Мы представим новое поколение современных технологий',
  },
  {
    id: '6',
    photo: image,
    title: 'Главные события уходящего года мы обсудили вместе с нашими',
  },
];
export const languages = [
  { photo: lang, title: 'English', ISO: 'En', active: false },
  { photo: lang, title: 'Русский', ISO: 'Ru', active: true },
  { photo: lang, title: 'Español', ISO: 'Es', active: false },
];

export const cities = [
  { city: 'Москва', id: 1, country: 'Россия' },
  { city: 'Санкт-Петербург', id: 2, country: 'Россия' },
  { city: 'Екатеринбург', id: 3, country: 'Россия' },
  { city: 'Краснодар', id: 4, country: 'Россия' },
  { city: 'Новосибирск', id: 5, country: 'Россия' },
  { city: 'Красноярск', id: 6, country: 'Россия' },
  { city: 'Челябинск', id: 7, country: 'Россия' },
  { city: 'Тюмень', id: 8, country: 'Россия' },
  { city: 'Ростов-на-Дону', id: 9, country: 'Россия' },
  { city: 'Уфа', id: 10, country: 'Россия' },
  { city: 'Пермь', id: 11, country: 'Россия' },
  { city: 'Самара', id: 12, country: 'Россия' },
  { city: 'Нижний Новгород', id: 13, country: 'Россия' },
  { city: 'Омск', id: 14, country: 'Россия' },
  { city: 'Саратов', id: 15, country: 'Россия' },
  { city: 'Хабаровск', id: 16, country: 'Россия' },
  { city: 'Томск', id: 17, country: 'Россия' },
  { city: 'Воронеж', id: 18, country: 'Россия' },
  { city: 'Волгоград', id: 19, country: 'Россия' },
  { city: 'Казань', id: 20, country: 'Россия' },
  { city: 'Балашиха', id: 21, country: 'Россия' },
  { city: 'Иркутск', id: 22, country: 'Россия' },
  { city: 'Сочи', id: 23, country: 'Россия' },
  { city: 'Ярославль', id: 24, country: 'Россия' },
  { city: 'Сургут', id: 25, country: 'Россия' },
  { city: 'Раменское', id: 26, country: 'Россия' },
  { city: 'Владивосток', id: 27, country: 'Россия' },
  { city: 'Мытищи', id: 28, country: 'Россия' },
  { city: 'Калуга', id: 29, country: 'Россия' },
  { city: 'Пятигорск', id: 30, country: 'Россия' },
  { city: 'Сахалин', id: 31, country: 'Россия' },
  { city: 'Мурманск', id: 32, country: 'Россия' },
  { city: 'Тамбов', id: 33, country: 'Россия' },
  { city: 'Липецк', id: 34, country: 'Россия' },
  { city: 'Якутск', id: 35, country: 'Россия' },
  { city: 'Таганрог', id: 36, country: 'Россия' },
  { city: 'Суздаль', id: 37, country: 'Россия' },
  { city: 'Владимир', id: 38, country: 'Россия' },
  { city: 'Тверь', id: 39, country: 'Россия' },
  { city: 'Архангельск', id: 40, country: 'Россия' },
];
