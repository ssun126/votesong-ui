import React, {Component} from 'react';
import { Row,Col,Button,Card,CardHeader,CardFooter,CardBody,Form,FormGroup,Label, Input,Alert } from 'reactstrap';
import axios from 'axios';

class Registration extends Component {

    constructor(props) {
        super(props);
        this.state ={
            file:null,
            body:null,
            uploading:false,
            result:null,
            clonePrice:0,
            copyPrice:0,
            makePrice:0,
            totalPrice:0,
            visible: false
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.fileInfoSave = this.fileInfoSave.bind(this);
        this.fileUpload = this.fileUpload.bind(this);
        this.cancelCourse = this.cancelCourse.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
    }

    onFormSubmit(e){
        e.preventDefault(); // Stop form submit
        this.setState({ uploading: true})

        this.fileUpload(this.state.file).then((response)=> {
            console.log(response.data)
            if (response.data) {
                const fileUrl = response.data;
                this.fileInfoSave(fileUrl).then((response) => {
                    console.log(response.data);
                    this.setState({ uploading: false, result:response.status})
                    this.props.history.push("/list")
                })
            } else if (response.status == 500) {
                this.setState({ uploading: false, visible:true, result:response.status})
            }
        })
    }
    onChange(e) {
        this.setState({file:e.target.files[0]})
    }

    //reset
    cancelCourse() {
        document.getElementById("regForm").reset();
    }

    //alert
    onDismiss() {
        this.setState({ visible: false });
    }
    fileUpload(file){
        const url = 'http://13.209.18.215:3001/api/file/upload';
        const formData = new FormData();
        console.log("file>>>>>>>>>>>>", formData);
        formData.append('mpFile', file);

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        };
        return  axios.post(url, formData, config)
    }
    fileInfoSave(fileUrl){
        const url = 'http://13.209.18.215:3001/api/file/info'; //13.209.18.215
        const formData = new FormData(document.getElementById("regForm"));

        formData.append('fileUrl', fileUrl);

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }
        return  axios.post(url, formData, config)
    }

    onKeyPressed(id, value){
       // this.setState({totalPrice: parseFloat(this.state.clonePrice)+parseFloat(this.state.copyPrice)+parseFloat(this.state.makePrice)});
    }

    render() {
        return (
            <div className="animated fadeIn">

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
                        <CardBody>

                                <Row>
                                    <Col xs="4">
                                        <FormGroup>
                                            <Label htmlFor="text-input">제목</Label>
                                            <Input type="text" id="title" name="title" placeholder="Title"/>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="4">
                                        <FormGroup>
                                            <Label htmlFor="text-input">가수</Label>
                                            <Input type="text" id="singer" name="singer" placeholder="Name"/>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="4">
                                        <FormGroup>
                                            <Label htmlFor="file-input"> mp3 File input</Label>
                                            <Input type="file" onChange={this.onChange}/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12">
                                        <FormGroup row>
                                            <Col xs="4">
                                                <Input type="select" name="vote" id="vote">
                                                    <option value="">선거명을 선택하세요.</option>
                                                    <option value="vote1">기초의원 선거</option>
                                                    <option value="vote2">광역의권 선거</option>
                                                    <option value="vote3">기초단체장 선거</option>
                                                    <option value="vote4">광역단체장 선거</option>
                                                    <option value="vote5">국회의원 선거</option>
                                                    <option value="vote6">교육감</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs="2">
                                        <FormGroup>
                                            <Label htmlFor="text-input">복제권</Label>
                                            <Input type="text" id="clone" name="clone" placeholder="￦" onKeyDown={e => this.onKeyPressed(e.target.id, e.target.value)}/>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="2">
                                        <FormGroup>
                                            <Label htmlFor="text-input">저작인격권</Label>
                                            <Input type="text" id="copyright" name="copyright" placeholder="￦" onKeyDown={e => this.onKeyPressed(e.target.id, e.target.value)}/>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="2">
                                        <FormGroup>
                                            <Label htmlFor="text-input">제작비</Label>
                                            <Input type="text" id="makePrice" name="makePrice" placeholder="￦" onKeyDown={e => this.onKeyPressed(e.target.id, e.target.value)}/>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="2">
                                        <FormGroup>
                                            <Label htmlFor="text-input">총제작비</Label>
                                            <Input type="text" id="totalPrice" name="totalPrice" placeholder="￦"/>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="2">
                                        <FormGroup>
                                            <Label htmlFor="text-input">순번</Label>
                                            <Input type="text" id="order" name="order" placeholder="Number"/>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="2">
                                    <FormGroup>
                                        <Label htmlFor="text-input">노출여부</Label>
                                        <FormGroup check className="radio">
                                            <Input className="form-check-input" defaultChecked type="radio" id="display1" name="display" value="true"/>
                                            <Label check className="form-check-label" htmlFor="display1">Y</Label>
                                        </FormGroup>
                                        <FormGroup check className="radio">
                                            <Input className="form-check-input" type="radio" id="display2" name="display" value="false"/>
                                            <Label check className="form-check-label" htmlFor="display2">N</Label>
                                        </FormGroup>
                                    </FormGroup>
                                </Col>
                                </Row>
                                <Row>
                                    <Col xs="12">
                                        <FormGroup row>
                                            <Col md="2">
                                                <Label htmlFor="textarea-input">개사</Label>
                                            </Col>
                                            <Col xs="12" md="10">
                                                <Input type="textarea" name="lyrics" id="textarea-input" rows="5"
                                                       placeholder="Content..."/>
                                            </Col>
                                        </FormGroup>
                                    </Col>
                                </Row>
                        </CardBody>
                        <CardFooter>
                            {this.state.uploading ? 'uploading.. ' : null}
                            <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                            <Button type="reset" id="resetButton" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                            <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
                                {this.state.result}
                            </Alert>
                        </CardFooter>
                    </Form>
                    </Card>
                </Col>
            </Row>
            </div>
        )
    }
}

export default Registration;
