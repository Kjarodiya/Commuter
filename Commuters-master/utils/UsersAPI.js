const api =  'http://localhost:3000'

// let token = localStorage.token
//
// if (!token)
//   token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json'
}

export const getAll = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.contacts)


// export const remove = (contact) =>
//   fetch(`${api}/contacts/${contact.id}`, { method: 'DELETE', headers })
//     .then(res => res.json())
//     .then(data => data.contact)
//
// export const create = (body) =>
//   fetch(`${api}/contacts`, {
//     method: 'POST',
//     headers: {
//       ...headers,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(body)
//   }).then(res => res.json())
