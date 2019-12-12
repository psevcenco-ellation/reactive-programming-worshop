// Using a library

const usernameField = document.querySelector('.username')
const input = fromEvent(usernameField, 'keypress').map(x => x.target.value)
const enterPress = fromEvent(usernameField, 'keyup').filter(x => x.key === 'Enter')

const username = fromEvent(usernameField, "keypress").map(x => x.target.value)
const enterPresses = fromEvent(usernameField, "keypress").filter(x => x.key === "Enter")

const userRequest = compose(request, prepend('https://api.github.com/users/'))

enterPresses
  .withLatestFrom(username)
  .switchMap(compose(userRequest, nthArg(1)))
  .map(prop("response"))
  .map(pick(["name", "followers"]))
  .subscribe(console.log)

// Subscriptions are side-effects