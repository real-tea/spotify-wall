import Image from "next/legacy/image";

import React , {useState , useEffect , useRef } from 'react';


const TrackPreview = ({ track }) => {
    useEffect(()=>{
        const handleContextMenu = (e) => {
            e.preventDefault()
        }
        document.addEventListener("contextmenu" , handleContextMenu);

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu)
        }
    }, [])

    // useEffect(() => {
    //     const driverObj = driver({
    //         showProgress: false,
    //         showButtons:['close'],
    //         steps: [
    //           { element: '#element-of-mystery', popover: { title: 'Preview Your Top Tracks', description: 'Hold the album cover to listen to track preview', side: "left", align: 'start' }},
    //         ]
    //       });
    //       driverObj.drive();
    //   }, []);



    // const [isPlaying, setIsPlaying] = useState(false);
    // const audioRef = React.createRef();
    // const [isTouching, setIsTouching] = useState(false);

    // const PlayPreview = () => {
    //     if (!isPlaying && !isTouching) {
    //         if (track.preview_url) {
    //             audioRef.current.src = track.preview_url;
    //             audioRef.current.play();
    //             setIsPlaying(true);
    //             console.log('playing');
    //         }
    //     } else {
    //         StopPlaying();
    //     }
    // };

    // const StopPlaying = () => {
    //     if (isPlaying) {
    //         audioRef.current.pause();
    //         setIsPlaying(false);
    //     }
    // };

    // const PlayTouchPreview = (e) => {
    //     e.stopPropagation();
    //     e.preventDefault();

    //     // Check if audio is not already playing
    //     if (!isPlaying && !isTouching) {
    //         setIsTouching(true);

    //         if (track.preview_url) {
    //             audioRef.current.src = track.preview_url;
    //             audioRef.current.play();
    //             setIsPlaying(true);
    //         }
    //     } else {
    //         StopPlaying();
    //     }
    // };

    // const StopTouchPreview = () => {
    //     if (isTouching) {
    //         setIsTouching(false);
    //         StopPlaying();
    //     }
    // };
    const [isPlaying, setIsPlaying] = useState(false);
    const [isTouching, setIsTouching] = useState(false);
    const audioRef = useRef();

    useEffect(() => {
        if (isTouching) {
            console.log('hello')
            if (!isPlaying && track.preview_url) {
                audioRef.current.src = track.preview_url;
                audioRef.current.play();
                setIsPlaying(true);
            }
        } else {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setIsPlaying(false);
        }
    }, [isTouching, track.preview_url]);

    const handleMouseEnter = () => {
        setIsTouching(false);
        setIsPlaying(false);
        setIsTouching(true);
    };

    const handleMouseLeave = () => {
        setIsTouching(false);
    };

    const handleTouchStart = (e) => {
        setIsTouching(true);
    };

    const handleTouchEnd = () => {
        setIsTouching(false);
    };

    return (
        <div onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={(e) => e.preventDefault()}>
            <Image id="element-of-mystery" unoptimized priority={true} className="w-full" src={track?.image} max-width={640} max-height={640} height={640} width={640} alt="Sunset in the mountains" layout="responsive"
                position="relative" />
            <audio loop={false} ref={audioRef}></audio>
        </div>
    );
};


export default TrackPreview;