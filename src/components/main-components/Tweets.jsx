import React from "react";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

function Tweets() {
    return (
        <div className="centerContent">
            <div className="selfCenter spaceBetween">
                <TwitterTimelineEmbed
                    onLoad={function noRefCheck() { }}
                    options={{
                        height: 650,
                        width: 400
                    }}
                    screenName="ukundwa_jeremie"
                    sourceType="profile"
                />
            </div>
        </div>
    );
}

export default Tweets;