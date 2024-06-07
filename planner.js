const API_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2405-ftb-et-web-ft/events"

const state = {
    parties: [],
  };

const partiesList = document.querySelector("#parties")
const addPartyForm = document.querySelector("#addParty")
// const deletePartyButton = document.querySelector("#deleteParty")

// addPartyForm.addEventListener("submit", addParty)
// deletePartyButton.addEventListener("submit", deleteParty)


async function render() {
  await getParties()
  renderParties()
}
render()

async function getParties() {
  try {
    const response = await fetch(API_URL)
    const json = await response.json()
    state.parties = json.data
  } catch {
    console.error(error)
  }
  console.log(state)
}

function renderParties() {
  if (!state.parties.length) {
    partiesList.innerHTML = "<li>No parties.</li>"
    return
  }
  const partyCards = state.parties.map((party) => {
    const li = document.createElement("li")
    li.innerHTML = `
      <h2>${party.name}</h2>
      <p>Date: ${party.date}</p>
      <p>Time: ${party.time}</p>
      <p>Location: ${party.location}</p>
      <p>Description: ${party.description}</p>
      <button>Delete Party</button>`
    return li
  })
  partiesList.replaceChildren(...partyCards);
}

// async function deleteParty() {}

// async function addParty() {}