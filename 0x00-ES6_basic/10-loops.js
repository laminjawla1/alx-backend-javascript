export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  for (const idx of array) result[array.indexOf(idx)] = appendString + idx;
  return result;
}
