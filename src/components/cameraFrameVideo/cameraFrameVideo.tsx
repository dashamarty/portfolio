"use client";

import React, { useRef, useState } from "react";
import styles from "./cameraFrameVideo.module.scss";

const CameraFrameVideoData = {
  src: "/greeting/video.mov",
};

export const CameraFrameVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isControlsVisible, setIsControlsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true); // Set to true so it starts playing immediately
  const [isMuted, setIsMuted] = useState(true);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Function to rewind video to the start
  const handleRewind = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Rewind to the start
      videoRef.current.play(); // Start playing immediately
      setIsPlaying(true); // Set playing state to true
    }
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsControlsVisible(true)}
      onMouseLeave={() => setIsControlsVisible(false)}
    >
      {/* Video with autoPlay */}
      <video
        ref={videoRef}
        className={styles.video}
        src={CameraFrameVideoData.src}
        loop
        muted={isMuted}
        autoPlay
        playsInline
        webkit-playsinline="true"
      />

      {/* Minimalistic Controls */}
      {isControlsVisible && (
        <div className={styles.controls}>
          {/* Play/Pause Button */}
          <button
            onClick={handlePlayPause}
            className={styles.button}
            aria-label="Play/Pause"
          >
            {isPlaying ? (
              <svg
                width="35"
                height="35"
                viewBox="0 0 139 139"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.09375"
                  width="138.057"
                  height="138.057"
                  rx="69.0285"
                  fill="#AA0202"
                />
                <rect
                  x="34.8418"
                  y="34.749"
                  width="68.5589"
                  height="68.5589"
                  fill="#FAFAFA"
                />
              </svg>
            ) : (
              <svg
                width="35"
                height="35"
                viewBox="0 0 139 139"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="138.057"
                  height="138.057"
                  rx="69.0285"
                  fill="#AA0202"
                />
                <path
                  d="M116.457 70.6724L43.6719 29.584V108.474L116.457 70.6724Z"
                  fill="#FAFAFA"
                />
              </svg>
            )}
          </button>

          {/* Rewind Button */}
          <button
            onClick={handleRewind}
            className={styles.button}
            aria-label="Rewind"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 139 139"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.943359"
                y="0.015625"
                width="138.057"
                height="138.057"
                rx="69.0285"
                fill="#023048"
              />
              <path
                d="M94.9884 53.4269L92.2356 50.6741C87.022 45.4593 80.1274 42.2633 72.7785 41.6546C65.4297 41.046 58.1033 43.0642 52.1028 47.3502C46.1023 51.6362 41.8169 57.912 40.0092 65.061C38.2014 72.2099 38.9885 79.7684 42.2304 86.3915C45.4723 93.0147 50.9587 98.2729 57.7135 101.231C64.4683 104.188 72.0534 104.654 79.1192 102.544C86.1849 100.435 92.2731 95.8865 96.3005 89.7095C100.328 83.5324 102.033 76.1269 101.113 68.8105M94.9884 53.4269L78.4678 53.4308M94.9884 53.4269V36.9062"
                stroke="white"
                strokeWidth="5.84042"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Mute/Unmute Button */}
          <button
            onClick={handleMuteToggle}
            className={styles.button}
            aria-label="Mute/Unmute"
          >
            {isMuted ? (
              <svg
                width="35"
                height="35"
                viewBox="0 0 140 139"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.970703"
                  y="0.588867"
                  width="138.057"
                  height="138.057"
                  rx="69.0285"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M89.1321 25.87C95.0062 21.996 102.835 26.2135 102.835 33.2493V105.406C102.835 112.447 95.0062 116.659 89.1321 112.785L58.827 92.809C58.6219 92.6723 58.3814 92.5985 58.135 92.5969H43.4875C39.8037 92.5969 36.2708 91.1335 33.6659 88.5286C31.061 85.9238 29.5977 82.3908 29.5977 78.707V59.9481C29.5977 58.1241 29.9569 56.3179 30.655 54.6327C31.353 52.9475 32.3761 51.4163 33.6659 50.1265C34.9557 48.8367 36.4869 47.8136 38.1721 47.1156C39.8573 46.4175 41.6635 46.0583 43.4875 46.0583H58.135C58.3826 46.0591 58.625 45.9871 58.832 45.8512L89.1321 25.87Z"
                  fill="#AA0202"
                />
                <line
                  x1="27.1139"
                  y1="16.0317"
                  x2="117.743"
                  y2="118.94"
                  stroke="#1E1F20"
                  strokeWidth="5.84705"
                />
                <line
                  y1="-2.92353"
                  x2="137.127"
                  y2="-2.92353"
                  transform="matrix(-0.660916 0.75046 0.75046 0.660916 115.549 17.9639)"
                  stroke="#1E1F20"
                  strokeWidth="5.84705"
                />
              </svg>
            ) : (
              <svg
                width="35"
                height="35"
                viewBox="0 0 139 139"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.588867"
                  width="138.057"
                  height="138.057"
                  rx="69.0285"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M88.9523 49.1407C89.5228 48.571 90.296 48.251 91.1022 48.251C91.9084 48.251 92.6817 48.571 93.2521 49.1407L93.2602 49.1488L93.2724 49.1569L93.3008 49.1853L93.3819 49.2665L93.6334 49.5463C93.8362 49.7776 94.1202 50.1061 94.4487 50.5239C98.1967 55.3955 100.229 61.3696 100.229 67.5161C100.229 73.6627 98.1967 79.6367 94.4487 84.5083C94.109 84.9419 93.7517 85.3614 93.3779 85.7658L93.2967 85.8469L93.2724 85.8753L93.2602 85.8835L93.2562 85.8875L91.1874 83.8269L93.2562 85.8956C92.6854 86.4664 91.9114 86.787 91.1042 86.787C90.2971 86.787 89.523 86.4664 88.9523 85.8956C88.3816 85.3249 88.061 84.5508 88.061 83.7437C88.061 82.9366 88.3816 82.1625 88.9523 81.5918L88.9483 81.5959L88.9402 81.5999L88.9604 81.5796L89.0943 81.4336C89.2241 81.293 89.412 81.0672 89.6581 80.7562C92.2243 77.4061 93.7622 73.3828 94.0848 69.1752C94.4074 64.9676 93.5009 60.7568 91.4754 57.0547C90.9466 56.0804 90.3388 55.1511 89.6581 54.2761C89.4379 53.9914 89.2051 53.7167 88.9604 53.4526L88.9402 53.4324C88.3745 52.8607 88.0583 52.0882 88.0606 51.284C88.0628 50.4798 88.3835 49.7092 88.9523 49.1407Z"
                  fill="#AA0202"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M101.123 36.9717C101.693 36.402 102.466 36.082 103.273 36.082C104.079 36.082 104.852 36.402 105.423 36.9717L105.435 36.9798L105.447 36.992L105.483 37.0326C105.659 37.206 105.827 37.3874 105.986 37.5761C106.307 37.9371 106.749 38.4604 107.268 39.1378C108.311 40.4886 109.678 42.4762 111.037 45.0602C113.754 50.228 116.456 57.8094 116.456 67.5163C116.456 77.2233 113.754 84.8046 111.037 89.9765C109.954 92.0558 108.693 94.0374 107.268 95.8989C106.708 96.6277 106.112 97.329 105.483 98.0001L105.443 98.0406L105.435 98.0528L105.427 98.0569L103.273 95.911L105.423 98.0609C104.849 98.6154 104.081 98.9224 103.283 98.9158C102.485 98.9093 101.722 98.5897 101.158 98.0259C100.593 97.4621 100.273 96.6992 100.266 95.9015C100.259 95.1038 100.565 94.3352 101.119 93.7611L101.176 93.7044L101.431 93.4204C101.672 93.1554 102.01 92.7443 102.445 92.1873C103.305 91.0677 104.473 89.3762 105.65 87.1411C108.002 82.6791 110.371 76.0631 110.371 67.5163C110.371 58.9695 108.002 52.3535 105.65 47.8915C104.726 46.1219 103.654 44.4338 102.445 42.8454C102.043 42.3227 101.619 41.8166 101.176 41.3283L101.119 41.2715C100.549 40.7011 100.229 39.9278 100.229 39.1216C100.229 38.3154 100.553 37.5422 101.123 36.9717ZM68.9435 34.6434C73.6611 31.5321 79.9485 34.9192 79.9485 40.5697V98.5193C79.9485 104.174 73.6611 107.557 68.9435 104.446L44.6052 88.4027C44.4405 88.2929 44.2473 88.2336 44.0494 88.2323H32.2859C29.3274 88.2323 26.4901 87.057 24.3981 84.965C22.3061 82.8731 21.1309 80.0357 21.1309 77.0772V62.0118C21.1309 60.5469 21.4194 59.0963 21.98 57.7429C22.5406 56.3895 23.3623 55.1598 24.3981 54.124C25.4339 53.0881 26.6637 52.2665 28.0171 51.7059C29.3705 51.1453 30.821 50.8567 32.2859 50.8567H44.0494C44.2483 50.8574 44.443 50.7995 44.6092 50.6904L68.9435 34.6434Z"
                  fill="#AA0202"
                />
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
