import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./components/header";
import {Route, Routes, useNavigate} from "react-router-dom";
import {List} from "./components/list";
import {Info, InfoMovie} from "./components/info-movie";

function App() {
  const [pageIndex, setPageIndex] = useState(1)
  const [data, setData] = useState({releases: [
    {
      "filmId": 5100371,
      "nameRu": "Оливье и роботы",
      "nameEn": null,
      "year": 2022,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5100371.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5100371.jpg",
      "countries": [
        {
          "country": "Россия"
        }
      ],
      "genres": [
        {
          "genre": "комедия"
        },
        {
          "genre": "фантастика"
        }
      ],
      "rating": 7.245,
      "ratingVoteCount": 23324,
      "expectationsRating": 93.85,
      "expectationsRatingVoteCount": 261,
      "duration": 0,
      "releaseDate": "2023-01-01"
    },
      {
        "filmId": 4771048,
        "nameRu": "Гром: Трудное детство",
        "nameEn": null,
        "year": 2023,
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4771048.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4771048.jpg",
        "countries": [
          {
            "country": "Россия"
          }
        ],
        "genres": [
          {
            "genre": "приключения"
          },
          {
            "genre": "боевик"
          }
        ],
        "rating": 7.07,
        "ratingVoteCount": 228602,
        "expectationsRating": 97.41,
        "expectationsRatingVoteCount": 27468,
        "duration": 84,
        "releaseDate": "2023-01-01"
      },
      {
        "filmId": 5235970,
        "nameRu": "Пол Т. Голдман",
        "nameEn": "Paul T. Goldman",
        "year": 2023,
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5235970.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5235970.jpg",
        "countries": [
          {
            "country": "США"
          }
        ],
        "genres": [
          {
            "genre": "документальный"
          },
          {
            "genre": "драма"
          },
          {
            "genre": "комедия"
          }
        ],
        "rating": null,
        "ratingVoteCount": 41,
        "expectationsRating": null,
        "expectationsRatingVoteCount": 2,
        "duration": 34,
        "releaseDate": "2023-01-01"
      },
      {
        "filmId": 1008558,
        "nameRu": "Дом вне времени",
        "nameEn": "Siganwiui jip",
        "year": 2017,
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/1008558.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1008558.jpg",
        "countries": [
          {
            "country": "Корея Южная"
          }
        ],
        "genres": [
          {
            "genre": "детектив"
          },
          {
            "genre": "фэнтези"
          },
          {
            "genre": "драма"
          }
        ],
        "rating": 6.702,
        "ratingVoteCount": 1561,
        "expectationsRating": null,
        "expectationsRatingVoteCount": 22,
        "duration": 100,
        "releaseDate": "2023-01-01"
      },
      {
        "filmId": 5047298,
        "nameRu": "Слон",
        "nameEn": null,
        "year": 2022,
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5047298.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5047298.jpg",
        "countries": [
          {
            "country": "Россия"
          }
        ],
        "genres": [
          {
            "genre": "триллер"
          },
          {
            "genre": "драма"
          }
        ],
        "rating": 6.644,
        "ratingVoteCount": 10597,
        "expectationsRating": 89.72,
        "expectationsRatingVoteCount": 1064,
        "duration": 87,
        "releaseDate": "2023-01-01"
      },
      {
        "filmId": 4630575,
        "nameRu": "Калейдоскоп",
        "nameEn": "Kaleidoscope",
        "year": 2023,
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4630575.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4630575.jpg",
        "countries": [
          {
            "country": "США"
          }
        ],
        "genres": [
          {
            "genre": "боевик"
          },
          {
            "genre": "триллер"
          },
          {
            "genre": "драма"
          },
          {
            "genre": "криминал"
          }
        ],
        "rating": 6.426,
        "ratingVoteCount": 4124,
        "expectationsRating": 97.9,
        "expectationsRatingVoteCount": 233,
        "duration": 41,
        "releaseDate": "2023-01-01"
      },
      {
        "filmId": 4749278,
        "nameRu": "Верь, люби, благодари",
        "nameEn": "Song & Story: Amazing Grace",
        "year": 2021,
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4749278.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4749278.jpg",
        "countries": [
          {
            "country": "США"
          }
        ],
        "genres": [
          {
            "genre": "мелодрама"
          }
        ],
        "rating": 6.42,
        "ratingVoteCount": 684,
        "expectationsRating": null,
        "expectationsRatingVoteCount": 0,
        "duration": 79,
        "releaseDate": "2023-01-01"
      },
      {
        "filmId": 4715527,
        "nameRu": "",
        "nameEn": "Olhar Indiscreto",
        "year": 2023,
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4715527.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4715527.jpg",
        "countries": [
          {
            "country": "Бразилия"
          }
        ],
        "genres": [
          {
            "genre": "триллер"
          },
          {
            "genre": "драма"
          },
          {
            "genre": "детектив"
          }
        ],
        "rating": 5.75,
        "ratingVoteCount": 946,
        "expectationsRating": null,
        "expectationsRatingVoteCount": 4,
        "duration": 38,
        "releaseDate": "2023-01-01"
      },
      {
        "filmId": 4489821,
        "nameRu": "Призрачная дверь",
        "nameEn": "Gwimun",
        "year": 2021,
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4489821.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4489821.jpg",
        "countries": [
          {
            "country": "Корея Южная"
          }
        ],
        "genres": [
          {
            "genre": "ужасы"
          }
        ],
        "rating": 5.613,
        "ratingVoteCount": 1340,
        "expectationsRating": null,
        "expectationsRatingVoteCount": 7,
        "duration": 85,
        "releaseDate": "2023-01-01"
      },
      {
        "filmId": 1392734,
        "nameRu": "На тебе сошёлся клином белый свет",
        "nameEn": null,
        "year": 2021,
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/1392734.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1392734.jpg",
        "countries": [
          {
            "country": "Россия"
          }
        ],
        "genres": [
          {
            "genre": "драма"
          }
        ],
        "rating": 5.158,
        "ratingVoteCount": 2508,
        "expectationsRating": 95.95,
        "expectationsRatingVoteCount": 2646,
        "duration": 91,
        "releaseDate": "2023-01-01"
      }
    ], total: 25, page: 1})
  const [movieInfo, setMovieInfo] = useState<Info>({
    "kinopoiskId": 0,
    "kinopoiskHDId": '',
    "imdbId": null,
    "nameRu": '',
    "nameEn": null,
    "nameOriginal": null,
    "posterUrl": '',
    "posterUrlPreview": '',
    "coverUrl": '',
    "logoUrl": null,
    "reviewsCount": 5,
    "ratingGoodReview": 50,
    "ratingGoodReviewVoteCount": 2,
    "ratingKinopoisk": 5.2,
    "ratingKinopoiskVoteCount": 2507,
    "ratingImdb": null,
    "ratingImdbVoteCount": 0,
    "ratingFilmCritics": null,
    "ratingFilmCriticsVoteCount": 0,
    "ratingAwait": 96,
    "ratingAwaitCount": 2646,
    "ratingRfCritics": 78,
    "ratingRfCriticsVoteCount": 9,
    "webUrl": '',
    "year": 2021,
    "filmLength": 91,
    "slogan": null,
    "description": '',
    "shortDescription": '',
    "editorAnnotation": null,
    "isTicketsAvailable": false,
    "productionStatus": null,
    "type": '',
    "ratingMpaa": null,
    "ratingAgeLimits": '',
    "countries": [
      {
        "country": "Россия"
      }
    ],
    "genres": [
      {
        "genre": "драма"
      }
    ],
    "startYear": null,
    "endYear": null,
    "serial": false,
    "shortFilm": false,
    "completed": false,
    "hasImax": false,
    "has3D": false,
    "lastSync": ''
  })

  useEffect(()=> {
    fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/releases?year=2023&month=JANUARY&page=${pageIndex}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': '51950dc9-27bd-43cb-839a-2bed35fff2d1',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.log(err))
  }, [pageIndex])

  const onChangeIndex = (num: number) => {
    setPageIndex(num)
  }
  const navigate = useNavigate();
  const onClickInfoMovie = (id: number) => {
    navigate(`/movie/${id}`)
    fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': '51950dc9-27bd-43cb-839a-2bed35fff2d1',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(json => {
         setMovieInfo(json)
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <Header/>
      <main className="main">
        <Routes>
          <Route element={<List onClickInfoMovie={onClickInfoMovie} onChangeIndex={onChangeIndex} pageIndex={pageIndex} total={data.total} movies={data.releases}/>} path={'/'}></Route>
          <Route element={<InfoMovie onClickInfoMovie={onClickInfoMovie} movieInfo={movieInfo} />} path={'/movie/:id'}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
