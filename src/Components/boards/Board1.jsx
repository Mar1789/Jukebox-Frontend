import Clock from "../core/Clock";
import ScrollQueue from "../core/ScrollQueue/ScrollQueue";
import "./Board1.css";

function Board1() {
  return (
    <div>
      <header>
        <h1 className="center">Jukebox</h1>
      </header>
      <body>
        <div>
          <div className="clock">
            <div className="clock-digit">
              <Clock />
            </div>
          </div>
          <ScrollQueue />
          <div className="Inputs">
        <form>
          <label>Enter primary color:
            <input type="text" />
          </label>
        </form>
        <form>
          <label>Enter secondary color:
            <input type="text" />
          </label>
        </form>
        <form>
          <label>Enter digit color:
            <input type="text" />
          </label>
        </form>
      </div>
        </div>
      </body>
    </div>
  );
}

export default Board1;
