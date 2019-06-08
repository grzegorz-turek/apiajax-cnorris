'use strict';
(function(){
    var url = 'http://api.icndb.com/jokes/random';
    var button = document.getElementById('get-joke');
    button.addEventListener('click', function() {
    getJoke();
    });

/*
    function getJoke() {
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.onload(function() {
            var answer = JSON.parse(request.response)
            document.getElementById('joke').innerHTML += answer.value.joke;
        });
        request.send();
    };
*/

    function getJoke() {
        var cnRequest = new XMLHttpRequest();
        cnRequest.open('GET', url);
        cnRequest.addEventListener('load', function(){
          var answer = JSON.parse(cnRequest.response);
          document.getElementById('joke').innerHTML += answer.value.joke + '<br><br>';
        });
        cnRequest.send();
    }

    getJoke();

})();
