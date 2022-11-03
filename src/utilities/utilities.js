

const getAllData = (data) => {

      return fetch(`https://api.nytimes.com/svc/topstories/v2/${data}.json?api-key=
      ${process.env.REACT_APP_NYTIMES_API_KEY}`)
        .then((response) => {
            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            return response.json();
          })
          // .then((actualData) => console.log(actualData))
          .catch((err) => {
            console.log(err.message);
          });

}


   
  export { getAllData }
  


