const Header = () => {
  return (
    <div>
      <div className="nav">
        <div className="logo">
          <p>
            maker<span className="sss">s</span>
          </p>
          <span className="dok">Documentation</span>
        </div>
        <div className="menu">
          <ul className="menu_two">
            <li>
              <a href="./home.html">Глaвная</a>
            </li>
            <li>
              <a href="./Documentation.html">Документация</a>
            </li>
            <li>
              <a href="#">Добавить</a>
            </li>
          </ul>
        </div>
        <div className="input">
          <input className="searchText" type="text" placeholder="поиск" />
        </div>

        <div className="nav_git">
          <a href="https://github.com/">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
