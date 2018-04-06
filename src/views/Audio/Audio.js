// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import ReactAudioPlayer from 'react-audio-player';

class Audio extends Component {

    render() {
        return (
            <div>
                <ReactAudioPlayer
                    src="https://votesong.s3.ap-northeast-2.amazonaws.com/%EC%95%97%EB%9C%A8%EA%B1%B0-%ED%95%9C%EA%B5%AD%EB%8B%B9%28%EB%A7%A8%ED%8A%B8%29.mp3"
                    autoPlay
                    controls
                />
            </div>
        );
    }
}

export default Audio;
