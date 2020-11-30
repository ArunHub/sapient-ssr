import React from "react";
import Program from "./Program.jsx"; // jsx is not accepted

function ProgramContainer(props) {
    const { programList } = props;
    const renderProgramList = programList.map((t, i) => <Program key={i} program={t} />)
    return (
        <>
            <div className="program-container">
                {renderProgramList}
            </div>
        </>
    )
}

export default ProgramContainer;