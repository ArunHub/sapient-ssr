import React from "react";

export default function IterateObject({ obj }) {
    return Object.keys(obj).map((t, i) => <li key={i}><button className={obj[t].active ? "active" : "inactive"}>{t}</button></li>);
}
