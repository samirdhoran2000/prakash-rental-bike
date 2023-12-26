import Image from 'next/image'
import Carousel from './components/Carousel';
import Card from './components/Card';

export default function Home() {
  return (
    <>
      <div className=" min-h-screen">
        <Carousel/>
      
     <Card />
      </div>
    </>
  );
}
