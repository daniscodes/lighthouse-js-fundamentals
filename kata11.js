// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = function (radius) {
  let sVolume = 4 / 3 * PI * (radius * radius * radius)
  return sVolume
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  let cVolume = 1 / 3 * PI * (radius * radius * height)
  return cVolume
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  let pVolume = height * width * depth
  return pVolume
}

console.log(prismVolume(3, 4, 5) === 60);

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

const totalVolume = function (solids) {
  let vol = 0;
  for(const solid of solids){
    switch(solid.type){
      case 'sphere':
        vol += sphereVolume(solid.radius);
        break;
      case 'cone':
        vol += coneVolume(solid.radius, solid.height);
        break;
      case 'prism':
        vol += prismVolume(solid.height, solid.width, solid.depth);
        break;
      default:
        vol += 0;
    }
  }
  return vol
};

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);