// Operators

const observer = {
  next: console.log, 
  complete: () => console.log('done'), 
  error: console.error
}

const oddCounts = counter()
  .filter(x => x % 2)
  
oddCounts.subscribe(observer)

const enterClicks = event(document, 'keyup')
  .filter(e => e.key === 'Enter')
  
enterClicks.subscribe(observer)

const dansName = request('https://api.github.com/users/gaearon')
  .map(u => u.name)
  
dansName.subscribe(observer)
