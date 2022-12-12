//https://www.freecodecamp.org/news/a-beginners-guide-to-graphql-86f849ce1bec/
schema.graphql  file is going to be our entire GraphQL schema
resolvers.js    file is going to be the way we provide the instructions for turning a GraphQL operation into data.
==========
npm install --save-dev graphpack

==========


return all users
query {
  users {
    id
    name
    email
    age
  }
}
return specific user
query {
  user(id: 1) {
    id
    name
    email
    age
  }
}

mutation {
  createUser(id: 3, name: "Robert", email: "robert@gmail.com", age: 21) {
    id
    name
    email
    age
  }
}
mutation {
  deleteUser(id: 1){
  id
  }
}
mutation {
  updateUser(id: 1, name: "Robert", email: "robert@gmail.com", age: 21) {
    id
    name
    email
    age
  }
}