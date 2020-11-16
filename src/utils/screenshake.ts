function screenshake () {
  let shakeActive = false;
  const duration = 15;
  let shakeCount = 1;
  let magnitude = 20; // intensity of the shake, or the level at which it goes back or forth
  const intensity = magnitude / duration;
  const element = document.getElementById("App");
  const body = document.getElementById("root");

  const rng = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function shake () {
    if (element && body) {
      element.style.transform = `translate(0, 0)`;
      if (shakeCount === duration) {
        shakeActive = false;
        body.style.overflow = "auto";
        return;
      }
      magnitude -= intensity;
      const randomX = rng(-magnitude, magnitude);
      const randomY = rng(-magnitude, magnitude);
      element.style.transform = `translate(${randomX}px, ${randomY}px)`;
      shakeCount++;
      requestAnimationFrame(shake);
    }
  }

  if (!shakeActive) {
    if (body) {
      body.style.overflow = "hidden";
    }
    shakeActive = true;
    shake();
  }
}

export default screenshake;