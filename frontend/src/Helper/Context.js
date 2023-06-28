import React, { Component } from 'react';
import axios from "axios";


const RecentJobContext = React.createContext();
export const JobContextConsumer = RecentJobContext.Consumer

class JobContextProvider extends Component {
    state = { jobs: [] }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                const jobs = res.data;
                this.setState({ jobs });
            })
      }
    
    render() { 
        return (
            <RecentJobContext.Provider value={this.state}>
                {this.props.children}
            </RecentJobContext.Provider>
        );
    }
}
 
export default JobContextProvider;