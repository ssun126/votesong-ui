// eslint-disable-next-line no-unused-vars
import React, {Component}  from 'react';
import {
    Badge,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Table,
    Pagination,
    PaginationItem,
    PaginationLink,
    Collapse, Button
}  from 'reactstrap';

class Sbp extends Component {
    constructor(props) {
        super(props);
        this.onEntering = this.onEntering.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
            collapse: true,
            status: 'Opened',
            fadeIn: true,
            timeout: 300
        };
    }

    onEntering() {
        this.setState({status: 'Opening...'});
    }

    onEntered() {
        this.setState({status: 'Opened'});
    }

    onExiting() {
        this.setState({status: 'Closing...'});
    }

    onExited() {
        this.setState({status: 'Closed'});
    }

    toggle() {
        this.setState({collapse: !this.state.collapse});
    }

    toggleFade() {
        this.setState({fadeIn: !this.state.fadeIn});
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs="12" lg="12">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> Simple Table
                                <Button color="primary" onClick={this.toggle} style={{marginBottom: '1rem'}} className="btn-sm">Toggle</Button>
                            </CardHeader>
                            <Collapse
                                isOpen={this.state.collapse}
                                onEntering={this.onEntering}
                                onEntered={this.onEntered}
                                onExiting={this.onExiting}
                                onExited={this.onExited}
                            >
                                <CardBody>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>Username</th>
                                                <th>Date registered</th>
                                                <th>Role</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Samppa Nori</td>
                                                <td>2012/01/01</td>
                                                <td>Member</td>
                                                <td>
                                                    <Badge color="success">Active</Badge>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Estavan Lykos</td>
                                                <td>2012/02/01</td>
                                                <td>Staff</td>
                                                <td>
                                                    <Badge color="danger">Banned</Badge>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Chetan Mohamed</td>
                                                <td>2012/02/01</td>
                                                <td>Admin</td>
                                                <td>
                                                    <Badge color="secondary">Inactive</Badge>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Derick Maximinus</td>
                                                <td>2012/03/01</td>
                                                <td>Member</td>
                                                <td>
                                                    <Badge color="warning">Pending</Badge>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Friderik Dávid</td>
                                                <td>2012/01/21</td>
                                                <td>Staff</td>
                                                <td>
                                                    <Badge color="success">Active</Badge>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <Pagination>
                                        <PaginationItem>
                                            <PaginationLink previous href="#"></PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem active>
                                            <PaginationLink href="#">1</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">2</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">3</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">4</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink next href="#"></PaginationLink>
                                        </PaginationItem>
                                    </Pagination>
                                </CardBody>
                            </Collapse>
                            <CardFooter>
                                <Button color="primary" onClick={this.toggle} style={{marginBottom: '1rem'}} className="btn-sm">Toggle</Button>
                                <h5>Current state: {this.state.status}</h5>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" lg="12">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> Striped Table
                            </CardHeader>
                            <CardBody>
                                <Table responsive striped>
                                    <thead>
                                        <tr>
                                            <th>Username</th>
                                            <th>Date registered</th>
                                            <th>Role</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Yiorgos Avraamu</td>
                                            <td>2012/01/01</td>
                                            <td>Member</td>
                                            <td>
                                                <Badge color="success">Active</Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Avram Tarasios</td>
                                            <td>2012/02/01</td>
                                            <td>Staff</td>
                                            <td>
                                                <Badge color="danger">Banned</Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Quintin Ed</td>
                                            <td>2012/02/01</td>
                                            <td>Admin</td>
                                            <td>
                                                <Badge color="secondary">Inactive</Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Enéas Kwadwo</td>
                                            <td>2012/03/01</td>
                                            <td>Member</td>
                                            <td>
                                                <Badge color="warning">Pending</Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Agapetus Tadeáš</td>
                                            <td>2012/01/21</td>
                                            <td>Staff</td>
                                            <td>
                                                <Badge color="success">Active</Badge>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Pagination>
                                    <PaginationItem disabled><PaginationLink previous href="#">Prev</PaginationLink></PaginationItem>
                                    <PaginationItem active>
                                        <PaginationLink href="#">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#">4</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink next href="#">Next</PaginationLink></PaginationItem>
                                </Pagination>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Sbp;
