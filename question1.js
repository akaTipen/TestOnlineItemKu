var records = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];

console.log(solution(records))

function solution(record) {  
	var answer = [];

	for (let item of record) {
    var key = item.split(' ')[0];
		var uid = item.split(' ')[1];
		var name = '';
    if(key != 'Leave')
      name = item.split(' ')[2];
    
    if((key == 'Enter' | key == 'Leave' | key == 'Change') && (key == 'Leave' || name.length <= 10) && key.length <= 10) {
		  //Enter
		  if(item.includes('Enter')) {
			  if(item.split(' ').length == 3) {
				  answer.forEach(function(o, index) {
					  if(o.includes(uid))
						  answer[index] = o.replace(o.split(' ')[1], name);                
				  });
			  } else {
				  answer = [];
				  break;
			  }
			  item = item.replace("Enter ", "").concat(" came in.");
			  answer.push(item);
		  }
		//Leave
		else if(item.includes('Leave')) {
			if(item.split(' ').length == 2) {
				answer.forEach(function(o) {
					if(o.includes(uid))
						uid = uid.concat(' ' + o.split(' ')[1]);  
				});
			} else {
				answer = [];
				break;
			}		
			item = uid.concat(" has left.");
			answer.push(item);
			//Change
		} else if(item.includes('Change')) {
			if(item.split(' ').length == 3) {
				answer.forEach(function(o, index) {
					if(o.includes(uid))
						answer[index] = o.replace(o.split(' ')[1], name); 
				});
			} else {
				answer = [];
				break;
			}	
		}
  } else {
    answer = [];
		break;
  };
	};

	if(answer.length > 0) {
		answer.forEach(function(o, index) {
			var arr = o.split(' ');
			arr.shift();
			answer[index] = arr.join(' ');
		});

		return answer;
	} else {
		return "Wrong";
	}
};
