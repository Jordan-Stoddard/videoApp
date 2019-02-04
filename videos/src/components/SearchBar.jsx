import React from "react";

class SearchBar extends React.Component {
    state = {term: ''}

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onFormSubmit = event => {
        event.preventDefault()
        this.props.onTermSubmit(this.state.term)
    }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit}className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input 
            type="text" 
            placeholder="Search videos by name"
            value={this.state.term}
            name="term"
            onChange={this.changeHandler}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
