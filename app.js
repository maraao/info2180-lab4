window.onload = function() {
    var searchBtn = document.querySelector('#searchBtn');
    var httpRequest

    searchBtn.addEventListener("click", function(event){
        event.preventDefault();

        httpRequest = new XMLHttpRequest();
        var url = 'http://localhost/info2180-lab4/superheroes.php';
        httpRequest.onreadystatechange = loadHeroes;
        httpRequest.open('GET', url);
        httpRequest.send();
    });

    function loadHeroes(){
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
              var response = httpRequest.responseText;
              alert(response);
            } else {
              alert('There was a problem with the request.');
            }
        }
    }
};