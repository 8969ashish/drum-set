import React, { useEffect, useState } from 'react';
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
        {
            picture: drum1,
            sound: sound1,
            key: "a"
        },
        {
            picture: drum2,
            sound: sound2,
            key: "s"

        },
        {
            picture: drum3,
            sound: sound3,
            key: "d"
        },
        {
            picture: drum4,
            sound: sound4,
            key: "f"
        },
        {
            picture: drum5,
            sound: sound5,
            key: "g"
        },
        {
            picture: drum6,
            sound: sound6,
            key: "h"
        },
        {
            picture: drum7,
            sound: sound7,
            key: "j"
        },
    ];
   const [modi, setModi]=useState(true)
    // useEffect(() => {
    //     const handleKeyDown = (e) => {
    //         console.log(e.key);
    //         playDrum(e.key);
    //     };

    //     document.addEventListener('keydown', handleKeyDown);

    //     // Remove the event listener when component unmounts
    //     return () => {
    //         document.removeEventListener('keydown', handleKeyDown);
    //     };
    // }, [modi]);
       
 

    const playDrum = (key) => {
        console.log(key)
        switch (key) {
            case "a": {
                const newsound = new Audio(sound1);
                newsound.play();
            }
                break;
            case "s": {
                const newsound = new Audio(sound2);
                newsound.play();
            }
                break;
            case "d": {
                const newsound = new Audio(sound3);
                newsound.play();
            }
                break;
            case "f": {
                const newsound = new Audio(sound4);
                newsound.play();
            }
                break;
            case "g": {
                const newsound = new Audio(sound5);
                newsound.play();
            }
                break;
            case "h": {
                const newsound = new Audio(sound6);
                newsound.play();
            }
                break;
            case "j": {
                const newsound = new Audio(sound7);
                newsound.play();
            }
                break;

            default: ;
           
        }

    }

    return (
        <div className='center h-screen '>
            <div className="flex gap-5">
                {music.map((item, index) => {
                    return (
                        <div className="border-2 border-blue-200 shadow-2xl rounded-full center p-10 cursor-pointer " key={index}
                            onClick={() => playDrum( item.key)}
                        >
                            <img src={item.picture} alt="drum" className='size-40 ' />
                            <div className=""  tabIndex={0} onKeyDown={()=>alert("key pressed")}></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DrumSet