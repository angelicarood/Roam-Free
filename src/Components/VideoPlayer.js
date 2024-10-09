import React from 'react';

function VideoPlayer() {
    return (
        <div>
            <iframe
                width="100%"
                height="650"
                src="https://www.youtube.com/embed/QlKOcyf915M?si=XDJOWw9OVvF2osoz&autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default VideoPlayer;
