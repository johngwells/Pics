import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component {
  async onSearchSubmit(term) {
    const res = await axios
      .get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: {
          Authorization: 'Client-ID Qwq8MQIcjcNXNBxrmOD9Nt0tHBssOB-xQb1zwtppvw0'
        }
      })
      
      console.log(res.data.results);
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
