import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { login } from '../redux';

const withLogin = Component =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        password: '',
        selectedId: 1,
      };
    }
    render() {
      const { name, password, selectedId } = this.state;
      return (
        <Component
          name={name}
          password={password}
          selectedId={selectedId}
          setName={name => this.setState({ name })}
          setPassword={password => this.setState({ password })}
          setSelectedId={selectedId => this.setState({ selectedId })}
          doLogin={() => {
            if (name == 'Ash') {
              this.props.dispatchLogin({
                name,
              });
            }
          }}
          // Passthrough props
          {...this.props}
        />
      );
    }
  };

const mapDispatchToProps = dispatch => ({
  dispatchLogin: trainer => dispatch(login(trainer)),
});

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  withLogin,
);
