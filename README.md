# ReactJS HackerNews App
* Inspired by https://leanpub.com/the-road-to-learn-react

## Objectives
- Have an understanding of how to build a SPA in React.

## Let's get coding.

### Let's begin with a static version of the app.
* This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
* Let's take a look around the app. We currently have the the static version of what we want our site to look like.

### Now let's start making the app dynamic.
Let's begin by adding the ability to do a search of HackerNews API.

Lets figure out the state needed to be kept in the app.

1. The first thing we want to do is to identify what changes  in our app, this is usually what goes in react ```state```. I think the minimum state needed to be kept in our app is: ```query``` and ```results```.

2. Now let's identify where this state should live. The ```query``` string that the user types is kept inside the ```Search``` component. The results from the doing the search should be kept as ```results```. The results are however relevant to the ```table``` Component. This is when we push the state up the component hierarchy. Which means that ```query``` and ```results``` should both live in the state of the App component, which is the shared parent of ```Table``` and ```Search```. So the state kept in the app will be something like: ```{ query, results }```.

Let's go ahead and add this state to the App component.

```
//set initial state
constructor(props) {
  super(props);

  this.state = {
    results: null,
    query: CONST.DEFAULT_QUERY
  };
}
```

Now let's write the functions that manipulate the state:

```
//when the query string changes, update the state accordingly
onSearchChange(event) {
  this.setState({
    query: event.target.value
  });
}

onSearchSubmit(event) {
  const { query } = this.state;
  this.fetchSearchTopStories(query, CONST.DEFAULT_PAGE);
  event.preventDefault();
}

fetchSearchTopStories(query, page) {
  const API_URL = [
    `${CONST.PATH_BASE}`,
    `${CONST.PATH_SEARCH}`,
    '?',
    `${CONST.PARAM_SEARCH}`,
    `${query}`,
    '&',
    `${CONST.PARAM_PAGE}`,
    `${page}`,
    '&',
    `${CONST.PARAM_HPP}`,
    `${CONST.DEFAULT_HPP}`,
  ].join('');

  axios
    .get(API_URL)
    .then(response => response.data)
    .then(result => this._setSearchTopStories(result));
}

_setSearchTopStories(result) {
  const { hits, page } = result;

  this.setState({
    results: hits
  });
}
```
Since the query state is maintained in the app component but the input is in the Search component, we need a way to let the Search component modify the state maintained in the App component. This is done through callbacks.

```
//inside the App render function
<Search
  value={query}
  onChange={this.onSearchChange}
  onSubmit={this.onSearchSubmit}
>
```

Now let's see what happens when I change the search input.

:question: Uh-oh an error. What's going on?
