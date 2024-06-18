import React from "react";
import "./App.css";
import { array } from "./exampleArray";

interface Props {
  data: Array<any>;
  isLoading: boolean;
  refetch: () => void;
  refetchCompanyList: () => void;
}

function App(props: Props) {
  const data = props.data;
  const isLoading = props.data;

  const [IncreasCount, setIncreasCount] = React.useState(0);
  const [decreaseCount, setDecreaseCount] = React.useState(0);
  const [color, setColor] = React.useState("#b97f7f");

  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    if (
      IncreasCount !== 0 &&
      decreaseCount !== 0 &&
      IncreasCount > decreaseCount
    ) {
      setColor("#00c311");
    }

    if (
      IncreasCount !== 0 &&
      decreaseCount !== 0 &&
      IncreasCount < decreaseCount
    ) {
      setColor("#d0d506");
    }
  }, [IncreasCount, decreaseCount]);

  if(isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <div
        style={{
          height: "100px",
          width: "100px",
          borderRadius: "100%",
          backgroundColor: color,
        }}
      />
      <div>
        <h2>{IncreasCount}</h2>
        <button onClick={() => setIncreasCount(IncreasCount + 1)}>
          Increase
        </button>
        <button onClick={() => setIncreasCount(IncreasCount - 1)}>
          Decrease
        </button>
      </div>
      <div>
        <h2>{decreaseCount}</h2>
        <button onClick={() => setDecreaseCount(decreaseCount - 1)}>
          Decrease
        </button>
        <button onClick={() => setDecreaseCount(decreaseCount + 1)}>
          Increase
        </button>
      </div>

      <input
        style={{ marginTop: '20px', marginBottom: '20px' }}
        type="text"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />

      {array.map((item) => {
        const name = item.name;

        if (searchValue !== "" && name !== searchValue) {
          return null;
        }

        return (
          <div
            key={item.id}
            style={{
              display: "flex",
              gap: "30px",
              backgroundColor: "GrayText",
              marginBottom: "20px",
            }}
          >
            <h3>{item.name}</h3>
            <h3>{item.age}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
