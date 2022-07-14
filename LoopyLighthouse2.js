const loopyLighthouse = function ([a, b], [c, d], [e, f]) {
  for (let i = a; i <= b; i++) {
    if (i % c === 0 && i % d === 0) {
      console.log(e + f)
    }
    else if (i % c === 0) {
      console.log(e)
    } else if (i % d === 0) {
      console.log(f)
    } else console.log(i)

  }
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);