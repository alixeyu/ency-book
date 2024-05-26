import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import LegendPreview from "../legend-preview/legend-preview.component";

import { selectCollectionForPreview } from "../../redux/legends/legends.selectors";

import "./collection.styles.scss";

const Collection = ({ collection }) => (
    <div className="collection">
        <div className="legends-container">
            {
                collection.map(({ id, ...otherProps }) => (
                    <LegendPreview key={ id } { ...otherProps } />
                ))
            }
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    collection: selectCollectionForPreview
});

export default connect(mapStateToProps)(Collection);
