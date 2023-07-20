import {Component} from "react";

class App extends Component {
    state = {
        count: 0
    }

    addOneAndDelReset = (value) => {
        this.setState({count: value})
    }

    reset = () => {
        this.setState({count: 0})
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-5 text-center">
                            <div className="card">
                                <div className="card-header">
                                    <h2>Simple counter</h2>
                                </div>
                                <div className="card-body">
                                    <h2>{this.state.count}</h2>
                                </div>
                                <div className="card-footer">
                                    <button onClick={() => this.addOneAndDelReset(this.state.count + 1)}
                                            className="btn btn-success">Add +1
                                    </button>
                                    <button onClick={() => this.addOneAndDelReset(0)} className="btn btn-primary m-2">Reset</button>
                                    <button onClick={() => this.addOneAndDelReset(this.state.count - 1)}
                                            className="btn btn-danger">Delete -1
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App