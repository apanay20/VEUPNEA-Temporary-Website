$.get('publications.html', null, function(text){
    alert($(text).find('#siggraph22-ccp'));
});