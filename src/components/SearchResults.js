import React from 'react';
import kendrick from '../images/kendrick.jpg';
import unwatched from '../svgs/unwatched.svg';
import watched from '../svgs/watched.svg';
import non_bookmarked from '../svgs/non-bookmarked.svg';
import bookmarked from '../svgs/bookmarked.svg';


class Collapsible extends React.Component {
    constructor() {
        super();

        this.state = {
            overview: false,
            watched: false,
            bookmark: false

        }
    }

    toggle = () => {
        this.setState({
            overview: !this.state.overview
        })
    }
    // Need to get this to work
    // addMovieToWatched = async () => {
    //     const response = await axios.post('http://localhost:8000/watched', this.props.title);
    //     console.log(response);
    //     this.setState({
    //         bookmark: true
    //     })
    //   }

    addMovieToWatched = () => {
        this.setState({
            watched: !this.state.watched
        })
    }

    addMovieToWatchlist = () => {
        this.setState({
            bookmark: !this.state.bookmark
        })
    }

    render() {
        const isPosterAvailable = this.props.movieImage.split('/').pop() !== 'null';
        return (
            <article className="movie-container" key={this.props.id}>
                {this.state.overview ?
                    <div>
                        <p className="release-date dark-text">Release Date: {this.props.release_date}</p>
                        <summary className="overview dark-text">{this.props.overview}</summary>
                        <div className="container">
                            <button className="btn" onClick={() => this.toggle()}>Close</button>
                        </div>
                    </div> :
                    <div>
                        <div className="movie-title dark-text">{this.props.title}</div>
                        {
                            isPosterAvailable ?
                                <img className="poster" src={this.props.movieImage} alt="No Movie Poster" onClick={() => this.toggle()} />
                                :
                                <img className="nonposter" src={kendrick} alt="Kendrick" onClick={() => this.toggle()} />
                        }
                        <div className="movie-options">
                            {this.state.watched ?
                                <img src={watched} alt="Bookmarked Icon" onClick={this.addMovieToWatched} /> :
                                <img src={unwatched} alt="Non-bookmarked Icon" onClick={this.addMovieToWatched} />}
                            {this.state.bookmark ?
                                <img src={bookmarked} alt="Bookmarked Icon" onClick={this.addMovieToWatchlist} /> :
                                <img src={non_bookmarked} alt="Non-bookmarked Icon" onClick={this.addMovieToWatchlist} />}
                        </div>
                    </div>
                }
            </article>
        );
    }
}

export default Collapsible