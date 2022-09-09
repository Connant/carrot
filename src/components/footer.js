import * as React from "react"

import fb from "../images/fb.svg"
import tlgm from "../images/tlgm.svg"
import vk_c from "../images/vk-c.svg"
import inst from "../images/inst.svg"
import yt_c from "../images/yt-c.svg"

import part_star from "../images/part_star.svg"
import part_star2 from "../images/part_star_pink.svg"
import heart from "../images/heart.svg"

import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__social-media">
        <p className="footer__title">Слушайте и читайте, где удобно</p>
        <img className="footer__heart" src={heart} alt="heart" />
        <ul className="footer__social-media--list footer-list">
          <li className="footer-list__item">
            <a href="#">
              <img src={tlgm} alt="telegram" className="footer__icon" />
            </a>
          </li>
          <li className="footer-list__item">
            <a href="#">
              <img src={fb} alt="facebook" className="footer__icon" />
            </a>
          </li>
          <li className="footer-list__item">
            <a href="#">
              <img src={vk_c} alt="vkontakte" className="footer__icon" />
            </a>
          </li>
          <li className="footer-list__item">
            <a href="#">
              <img src={yt_c} alt="youtube" className="footer__icon" />
            </a>
          </li>
          <li className="footer-list__item">
            <a href="#">
              <img src={inst} alt="instagram"  className="footer__icon" />
            </a>
          </li>
        </ul>
      </section>
      <section className="footer__subscribe">
        <img src={part_star} alt="star white" className="footer__star" />
        <div className="footer__container">
          <p className="footer__subtitle">
            Подпишитесь на уведомления о выходе новых материалов
          </p>

          <div className="footer__form">
            <input
              type="email"
              className="footer__input"
              placeholder="Введите ваш e-mail"
            />
            <button type="submit" className="btn me-2 footer__btn">
              Подписаться
            </button>
          </div>
        </div>
        <img src={part_star2} alt="star white" className="footer__star" />
      </section>
    </footer>
  )
}

export default Footer
