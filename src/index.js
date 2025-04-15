function generateQuote(event) {
    event.preventDefault();
    
    let quote = "Don't judge each day by the harvest you reap but by the seeds that you plant.";
    new Typewriter("#quote-element", {
        strings: `${quote}`,
        autoStart: true,
        delay: 30,
        cursor: null,
      });
}
let quoteFormInput = document.querySelector("#quote-form");
quoteFormInput.addEventListener("submit", generateQuote);