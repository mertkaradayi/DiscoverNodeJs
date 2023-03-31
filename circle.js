function circumference(radius) {
  return 2 * Math.PI * radius;
}

function area(radius) {
  return Math.PI * Math.exp(radius);
}

module.exports = {
  circumference,
  area,
};
