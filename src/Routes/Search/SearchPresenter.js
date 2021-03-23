import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 18px;
  padding-bottom: 5px;
  border-bottom: 2px solid white;
`;

const SearchPresenter = ({
  movieResults,
  dramaResults,
  searchTerm,
  error,
  handleSubmit,
  updateTerm,
  loading,
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="검색어를 입력하세요.."
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="영화 검색 결과">
            {movieResults.map((movie) => (
              <span key={movie.id}>{movie.title}</span>
            ))}
          </Section>
        )}
        {dramaResults && dramaResults.length > 0 && (
          <Section title="드라마 검색 결과">
            {dramaResults.map((drama) => (
              <span key={drama.id}>{drama.name}</span>
            ))}
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
        {dramaResults &&
          movieResults &&
          dramaResults.length === 0 &&
          movieResults.length === 0 && (
            <Message text="검색 결과가 없습니다." color="#95a5a6" />
          )}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  dramaResults: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SearchPresenter;
