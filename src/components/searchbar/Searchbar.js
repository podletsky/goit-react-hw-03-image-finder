import React from 'react';
import { Component } from 'react';
import styles from '../searchbar/SearchBar.module.css';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
class Searchbar extends Component {
  state = {
    onSubmit: '',
  };

  handleInputChange = event => {
    this.setState({ onSubmit: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.onSubmit);
  };

  render() {
    return (
      <header className={styles.header}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.buttonSearch}>
            <FaSearch className={styles.FaSearch} />
          </button>

          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder=""
            value={this.state.onSubmit}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}
Searchbar.protoType = {
  onSubmit: PropTypes.func.isRequired,
}.isRequired;
export default Searchbar;
