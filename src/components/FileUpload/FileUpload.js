import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import swal from 'sweetalert';



class FileUpload extends Component {
    constructor() {
        super();
        this.state = {
            file: null
        };
    }
   
    submitFile = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', this.state.file[0]);
        axios.post(`/api/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            // handle your response;
        }).catch(error => {
            // handle your error
        });
    }

    handleFileUpload = (event) => {
        this.setState({ file: event.target.files });
    }

    render() {
        return (
            <div>
                {/* {JSON.stringify(this.state.file)} */}
                <input
                    id="raised-button-file"
                    multiple
                    type="file"
                    onChange={this.handleFileUpload}
                />
                <Button onClick={this.submitFile} variant="contained" component="span">
                    <CloudUploadIcon />
                </Button>

            </div>



        );
    }
}

export default FileUpload;