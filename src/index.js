import React, { Component } from 'react'
import ReactDom from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetails from './components/video_detail'

const API_KEY = 'AIzaSyBzvDI8wjev18vnHkSEriX1y7gIqzX6VzA';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
          videos: [],
          selectedVideo: null
        };

        this.videoSearch('react angular');
    }

    videoSearch(term) {
      YTSearch({key: API_KEY, term: term }, (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      });
    }

    render() {
        return (
          <div>
            <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
            <VideoDetails
                video={this.state.selectedVideo}/>
            <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}
            />
          </div>
        );
    }
}

ReactDom.render(<App />, document.querySelector('.container'));