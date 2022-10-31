

const fetchAllData = (data) => {

        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${data}&api-key=
        Yaqc7SKeOgyp85ZXTGrTjNdGoKG85vjK`)
        .then((response) => {
            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            return response.json();
          })
          .then((actualData) => console.log(actualData))
          .catch((err) => {
            console.log(err.message);
          });

}

const getAllData = (data) => {
    const result = Promise.all([fetchAllData(data)])
      .then(responses => {
        return responses
      })
      return result;
    };
   
  export { getAllData }
  


