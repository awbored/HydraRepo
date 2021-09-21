// Norcal Noisefest 25 Kaleisoscope Logo
// by Andrew Wayne
// github.com/awbored

s0.initImage("https://norcalnoisefest.com/images/2021/2021-logo72.jpg")
src(s0).out(o1)

src(o1)
  .repeat(6, 6)
  .scale(2)
  .rotate(0.5,0.2)
  .kaleid(3)
  .rotate(0.2,0.1)
  .diff(osc(1,1,1))
  .out()
