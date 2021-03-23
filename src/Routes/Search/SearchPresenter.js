import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({
  movieResults,
  dramaResults,
  searchTerm,
  error,
  handleSubmit,
  loading,
}) => null;

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  dramaResults: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SearchPresenter;
