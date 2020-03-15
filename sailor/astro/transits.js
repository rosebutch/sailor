// this function would be used in the future to mark dates of conjunctions (0), sextiles(60), squares(90), trines(120), and oppositions(180) between transiting planets, as well as comparing each planet to the degree of the user's planets to mark data specific to that user

const findAngleDifference = (angle1, angle2) => {
  let diff = Math.abs(angle2 - angle1)
  if (diff > 180) {
    diff = 360-diff
  }
  return diff
}
