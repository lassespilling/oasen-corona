import React, { useState, useEffect } from 'react';
import { fetchYoutubeLivestreamId } from '../services/youtube.service';

const hillsongChannel = process.env.REACT_APP_HILLSONG_YOUTUBE_CHANNEL;

export default () => {

    const [video, setVideo] = useState();
    useEffect(() => {
        fetchYoutubeLivestreamId(hillsongChannel, true).then(setVideo)
        .catch(() => fetchYoutubeLivestreamId(hillsongChannel, false).then(setVideo))
    }, []);

    return video && (
        <iframe src={"https://www.youtube.com/embed/" + video}
            width="560" height="315" frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
    ) || [];
}