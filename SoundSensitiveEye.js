// Andrew Wayne (www.andrewway.net)
// Mutated from ee_1 . EYE IN THE SKY
//example of mask and function modulation
// e_e // @eerie_ear
// Updated to respond to sound

a.hide()
a.setBins(6)
noise(18)
  .colorama(() => a.fft[0])
  .posterize(10)
  .kaleid(5)
  .mask(
    shape([3,4,8,16,32], 0.25).modulateScale(
      noise(400.5, 0.05)
    )
  )
  .mask(shape(400, 1, 2.125))
  .modulateScale(osc(6, 0.125, 0.005).kaleid(50))
  .mult(osc(20, 0.005, 2.4).kaleid(50), 0.025)
  .scale(1.75, 0.65, 0.5)
  .modulate(noise(0.05))
  .saturate(10)
  .posterize(4, 0.2)
  .scale(1.5)
  .out();
