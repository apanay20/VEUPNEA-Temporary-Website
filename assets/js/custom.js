var stringToHTML = function (str) {
	var parser = new DOMParser();
	var doc = parser.parseFromString(str, 'text/html');
	return doc.body;
};

$.get('news.html', null, function(text){
    var newsContainer = $(text).find('#newsContainer')[0].innerHTML;
    var newsHTML = stringToHTML(newsContainer);
    var newsRows = newsHTML.querySelectorAll('.newsItem')

    //SELECT HOW MANY POSTS TO SHOW IN HOMESCREEN FROM NEWS.HTML PAGE
    var numOfNewsInHomepage = 5;
    var newsContainerHomepage = document.getElementById("newsContainerHomepage");

    var i = 0;
    while (i < numOfNewsInHomepage && i < newsRows.length) {
        var textRow = newsRows[i].innerHTML;
        var htmlRow = stringToHTML(textRow);
        newsContainerHomepage.appendChild(htmlRow.firstChild);
        i++;
    }

    if(numOfNewsInHomepage < newsRows.length){
        var newDiv = document.createElement("div");
        newDiv.setAttribute('class', 'moreNewsBtn');
        newDiv.innerHTML = '<a href="news.html">SEE OLDER POSTS</a>'
        newsContainerHomepage.appendChild(newDiv);
    }
});