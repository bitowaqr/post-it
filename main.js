fetch("links.json")
    .then(response => response.json())
    .then(function (parsedData) {

        var items = document.querySelectorAll(".item");

        for (let i = 0; i < parsedData.length; i++) {
        index_i = parsedData[i].index -1;
        items[index_i].innerHTML = parsedData[i].title;
        items[index_i].href = parsedData[i].url;
        items[index_i].target = "_blank";
        items[index_i].classList.add("available");
    }

})
