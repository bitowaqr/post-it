fetch("links.json")
    .then(response => response.json())
    .then(function (parsedData) {
        
        var items = document.querySelectorAll(".item");

    for (let i = 0; i < parsedData.length; i++) {
        items[i].innerHTML = parsedData[i].title;
        items[i].href = parsedData[i].url;
        items[i].target = "_blank";
        items[i].classList.add("available");
    }

})
