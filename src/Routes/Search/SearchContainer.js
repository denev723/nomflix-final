/* eslint-disable import/no-anonymous-default-export */
import { movieApi, tvApi } from "api";
import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
  state = {
    movieResults: null,
    dramaResults: null,
    searchTerm: "code",
    loading: false,
    error: null,
  };
  handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };
  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResults },
      } = await movieApi.search(searchTerm);
      const {
        data: { results: dramaResults },
      } = await tvApi.search(searchTerm);
      this.setState({ movieResults, dramaResults });
    } catch (error) {
      this.setState({ error: "Cannot find movie or drama" });
    } finally {
      this.setState({ loading: false });
    }
  };
  render() {
    const {
      movieResults,
      dramaResults,
      searchTerm,
      error,
      loading,
    } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        dramaResults={dramaResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
