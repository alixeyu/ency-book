import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionForPreview } from "../../redux/legends/legends.selectors";

import LegendPreview from "../legend-preview/legend-preview.component";

import "./legends-overview.styles.scss";


const LegendsOverview = ({ legends }) => (
    <div className="legends-overview">
        {
            legends.map(({id, ...otherProps}) => (
                <LegendPreview key={ id } {...otherProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    legends: selectCollectionForPreview
});

export default connect(mapStateToProps)(LegendsOverview);
