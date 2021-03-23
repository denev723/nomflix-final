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
