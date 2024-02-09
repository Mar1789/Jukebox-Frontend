import React from "react";
var button = true;
function styleset(button){
  if(button === false){
    button = true;
  } else{
    button = false;
  }
}
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
    const { date } = this.state;
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours %= 12;
    hours = hours || 12;

    return (
      <div className="clock-container1" style={{ marginLeft: '-200px' }}> 
        <div className="clock" style={{whiteSpace: "nowrap", display: "flex",  marginLeft: '-200px' }}>
        <div className="digit" style={{backgroundColor: button ? "#285257" : "#ffc000", marginRight: "5px" }}>
            {hours < 10 ? '0' + hours : hours}
          </div>
          <span className="colon">:</span>
          <div className="digit" style={{ backgroundColor: "#285257", marginRight: "5px" }}>
            {minutes < 10 ? '0' + minutes : minutes}
          </div>
          
          <div className="digit" style={{backgroundColor: "#285257"}}>
            {ampm}
          </div>
        </div>
      </div>
        
    );
  }
}
export default Clock;
