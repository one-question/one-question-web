import React from "react";

class Test extends React.Component {
  a: string;
  constructor(props: any) {
    super(props);
    this.a = "Ff";
  }

  render(): JSX.Element {
    return <div>{this.a}</div>;
  }
}

export default Test;
