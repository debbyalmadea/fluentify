import { Rabbit } from "../../icons/Rabbit";
import { VuesaxLinearPause } from "../../icons/VuesaxLinearPause/VuesaxLinearPause";
import { VuesaxLinearPlay } from "../../icons/VuesaxLinearPlay";
import { Button } from "../Button";
import { useCallback, useEffect, useRef, useState } from "react";
import "./style.css";
import { Turtle } from "../../icons/Turtle";

export const AudioPlayer = () => {
  const audioRef = useRef();
  const progressBarRef = useRef();
  const playAnimationRef = useRef();

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [timeProgress, setTimeProgress] = useState(0);

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);

    console.log(audioRef.current.ended);
    if (audioRef.current.ended) {
      progressBarRef.current.style.setProperty("--range-progress", `100%`);
    }
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);

    audioRef.current.addEventListener("ended", () => {
      setIsPlaying(false);
    });

    audioRef.current.addEventListener("pause", () => {
      console.log(audioRef.current.currentTime);
    });
  }, [isPlaying, audioRef, repeat]);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const onLoadedMetadata = () => {
    console.log(audioRef.current.duration);
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  const handleSlowDown = () => {
    audioRef.current.playbackRate = Math.max(
      0.25,
      audioRef.current.playbackRate - 0.25
    );
  };

  const handleSpeedUp = () => {
    audioRef.current.playbackRate = Math.min(
      2,
      audioRef.current.playbackRate + 0.25
    );
  };

  return (
    <div className="audio-player">
      <div className="audio">
        <div className="actions">
          <Button
            className="button-instance"
            hierachy="secondary"
            icon={<Turtle />}
            size="large"
            type="icon-only"
            onClick={handleSlowDown}
          />
          <div className="frame">
            <div className="div-wrapper">
              <div className="div-wrapper">
                <audio
                  ref={audioRef}
                  style={{
                    display: "none",
                  }}
                  onLoadedMetadata={onLoadedMetadata}
                >
                  <source src="/audio/13.01.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <button className="mobile-button" onClick={togglePlayPause}>
                  {isPlaying ? <VuesaxLinearPause /> : <VuesaxLinearPlay />}
                </button>
              </div>
            </div>
          </div>
          <Button
            className="button-instance"
            hierachy="secondary"
            icon={<Rabbit />}
            size="large"
            type="icon-only"
            onClick={handleSpeedUp}
          />
        </div>
        <div className="text-wrapper">
          Kecepatan: {audioRef.current?.playbackRate ?? 1}x
        </div>
      </div>
      <div className="slidebar">
        <div className="div">
          {(timeProgress ? Math.floor(timeProgress / 60) : 0)
            .toString()
            .padStart(2, "0")}
          :
          {(timeProgress ? Math.floor(timeProgress) : 0)
            .toString()
            .padStart(2, "0")}
        </div>
        <input
          ref={progressBarRef}
          type="range"
          defaultValue="0"
          onChange={handleProgressChange}
        />
        <div className="div">
          {(duration ? Math.floor(duration / 60) : 0)
            .toString()
            .padStart(2, "0")}
          :{(duration ? Math.floor(duration) : 0).toString().padStart(2, "0")}
        </div>
      </div>
    </div>
  );
};
