import * as React from "react"

import ya from "../images/ya.svg"
import sp from "../images/sptf.svg"
import cast from "../images/cast.svg"
import vk from "../images/vk.svg"
import yt from "../images/yt.svg"

import woman from "../images/woman.png"
import man from "../images/man.png"
import man_2 from "../images/man2.png"
import vid from "../images/video.png"

import "./intro.css"

export default function Intro() {
  return (
    <section className="intro">
      <ul className="intro__list">
        <li className="intro__list--item list-item">
          <ul className="list-item__list second-list">
            <li className="second-list__item">
              <p className="second-list__item--info">
                Бизнес-шоу, в котором общаемся с экспертами digital-маркетинга и
                руководителями продаж о&nbsp;том, как совместно достигать потрясающих
                результатов.
              </p>
              <a className="second-list__item--button"> Подписаться </a>
            </li>
            <li className="second-list__item list-social">
              <span className="list-social--title">
                Слушайте нас, где удобно
              </span>
              <ul className="list-social__list">
                <li className="list-social--item">
                  <img src={ya} alt="yandex music" />
                </li>
                <li className="list-social--item">
                  <img src={sp} alt="spotify" />
                </li>
                <li className="list-social--item">
                  <img src={cast} alt="podcast" />
                </li>
                <li className="list-social--item">
                  <img src={vk} alt="vk" />
                </li>
                <li className="list-social--item">
                  <img src={yt} alt="youtube" />
                </li>
                <li className="list-social--item">
                  <img
                    className="list-social-photo"
                    width="232"
                    src={woman}
                    alt="woman"
                  />
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="intro__list--item list-item">
          <p className="list-item--name">
            Дима Сергеев <span>CEO Carrot quest </span>
          </p>
          <img
            className="list-item--photo-2"
            src={man}
            width="232"
            alt="Дима Сергеев"
          />
        </li>

        <ul className="intro__list--item right-list">
          <li className="right-list--item">
            <img className="right-list--item__img" src={man_2} alt="man" />
          </li>

          <li className="right-list--item">
            <span className="right-list--item__info">новый выпуск</span>
            <a href="#video">
              <img
                className="right-list--item__video"
                src={vid}
                width="418"
                alt="video"
              />
            </a>
          </li>
        </ul>
      </ul>
    </section>
  )
}
