let responseReceived;

function getQuote() {
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
}

getQuote();
const quoteDiv = document.getElementById("quote");
let quoteText; 
let author;
function displayQuote(arr){

    quoteDiv.innerHTML = "";
    let object = arr[0]
    quoteText = object.quote
    author = object.author

    let p1 = document.createElement("p");
    p1.textContent = quoteText;
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
    const tweetUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(quoteText)} - ${author}`;
    window.open(tweetUrl, "_blank");
})

newQuote.addEventListener("click", function () {
    getQuote();
})
