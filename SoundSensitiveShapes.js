// Sound Sensitive Shapes
// by Andrew Wayne
// github.com/awbored

a.show()
a.setBins(6)
a.fft[0]

shape([3,4,8,16,32],() => (a.fft[0]*2))
  .color(0,0,({time}) => Math.sin(time/50))
  .rotate(0,0.025)
  .repeat(4,6,({time}) => Math.sin(time/100),({time}) => Math.sin(time/100))
  .saturate(3)
  .mult(osc(200,0.05)).rotate(-1.6,0.01)
  .out(o0)
