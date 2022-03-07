import React from "react";
import YouTubePlaylist from "react-youtube-playlist";
import 'react-youtube-playlist/dist/styles';

const App = () => {
    return (
        <YouTubePlaylist
            api_key={String}
            width={300}
            height={400}
            iframe_style={''}
            show_thumbnails={true}
            iframe_container_class={''}
            video_list_container_class={''}
        />
    )
}

export default App;