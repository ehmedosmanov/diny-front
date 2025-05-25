import Header from '@/components/Header';
import Categories from '@/components/Home/Categories';
import PopularPlaces from '@/components/Home/PopularPlaces';
import RandomRestaurant from '@/components/Home/RandomRestaurant';

export default function Home() {
  return (
    <>
      <Header />
      <Categories />
      <PopularPlaces />
      <RandomRestaurant/>
    </>
  );
}
