import * as React from "react"
import "./header.css"

const Header = () => (
  <header className="header">
    <div className="header__container">
      <h2 className="header__container--title title-1">Бизнес-шоу:</h2>
      <h2 className="header__container--title title-2">Маркетинг <span>vs</span> продажи</h2>
    </div>
  </header>
)

export default Header
