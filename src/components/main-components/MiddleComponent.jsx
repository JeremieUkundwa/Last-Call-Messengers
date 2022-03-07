import React from "react";
import NavMiddleLink from "./NavMiddle";
import ImageCaption from "./ImageCaption";
import Tweets from "./Tweets";
function MiddleComponent() {
    return (
        <div>
            <div className="tweets-section">
                <Tweets />
            </div>
            <div className="middle-components">
                <NavMiddleLink />
                <hr />
                <ImageCaption />
            </div>
        </div>
    );
}

export default MiddleComponent;