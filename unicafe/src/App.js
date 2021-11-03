import React, { useState } from "react";

const Display = ({ heading, text, value }) => {
  return (
    <div>
      <h1> {heading}</h1>
      <p>
        {text} {value}
      </p>
    </div>
  );
};

const Buttons = ({ eventHandler, text }) => {
  // console.log(eventHandler, text);
  return (
    <div>
      <button onClick={eventHandler}> {text}</button>
    </div>
  );
};

const Statistics = ({ feedback }) => {
  let good = feedback.good;
  let neutral = feedback.neutral;
  let bad = feedback.bad;
  let total = good + neutral + bad;

  if (total === 0) {
    return <h4> There is no feedback</h4>;
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text="Good: " value={good} />
          <StatisticsLine text="Neutral: " value={neutral} />
          <StatisticsLine text="Bad: " value={bad} />
          <StatisticsLine text="All: " value={total} />
          <StatisticsLine text="average" value={(good - bad) / total} />
          <StatisticsLine text="Positive %: " value={(good / total) * 100} />
        </tbody>
      </table>
    </div>
  );
};

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td> {text}</td>
      <td> {value}</td>
    </tr>
  );
};

// const StatisticsLine = ({ text, feedback }) => {
//   let good = feedback.good;
//   let neutral = feedback.neutral;
//   let bad = feedback.bad;
//   let total = good + neutral + bad;

//   if (total === 0) {
//     return <p> No feedback given</p>;
//   }
//   if (text === "All: ") {
//     return (
//       <p>
//         {text} {total}
//       </p>
//     );
//   } else if (text === "Average: ") {
//     return (
//       <p>
//         {text} {((good - bad) / total).toFixed(2)}
//       </p>
//     );
//   } else if (text === "Positive %: ") {
//     return (
//       <p>
//         {text} {((good / total) * 100).toFixed(2)}
//       </p>
//     );
//   } else if (text === "Good: ") {
//     return (
//       <p>
//         {" "}
//         {text} {good}
//       </p>
//     );
//   } else if (text === "Neutral: ") {
//     return (
//       <p>
//         {" "}
//         {text} {neutral}
//       </p>
//     );
//   } else if (text === "Bad: ") {
//     return (
//       <p>
//         {" "}
//         {text} {bad}
//       </p>
//     );
//   }
// };

const App = () => {
  let [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const goodClickHandler = () => {
    setFeedback({ ...feedback, good: feedback.good + 1 });
  };

  const neutralClickHandler = () => {
    setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
  };

  const badClickHandler = () => {
    setFeedback({ ...feedback, bad: feedback.bad + 1 });
  };

  return (
    <div>
      <Display heading="Give Feedback" />

      <Buttons eventHandler={goodClickHandler} text="good" />
      <Buttons eventHandler={neutralClickHandler} text="neutral" />
      <Buttons eventHandler={badClickHandler} text="bad" />

      <Display heading="Statistics" />

      {/* <StatisticsLine text="Good: " feedback={feedback} />
      <StatisticsLine text="Neutral: " feedback={feedback} />
      <StatisticsLine text="Bad: " feedback={feedback} />
      <StatisticsLine text="All: " feedback={feedback} />
      <StatisticsLine text="Average: " feedback={feedback} />
      <StatisticsLine text="Positive %: " feedback={feedback} /> */}

      <Statistics feedback={feedback} />
    </div>
  );
};

export default App;
