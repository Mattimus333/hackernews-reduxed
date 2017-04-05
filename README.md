# ReactJS HackerNews App
* Inspired by https://leanpub.com/the-road-to-learn-react

## Objectives
- Use Redux for state management

## Let's get coding.
Your task is to refactor this app to use redux for state management. This means, you should no longer be using ```setState()``` anywhere.

* We've provided the basic boiler plate for the redux and react redux libraries for you.
* Take some time to understand the changes we've made to accomidite redux. The following folders in the ```src``` folder: ```actions``` and ```reducers```, as well as ```src/index.js```.
* Install redux devtools to see the flow of actions through your app.
* The list of search results is updated asynchronously. To learn how to deal with async flow: read http://redux.js.org/docs/advanced/AsyncFlow.html
* There are a number of ways to impliment async flow in our redux app. I believe this easiest may be: https://github.com/rjbma/redux-promise-reducer Redux Thunk and Redux Sagas are more complex and perhaps not necessarily for your first react project.
* Refactor away.
