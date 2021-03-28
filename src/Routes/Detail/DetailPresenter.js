import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import imdbIcon from "../../assets/imdbIcon.png";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center center;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
`;

const ItemWrapper = styled.div`
  &:last-child {
    margin-left: 10px;
  }
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Imdb = styled.div`
  width: 22px;
  height: 17px;
  background-image: url(${imdbIcon});
  background-size: cover;
  background-position: center center;
`;

const ImdbContainer = styled.a``;

const ProductionContainer = styled.div``;

const ProductionCountry = styled.span``;

const ProductionCompanies = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 10px;
  align-items: center;
  margin: 20px 0;
`;

const ProductionCompany = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
`;

const CompanyTitle = styled.span`
  text-align: center;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const TrailerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 400px);
  grid-gap: 10px;
  margin: 40px 0;
`;

const TrailerItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const Video = styled.iframe``;

const VideoTitle = styled.span`
  text-align: center;
  padding-top: 10px;
`;

const CollectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  grid-gap: 5px;
`;

const CollectionItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const CollectionImage = styled.div`
  width: 100px;
  height: 150px;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center center;
  margin: 5px 0;
`;

const CollectionTitle = styled.span``;

const DetailPresenter = ({ result, loading, error }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <>
      <Container>
        <Helmet>
          <title>
            {result.original_title
              ? result.original_title
              : result.original_name}{" "}
            | Nomflix
          </title>
        </Helmet>
        <Backdrop
          bgImage={`https://image.tmdb.org/t/p/original${result.poster_path}`}
        />
        <Content>
          <Cover
            bgImage={
              result.poster_path
                ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                : require("../../assets/noPosterSmall.png")
            }
          />
          <Data>
            <Title>
              {result.original_title
                ? result.original_title
                : result.original_name}
            </Title>
            <ItemContainer>
              <ItemWrapper>
                <Item>
                  {result.release_date
                    ? result.release_date.substring(0, 4)
                    : result.first_air_date.substring(0, 4)}
                </Item>
                <Divider>•</Divider>
                {result.runtime || result.episode_run_time ? (
                  <Item>
                    {result.runtime
                      ? result.runtime
                      : result.episode_run_time[0]}{" "}
                    min
                  </Item>
                ) : null}
                <Divider>•</Divider>
                <Item>
                  {result.genres &&
                    result.genres.map((genre, index) =>
                      index === result.genres.length - 1
                        ? genre.name
                        : `${genre.name} / `
                    )}
                </Item>
              </ItemWrapper>
              <ItemWrapper>
                {result.imdb_id ? (
                  <ImdbContainer
                    href={`https://imdb.com/title/${result.imdb_id}`}
                    target="_blank"
                  >
                    <Imdb />
                  </ImdbContainer>
                ) : null}
              </ItemWrapper>
            </ItemContainer>
            <ProductionContainer>
              <ProductionCountry>
                Production Countries :{" "}
                {result.production_countries &&
                  result.production_countries.map((countrie, index) =>
                    index === result.production_countries.length - 1
                      ? countrie.name
                      : `${countrie.name} / `
                  )}
              </ProductionCountry>
              {result.created_by && result.created_by.length > 0 ? (
                <span>
                  {" "}
                  | Created By :{" "}
                  {result.created_by &&
                    result.created_by.map((countrie, index) =>
                      index === result.created_by.length - 1
                        ? countrie.name
                        : `${countrie.name} / `
                    )}
                </span>
              ) : null}
              <ProductionCompanies>
                {result.production_companies.map((company) =>
                  company.logo_path ? (
                    <ProductionCompany
                      key={company.id}
                      src={`https://image.tmdb.org/t/p/w300${company.logo_path}`}
                    />
                  ) : (
                    <CompanyTitle key={company.id}>{company.name}</CompanyTitle>
                  )
                )}
              </ProductionCompanies>
            </ProductionContainer>
            <Overview>{result.overview}</Overview>
            <TrailerContainer>
              {result.videos.results && result.videos.length > 0 ? (
                <TrailerItem key={result.videos.results[0].id}>
                  <Video
                    width="400"
                    height="250"
                    src={`https://www.youtube.com/embed/${result.videos.results[0].key}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></Video>
                  <VideoTitle>{result.videos.results[0].name}</VideoTitle>
                </TrailerItem>
              ) : null}
            </TrailerContainer>
            {result.seasons ? <span>Seasons : </span> : null}
            {result.belongs_to_collection || result.seasons ? (
              <>
                {result.belongs_to_collection ? (
                  <span>Collection: </span>
                ) : null}
                <CollectionContainer>
                  {result.belongs_to_collection ? (
                    <CollectionItem>
                      <CollectionImage
                        bgImage={`https://image.tmdb.org/t/p/w300${result.belongs_to_collection.poster_path}`}
                      />
                      <CollectionTitle>
                        {result.belongs_to_collection.name}
                      </CollectionTitle>
                    </CollectionItem>
                  ) : (
                    result.seasons.map((season) => (
                      <CollectionItem>
                        <CollectionImage
                          bgImage={`https://image.tmdb.org/t/p/w300${season.poster_path}`}
                          key={season.id}
                        />
                        <CollectionTitle>{season.name}</CollectionTitle>
                      </CollectionItem>
                    ))
                  )}
                </CollectionContainer>
              </>
            ) : null}
          </Data>
        </Content>
      </Container>
    </>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
