onload = () => {
    document.body.classList.remove("container");
  };

  const wrapper = document.querySelector(".wrapper");
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  const song = document.getElementById("valentineSong");
  
  openBtn.addEventListener("click", () => {
      wrapper.classList.add("open");
      openBtn.style.display = "none";
      closeBtn.style.display = "inline-block";
     song.play();
  });
  
  closeBtn.addEventListener("click", () => {
      wrapper.classList.remove("open");
      closeBtn.style.display = "none";
      openBtn.style.display = "inline-block";
        song.pause();
        song.currentTime = 0;
  });
  