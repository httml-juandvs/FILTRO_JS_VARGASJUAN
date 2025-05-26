class foodHeader extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
  
      shadow.innerHTML = `
        <style>
          :root {
          --border-color: #444;
          --accent-color: #e10600;
          --bg-color: #000000;
          --text-color: #ffffff;
        }

        header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          position: sticky;
          top: 0;
          z-index: 100;
          flex-wrap: wrap;
        }

        .logo {
          height: 40px;
          margin: 0 1rem;
        }

        nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.5rem;
          
        }

        nav a {
          padding: 0.5rem;
          text-decoration: none;
          color: var(--text-color);
          font-size: 2rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          white-space: nowrap;
        }

        nav a:hover {
          color: var(--accent-color);
        }

        @media screen and (min-width: 576px) {
          nav {
            justify-content: flex-end;
          }
        }

        @media screen and (min-width: 768px) {
          header {
            padding: 1.5rem;
            justify-content: flex-start;
          }

          .logo {
            height: 35px;
          }

          nav {
            margin-left: auto;
            gap: 1rem;
          }

          nav a {
            font-size: 2.5rem;
          }
        }

        @media screen and (min-width: 1200px) {
          header {
            padding: 2rem;
          }

          .logo {
            height: 40px;
            margin-left: 2rem;
          }

          nav {
            margin-left: 4rem;
          }
        }

        @media screen and (min-width: 2560px) {
          header {
            padding: 3rem;
          }

          .logo {
            height: 60px;
          }

          nav a {
            font-size: 3rem;
            margin: 0 1.5rem;
          }
        }

        @media screen and (min-width: 3840px) {
          header {
            padding: 4rem;
          }

          .logo {
            height: 80px;
          }

          nav a {
            font-size: 3.5rem;
            margin: 0 2rem;
          }
        }
        </style>
        <header>
          <a href="./index.html"><img src="https://www.themealdb.com/images/icons/favicon/apple-touch-icon.png" alt="F1 Logo" class="logo" /></a>
          <nav>
            <a href="./circuits.html">Recetas Populares</a>
            <a href="./abc.html">A-Z</a>
            <a href="./fav.html">Favoritas</a>
            

          </nav>
        </header>
      `;
    }
  }
  
  customElements.define('f-header', foodHeader);
  