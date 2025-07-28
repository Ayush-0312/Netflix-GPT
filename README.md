# Netflix-GPT

A smart movie recommendation platform using ChatGPT to suggest trending and personalized content.
live- https://netflix.theayushgupta.in/

- create react app
- configured tailwindCSS
- routing of app
- header
- login form
- sign up form
- form validation
- useRef
- firebase setup
- deploying app to production
- create sign up user account
- implement sign in user API
- created redux store with userSlice
- bugFix - sign up displayName and profilePicture update
- bugFix - if the user is not logged in redirect/ browse to login page and vice-versa
- unsuscribed to onAuthStateChanged callback
- add hardcoded values to constants file
- register TMDB API & create an app & get access token
- get data from TMDB now playing movies list API
- setup moviesSlice
- created custom hook "useNowPlayingMovies" to fetch data from TMDB API and update store
- planning for MainContainer & SecondaryContainer
- fetch data for trailer video
- update store with trailer video data
- embedded the youtube video and make it autoplay and mute
- tailwindCSS to make mainContainer look cool
- created SecondaryContainer
- created MovieList and MovieCard
- created different custom hooks for popular, topRated, upcoming movies
- hid scrollbar with maintaining its functionality
- GptSearch feature
- GptSearchBar
- (Feature) multi-language feature in our app
- setup OpenAI API
- used OpenAI API to get movie suggestions
- reused MovieList component to display the movies
- created env file to protect api key
- done minor changes to stop repeated API calls
- created movieVideos page which displays movie details and videos
- created custom hooks to fetch movie details and movie videos
- created movieVideoList to display movieVideos
- created Footer
- setup play and more info button option in main container
- fixed favicon
- made the app responsive to different screens

# Features

- login / sign up

  - sign in / sign up form
  - redirect to browse page

- Browse (after authentication)

  - Header
  - main movie
    - trailer in bg
    - title & description
  - movie suggestion
    - movieList \* n

- Netflix-GPT

  - search bar
  - movie suggestions
