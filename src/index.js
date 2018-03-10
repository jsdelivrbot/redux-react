import React from 'react'
import ReactDom from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBzvDI8wjev18vnHkSEriX1y7gIqzX6VzA';


const App = () => {
    return (
        <div>
            <SearchBar  />
        </div>
    );
};

ReactDom.render(<App />, document.querySelector('.container'));