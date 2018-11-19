let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        //Take json file and make object in a variable
        object = JSON.parse(xhttp.responseText);
        
        new Vue({
            el: "#card",
            data: {
                title: object.movie
            },
            
        })

        new Vue({
            //je peux prend un element de l'autre vue
            el: "#formulaire",
            data: {
                title: "",
                synopsis: ""
            },
            methods: {
                createCard: function() {
                    object.movie.push({'title': this.title, 'synopsis': this.synopsis})
                }
            }
        })
        
    }
};


xhttp.open("GET", "js/main.json", true);
xhttp.responseType = "text";
xhttp.send(null)


