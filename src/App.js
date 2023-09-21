import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import VideoCard from "./VideoCard";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

export default function App() {
  const [videos, setVideos] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [debounceTimerId, setDebounceTimerId] = useState(null);

  const fetchVideos = async (searchText) => {
    let url = "https://content-xflix-backend.azurewebsites.net/v1/videos";
    if (searchText) {
      url += `?title=${searchText}`;
    }
    let res = await axios.get(url);
    // console.log(res);
    setVideos(res.data.videos);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  // useEffect(() => {
  //   fetchVideos(searchText);
  // }, [searchText]);

  useEffect(() => {
    return () => {
      // console.log("cancel ", debounceTimerId);
      clearTimeout(debounceTimerId);
    };
  }, [debounceTimerId]);

  return (
    <div>
      <TextField
        className="searchBar"
        margin="normal"
        label="Search"
        value={searchText}
        onChange={async (e) => {
          setSearchText(e.target.value);
          let timerId = setTimeout(() => {
            fetchVideos(e.target.value);
          }, 800);
          setDebounceTimerId(timerId);
        }}
      />
      <Grid container spacing={2}>
        {videos.map((video) => (
          <Grid key={video.id} item xs={12} md={6} lg={3}>
            <VideoCard
              title={video.title}
              previewImage={video.previewImage}
              releaseDate={video.releaseDate}
              genre={video.genre}
              viewCount={video.viewCount}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
