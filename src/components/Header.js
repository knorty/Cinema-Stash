import React from 'react';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      search: ''
    }
  }

  handleInputChangeAndReqMovie = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  handleSearch = (e) => {
    if (e.key === 'Enter') {
      this.props.requestMovie(this.state.search)
      console.log(this.state.search)
    }
  }

  render() {
    console.log(this.state.search)
    return (
      <header className="header">
        <div className="logo">CinemaStash</div>
        <div>
          <input
            className="search-bar"
            type="text"
            name="searchbar"
            placeholder="search movies"
            onChange={this.handleInputChangeAndReqMovie}
            onKeyPress={this.handleSearch}
          />
        </div>
        <div className="menu">Menu</div>
      </header>
    )
  }
}

export default Header;
