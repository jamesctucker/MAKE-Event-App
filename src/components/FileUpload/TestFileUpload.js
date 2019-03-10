import React, { Component } from 'react';
// Import React FilePond
import { FilePond } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';


// Register the plugins
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
    accessKeyId: process.env.CLOUDCUBE_ACCESS_KEY_ID,
    secretAccessKey: process.env.CLOUDCUBE_SECRET_ACCESS_KEY,
    url: process.env.CLOUDCUBE_URL,
});

// Our app
class TestFileUpload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // Set initial files, type 'local' means this is a file
            // that has already been uploaded to the server (see docs)
            files: '',
        };
    }



    render() {
        return (
            <div className="App">

                {/* Pass FilePond properties as attributes */}
                <FilePond ref={ref => this.pond = ref}
                    files={this.state.files}
                    allowMultiple={true}
                    maxFiles={3}
                    server={
                        {
                            process: function (fieldName, file, metadata, load, error) {

                                s3.upload({
                                    Bucket: 'cloud-cube',
                                    Key: `cloud-cube/newEventPhotos/${file.name}`,
                                    Body: file,
                                    ContentType: file.type,
                                    ACL: 'public-read'
                                }, function (err, data) {

                                    if (err) {
                                        error('Something went wrong');
                                        return;
                                    }

                                    // pass file unique id back to filepond
                                    load(data.Key);

                                });
                            }
                        }
                    }
                >
                </FilePond>

            </div>
        );
    }
}

export default TestFileUpload;