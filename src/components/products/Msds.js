import { Helmet } from "react-helmet-async";

const Msds = () => {
    return (
        <>
            <Helmet>
                <title>MSDS</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/msds-9" />
            </Helmet>
            <div className="body_with_sidebar default">
                <aside>
                    <div className="cont-body">
                    </div>
                </aside>
                <article>
                    <div className="page-header">
                        <h1>MSDS</h1>
                    </div>
                    <div className="page-article">
                        <h3 style={{ textAlign: "center" }}>Access to SDS is temporarily restricted. For more information please send your inquiry to&nbsp;<a href="mailto:emel.mehmedova@prista-oil.bg">emel.mehmedova@prista-oil.bg</a></h3>
                    </div>
                </article>
            </div>
        </>
    )
}

export default Msds;