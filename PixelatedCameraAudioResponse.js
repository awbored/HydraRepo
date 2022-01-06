// Oooh I can seen the music - https://www.youtube.com/watch?v=jhh_Y-P4ucs
// Andrew Wayne (www.andrewway.net)
// Pixelated camera with audio response on the colors

a.hide()
a.setBins(6)
a.setSmooth(0.90)
s0.initCam()
src(s0)
  .pixelate(250,250)
  .contrast(1.3)
  .saturate(() => a.fft[3])
  .colorama(() => a.fft[0])
  .hue(() => a.fft[4])
  .out(o0);
