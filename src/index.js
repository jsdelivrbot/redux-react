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

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'react redux'}, (videos) => {
            this.setState({ videos });
        });
    }

    render() {
        return (
          <div>
            <SearchBar />
            <VideoDetails video={this.state.videos[0]}/>
            <VideoList videos={this.state.videos} />
          </div>
        );
    }
}

ReactDom.render(<App />, document.querySelector('.container'));