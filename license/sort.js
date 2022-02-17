const bubbleSortAsc = (list) => {
  const n = list.length;
  let hasMoreSort = true;
  for (let i = n - 1; hasMoreSort; i --) {
    hasMoreSort = false
    for (let j = 0; j < i; j++) {
      if (list[j] > list[j + 1]) {
        const tmp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = tmp;
        hasMoreSort = true
      }  
    }
  }
};
const data = [2,1,3,6,8,7,9,5]
console.log(`data before sort:${data}`)
bubbleSortAsc(data)
console.log(`data after sort:${data}`)

