import BlogImg from '@/assets/images/blog-img.jpg';
import { StaticImageData } from 'next/image';

type Blog = {
  id: number;
  title: string;
  image: StaticImageData;
  date: string;
  viewCount: number;
};

export const blogData = [
  {
    id: 1,
    title: 'The Best Restaurants in Town',
    image: BlogImg,
    date: '2023-10-01',
    viewCount: 120,
  },
  {
    id: 2,
    title: 'Top 10 Dishes You Must Try',
    image: BlogImg,
    date: '2023-09-15',
    viewCount: 200,
  },
  {
    id: 3,
    title: 'A Guide to Food Festivals',
    image: BlogImg,
    date: '2023-08-20',
    viewCount: 150,
  },
  {
    id: 4,
    title: 'Healthy Eating Tips',
    image: BlogImg,
    date: '2023-07-10',
    viewCount: 300,
  },
  {
    id: 5,
    title: 'Exploring Local Cuisines',
    image: BlogImg,
    date: '2023-06-05',
    viewCount: 250,
  },
];
