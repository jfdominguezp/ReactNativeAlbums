//Import libraries for making a registerComponent
import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//Make a registerComponent
class AlbumList extends Component {

  state = { albums: [] };

  //Component is about to show on screen
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={ album.title } album={ album } />
    );
  }

  render() {
    console.log(this.state);
    return (
      <View>
        { this.renderAlbums() }
      </View>
    );
  }
}

//Make the component available to other parts of the app
export default AlbumList;
