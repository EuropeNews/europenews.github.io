document.addEventListener("DOMContentLoaded", function() {
    const videoContainer = document.getElementById("videoContainer");
    const commentsList = document.getElementById("commentsList");
    const commentInput = document.getElementById("commentInput");
    const submitCommentButton = document.getElementById("submitCommentButton");
    let player;
  
    // Load YouTube video player
    function loadYouTubePlayer() {
      player = new YT.Player('videoContainer', {
        height: '360',
        width: '640',
        videoId: 'joNmFRMSTYk', // Replace with your YouTube video ID or live stream ID
        playerVars: {
          'autoplay': 1,
          'controls': 1,
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
      // Add event listener for submitting comments
      submitCommentButton.addEventListener("click", submitComment);
    }
  
    // Function to submit a comment
    function submitComment() {
      const commentText = commentInput.value;
      if (commentText.trim() !== "") {
        const commentElement = document.createElement('li');
        commentElement.textContent = commentText;
        commentsList.appendChild(commentElement);
        commentInput.value = "";
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
  