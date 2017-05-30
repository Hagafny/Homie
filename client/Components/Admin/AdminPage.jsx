import React from 'react';
import AddAssignmentForm from './AddAssignmentForm.jsx';
import Footer from './../Footer.jsx';
export default class AdminPage extends React.Component {
    render() {
        return (
            <div>
                <AddAssignmentForm />
                
                <Footer />
            </div>
        );
    }
}