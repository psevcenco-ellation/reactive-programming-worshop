// Other observables


const arrayObservable = (...items) => ({
  subscribe: ob => {
    items.forEach(ob.next)
    ob.complete()
  }
})

const counterObservable = () => {}

const eventObservable = () => {}

const requestObservable = () => {}


arrayObservable(1,2,3)
  .subscribe({next: x => console.log(x), complete: () => console.log('done')})
