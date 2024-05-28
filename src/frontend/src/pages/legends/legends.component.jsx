import React from "react";

import LegendsOverview from "../../components/legends-overview/legends-overview.components";

import "./legends.styles.scss";

const LegendsPage = () => (
    <div className="legends">
        {
            <LegendsOverview />
        }
    </div>
);

export default LegendsPage;
