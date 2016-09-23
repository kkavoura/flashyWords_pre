var $languageList = $('#languageList') ;

//Event handler for the navbar settings dropdown menu
$('.dropdown').on('click', function(event){

    //Send a request to retrieve the lastest list of languages supported
    //by the Microsoft Translation API
    if(event.target.id=='pickNativeLanguage'){
        $.get('/languages', function(data){
            var dataLength = data.length;
            for(var i=0; i<dataLength; i++){
                $languageList.append('<li>' + data[i] + '</li>');
            }
        });
    }
});