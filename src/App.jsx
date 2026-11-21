import scores from "../data.json";

function ResultPanel() {
  return (
    <section className="result-panel">
      <h1 className="result-panel__title">Your Result</h1>
      <p className="result-panel__score">
        <span className="result-panel__your">76</span><span className="result-panel__total"> of 100</span>
      </p>
      <div className="stack">
        <p className="result-panel__grade">Great</p>
        <p className="result-panel__description">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </section>
  );
}

function SummaryPanel() {
  return (
    <section className="summary-panel">
      <h2 className="summary-panel__title">Summary</h2>
      <ul className="summary-panel__list">
        {scores.map((item) => {
          return (
            <li key={item.category}>
              <SummaryItem
                category={item.category}
                icon={item.icon}
                score={item.score}
              />
            </li>
          );
        })}
      </ul>
      <button className="summary-panel__button">Continue</button>
    </section>
  );
}

function SummaryItem({ category, icon, score }) {
  let bgColor = null;
  let fontColor = null;

  if (category === "Reaction") {
    bgColor = "--color-red-50";
    fontColor = "--color-red-400";
  } else if (category === "Memory") {
    bgColor = "--color-yellow-50";
    fontColor = "--color-yellow-400";
  } else if (category === "Verbal") {
    bgColor = "--color-green-50";
    fontColor = "--color-green-400";
  } else if (category === "Visual") {
    bgColor = "--color-blue-50";
    fontColor = "--color-blue-800";
  }

  return (
    <div
      className="summary-item"
      style={{
        "--box-color": `var(${bgColor})`,
        "--font-color": `var(${fontColor})`,
      }}
    >
      <img
        className="summary-item__icon"
        src={icon}
        alt=""
      />
      <div className="summary-item__category">{category}</div>
      <div className="summary-item__score">
        <span className="summary-item__value">{score}</span><span className="summary-item__total"> / 100</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <main className="c-main">
        <ResultPanel />
        <SummaryPanel />
      </main>

      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="https://www.frontendmentor.io/profile/jonghwascript">jonghwascript</a>
      </footer>
    </>
  );
}
