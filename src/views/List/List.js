// eslint-disable-next-line no-unused-vars
import React, {Component}  from 'react';
import { Table, Row, Col,  Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBody,Button, FormGroup, Input } from 'reactstrap';
import ReactAudioPlayer from 'react-audio-player';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            files : [],
            fileUrl : '',
            modal: false,
        };
        this.toggle = this.toggle.bind(this);
    };


    toggle(e) {
        const curr =  e.currentTarget;
        console.log(curr.id);
        this.setState({
            modal: !this.state.modal,
            fileUrl : curr.id
        });
    }

    componentDidMount() {
        try {
           fetch('http://13.209.18.215:3001/api/file/list')
                .then(response => response.json())
                .then(data => {
                console.log(data.files)
                this.setState({files: data.files})
                });
        }catch(err){
        }
    }

    render() {

        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}><a href={this.state.fileUrl}>Preview</a></ModalHeader>
                    <ModalBody>
                        <ReactAudioPlayer
                            src={this.state.fileUrl}
                            autoPlay
                            controls
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
                <Row>
                    <Col xs="12" md="12" lg="12">
                        <Card>
                            <CardBody>
                                <Table hover bordered striped responsive size="sm">
                                    <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Title</th>
                                        <th>Singer</th>
                                        <th>Listen</th>
                                        <th>clonePrice</th>
                                        <th>copyright</th>
                                        <th>makePrice</th>
                                        <th>선택</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.files.map((file, index) =>
                                            <tr key={file._id}>
                                                <td>{index+1}</td>
                                                <td>{file.title}</td>
                                                <td>{file.singer}</td>
                                                <td><i className="fa fa-play-circle-o fa-lg" onClick={this.toggle.bind(this)} id={file.fileUrl}></i></td>
                                                <td>{file.clone}</td>
                                                <td>{file.copyright}</td>
                                                <td>{file.makePrice}</td>
                                                <td>
                                                    <FormGroup check inline>
                                                        <Input className="form-check-input" type="checkbox" id="choiceFile" name="choiceFile" value={file._id}/>
                                                    </FormGroup>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default List;
