// KaleidoscopeCam
// by Andrew Wayne
// github.com/awbored

s0.initCam()
src(o0)
  .layer(
    src(s0)
    .luma(() => mouse.x/width)
    .color(1.8, 0.6, -0.5)
)
  .modulateHue(o0, -4)
  .scrollX(0.001)
  .hue(0.01)
  .contrast(1.02)
  .out(o0)
  // .out()

osc(10, 0.2, 0.8)
  .diff(o0)
  .rotate(0, 0.01)
  .kaleid(8)
  .rotate(0, 0.001)
  .out(o1)
  render(o1)
