import React from 'react';
import { Component } from 'react';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onSubmit: '',
    };
  }

  handleInputChange = event => {
    this.setState({ onSubmit: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.onSubmit);
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Пошук</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Шукати зображення та фотографії"
            value={this.state.onSubmit}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
