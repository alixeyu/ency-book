import React from "react";

import LegendsOverview from "../../components/legends-overview/legends-overview.components";

import "./homepage.styles.scss";

const Homepage = () => (
    <div className="homepage">
        {
            <LegendsOverview />
        }
    </div>
);

export default Homepage;
