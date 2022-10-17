function pyramid(numPisos) {
  for (var i = 0; i < numPisos; i++) {
    let piso = ``;
    for (var j = 0; j < i + 1; j++) {
      piso = piso + '*';
    }
    console.log(piso, i,j)
  }
}
pyramid(7)






