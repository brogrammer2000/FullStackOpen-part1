import React from "react";

const Hello = (props) => {
  return (
    <div>
      <p>
        {" "}
        Hello {props.name}, you are {props.age} years old{" "}
      </p>
    </div>
  );
};

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 5;
  const name = "peter";
  const age = 20;

  console.log("Hello from the component");

  return (
    <div>
      <div>
        {/* <p>Hello world, today is {now.toString()}</p> */}
        <Hello name={name} age={age} />
        <Hello name="Mika" age={26 + 21} />
      </div>
      <div>
        <p>
          {" "}
          The sum of {a} and {b} is {a + b}
        </p>
      </div>
    </div>
  );
};

export default App;
