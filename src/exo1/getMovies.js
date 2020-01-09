import axios from 'axios'

const loadMovies = () => {
  const apikey = 'b502738f';
  return axios.get('http://www.omdbapi.com', {
      params: {
        apikey: apikey,
        s: 'harry potter'
      }
    }
  );
}

const getMovies = async() => {
  await loadMovies()
    .then(res =>  {
      const resMovies = res.data.Search;
      const filteredMovies = resMovies.filter(x => x.Year > 2002)
      console.log('Exo 1) Listes de films après 2002 :', filteredMovies)
    });
}

export default getMovies()
