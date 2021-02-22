# Public Repos Finder

# Run application 

You will find the public_repos_finder application on https://public-repos-finder.netlify.app/

Start/home page => Search section : Ask you to fill in a GitHub userName to search for the repositories linked to that user.
- The searchbox validates the username by RegExp  (/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i)
  Provide a warning on wrong input
- Search button will be enabled on first user input
- Th search field is always present and enables the user to launch a new search faster.

Repositories page => This page returns all the repositories from the given GitHub user
- Provides a warning when there are no repositories
- All repositories display following information : " title, description, date of creation and hour of creation ".
- Also requested stars, watchers and Forks amount data to implement this in the repository [for the near future]
- Every repository is clickable to redirect the user to the commits page and display all Commits

Commits page => This page returns all the commits from the clicked repository
- Provided a dropdown box with all the repositories of the github user for better navigation
- Every commit displays following information : " hash, message, creation date and creation hour ".

The application is made responsive.

# ES6+ Functions

- Default parameters inside reducers

const initialState = {
    commits:null,
    loading:false,
    error:false
}
const reducer = ( state = initialState, action ) => {}
// To make sure I always can return a state.... in this case the initial state!

- Template literals for Axios to get the necessary request

const url = `users/${user}/repos`;
Axios.get(url)

// more readable then const url = 'users/ ' + user + '/repos';




