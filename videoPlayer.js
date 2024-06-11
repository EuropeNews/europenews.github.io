document.addEventListener("DOMContentLoaded", function() {
    const videoContainer = document.getElementById("videoContainer");
    const playPauseButton = document.getElementById("playPauseButton");
    const seekBar = document.getElementById("seekBar");
    let player;
  
    // Load YouTube video player
    function loadYouTubePlayer() {
      player = new YT.Player('videoContainer', {
        height: '360',
        width: '640',
        videoId: 'dQw4w9WgXcQ', // Replace with your YouTube video ID or live stream ID
        playerVars: {
          'controls': 0,
          'autoplay': 0,
          'fs': 0,
          'playsinline': 1
        },
        events: {
          'onReady': onYouTubePlayerReady,
          'onStateChange': onYouTubePlayerStateChange
        }
      });
    }
  
    // Function called when YouTube player is ready
    function onYouTubePlayerReady(event) {
      // Add play/pause functionality
      playPauseButton.addEventListener("click", function() {
        if (player.getPlayerState() === YT.PlayerState.PLAYING) {
          player.pauseVideo();
          playPauseButton.textContent = "Play";
        } else {
          player.playVideo();
          playPauseButton.textContent = "Pause";
        }
      });
  
      // Add seeking functionality
      seekBar.addEventListener("input", function() {
        const time = player.getDuration() * (seekBar.value / 100);
        player.seekTo(time);
      });
    }
  
    // Function called when YouTube player state changes
    function onYouTubePlayerStateChange(event) {
      if (event.data === YT.PlayerState.PLAYING) {
        playPauseButton.textContent = "Pause";
      } else {
        playPauseButton.textContent = "Play";
      }
    }
  
    // Load YouTube iframe API asynchronously
    if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      loadYouTubePlayer();
    }
  });
  