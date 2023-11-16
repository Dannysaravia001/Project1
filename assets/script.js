
// Function to fetch cryptocurrency data
async function fetchCrypto() {
  const apiUrl = 'https://api.coincap.io/v2/assets';

async function fetchMultipleCrypto(ids) {
  const apiUrl = `https://api.coincap.io/v2/assets`;


  try {
    const response = await fetch(apiUrl, { method: 'GET' });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data = await response.json();

    return data.data;

    const filteredData = data.data.filter(asset => ids.includes(asset.id));
    return filteredData; // Return data for the specified cryptocurrencies

  } catch (error) {
    throw error;
  }
}


// Function to render crypto data on the HTML page

function renderCryptoData(cryptoData) {
  const bitcoinData = document.getElementById('cryptoDataBitcoin');
  const ethereumData = document.getElementById('cryptoDataEthereum');
  const litecoinData = document.getElementById('cryptoDataLitecoin');

  // Clear previous content
  bitcoinData.innerHTML = '';
  ethereumData.innerHTML = '';
  litecoinData.innerHTML = '';

  cryptoData.forEach(asset => {
    const item = document.createElement('div');
    item.innerHTML = `
      <p>Name: ${asset.name}</p>
      <p>Symbol: ${asset.symbol} </p>
      <p>Price (USD): ${asset.priceUsd}</p>
      `;

    if (asset.id === 'bitcoin') {
      bitcoinData.appendChild(item);
    } else if (asset.id === 'ethereum') {
      ethereumData.appendChild(item);
    } else if (asset.id === 'litecoin') {
      litecoinData.appendChild(item);
    }
  });
}


// Function to fetch a joke
function fetchJoke() {
  const apiUrl = "https://official-joke-api.appspot.com/random_joke";
  return fetch(apiUrl, {
    method: "GET"

// Usage
const cryptoIds = ['bitcoin', 'ethereum', 'litecoin'];

fetchMultipleCrypto(cryptoIds)
  .then(cryptoData => {
    renderCryptoData(cryptoData);
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
}

document.addEventListener('DOMContentLoaded', async function () {
  try {
    const cryptoData = await fetchCrypto();
    renderCryptoData(cryptoData);
  } catch (error) {
    console.error('Error fetching crypto data:', error);
  }


  const apiUrl = "https://official-joke-api.appspot.com/random_joke";
  try {
    const jokeData = await fetchJoke();
    document.getElementById("jokeTextPlaceholder").innerText = jokeData.setup + " " + jokeData.punchline;
  } catch (error) {
    console.error("Error fetching joke:", error);
  }

  function revealPunchline() {
    fetchJoke()
      .then((jokeData) => {
        const jokeTextPlaceholder = document.getElementById("jokeTextPlaceholder");
        const setupParagraph = document.createElement("p");
        setupParagraph.textContent = jokeData.setup;
  
        const punchlineParagraph = document.createElement("p");
        punchlineParagraph.textContent = jokeData.punchline;
        punchlineParagraph.style.display = "none";
  
        jokeTextPlaceholder.innerHTML = '';
        jokeTextPlaceholder.appendChild(setupParagraph);
        jokeTextPlaceholder.appendChild(punchlineParagraph);
  
        const revealButton = document.getElementById("revealButton");
        revealButton.innerText = "Reveal Punchline";
        revealButton.onclick = function () {
          punchlineParagraph.style.display = punchlineParagraph.style.display === "none" ? "block" : "none";
          revealButton.innerText = punchlineParagraph.style.display === "none" ? "Reveal Punchline" : "Hide Punchline";
        };
      })
      .catch((error) => {

fetchJoke()
  .then((jokeData) => {
        document.getElementById("jokeTextPlaceholder").innerText =
          jokeData.setup + " " + jokeData.punchline;
})
.catch((error) => {

        console.error("Error fetching joke:", error);
      });
  }


  // Call revealPunchline immediately after the page loads
  revealPunchline();
});

      function revealPunchline() {
        fetchJoke()
          .then((jokeData) => {
            const jokeTextPlaceholder = document.getElementById("jokeTextPlaceholder");
            jokeTextPlaceholder.innerText = jokeData.setup;
            
            // Span element for the punchline and to set its style to hidden at start
            const punchlineSpan = document.createElement("span");
            punchlineSpan.innerText = jokeData.punchline;
            punchlineSpan.style.display = "none";
    
            // This appends the punchline span to the placeholder element
            jokeTextPlaceholder.appendChild(punchlineSpan);
    
            // Here you can change the button text as well as set the onclick function to toggle the punchline to show
            const revealButton = document.getElementById("revealButton");
            revealButton.innerText = "Hide Punchline";
            revealButton.onclick = function () {
              punchlineSpan.style.display = punchlineSpan.style.display === "none" ? "inline" : "none";
              revealButton.innerText = punchlineSpan.style.display === "none" ? "Reveal Punchline" : "Hide Punchline";
            };
          })
          .catch((error) => {
            console.error("Error fetching joke:", error);
          });
      }
      revealPunchline();
    });



// Update the clock every second
function updateClock() {
  var now = dayjs().format('h:mm:ss');
  // Update the content of the clock element
  document.getElementById('timeClock').textContent = now;
}

// Call updateClock() immediately to set the initial time
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);

