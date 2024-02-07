import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const digitStyle = {
      padding: "3px", 
      borderRadius: "3px" 
    };

    const colonStyle = {
    };
    const { date } = this.state;
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours %= 12;
    hours = hours || 12;
    return (
      <div className="clock" style={{ whiteSpace: "nowrap", display: "flex" }}>
        <div style={digitStyle}>
          {hours < 10 ? '0' + hours : hours}
        </div>
        <span style={colonStyle}>:</span>
        <div style={digitStyle}>
          {minutes < 10 ? '0' + minutes : minutes}
        </div>
        <div style={digitStyle}>
          {ampm}
        </div>
      </div>
    );
  }
}

export default Clock;
