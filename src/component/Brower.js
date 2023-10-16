
import Header from './Header'
import useNowPlayingmovie from '../hooks/useNowPlayingmovie'
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';
import usePopulerMovie from '../hooks/usePopulerMovie';
import useTopRetedMovie from '../hooks/useTopRetedMovie';
import useUpcomingMovie from '../hooks/useUpcomingMovie';
import { useSelector } from 'react-redux';
import Gptpage from './Gptpage';

const Brower = () => {
const showGptSearch = useSelector(store => store.gpt.togglegptsearchbtn)

useNowPlayingmovie();
usePopulerMovie()
useTopRetedMovie()
useUpcomingMovie()

  return (
    <div>
     <Header/>
   {
    showGptSearch ? 
    <Gptpage/> : 
    <>
    <MainContainer/>
    <SecondryContainer/>
    </>
   }
    
    </div>
  )
}

export default Brower
