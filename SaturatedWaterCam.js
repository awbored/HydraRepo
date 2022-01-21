// Saturated Water Cam
// andrewway.net
a.hide()
a.setBins(6)
a.setSmooth(0.90)
s0.initCam()
src(s0)
  .saturate(4.0)
  .colorama(() => a.fft[0]*0.1)
  .blend(o0, 0.05)
  .modulate(o0, () => a.fft[4]*0.5)
  .out()
