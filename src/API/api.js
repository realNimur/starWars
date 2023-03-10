const baseUrl = 'https://swapi.dev'

export const getPeople = (page) => {
  return fetch(`${baseUrl}/api/people/?page=${page}`).then((res) => {
    if (res.ok) {
      return res.json()
    }
    throw Error('Something went wrong')
  })
}
