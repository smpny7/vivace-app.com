import { useState, useRef } from "react";

function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPlayButton, setShowPlayButton] = useState(true);

  return (
    <div className="relative">
      <video
        className="rounded-3xl sm:rounded-[100px]"
        poster="/img/thumbnail.avif"
        ref={videoRef}
      >
        <source src="/video/promotion.webm" type="video/webm" />
        <source src="/video/promotion.mp4" type="video/mp4" />
        Sorry, your browser doesn&apos;t support embedded videos.
      </video>

      {showPlayButton && (
        <button
          className="absolute top-0 bottom-0 left-0 right-0"
          onClick={() => {
            videoRef.current?.play();
            setShowPlayButton(false);
          }}
        >
          <img
            src="/svg/play.svg"
            height={100}
            width={100}
            className="inline-block"
            alt="Play"
          />
        </button>
      )}
    </div>
  );
}

export default Video;
