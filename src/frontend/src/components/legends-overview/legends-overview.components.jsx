import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionForPreview } from "../../redux/legends/legends.selectors";
import { fetchCollectionStartAsync } from "../../redux/legends/legends.actions";

import LegendPreview from "../legend-preview/legend-preview.component";

import "./legends-overview.styles.scss";


const LegendsOverview = ({ legends }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCollectionStartAsync())
    }, []);

    return (
        <div className="legends-overview">
            {
                legends.map(({uid, ...otherProps}) => (
                    <LegendPreview key={ uid } {...otherProps} />
                ))
            }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    legends: selectCollectionForPreview
});


export default connect(mapStateToProps)(LegendsOverview);
