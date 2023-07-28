let api = 'http://www.omdbapi.com/?i=tt3896198&apikey=b93f9488&t';
 fetch(api).then((response)=>{
    return response.json()
}).then((movieData)=>{
    console.log(movieData)
})
let title = document.getElementById('title');
let date = document.getElementById('date');
let actors = document.getElementById('actors');
let director = document.getElementById('director');
function searchMovie(){
    let movieName = document.getElementById('movieName');
    let query = api + movieName.value;
    fetch(query).then((response)=>{
        return response.json()
    }).then((movieData)=>{
        console.log(movieData)
        title.innerText = movieData.Title;
        actors.innerText=movieData.Actors;
        genre.innerText = movieData.Genre;
        date.innerText = movieData.Released;
        director.innerText = movieData.Director;
        poster.src = movieData.Poster;

    })
}