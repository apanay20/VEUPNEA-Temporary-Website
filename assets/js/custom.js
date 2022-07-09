$.get('publications.html', null, function(text){
    console.log($(text).find('#siggraph22-ccp'));
});