import React from 'react';
import AssignmentListContainer from './AssignmentListContainer.jsx';
import Footer from './../Footer.jsx';
import Title from './../Title.jsx';

const AssignmentsPage = ({ match }) =>
    <div>
        <div className="container-fluid">
        <div className="row d-flex d-md-block flex-nowrap wrapper">
            <div className="col-md-3 float-left col-1 pl-0 pr-0 collapse width show" id="sidebar">
                    <div className="list-group border-0 card text-center text-md-left">
                    <a href="#menu1" className="list-group-item d-inline-block collapsed" data-toggle="collapse" data-parent="#sidebar" aria-expanded="false"><i className="fa fa-dashboard"></i> <span className="d-none d-md-inline">Item 1</span> </a>
                    <div className="collapse" id="menu1">
                        <a href="#menu1sub1" className="list-group-item" data-toggle="collapse" aria-expanded="false">Subitem 1 </a>
                        <div className="collapse" id="menu1sub1">
                            <a href="#" className="list-group-item" data-parent="#menu1sub1">Subitem 1 a</a>
                            <a href="#" className="list-group-item" data-parent="#menu1sub1">Subitem 2 b</a>
                            <a href="#menu1sub1sub1" className="list-group-item" data-toggle="collapse" aria-expanded="false">Subitem 3 c </a>
                            <div className="collapse" id="menu1sub1sub1">
                                <a href="#" className="list-group-item" data-parent="#menu1sub1sub1">Subitem 3 c.1</a>
                                <a href="#" className="list-group-item" data-parent="#menu1sub1sub1">Subitem 3 c.2</a>
                            </div>
                            <a href="#" className="list-group-item" data-parent="#menu1sub1">Subitem 4 d</a>
                            <a href="#menu1sub1sub2" className="list-group-item" data-toggle="collapse" aria-expanded="false">Subitem 5 e </a>
                            <div className="collapse" id="menu1sub1sub2">
                                <a href="#" className="list-group-item" data-parent="#menu1sub1sub2">Subitem 5 e.1</a>
                                <a href="#" className="list-group-item" data-parent="#menu1sub1sub2">Subitem 5 e.2</a>
                            </div>
                        </div>
                        <a href="#" className="list-group-item" data-parent="#menu1">Subitem 2</a>
                        <a href="#" className="list-group-item" data-parent="#menu1">Subitem 3</a>
                    </div>

                    <a href="#" className="list-group-item d-inline-block collapsed" data-parent="#sidebar"><i className="fa fa-clock-o"></i> <span className="d-none d-md-inline">Link</span></a>
                </div>
            </div>
            <main className="col-md-9 float-left col px-5 pl-md-2 pt-2 main">

           


                <a href="#" data-target="#sidebar" data-toggle="collapse"><i className="fa fa-navicon fa-2x py-2 p-1"></i></a>
                <AssignmentListContainer classIds={match.params.classIds} />
            </main>
        </div>
    </div>


        
        <Footer />
    </div>


export default AssignmentsPage;