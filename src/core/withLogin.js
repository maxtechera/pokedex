import React from "react";

const withLogin = Component =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        password: "",
        selectedId: 1,
        trainer: {
          name: "Ash",
        },
      };
    }
    render() {
      const { name, password, trainer, selectedId } = this.state;
      console.log("Selected", selectedId);
      return (
        <Component
          name={name}
          password={password}
          trainer={trainer}
          selectedId={selectedId}
          setName={name => this.setState({ name })}
          setPassword={password => this.setState({ password })}
          setSelectedId={selectedId => this.setState({ selectedId })}
          doLogin={() => {
            if (name == "Ash") {
              console.log("Success!!");
              this.setState({
                trainer: {
                  name,
                },
              });
            }
          }}
          // Passthrough props
          {...this.props}
        />
      );
    }
  };

export default withLogin;
