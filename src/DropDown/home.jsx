import BackGround from "../component/background";
import About from "../component/about";
import Work from "../component/work";
import Book from "../component/appointemtn";
import SwiperComponent from "../component/swiper";
import News from "../component/news";
function Home(){
    return(
        <>
        <BackGround/>
        <About/>
        <Work/>
        <Book/>
        <SwiperComponent/>
        <News/>
        </>
    )
}
export default Home