export const percentage = (sum, per) => {
  return sum - sum * (per / 100);
};

export const minus = (sum, min) => {
  return sum - min;
};

export const slice = (sum, sliceValue, value) => {
  const slices = Math.floor(sum / sliceValue);
  return sum - slices * value;
};
