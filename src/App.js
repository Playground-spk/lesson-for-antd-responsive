import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Button, Radio, Row, Col } from "antd";

function App() {
  const sizeResponsive = { xs: 18, md: 12, lg: 8 };

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://community-open-weather-map.p.rapidapi.com/weather",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "e6d1152ea1mshb9d5deb4cfb0970p1a034bjsnc8b734d3a7b2",
        useQueryString: true,
      },
      params: {
        callback: "test",
        id: "2172797",
        units: "%22metric%22 or %22imperial%22",
        mode: "xml%2C html",
        q: "London%2Cuk",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Row justify="center" style={{ height: "500px" }} align="middle">
      <Col {...sizeResponsive}>
        <Button type="primary" style={{ width: "100%" }}>
          primary
        </Button>
      </Col>
      <Col {...sizeResponsive}>
        <Button type="danger" style={{ width: "100%" }}>
          danger
        </Button>
      </Col>
      <Col {...sizeResponsive}>
        <Button type="dashed" style={{ width: "100%" }}>
          dashed
        </Button>
      </Col>
    </Row>
  );
}

export default App;
