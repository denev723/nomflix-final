import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Poster from "Components/Poster";
import Section from "Components/Section";
import Message from "Components/Message";
import { Helmet } from "react-helmet";

const Container = styled.div`
  padding: 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) => (
  <>
    <Helmet>
      <title>TV Drama | Nomflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {topRated && topRated.length > 0 && (
          <Section title="최고 평점 드라마">
            {topRated.map((drama) => (
              <Poster
                key={drama.id}
                id={drama.id}
                imageUrl={drama.poster_path}
                title={drama.original_name}
                rating={drama.vote_average}
                year={drama.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="최고 인기 드라마">
            {popular.map((drama) => (
              <Poster
                key={drama.id}
                id={drama.id}
                imageUrl={drama.poster_path}
                title={drama.original_name}
                rating={drama.vote_average}
                year={drama.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {airingToday && airingToday.length > 0 && (
          <Section title="오늘 방영 드라마">
            {airingToday.map((drama) => (
              <Poster
                key={drama.id}
                id={drama.id}
                imageUrl={drama.poster_path}
                title={drama.original_name}
                rating={drama.vote_average}
                year={drama.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    )}
  </>
);

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
