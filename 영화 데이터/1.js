// TMDB API
const options = { //request자의 옵션을 쓰는 것
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDUxYzQzN2E2YmUxYzExNTkwMWJjZjhlNDRjZTAzMyIsInN1YiI6IjY1MmYzYjgwMGNiMzM1MTZmZDRiODE1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o6SNT2Vu2ngYljvJr37-sa7jrw_jDKEBIWlv3tWJt30'
    } // 정보를 암호화해서 알려주는 것
};
const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

//data 가공
fetch(url, options)
    .then(res => res.json())
    .then(res => {
        const movieList = res.results;

        // 엄마 노드 선택
        // why? 밑에서 innerhtml로 문자열이 담긴 card를 세션에 넣어야 함.
        const cardList = document.querySelector('.cardlist');

        //빈문자열 만든 이유: temp_html과 합쳐서 문자열로 card에 데이터를 누적시키기 위해서.
        let card = "";

        //하나씩 담아줌
        movieList.forEach(movie => {
            const title = movie.title; //20개의 title이 들어감  movie.title === movie['title'] 전자는 정적, 후자는 동적
            const overview = movie.overview;
            const rating = movie.vote_average;
            const imgPath = movie.poster_path;
            const idValue = movie.id;

            const temp_html = `<div onclick="showAlert(${idValue})" class="card" id="content">
            <img src="https://image.tmdb.org/t/p/w500${imgPath}" alt="The Godfather">
            <h3 id="title" class="title">${title}</h3>
            <p id="overview">${overview}</p>
            <p id="rating">평점:${rating}</p>
            </div>`
            // 20개가 들어있는 변수들을 문자열로 변경한 다음 temp_html로 넣음
            card = card + temp_html;
        });
        cardList.innerHTML = card;
    }) //여기까지가 초기 화면 세팅
// alert//
function showAlert(id) {
    alert(`영화의 id:${id}`);
}


/** 검색기능 시작 */

// 데이터 다시 가져옴
fetch(url, options)
    .then(res => res.json())
    .then(res => {
        movieList = res.results;
    });

const searchButton = document.getElementById("searchButton"); // 서치버튼을 부를 때마다 코드를 써야 하까 전역변수로 담아버림.
const movieNameInput = document.getElementById("movieName"); //인풋에 입력된 값
const refreshButton = document.getElementById("refreshButton"); // 새로고침 버튼 불러오기
const cardList = document.querySelector('.cardlist'); //해당 클래스안에 부모노드(card)를 선택함. 

searchButton.addEventListener("click", () => {
    //검색버튼 누르면 영화 검색하는 함수 실행
    searchMovie();
});

refreshButton.addEventListener("click", () => {
    // 새로고침 버튼을 클릭하면 초기 영화 목록으로 돌아감
    location.reload();
});

movieNameInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        searchMovie();
    }
});


/**입력값을 바탕으로 영화 데이터에서 일치하는 값을 찾아주는 함수*/
let searchMovie = () => {
    const movieName = movieNameInput.value;  

    let searchResults = movieList.filter(function (movie) {
        return movie.title.toLowerCase().includes(movieName.toLowerCase());
    })
   //moviename이 movie.title에 포함되면 그 movie를 리턴해.
    displaySearchResults(searchResults);
}

//검색결과를 화면에 보여주는 함수
function displaySearchResults(results) {
    cardList.innerHTML = "";

    if (results.length === 0) { //배열의 길이가 0이라면 ==> 영화데이터가 없다는 말.
        alert("검색 결과가 없습니다.");
        location.reload();
    } else { //영화 데이터가 담긴 배열이 있다면
        results.forEach(movie => { //그 배열에서 제목, 줄거리 등을 뽑아서 각 변수에 담음.
            const title = movie.title;
            const overview = movie.overview;
            const rating = movie.vote_average;
            const imgPath = movie.poster_path;
            const idValue = movie.id;

            const temp_html = `<div onclick="showAlert(${idValue})" class="card" id="content">
                <img src="https://image.tmdb.org/t/p/w500${imgPath}" alt="${title}">
                <h3 id="title" class="title">${title}</h3>
                <p id="overview">${overview}</p>
                <p id="rating">평점:${rating}</p>
            </div>`;

            cardList.innerHTML += temp_html;
        });
    }
}





