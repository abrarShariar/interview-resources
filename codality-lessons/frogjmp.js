// SOLVED
function (X, Y, D) {
  let jmp = 1;
  let remainDist = Y - (D + X);
  if (remainDist > 0) {
    return jmp + Math.ceil(remainDist / D);
  }
  return X === Y ? 0 : 1;
}
