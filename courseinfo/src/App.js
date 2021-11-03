import React from "react";

const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

const Part = (props) => {
  console.log(props);
  return (
    <p>
      {props.course_name} {props.num_exercises}
    </p>
  );
};

const Content = (props) => {
  // console.log(props);
  return (
    <div>
      <Part
        course_name={props.parts[0].name}
        num_exercises={props.parts[0].exercises}
      />
      <Part
        course_name={props.parts[1].name}
        num_exercises={props.parts[1].exercises}
      />
      <Part
        course_name={props.parts[2].name}
        num_exercises={props.parts[2].exercises}
      />
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises:
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;

//! Below is the practice code

// import React, { useState } from "react";

// const Display = (props) => {
//   return <div> {props.counter} </div>;
// };

// const Button = (props) => {
//   return <button onClick={props.method}> {props.title} </button>;
// };

// const App = () => {
//   let [counter, setCounter] = useState(0);
//   // setTimeout(() => setCounter(counter + 1), 1000);
//   // console.log("rendering...", counter);

//   // const handleCLick = () => console.log("click");
//   const increaseByOne = () => setCounter(counter + 1);
//   const resetCounter = () => setCounter(0);
//   const decreaseByOne = () => setCounter(counter - 1);

//   return (
//     <div>
//       <Button method={increaseByOne} title="Plus" />
//       <Button method={resetCounter} title="Reset" />
//       <Button method={decreaseByOne} title="Minus" />

//       <Display counter={counter} />
//     </div>
//   );
// };

// const App = () => {
//   // let [left, setLeft] = useState(0);
//   // let [right, setRight] = useState(0);
//   let [clicks, setClicks] = useState({ left: 0, right: 0 });
//   let [allClicks, setAllClicks] = useState([]);

//   const leftClickHandler = () => {
//     setClicks({ ...clicks, left: clicks.left + 1 });
//     setAllClicks(allClicks.concat("L"));
//     // setClicks(clicks.left + 1);
//   };

//   const rightClickHandler = () => {
//     setClicks({ ...clicks, right: clicks.right + 1 });
//     setAllClicks(allClicks.concat("R"));
//   };

//   const History = ({ allClicks }) => {
//     if (allClicks.length === 0) {
//       return (
//         <div>
//           <p> This app works with buttons</p>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <p> Clicking history: {allClicks.join("")}</p>
//         </div>
//       );
//     }
//   };

//   return (
//     <div>
//       <script src="http://localhost:8097"></script>
//       {clicks.left}
//       <button onClick={leftClickHandler}> Left </button>
//       <button onClick={rightClickHandler}> Right </button>
//       {clicks.right}
//       <History allClicks={allClicks} />
//     </div>
//   );
// };

// const Button = (props) => {
//   return (
//     <div>
//       <button onClick={props.eventHandler}>{props.text}</button>
//     </div>
//   );
// };

// const App = () => {
//   let [value, setValue] = useState(10);
//   return (
//     <div>
//       <p>{value}</p>
//       <button onClick={() => setValue(0)}> reset value to 0</button>
//     </div>
//   );
// };

//export default App;
