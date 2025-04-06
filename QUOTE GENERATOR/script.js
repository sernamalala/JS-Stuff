let responseReceived;

$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes',
    headers: { 'X-Api-Key': '0CGx7blJkimNd1hJWmC+Tg==QKt2c8438I37pUC0'},
    contentType: 'application/json',
    success: function(result) {
       console.log(result)
        displayQuote(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

const quoteDiv = document.getElementById("quote");

function displayQuote(arr){

    let object = arr[0]
    let quote = object.quote
    let author = object.author

    let p1 = document.createElement("p");
    p1.textContent = quote;
    p1.id = "p1";
    let p2 = document.createElement("p");
    p2.textContent = author;
    p2.id = "p2";
    quoteDiv.appendChild(p1)
    quoteDiv.appendChild(p2)

}

const tweet = document.getElementById("tweet");
const newQuote = document.getElementById("new-quote");

tweet.addEventListener("click", function () {
    
    
})