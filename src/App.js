import "./App.css";
import { Select, Button } from "antd";
const { Option } = Select;
import { Switch } from "antd";
import React, { useEffect, useState } from "react";
import { Rate } from "antd";

function App() {
  const [movies, setMovies] = useState();
  const changeHandler = (data) => {
    fetch(`http://localhost:4001/api/data/${data?.value}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const onChangeVisibility = (checked, value, index) => {
    let moviesArray = [...movies];
    moviesArray[index]["isVisible"] = checked;
    setMovies(moviesArray);
  };
  useEffect(() => {
    fetch("http://localhost:4001/api/data")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const onClearFilter = () => {
    fetch("http://localhost:4001/api/data")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const displayBackground = (data) => {
    if (data?.isShortlisted && data?.isVisible) {
      return { background: "blue", color: "white" };
    } else if (!data?.isShortlisted && !data?.isVisible) {
      return { background: "yellow", color: "white" };
    } else if (data?.isShortlisted && !data?.isVisible) {
      return { background: "black", color: "white" };
    } else if (!data?.isShortlisted && data?.isVisible) {
      return { background: "orange", color: "white" };
    }
  };
  const ratingCalculator = (ratings) => {
    let count = 0;
    const ratingCount = ratings?.map((rate) => {
      let rateScore = rate?.score;
      if (rate?.score?.includes("%")) {
        let score = parseInt(rate?.score?.slice(0, -1));
        count += score / 100;
      } else {
        let strArray = rateScore?.split("/");
        count += parseInt(strArray[0]) / parseInt(strArray[1]);
      }
    });
    let rateCal = (count / ratings?.length) * 5;
    return rateCal;
  };
  return (
    <div>
      <div className="filter-label">
        <h4>Filter By Labels</h4>
        <div>
          <Select
            placeholder="Select Labels"
            labelInValue
            style={{
              width: 120,
            }}
            onChange={changeHandler}
          >
            {movies?.map((data, index) => {
              return (
                <Option key={`${data?.label}` + index} value={`${data?.label}`}>
                  {data?.label}
                </Option>
              );
            })}
          </Select>
        </div>
        <div>
          <Button onClick={onClearFilter}>Clear</Button>
        </div>
      </div>

      <div className="visible-movie-card">
        {movies?.map((data, index) => {
          if (data?.isVisible) {
            return (
              <div
                style={{ backgroundColor: displayBackground(data)?.background }}
                className="movie-card"
              >
                <div style={{ color: displayBackground(data)?.color }}>
                  <b>Label : {data?.label}</b>
                </div>
                <div>{data?.isVisible}</div>
                <Switch
                  checked={data?.isVisible}
                  onChange={(checked) =>
                    onChangeVisibility(checked, data, index)
                  }
                />
                <div>{data?.isShortlisted}</div>
                <div>
                  <img
                    src={data?.img}
                    style={{
                      width: "300px",
                      height: "200px",
                    }}
                    alt="img"
                  ></img>
                </div>
                <div
                  className="card-title"
                  style={{ color: displayBackground(data)?.color }}
                >
                  {data?.title}
                </div>
                <div className="card-description"
                style={{ 
                  color: displayBackground(data)?.color,
                 }}
                >{data?.desc}</div>
                <Rate
                  style={{ color: "white" }}
                  allowHalf
                  defaultValue={ratingCalculator(data?.rating)}
                />

              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;
