
const getAllData = (data) => {

      return fetch(`https://api.nytimes.com/svc/topstories/v2/${data}.json?api-key=Yaqc7SKeOgyp85ZXTGrTjNdGoKG85vjK
      `)
        .then((response) => {
            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            return response.json();
          })
          .catch((err) => {
            console.log(err.message);
          });
}


   
  export { getAllData }
  


