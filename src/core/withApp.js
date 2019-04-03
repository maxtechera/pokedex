import React from "react";

const withApp = Component =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        trainer: null,
        name: "",
        password: "",
      };
    }
    doLogin = () => {
      const { name } = this.state;
      if (name === "Ash") {
        // Call API get auth trainer
        this.setState({ trainer: { name } });
      } else {
        alert("Wrong credentials!");
      }
    };

    render() {
      const { trainer, name, password } = this.state;
      return (
        <Component
          trainer={trainer}
          name={name}
          password={password}
          setTrainer={trainer => this.setState({ trainer })}
          setName={name => this.setState({ name })}
          setPassword={password => this.setState({ password })}
          doLogin={this.doLogin}
          //Pass all props received by the hoc
          {...this.props}
        />
      );
    }
  };

export default withApp;
