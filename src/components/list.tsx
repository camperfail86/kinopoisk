import React from 'react';
import {Movie} from "./info-movie";
import PaginationRounded from "./pagination-root";

export type ListType = {
  movies: Movie[] | any
  total: number
  pageIndex: number
  onChangeIndex: (num: number) => void
  onClickInfoMovie: (id: number)=> void
}

export const List = (props: ListType) => {
  return (
    <div>
      <span className={'main__title'}>Лучшие фильмы</span>
      <PaginationRounded  onChangeIndex={props.onChangeIndex} pageIndex={props.pageIndex} total={props.total}></PaginationRounded>
      <ul className={'main__list'}>{props.movies?.map((m: Movie)=>{
        return (
        <li className={'main__item'} key={m.filmId}>
          <img onClick={()=>props.onClickInfoMovie(m.filmId)} className={'main__image'} width={240} height={360} src={m.posterUrlPreview} alt="Постер."/>
          <div className={'main__description'}>
            <span className={'main__average'}>{(+m.rating).toFixed(2)}</span>
            <div className={'main__date'}>
              <span>{m.nameRu}</span>
              <span>{m.releaseDate}</span>
            </div>
          </div>
        </li>)
      })}</ul>
    </div>
  );
};

