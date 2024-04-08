import { Helmet } from "react-helmet-async";

const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>Prista Oil</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="*" />
            </Helmet>
            <div className="page-404">
                <h1 style={{ display: "none" }}>Prista Oil &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                <strong style={{ fontFamily: "sans-serif" }}>404</strong> We are sorry but this content is not available any longer. Please go to another page.
            </div>
        </>
    )
}

export default NotFound;