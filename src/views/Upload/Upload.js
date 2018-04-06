import React, {Component} from 'react';
import axios, { post } from 'axios';

class Upload extends Component {

    constructor(props) {
        super(props);
        this.state ={
            file:null
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
    }
    onFormSubmit(e){
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state.file).then((response)=>{
            console.log(response.data);
        })
    }
    onChange(e) {
        this.setState({file:e.target.files[0]})
    }
    fileUpload(file){
        const url = 'http://13.209.18.215:3001/api/file/upload';
        const formData = new FormData();
        console.log("file>>>>>>>>>>>>"+file);
        formData.append('mpfile', file)
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'x-access-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWMxY2EwYTU5NTA3NDE3NjgzYTg1YzYiLCJ1c2VybmFtZSI6InZlbG9wZXJ0IiwiYWRtaW4iOnRydWUsImlhdCI6MTUyMjY0OTc3NywiZXhwIjoxNTIzMjU0NTc3LCJpc3MiOiJ2ZWxvcGVydC5jb20iLCJzdWIiOiJ1c2VySW5mbyJ9.Gji9CSJz-S8HSTUd9jgKhvaRSxFlTpkkYb93GtCJGT0'
            }
        }
        return  axios.post(url, formData,config)
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
                <input type="file" onChange={this.onChange} />
                <button type="submit">Upload</button>
            </form>
        )
    }
}

export default Upload;
