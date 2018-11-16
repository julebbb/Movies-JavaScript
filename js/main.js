let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        //Take json file and make object in a variable
        object = JSON.parse(xhttp.responseText);
        console.log(object.movie);
        
        new Vue({
            el: "#card",
            data: {
                title: object.movie
            
            },
            
        
            
        })
        
    }
};


xhttp.open("GET", "js/main.json", true);
xhttp.responseType = "text";
xhttp.send(null)


