import React from 'react';
import ReactDOM from 'react-dom';
import getArticles from 'hacker-news-top-ten';

import NewsFeed from './View/NewsFeed';
import Loading from './Component/Loading';
import Loadable from './View/Loadable';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      articles: [],
      loaded: false
    };
  }

  componentWillMount() {
    getArticles().then(articles => {
      this.setState({ articles })
    });
  }

  render() {
    const LoadableNewsFeed = Loadable(NewsFeed);
    return (
      <div>
        <LoadableNewsFeed articles={this.state.articles} />
      </div>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('root'));
