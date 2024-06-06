Requirements
- A user enters the website and finds a list of the names, dates, times, locations, and descriptions of all the parties that are happening.
- Next to each party in the list is a delete button. The user clicks the delete button for one of the parties. That party is then removed from the list.
- There is also a form that allows the user to enter information about a new party that they want to schedule. After filling out the form and submitting it, the user observes their party added to the list of parties.

Hints
- Which components can be created directly in the HTML? Which components need to be created in JavaScript?
- Can you render mock data to the page?
- Can you render real data to the page?
- Are you able to fetch an array of all the parties from the API?
- Is state correctly updated to match the data from the API?
- Are you passing the correct arguments to fetch?
- Does the API return an error? If so, what is the error message?
- Is there an event listener on the form? Does it correctly add a new party to the list of parties?
- Is there an event listener attached to each delete button? Does it correctly remove a party from the list of parties?

Rubric
- Fetch is used correctly to GET party data from the API.
- Fetch is used correctly to POST a new party to the API.
- Fetch is used correctly to DELETE a party from the API.
- The app contains a list of the names, dates, times, locations, and descriptions of all parties.
- Each party in the list has a delete button which removes the party when clicked.
- The app contains a form that allows a user to enter information about a party and add it to the list.
- The DOM is dynamically rendered according to data stored in state.
- The data stored in state is updated to stay in sync with the API.