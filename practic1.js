const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", " ");

const answerLastFilm1 = prompt('Один из последних просмотренных фильмов?', ' '),
      gradeFilms1 = prompt('На сколько щцените его?',''),
      answerLastFilm2 = prompt('Один из последних просмотренных фильмов?', ' '),
      gradeFilms2 = prompt('На сколько щцените его?','');


const personalMovieDB= {

    count : numberOfFilms,
    movies : { 
        
        answerLastFilm1: gradeFilms1,
        answerLastFilm2: gradeFilms2

    },
    actors: {},
    genress: [],
    privat: false
};

// personalMovieDB.movies[answerLastFilm1]=gradeFilms1;
// personalMovieDB.movies[answerLastFilm2]=gradeFilms2;

console.log(personalMovieDB);
