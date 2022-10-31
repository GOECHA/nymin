const fetchAllData = (data) => {
    return fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${data}&api-key=
    Yaqc7SKeOgyp85ZXTGrTjNdGoKG85vjK`)
    .then(data => console.log({data}))
    .catch(err => console.error(err))
}

const getAllData = (data) => {
    const result = Promise.all([fetchAllData(data)])
      .then(responses => {
        return responses
      })
      return result;
    };
   
  export { getAllData }
  


  