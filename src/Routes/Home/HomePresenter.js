import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import { Helmet } from "react-helmet";

const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = ({ popular, nowPlaying, upcoming, error, loading }) => (
  <>
    <Helmet>
      <title>Movies | Nomflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <Helmet>
          <title>Movies | Nomflix</title>
        </Helmet>
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title="현재 상영중인 영화">
            {nowPlaying.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.title}
                rating={movie.vote_average}
                imageUrl={movie.poster_path}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {upcoming && upcoming.length > 0 && (
          <Section title="개봉 예정 영화">
            {upcoming.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.title}
                rating={movie.vote_average}
                imageUrl={movie.poster_path}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="인기 영화">
            {popular.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.title}
                rating={movie.vote_average}
                imageUrl={movie.poster_path}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    )}
  </>
);

HomePresenter.propTypes = {
  popular: PropTypes.array,
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
