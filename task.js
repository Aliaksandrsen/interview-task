const add = (n) => {
  return (end) => end + n;
};
const divide = (n) => {
  return (end) => end / n;
};
const multiply = (n) => {
  return (end) => end * n;
};

const apply = (...arrFunc) => {
  return (d) => {
    return arrFunc.reduce((acc, item, i) => {
      if (i === 0) return acc;
      return item(acc);
    }, arrFunc[0](d));
  };
};

const result = apply(multiply(5), add(1), divide(2))(3);

console.log(result);
