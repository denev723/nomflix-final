import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";

const Container = styled.div`
  padding: 0px 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="최고 평점 드라마">
          {topRated.map((drama) => (
            <span key={drama.id}>{drama.name}</span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="최고 인기 드라마">
          {popular.map((drama) => (
            <span key={drama.id}>{drama.name}</span>
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="오늘 방영 드라마">
          {airingToday.map((drama) => (
            <span key={drama.id}>{drama.name}</span>
          ))}
        </Section>
      )}
      {error && <Message color="#e74c3c" text={error} />}
    </Container>
  );

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
