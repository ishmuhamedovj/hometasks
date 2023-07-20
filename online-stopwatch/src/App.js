import React from "react";
import {clear} from "@testing-library/user-event/dist/clear";

class App extends React.Component {
    state = {
        second: 0,
        minute: 0,
        hour: 0,
        btnDisabled: false,
        interval: "",
        intervalStorage: [],
    }

    startClick = () => {
        this.setState({
            btnDisabled: true,
        })
        let timer = setInterval(() => {
            const {second, minute, hour} = this.state
            if (second === 59) {
                if (minute === 59) {
                    this.setState({
                        second: 0,
                        minute: 0,
                        hour: hour + 1
                    })
                } else {
                    this.setState({
                        second: 0,
                        minute: minute + 1
                    })
                }
            } else {
                this.setState({
                    second: second + 1
                })
            }
        }, 1000)
        this.setState({
            interval: timer,
        })
    }

    stopClick = () => {
        clearInterval(this.state.interval)
        this.setState({
            btnDisabled: false,
        })
    }

    intervalClick = () => {
        const {hour, minute, second, intervalStorage} = this.state
        intervalStorage.push(`${hour}:${minute}:${second}`)
        this.setState({
            intervalStorage,
        })
    }

    clearClick = () => {
        this.stopClick()
        this.setState({
            second: 0,
            minute: 0,
            hour: 0,
            intervalStorage: [],
        })
    }

    render() {
        const {second, minute, hour, btnDisabled, intervalStorage} = this.state

        return (
            <div>
                <div className="box"></div>
                <div className="timer-container">
                    <h1 className="name-watch">
                        <span>Online Stopwatch </span>
                    </h1>
                    <div className="timer-col">
                        <p className="timer-hours">{hour}</p>
                        <p className="timer-label">Hours</p>
                    </div>
                    <div className="timer-col">
                        <p className="timer-minutes">{minute}</p>
                        <p className="timer-label">Minutes</p>
                    </div>
                    <div className="timer-col">
                        <p className="timer-seconds">{second}</p>
                        <p className="timer-label">Seconds</p>
                    </div>
                </div>
                <div className="timer-container--next">
                    <div className="timer-btn">
                        <button onClick={this.startClick} className="btn btn-success" disabled={btnDisabled}>Start
                        </button>
                    </div>
                    <div className="timer-btn">
                        <button onClick={this.stopClick} className="btn btn-danger">Stop</button>
                    </div>
                    <div className="timer-btn">
                        <button onClick={this.intervalClick} className="btn btn-secondary"
                                disabled={!btnDisabled}>Interval
                        </button>
                    </div>
                    <div className="timer-btn">
                        <button onClick={this.clearClick} className="btn btn-warning">Clear</button>
                    </div>
                </div>
                <div className="timer-container-intervals">
                    {intervalStorage.map((item, index) => <p>{index + 1}.=&gt; {item}</p>)}
                </div>
            </div>
        )
    }
}

export default App