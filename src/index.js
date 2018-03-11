import React, { Component } from 'react'
import ReactDom from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBzvDI8wjev18vnHkSEriX1y7gIqzX6VzA';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'react redux'}, function (videos) {
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar  />
            </div>
        );
    }
}

ReactDom.render(<App />, document.querySelector('.container'));