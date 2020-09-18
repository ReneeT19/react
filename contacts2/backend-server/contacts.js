const clone = require('clone')
const config = require('./config')

const db = {}

const defaultData = {
  contacts: [
    {
      id: 'erik',
      name: 'Erik Thomsen',
      email: 'etho201@gmail.com',
      cell: '9199390222',
      avatarURL: config.origin + '/erik.jpg'
    },
    {
      id: 'renee',
      name: 'Renee Thomsen',
      email: 'rcthomsen19@gmail.com',
      cell: '5409987706',
      avatarURL: config.origin + '/renee.jpg'
    }
  ]
}

const get = (token) => {
  let data = db[token]

  if (data == null) {
    data = db[token] = clone(defaultData)
  }

  return data
}

const add = (token, contact) => {
  if (!contact.id) {
    contact.id = Math.random().toString(36).substr(-8)
  }

  get(token).contacts.push(contact)

  return contact
}

const remove = (token, id) => {
  const data = get(token)
  const contact = data.contacts.find(c => c.id === id)

  if (contact) {
    data.contacts = data.contacts.filter(c => c !== contact)
  }

  return { contact }
}

module.exports = {
  get,
  add,
  remove
}
