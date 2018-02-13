import React from 'react';
import ReactDOM from 'react-dom';
import Loading from '../../Component/Loading';

export default function Loadable(View) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = { loaded: false }
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({ loaded: true })
      }, 1000);
    }

    render() {
      return this.state.loaded ? <View {...this.props} /> : <Loading />
    }
  }
}
