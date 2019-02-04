import React from 'react'
import SearchBar from './SearchBar'
import youTube from '../apis/youtube.js'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    onTermSubmit = async (term) => {
       const response = await youTube.get('/search', {
            params: {
                q: term
            }
        })

        this.setState({videos: response.data.items})
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                <VideoDetail video={this.state.selectedVideos}/>
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </div>
        )
    }
}

export default App;