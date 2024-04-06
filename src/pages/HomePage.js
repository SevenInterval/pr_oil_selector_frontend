import Sponsor from '../components/homepage/Sponsor'
import Slider from '../components/homepage/Slider'
import News from '../components/homepage/News';
import { Helmet } from 'react-helmet-async';


const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Prista Oil</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/" />
            </Helmet>
            <div className="home-body">
                <Sponsor />
                <Slider />
                <News />
            </div>
        </>
    )
}

export default HomePage;