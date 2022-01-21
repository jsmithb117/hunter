function* colorGen(isEven) {
  let i = 0;
  while (true) {
    if (isEven) {
      yield i % 2 === 0 ? "primary" : "secondary";
    } else {
      yield i % 2 !== 0 ? "primary" : "secondary";
    }
    i++;
  }
};

export const evenColorGen = colorGen(true);
export const oddColorGen = colorGen(false);
