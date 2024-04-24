const array = [1, 2, 5, 6, 2, 12, 5, 23, 43];

let newa = new Set();
for (let i = 0; i < 10000; i++) {
  let num = Math.floor(i * Math.random(1, 230120));
  newa.add(num);
}

newa = [...newa];

console.log("array");
function Sort(arrays) {
  const len = arrays.length;

  if (len === 1) return arrays;
  else {
    const half = Math.floor(len / 2);

    const right = Sort(arrays.slice(half));
    const array = Sort(arrays.slice(0, half));

    const list = [];
    let i = 0,
      j = 0,
      k = 0;
    while (i < right.length && j < array.length) {
      if (right[i] < array[j]) {
        list[k++] = right[i++];
        // i++, k++;
      } else {
        list[k++] = array[j++];
        // j++, k++;
      }
    }
    for (i; i < right.length; i++) {
      list[k++] = right[i];
      // k++;
    }

    for (j; j < array.length; j++) {
      list[k++] = array[j];
      // k++;
    }
    return list;
  }
}

console.log(Sort(newa));
