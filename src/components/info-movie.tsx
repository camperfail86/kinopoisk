import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

export interface Movie {
  filmId: number
  nameRu: string
  nameEn: any
  year: number
  posterUrl: string
  posterUrlPreview: string
  countries: Country[]
  genres: Genre[]
  rating: number
  ratingVoteCount: number
  expectationsRating: number
  expectationsRatingVoteCount: number
  duration: number
  releaseDate: string
}

export interface Country {
  country: string
}

export interface Genre {
  genre: string
}

export interface Info {
  kinopoiskId: number
  kinopoiskHDId: string
  imdbId: any
  nameRu: string
  nameEn: any
  nameOriginal: any
  posterUrl: string
  posterUrlPreview: string
  coverUrl: string
  logoUrl: any
  reviewsCount: number
  ratingGoodReview: number
  ratingGoodReviewVoteCount: number
  ratingKinopoisk: number
  ratingKinopoiskVoteCount: number
  ratingImdb: any
  ratingImdbVoteCount: number
  ratingFilmCritics: any
  ratingFilmCriticsVoteCount: number
  ratingAwait: number
  ratingAwaitCount: number
  ratingRfCritics: number
  ratingRfCriticsVoteCount: number
  webUrl: string
  year: number
  filmLength: number
  slogan: any
  description: string
  shortDescription: string
  editorAnnotation: any
  isTicketsAvailable: boolean
  productionStatus: any
  type: string
  ratingMpaa: any
  ratingAgeLimits: string
  countries: Country[]
  genres: Genre[]
  startYear: any
  endYear: any
  serial: boolean
  shortFilm: boolean
  completed: boolean
  hasImax: boolean
  has3D: boolean
  lastSync: string
}

export type InfoMovieType = {
  movieInfo: Info
  onClickInfoMovie: (id: number)=> void
}

export const InfoMovie = ({movieInfo, onClickInfoMovie}: InfoMovieType) => {
  const [movies, setMovies] = useState([])
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars`, {
      method: 'GET',
      headers: {
        'X-API-KEY': '51950dc9-27bd-43cb-839a-2bed35fff2d1',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(json => {
         setMovies(json.items.splice(0,5))
      })
      .catch(err => console.log(err))
  }, [id]);

  return (
    <>
      <div className='info'>
        <div>
          <h2 className='info__name'>{movieInfo.nameRu}</h2>
          <p className='info__description'>{movieInfo.description} {movieInfo.shortDescription}</p>
          <span className='info__date'>Дата выхода: <br/>{'' + new Date(movieInfo.lastSync).toLocaleString()}</span>
        </div>
        <img className='info__image' src={movieInfo.posterUrl} width={400} height={600} alt="Постер."/>
      </div>
      <div>
        <h3>Похожие фильмы</h3>
        <ul className={'info__list'}>{movies.map((m: Movie) => {
          return (
            <li className={'info__item'} key={m.filmId}>
              <img onClick={() => onClickInfoMovie(m.filmId)} className={'info__item-image'} width={240} height={360} src={m.posterUrlPreview} alt="Постер."/>
              <span className='info__item-text'>{m.nameRu}</span>
            </li>)
        })}
        </ul>
      </div>
    </>
  );
};

