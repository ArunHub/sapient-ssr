import React, { useState } from "react";
import { filterService, getData } from "./../service";
import IterateObject from "./IterateObject.jsx";
import { LAUNCH_YEAR, SUCCESSFUL_LANDING, SUCCESSFUL_LAUNCH } from "./../constants";

function Filters(props) {
    const [filters, setFilters] = useState({
        launch_year: [2014, 2015, 2016],
        successful_launch: { "yes": { active: false }, "no": { active: false } },
        successful_landing: { "yes": { active: false }, "no": { active: false } },
        activeFilter: {}
    })

    const { launch_year, successful_launch, successful_landing } = filters;

    const handleLaunchYear = (filterName, e) => {
        const value = e.target.textContent;

        const nextFilters = { ...filters };
        nextFilters['activeFilter'] = { ...nextFilters['activeFilter'], [filterName]: value === "yes" ? true : value === "no" ? false : value };

        // const buildUrl = filterService(nextFilters['activeFilter']);
        const url = filterService(nextFilters['activeFilter']);
        getData(url)
            .then(t => t.json())
            .then(q => {

                if (filterName !== LAUNCH_YEAR) {

                    nextFilters[filterName][value]['active'] = true;
                    nextFilters[filterName][value === "yes" ? "no" : "yes"]['active'] = false;
                }

                setFilters(nextFilters);
                props.handleLaunchYear(q);
            }
            )
    }
    const landSuccessList = <IterateObject obj={successful_landing} />;
    const launchSuccessList = <IterateObject obj={successful_launch} />;
    const launchYearList = launch_year.map((t, i) => <li key={i}><button>{t}</button></li>);

    return (
        <>
            <h3>Filters</h3>
            <label>Launch year</label>
            <ul onClick={(e) => handleLaunchYear(LAUNCH_YEAR, e)} >
                {launchYearList}
            </ul>
            <label>Succesfull Launch</label>
            <ul onClick={(e) => handleLaunchYear(SUCCESSFUL_LAUNCH, e)}>
                {launchSuccessList}
            </ul>
            <label>Succesfull Landing</label>
            <ul onClick={(e) => handleLaunchYear(SUCCESSFUL_LANDING, e)}>
                {landSuccessList}
            </ul>
        </>
    )
}

export default Filters;