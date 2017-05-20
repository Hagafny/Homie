import React from 'react';
import CountdownPage from './CountdownPage.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                endDate: '06/08/2017 10:55 AM',
                cb: () => {
                    console.log('expired callback')
                }
            }
        
        }
    }

    render() {
        return (
            <CountdownPage />
        )
    }
}