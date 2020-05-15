var relation = [["100","ryan","music","2"],
                ["200","apeach","math","2"],
                ["300","tube","computer","3"],
                ["400","con","computer","4"],
                ["500","muzi","music","3"],
                ["600","apeach","music","2"]]

console.log(solution(relation))

function solution(relation) {
    var answer = 0;
    
    //row more than 20
    if(relation.length > 20)
      answer = "error";

    var itemLength = 0;
    var StudentNumber = [];
    var uniqueKey = [];
    for (i = 0; i < relation.length; i++) {
      var valueToPush = new Array();
      valueToPush[0] = relation[i][1];
      valueToPush[1] = relation[i][2];
      uniqueKey.push(valueToPush);
      StudentNumber.push(relation[i][0]);

      //check quantity same column
      if(i == 0)
        itemLength = relation[i].length;
      else {
        if(itemLength != relation[i].length)
          answer = "error";
      }
      //string more than 8
      for(let item of relation[i]) { 
        if(item.length > 8)
          answer = "error";
      }   
    }
    //column more than 8
    if(itemLength > 8)
      answer = "error";

    //check no duplicate Name, Major
    var checkDistinct = multiDimensionalUnique(uniqueKey);
    if(uniqueKey.length != checkDistinct.length)
      answer = "error";
    
    //check no duplicate Student number
    let unique = [...new Set(StudentNumber)]; 
    if(StudentNumber.length != unique.length)
      answer = "error";

    //answer
    if(answer != "error") {
      answer = 2;
    }
      
    return answer;
}

function multiDimensionalUnique(arr) {
    var uniques = [];
    var itemsFound = {};
    for(var i = 0, l = arr.length; i < l; i++) {
        var stringified = JSON.stringify(arr[i]);
        if(itemsFound[stringified]) { continue; }
        uniques.push(arr[i]);
        itemsFound[stringified] = true;
    }
    return uniques;
}
