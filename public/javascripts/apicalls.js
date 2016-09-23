 var MsTranslator = require('mstranslator');

 var client = new MsTranslator({
        client_id: 'FlashyWords',
        client_secret: '4/+G5yvouyKTQ6/cPoe28NxSJMKtu5iz1NLa1FJ8pFg='
    }, true);

function getLangCodes(){

    return new Promise(function(resolve, reject){
       client.getLanguagesForTranslate(function(err,data){
        resolve(data);
       });
    });
}

function getAvailableLanguagesToFull(){

    return new Promise(function(resolve, reject){
        getLangCodes().then(
            //success
            function(result){
                var params = {locale:'en', languageCodes:result};
                client.getLanguageNames(params, function(err, data){
                    console.log(data);
                    resolve(data);
                });
            },
            //failure
            function(err){
                console.log(err);
            }
        );
    });
}

exports.getAvailableLanguagesToFull = getAvailableLanguagesToFull;