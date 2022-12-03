import Header from "../app/components/Header";
import HomePage from './home'
import Footer from '../app/components/Footer'
import { iRepo } from "../app/types/interfaces"

type Props = {
  photos: {
      photos: iRepo[]
  }
}



const Home = ({ photos }: Props) => {
  
  return (
    <>
        <HomePage photos={photos} />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  
  const res = await fetch("https://api.pexels.com/v1/curated",{
      headers: {
          Authorization: '563492ad6f91700001000001276a127c75554a839acb4d1c3133506b'
      }
  });

  const photos = await res.json()

  return {
    props: { photos },
  };

};

