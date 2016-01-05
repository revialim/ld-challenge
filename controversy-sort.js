// sample data 
var myurls = [
{
"url":"www.one.com",
"likes": 10,
"dislikes": 5
},
{
"url":"www.two.com",
"likes": 8,
"dislikes": 0
},
{
"url":"www.three.com",
"likes": 15,
"dislikes": 7
},
{
"url":"www.four.com",
"likes": 5,
"dislikes": 5
},
{
"url":"www.five.com",
"likes": 7,
"dislikes": 3
},
{
"url":"www.six.com",
"likes": 3,
"dislikes": 3
},
{
"url":"www.seven.com",
"likes": 7,
"dislikes": 2
}
];

//sorting by controversy

function controversySort(urls){
	var sortedUrls = [];
	sortedUrls = urls;
	sortedUrls.sort(function(a, b) {
		var votesA= a.likes+a.dislikes;
		var votesB= b.likes+b.dislikes;
		if((a.likes===a.dislikes)&&(b.likes===b.dislikes)){
		// same ratio of likes and dislikes 
		// higher absolute number of votes -> more controversial
			return votesA - votesB;
		}
		else if(votesA===votesB){
		// same absolute number of votes
		// ratio likes/dislikes closer to 1 (or 0) -> more controversial
			return (Math.abs(b.likes-b.dislikes)-Math.abs(a.likes-a.dislikes));
		}
		else if((a.dislikes===0)&&(b.dislikes>0)||(b.dislikes===0)&&(a.dislikes>0)){
		// an url without dislikes is not controversial at all
			return a.likes- b.likes;
		}
		else{
		// sort descending by number of likes
			return b.likes - a.likes;
		}
	});
	
	return sortedUrls;
}

// sort sample data

console.log(controversySort(myurls));
