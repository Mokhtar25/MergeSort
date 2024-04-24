const array = [1, 2, 5, 6, 2, 12, 5, 23, 43];

function Sort(arrays) {
  const len = arrays.length;
  if (len === 1) return arrays;
  else {
    const half = Math.round(len / 2);

    const rightk = arrays.splice(half, half);
    arrays.splice(half, half);
    const right = Sort(rightk);
    const array = Sort(arrays);

    const list = [];
    let i = 0,
      j = 0,
      k = 0;
    while (i < right.length && j < array.length) {
      if (right[i] < array[j]) {
        list[k] = right[i];
        i++, k++;
      } else {
        list[k] = array[j];
        j++, k++;
      }
    }
    for (i; i < right.length; i++) {
      list[k] = right[i];
      k++;
    }

    for (j; j < array.length; j++) {
      list[k] = array[j];
      k++;
    }
    return list;
  }
}

console.log(Sort(array));
