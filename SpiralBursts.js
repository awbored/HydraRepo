// Spiral Bursts
// andrewway.net

a.hide()
a.setBins(6)
a.setSmooth(0.90)
shape(10,() => a.fft[0]*5)
  .mult(osc(6, 0.1, 0.8)
    .color(() => a.fft[5], 0.8, -1.0)
    .rotate(0.51, 0.1)
    .modulate(osc(40, -0.1), 0.1))
  .repeat(30,30)
  .rotate(1,0.1)
  .kaleid(12)
  .saturate(() => a.fft[3]*4.0)
  .colorama(() => a.fft[4]*0.1)
  .out(o0)
