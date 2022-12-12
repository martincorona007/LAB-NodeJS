https://www.freecodecamp.org/news/get-started-with-graphql-and-nodejs/
//if we wanted to build a music application
===================
node server/server.js
npm install graphql
npm install apollo-server
Apollo Server
Apollo Server, on the other hand, will help us to implement the GraphQL functionalities. It is part of the Apollo Data Graph Platform.
Apollo is a platform for building a data graph, a communication layer that seamlessly connects your application clients (such as React and iOS apps) to your back-end services. Is an implementation of GraphQL designed for the needs of product engineering teams building modern, data-driven applications. - Apollo Documentation

FD: a community and provides tools(client and server) to help you build your projects
Apollo Client helps your Frontend communicate with a GraphQL API. It has support for the most popular frameworks such as React, Vue, or Angular and native development on iOS and Android.
Apollo Server is the GraphQL server layer in your backend that delivers the responses back to the client requests.
===================

//two Object types: Song and Author

type Song {
  title: String
  author: Author
}

type Author {
  name: String
  songs: [Song]
}
Then we would have a Query type to define the available queries: getSongs and getAuthors, each returning a list of the corresponding type.