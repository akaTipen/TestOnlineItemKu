var N =  5; //4;
var users =  [2,1,2,6,2,4,3,3]; //[4,4,4,4,4];

console.log(solution(N, users))

function solution(N, users) {
	var answer = [];

	for(var i = 1; i <= N; i++) {
		var ulenght = users.length
		var temp = users.filter(function(x) {return x > i;});
		var tot = users.length - temp.length;
		answer.push(tot / ulenght);
		users = temp;

	}

	var len = answer.length;
	var indices = new Array(len);
	for (var i = 0; i < len; ++i) indices[i] = i;
	indices.sort(function (a, b) { return answer[a] > answer[b] ? -1 : answer[a] < answer[b] ? 1 : 0; });

	indices.forEach(function(o, index) {
		indices[index] = o + 1;
	});

	answer = indices;
	return answer;
}
