
// You should implement your task here.
// module.exports = towelSort = (matrix) => matrix.map( item => item.indexOf(item) % 2 ===0 ? item.concat(...item).reverse() : item.concat(...item))...
module.exports = function towelSort(matrix) {
  if (!matrix) return [];
  return matrix.reduce((flat, arr, idx) => {
      const newArr = [...arr];
      if (idx % 2 === 1) newArr.reverse();
      return [...flat, ...newArr];
  }, []);
};
