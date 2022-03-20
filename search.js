document.querySelector("#formButton").addEventListener("click", function(event) {
    event.preventDefault();
    route = document.getElementById("formInput").value
    if (route.charAt(0) == "k"){
        window.location.href = route
    }
    
}, false);