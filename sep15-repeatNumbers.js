function repeatNumbers(data){
    // Put your solution here
    return data.map(([n, count]) => n.toString().repeat(count)).join(',')
}

  console.log(repeatNumbers([[1, 10]]));
  console.log(repeatNumbers([[1, 2], [2, 3]]));

  function repeatNumbers(data){
    let results = '';
data.forEach(function(arr) {
    for(let i = 0; i< arr[1]; i++) results += arr[0].toString();
  results += ',';
})
return results.substring(0, results.length - 1);
}

  console.log(repeatNumbers([[1, 10]]));
  console.log(repeatNumbers([[1, 2], [2, 3]]));



// const repeatNumbers = function(data) {
//     // Put your solution here
//     let result = 1; 
//     for (let i = 0; i < data.length; i++){
//             if (Array.isArray(data[i])){
//                 var x = data[i][0]
//                 var y = data[i][1]
//                 for(var j = 1; j <= y; j++){
//                     result = result + x;
//                 }
//             }
//         }
//     let number = result
//     return console.log(result);
//   };

//   console.log(repeatNumbers([[1, 10]]));

// function repeatnumber(data){
//     var result = " "; 
//     for (var i = 0; i < data.length; i++){
//             if (Array.isArray(data[i])){
//                 var x = data[i][0]
//                 var y = data[i][1]
//                 for(var j = 1; j <= y; j++){
//                     result = result + x;
//                 }
//             }
//         }
//     var number = result
//     var answer = number.match(/(\d)\1*/g)
//     return console.log(answer);
// }

//   console.log(repeatNumbers([[1, 10]]));