# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Netflix-GPT

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
