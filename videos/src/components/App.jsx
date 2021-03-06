import React from "react";
import SearchBar from "./SearchBar";
import youTube from "../apis/youtube.js";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
      this.onTermSubmit('Jordan')
  }

  onTermSubmit = async term => {
    const response = await youTube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0]});
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
