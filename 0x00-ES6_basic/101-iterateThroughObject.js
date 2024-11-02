/* eslint-disable radix */
export default function iterateThroughObject(reportWithIterator) {
  let output = '';

  for (const [index, elem] of Object.entries(reportWithIterator)) {
    output += `${elem}`;

    if (parseInt(index) !== reportWithIterator.length - 1) {
      output += ' | ';
    }
  }

  return output;
}
