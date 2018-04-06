// eslint-disable-next-line no-unused-vars
import React, {Component}  from 'react';
import { Table, Row, Col,  Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBody,Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ReactAudioPlayer from 'react-audio-player';

class FilterList extends Component {
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
                    <Col xs="12" md="12">
                        <Card>
                            <Form className="form-horizontal" id="regForm" onSubmit={this.onFormSubmit}>
                                <CardHeader>
                                    <FormGroup row>
                                        <Col md="2">
                                            <Label className="text-center">정당</Label>
                                        </Col>
                                        <Col md="10">
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="party1" name="party" value="theMinJu"/>
                                                <Label className="form-check-label" check htmlFor="party1">더불어민주당</Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="party2" name="party" value="hankook"/>
                                                <Label className="form-check-label" check htmlFor="party2">자유한국당</Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="party3" name="party" value="mirae"/>
                                                <Label className="form-check-label" check htmlFor="party3">바른미래당</Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="party4" name="party" value="pyungHwa"/>
                                                <Label className="form-check-label" check htmlFor="party4">민주평화당</Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="party5" name="party" value="Jungwi"/>
                                                <Label className="form-check-label" check htmlFor="party5">정의당</Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="party6" name="party" value="etc"/>
                                                <Label className="form-check-label" check htmlFor="party6">기타 정당</Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="party7" name="party" value="none"/>
                                                <Label className="form-check-label" check htmlFor="party7">무소속 </Label>
                                            </FormGroup>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="2">
                                            <Label> 추천로고송</Label>
                                        </Col>
                                        <Col md="10">
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="recommend1" name="recommend" value="latest"/>
                                                <Label className="form-check-label" check htmlFor="recommend1">최신, 히트 로고송</Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="recommend2" name="recommend" value="best"/>
                                                <Label className="form-check-label" check htmlFor="recommend2">로고송 베스트</Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="recommend3" name="recommend" value="medley"/>
                                                <Label className="form-check-label" check htmlFor="recommend3">로고송 메들리</Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="recommend4" name="recommend" value="package"/>
                                                <Label className="form-check-label" check htmlFor="recommend4">패키지 로고송 </Label>
                                            </FormGroup>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="2">
                                            <Label> 유권자 연령별</Label>
                                        </Col>
                                        <Col md="10">
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="age1" name="age" value="2030"/>
                                                <Label className="form-check-label" check htmlFor="age1">20-30대 유권자</Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="age2" name="age" value="4050"/>
                                                <Label className="form-check-label" check htmlFor="age2">40-50대 유권자</Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="age3" name="age" value="6070"/>
                                                <Label className="form-check-label" check htmlFor="age3">60대 이상 유권자</Label>
                                            </FormGroup>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="2">
                                            <Label>지역별</Label>
                                        </Col>
                                        <Col md="10">
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="region1" name="region" value="market"/>
                                                <Label className="form-check-label" check htmlFor="region1">재래시장, 전통시장</Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="region2" name="region" value="seoul"/>
                                                <Label className="form-check-label" check htmlFor="region2">서울, 수도권, 대도시</Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="region3" name="region" value="country"/>
                                                <Label className="form-check-label" check htmlFor="region3">농어촌 지역 </Label>
                                            </FormGroup>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="2">
                                            <Label>장르별, 분위기별</Label>
                                        </Col>
                                        <Col md="10">
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="genre1" name="genre" value="worldCup"/>
                                                <Label className="form-check-label" check htmlFor="genre1">월드컵</Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="genre2" name="genre" value="popSong"/>
                                                <Label className="form-check-label" check htmlFor="genre2">일반가요</Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="genre3" name="genre" value="oldSong"/>
                                                <Label className="form-check-label" check htmlFor="genre3">트로트, 동요</Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="genre4" name="genre" value="ost"/>
                                                <Label className="form-check-label" check htmlFor="genre4">OST</Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="genre5" name="genre" value="ballad"/>
                                                <Label className="form-check-label" check htmlFor="genre5">조용하고 잔잔한곡</Label>
                                            </FormGroup>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="2">
                                            <Label>저작권이 없는 로고송</Label>
                                        </Col>
                                        <Col md="10">
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="copyType1" name="copyType" value="noCopy"/>
                                                <Label className="form-check-label" check htmlFor="copyType1">저작권이 없는 로고송</Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="copyType2" name="copyType" value="cheap"/>
                                                <Label className="form-check-label" check htmlFor="copyType2">비용이 저렴한 로고송</Label>
                                            </FormGroup>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="2">
                                            <Label>성우멘트</Label>
                                        </Col>
                                        <Col md="10">
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="voice1" name="voice" value="voiceMent"/>
                                                <Label className="form-check-label" check htmlFor="voice1">성우 유세 지원 멘트</Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="voice2" name="voice" value="voiceSpeech"/>
                                                <Label className="form-check-label" check htmlFor="voice2">성우 연설문 </Label>
                                            </FormGroup>
                                        </Col>
                                    </FormGroup>
                                </CardHeader>
                            </Form>
                        </Card>
                    </Col>
                </Row>

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

export default FilterList;
