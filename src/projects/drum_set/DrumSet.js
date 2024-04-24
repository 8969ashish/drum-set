import React from 'react';
import drum1 from '../../assets/images/drums/crash.png';
import drum2 from '../../assets/images/drums/kick.png';
import drum3 from '../../assets/images/drums/snare.png';
import drum4 from '../../assets/images/drums/tom1.png';
import drum5 from '../../assets/images/drums/tom2.png';
import drum6 from '../../assets/images/drums/tom3.png';
import drum7 from '../../assets/images/drums/tom4.png';

import sound1 from '../../assets/sounds/crash.mp3';
import sound2 from '../../assets/sounds/kick-bass.mp3';
import sound3 from '../../assets/sounds/snare.mp3';
import sound4 from '../../assets/sounds/tom-1.mp3';
import sound5 from '../../assets/sounds/tom-2.mp3';
import sound6 from '../../assets/sounds/tom-3.mp3';
import sound7 from '../../assets/sounds/tom-4.mp3';

const DrumSet = () => {
    const music = [
        { picture: drum1, sound: sound1, key: "a" },
        { picture: drum2, sound: sound2, key: "s" },
        { picture: drum3, sound: sound3, key: "d" },
        { picture: drum4, sound: sound4, key: "f" },
        { picture: drum5, sound: sound5, key: "g" },
        { picture: drum6, sound: sound6, key: "h" },
        { picture: drum7, sound: sound7, key: "j" },
    ];

    const playDrum = (key) => {
        const sound = new Audio(music.find(item => item.key === key).sound);
        sound.play();
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {music.map((item, index) => (
                    <div key={index} className="cursor-pointer" onClick={() => playDrum(item.key)}>
                        <img src={item.picture} alt="drum" className="w-24 md:w-32 lg:w-40 xl:w-48 mx-auto" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DrumSet;
