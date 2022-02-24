// Spirograph Cam!
// (Combined two renders from vrgbls and Olivia Jack to make this pattern)
// andrewway.net

a.show()
a.setBins(6)
a.setSmooth(0.90)
a.fft[0]
s0.initCam(1)
src(s0).out(o0)
pattern = () => osc(200, 0, () => (a.fft[0]*20)).kaleid(200).scale(1, 0.4)
pattern()
  .scrollX(0.1, () => (a.fft[0]*0.01))
  .mult(pattern())
  .diff(o0)
.blend(gradient([a.fft[3], a.fft[2] * 2, 5]))
.colorama(() => a.fft[0]*0.1)
  .out(o1)
render(o1)
