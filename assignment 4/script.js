  // JavaScript to handle form submission and API request
  document.getElementById("searchForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const word = document.getElementById("word").value;
    const definitionElement = document.getElementById("definition");
    definitionElement.textContent = ''; // Clear previous result

    if (word.trim() === "") {
        definitionElement.textContent = "Please enter a word.";
        definitionElement.classList.add("error");
        return;
    }


    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            // Get the first meaning
            const definition = data[0].meanings[0].definitions[0].definition;
            definitionElement.textContent = `Definition: ${definition}`;
            definitionElement.classList.remove("error");
        } else {
            definitionElement.textContent = "Word not found!";
            definitionElement.classList.add("error");
        }
    } catch (error) {
        definitionElement.textContent = "Error fetching definition.";
        definitionElement.classList.add("error");
    }
});