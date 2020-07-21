var list = [];
document.querySelectorAll(".bc-table-row").forEach(function(item){
    var textContainer = item.querySelectorAll("td:nth-of-type(2) .bc-box .bc-list  > li:last-of-type");
    if (textContainer[0]) {
       	var rank = parseFloat(textContainer[0].querySelectorAll(".bc-text")[0].innerText.split(' ')[0]);
    	var reviews = parseInt(textContainer[0].innerText.split('stars')[1].split(' ')[0].trim().replace(/,/g, ''));
        var name = item.querySelectorAll("td:nth-of-type(2) .bc-color-link")[0].innerText;
        list.push({
	       name: name,
	       rank: rank,
	       reviews: reviews
       	});
    }
});
list.sort(function(a, b) {
    return b["rank"] - a["rank"] || b["reviews"] - a["reviews"];
});
console.table(list);