import SideBarMedya from "../../../components/SidebarMedya";

const TeodorHaber = () => {
    return (
        <div className="body_with_sidebar default">
            <SideBarMedya haber={true} />
            <article>
                <div className="page-header">
                    <span className="titleOfHeader">Medya / </span>
                    <h1>Haberler</h1>
                </div>
            </article>
        </div>
    )
}

export default TeodorHaber;