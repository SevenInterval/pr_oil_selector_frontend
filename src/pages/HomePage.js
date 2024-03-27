import Sponsor from '../components/homepage/Sponsor'
import Slider from '../components/homepage/Slider'
import News from '../components/homepage/News';


const HomePage = () => {
    return (
        <div className="home-body">
            <Sponsor />
            <Slider />
            <News />
        </div>
    )
}

export default HomePage;