export default function cleanSet(set, startString) {
  const newSet = new Set();
  set.forEach((value) => {
    if (value && value.startsWith(startString)) {
      newSet.add(value);
    }
  });
  return newSet;
}
