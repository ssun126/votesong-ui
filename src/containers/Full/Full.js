import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';
import Sbp from '../../views/Sbp/';
import Tab from "../../views/Tab";
import Audio from "../../views/Audio";
import Upload from "../../views/Upload";
import List from "../../views/List";
import FilterList from "../../views/FilterList";
import Registration from "../../views/Registration";

class Full extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <div className="app-body">
                    <Sidebar {...this.props}/>
                    <main className="main">
                        <Breadcrumb />
                        <Container fluid>
                            <Switch>
                                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                                <Route path="/sbp" name="Sbp" component={Sbp}/>
                                <Route path="/tab" name="Tab" component={Tab}/>
                                <Route path="/audio" name="Audio" component={Audio}/>
                                <Route path="/upload" name="Upload" component={Upload}/>
                                <Route path="/list" name="List" component={List}/>
                                <Route path="/filterList" name="FilterList" component={FilterList}/>
                                <Route path="/reg" name="Registration" component={Registration}/>
                                <Redirect from="/" to="/reg"/>
                            </Switch>
                        </Container>
                    </main>
                    <Aside />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Full;
