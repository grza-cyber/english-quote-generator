function displayQuote(response) {
    let quoteElement = document.querySelector("#quote-element");
    quoteElement.classList.remove("hidden");
    new Typewriter("#quote-element", {
        strings: response.data.answer,
        autoStart: true,
        delay: 30,
        cursor: null,
      });
}

function generateQuote(event) {
    event.preventDefault();
    let topicInputElement = document.querySelector("#quote-topic-input");
    let prompt = `Generate an English quote about ${topicInputElement.value}`;
    let context = "You know a lot about English litterature and you can find a quote about any topic. Your mission is to find the best quote from existing English texts. Make sure to follow the user instructions. You display a quote of maximum six lines, no more. You sign with 'SheCodes AI' in <strong> at the end. Put the <br /> twice before the signature.";
    
    let apiKey = "4a76f73ec0tb4cf9o9b3b1c325220356";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    axios.get(apiUrl).then(displayQuote);    
    
    console.log(`prompt: ${prompt}`);
}
let quoteFormInput = document.querySelector("#quote-form");
quoteFormInput.addEventListener("submit", generateQuote);