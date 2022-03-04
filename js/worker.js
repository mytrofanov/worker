// Worker thread

function fibonacci(n) {
  if (n < 2) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
}

addEventListener('message', message => {
  console.log('Get value from main thread', message)
  const { data } = message

  postMessage(fibonacci(data))
})
