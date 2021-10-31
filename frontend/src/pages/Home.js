import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { setLocation } from "../app/matchSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import img1 from "../images/nature.svg";

const Home = () => {
  const [location, setStateLocation] = useState("");
  const onLocationChange = (e) => setStateLocation(e.target.value);
  const dispatch = useDispatch();

  const changeLocation = (location) => {
    dispatch(setLocation(location));
  };

  const handleClick = (e) => {
    changeLocation(location);
    console.log("location: " + location);
  };

  return (
    <div>
      <Card
        sx={{
          backgroundColor: "#F9E9DA",
          maxWidth: 400,
          position: "absolute",
          left: "50%",
          top: "45%",
          transform: "translate(-50%, -50%)",
          height: 600,
        }}
      >
        <CardContent>
          <Typography
            style={{ textAlign: "center", marginTop: "0.8em" }}
            variant="h3"
            component="div"
          >
            Find National Parks to Visit!
          </Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <img
              style={{
                position: "absolute",
                left: "50%",
                top: "40%",
                transform: "translate(-50%, -50%)",
              }}
              src={img1}
            />
            <TextField
              style={{
                position: "absolute",
                left: "50%",
                top: "60%",
                transform: "translate(-50%, -50%)",
              }}
              id="standard-basic"
              label="Enter a state's abbrev."
              variant="standard"
              value={location}
              onChange={onLocationChange}
              required
            />
          </Box>
        </CardContent>
        <CardActions>
          <Link to="/results">
            <Button
              style={{
                position: "absolute",
                left: "50%",
                top: "73%",
                transform: "translate(-50%, -50%)",
              }}
              variant="contained"
              onClick={handleClick}
            >
              Submit
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};
export default Home;
