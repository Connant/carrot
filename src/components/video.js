import * as React from "react"

import "./video.css"

import circles from "../images/circles.png"

import fb from "../images/fb.svg"
import tlgm from "../images/tlgm.svg"
import vk_c from "../images/vk-c.svg"
import inst from "../images/inst.svg"

const videoLink = "https://www.youtube.com/embed/2c6LbMLsRiM"

const VideoSection = () => (
  <section className="video">
    <div className="video--info">
      <h4 className="section__title">Выпуски</h4>
      <p className="section__subtitle">
        Подкаст, в котором обсуждаем, как прекратить войну маркетинга и продаж.
        Смотрите интервью с экспертами digital-маркетинга и руководителями
        продаж. Рассказываем реальные истории и практики работы этих двух
        направлений.
      </p>
      <div className="section__users-content">
        <img src={circles} alt="icon" className="section__icon" />
        <p className="section__subtitle section__users-text">
          Для SMO, руководителей Digital-маркетинга, ответственного за
          привлечения лидов
        </p>
      </div>
    </div>

    <div className="section__video-container">
      <div className="section__content">
        <iframe
          id="video"
          className="section__video"
          src={videoLink}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="d-flex justify-content-between">
          <div className="section__soc-med-container">
            <p className="section__social-media-title">Поделиться:</p>
            <div className="section__social-media">
              <a
                href="#"
                target="_blank"
                className="section__social-media-icon"
              >
                <img src={tlgm} alt="telegram" className="section__img" />
              </a>
              <a
                href="#"
                target="_blank"
                className="section__social-media-icon"
              >
                <img src={fb} alt="facebook" className="section__img" />
              </a>
              <a
                href="#"
                target="_blank"
                className="section__social-media-icon"
              >
                <img src={vk_c} alt="vkontakte" className="section__img" />
              </a>
              <a
                href="#"
                target="_blank"
                className="section__social-media-icon"
              >
                <img src={inst} alt="instagram" className="section__img" />
              </a>
            </div>
          </div>
          <p className="section__social-media-title">23 минуты</p>
        </div>
      </div>
      <div className="section__menu">
        <ul className="section__wrap">
          <li className="section__item">
            <p className="section__item-number">12</p>
            <iframe
              className="section__item-video"
              src={videoLink}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <p className="section__item-text">
              Как построить эффективный отдел продаж
            </p>
          </li>
          <li className="section__item">
            <p className="section__item-number">11</p>
            <iframe
              className="section__item-video"
              src={videoLink}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <p className="section__item-text">
              Как построить эффективный отдел продаж
            </p>
          </li>
          <li className="section__item">
            <p className="section__item-number">10</p>
            <iframe
              className="section__item-video"
              src={videoLink}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <p className="section__item-text">
              Как построить эффективный отдел продаж
            </p>
          </li>
          <li className="section__item">
            <p className="section__item-number">9</p>
            <iframe
              className="section__item-video"
              src={videoLink}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <p className="section__item-text">
              Как построить эффективный отдел продаж
            </p>
          </li>
          <li className="section__item">
            <p className="section__item-number">8</p>
            <iframe
              className="section__item-video"
              src={videoLink}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <p className="section__item-text">
              Как построить эффективный отдел продаж
            </p>
          </li>
          <li className="section__item">
            <p className="section__item-number">7</p>
            <iframe
              className="section__item-video"
              src={videoLink}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <p className="section__item-text">
              Как построить эффективный отдел продаж
            </p>
          </li>
          <li className="section__item">
            <p className="section__item-number">6</p>
            <iframe
              className="section__item-video"
              src={videoLink}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <p className="section__item-text">
              Как построить эффективный отдел продаж
            </p>
          </li>
          <li className="section__item">
            <p className="section__item-number">5</p>
            <iframe
              className="section__item-video"
              src={videoLink}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <p className="section__item-text">
              Как построить эффективный отдел продаж
            </p>
          </li>
          <li className="section__item">
            <p className="section__item-number">4</p>
            <iframe
              className="section__item-video"
              src={videoLink}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <p className="section__item-text">
              Как построить эффективный отдел продаж
            </p>
          </li>
          <li className="section__item">
            <p className="section__item-number">3</p>
            <iframe
              className="section__item-video"
              src={videoLink}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <p className="section__item-text">
              Как построить эффективный отдел продаж
            </p>
          </li>
          <li className="section__item">
            <p className="section__item-number">2</p>
            <iframe
              className="section__item-video"
              src={videoLink}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <p className="section__item-text">
              Как построить эффективный отдел продаж
            </p>
          </li>
          <li className="section__item">
            <p className="section__item-number">1</p>
            <iframe
              className="section__item-video"
              src={videoLink}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <p className="section__item-text">
              Как построить эффективный отдел продаж
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default VideoSection
