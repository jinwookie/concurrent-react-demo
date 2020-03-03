export default function createResource(promise) {
  let status = 'pending'
  let result
  let suspender = promise.then(
    greeting => {
      status = 'success'
      result = greeting
    },
    error => {
      status = 'error'
      result = error
    },
  )
  return {
    read() {
      if (status === 'pending') throw suspender
      if (status === 'error') throw result
      if (status === 'success') return result
    },
  }
}