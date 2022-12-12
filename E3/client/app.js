const GRAPHQL_URL = 'http://localhost:9000/';
//fetch the greeting from the server
async function fetchGreeting(){
  const response = await fetch(GRAPHQL_URL,{
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query{
          greeting
        }
      `,
    }),
  });
  const responseBody = await response.json();
  console.log(responseBody);
  return responseBody;
}
fetchGreeting().then((greeting)=> {
  //console.log(greeting.data)
  const title = document.querySelector('h1');
  title.textContent = greeting.data.greeting;
});
