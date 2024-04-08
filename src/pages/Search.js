import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import pageItems from "../utility/pageItems";
import newsItems from "../utility/newsItems";
import { Helmet } from "react-helmet-async";

const Search = () => {
    const location = useLocation();
    const [searchValue, setSearchValue] = useState(null);
    const [optionValue, setOptionValue] = useState("page");
    const [responseData, setResponseData] = useState([]);

    useEffect(() => {
        if (location && location.state && location.state.searchItem) {
            setSearchValue(location.state.searchItem)
            let newData = pageItems.filter(page => page.label.toLocaleLowerCase().includes(location.state.searchItem.toLocaleLowerCase()));
            setResponseData([...newData]);
        }
    }, [location])

    const handleSearch = (e) => {
        e.preventDefault();
        if (optionValue === "page") {
            let newData = pageItems.filter(page => page.label.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
            setResponseData([...newData]);
        } else if (optionValue === "news") {
            let newData = newsItems.filter(haber => haber.label.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
            setResponseData([...newData]);
        }

    }

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleOptionChange = (e) => {
        setOptionValue(e.target.value);
    }

    return (
        <>
            <Helmet>
                <title>Search Result</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/site/search" />
            </Helmet>
            <div className="container">
                <article>
                    <h1 class="hs"> Search Result&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    <div className="search-form">
                        <form name="fw_search" onSubmit={(event) => handleSearch(event)}>
                            <div class="fl">
                                <select id="fw_search_searchKeyName" name="fw_search[searchKeyName]" value={optionValue} onChange={(event) => handleOptionChange(event)}>
                                    <option value="page" >Page</option>
                                    <option value="news" >Haberler</option>
                                    {/*<option value="project">Product</option> */}
                                </select>
                                <button type="submit">Submit</button>
                            </div>
                            <div className="word">
                                <input type="text" id="fw_search_query" name="fw_search[query]" value={searchValue}
                                    required="required" placeholder="Search" onChange={(event) => handleChange(event)} />
                            </div>
                        </form>
                    </div>
                    {responseData && responseData.length > 0 ?
                        <ul className="search-list">
                            {responseData.map(response => {
                                return (
                                    <li>
                                        <Link to={response.uri}>{response.label}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                        :
                        <h3 class="hs-errors">Not Found</h3>
                    }

                </article>
            </div>
        </>
    )
}

export default Search;