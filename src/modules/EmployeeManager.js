const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/employees/${id}?_expand=animal&_expand=location`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/employees?_expand=animal&_expand=location`).then(result => result.json())
  },
  delete(id) {
    return fetch(`http://localhost:5002/employees/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  }
}