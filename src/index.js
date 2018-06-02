// Create a new component. THis component should produce some
// htmls
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyATBPz2tSvGiO8LGoqBLi5t0xLY0wNY5Nk'

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos });
		});
	}


	render() {
		return( 
			<div>
				<SearchBar />
				<VideoDetail video={this.state.videos[1]} />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}



// Take this components html and put it on the page
ReactDom.render(<App />, document.querySelector('.container'));