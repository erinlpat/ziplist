const testList1 = ['a', 'b', 'c'];
const testList2 = [1, 2, 3];

function ziplist(list1, list2) {
  const finalListLength = list1.length + list2.length;
  const resultList = [];

  for (let i = 0; i < finalListLength / 2; i++) {
    resultList.push(list1[i], list2[i]);
  }

  return resultList;
}

console.log(ziplist(testList1, testList2));

// Zip and then Flatten
function zipListTheSimpleWay(list1, list2) {
  let resultList = [];
  resultList = _.zip(list1, list2);
  resultList = _.flatten(resultList);
  return resultList;
}

console.log(zipListTheSimpleWay(testList1, testList2));
