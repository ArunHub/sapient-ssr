import { SUCCESSFUL_LANDING, SUCCESSFUL_LAUNCH } from "./constants";

export function filterService(filterObj) {
    let url = "https://api.spaceXdata.com/v3/launches?limit=100";
    Object.keys(filterObj).forEach((t) => {
        if (t === SUCCESSFUL_LAUNCH) {
            url += `&launch_success=${filterObj[t]}`;
        } else if (t === SUCCESSFUL_LANDING) {
            url += `&land_success=${filterObj[t]}`;
        } else {
            url += `&launch_year=${filterObj[t]}`;
        }
    });
    return url;
}

export async function getData(url) {
    return await fetch(url);
}
