const API_KEY = "016a00577cffe99a01d6b99e5ec80224";

const requests = {
  fetchTrending: '/trending/all/week?api_key=016a00577cffe99a01d6b99e5ec80224&language=en-US',
  fetchNetflixOriginals: '/discover/tv?api_key=016a00577cffe99a01d6b99e5ec80224&with_networks=213',
  fetchTopRated: '/movie/top_rated?api_key=016a00577cffe99a01d6b99e5ec80224&language=en-US',
  fetchActionMovies: '/discover/movie?api_key=016a00577cffe99a01d6b99e5ec80224&with_genres=28',
  fetchComedyMovies: '/discover/movie?api_key=016a00577cffe99a01d6b99e5ec80224&with_genres=35',
  fetchHorrorMovies: '/discover/movie?api_key=016a00577cffe99a01d6b99e5ec80224&with_genres=27',
  fetchRomanceMovies: '/discover/movie?api_key=016a00577cffe99a01d6b99e5ec80224&with_genres=10749',
  fetchDocumentaries: '/discover/movie?api_key=016a00577cffe99a01d6b99e5ec80224&with_genres=99',
}

export default requests;