/* eslint-disable import/no-anonymous-default-export */
import { movieApi } from "api";
import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  state = {
    popular: null,
    nowPlaying: null,
    upcoming: null,
    error: null,
    loading: true,
  };
  async componentDidMount() {
    try {
      const {
        data: { results: popular },
      } = await movieApi.popular();
      const {
        data: { results: nowPlaying },
      } = await movieApi.nowPlaying();
      const {
        data: { results: upcoming },
      } = await movieApi.upcoming();
      this.setState({ popular, nowPlaying, upcoming });
    } catch (error) {
      this.setState({ error: "Can not find movie information" });
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { popular, nowPlaying, upcoming, error, loading } = this.state;
    return (
      <HomePresenter
        popular={popular}
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        error={error}
        loading={loading}
      />
    );
  }
}
