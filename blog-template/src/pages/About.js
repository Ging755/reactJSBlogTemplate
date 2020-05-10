import React from 'react';

export class About extends React.Component {
    render() {
        return <React.Fragment>
            <h4 id="about"><b>About Me</b></h4>
            <p>Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
            <hr />

            <h4>Technical Skills</h4>
            <p>Photography</p>
            <div class="w3-grey">
                <div class="w3-container w3-dark-grey w3-padding w3-center" style={{ "width": "95%" }}>95%</div>
            </div>
            <p>Web Design</p>
            <div class="w3-grey">
                <div class="w3-container w3-dark-grey w3-padding w3-center" style={{ "width": "95%" }}>85%</div>
            </div>
            <p>Photoshop</p>
            <div class="w3-grey">
                <div class="w3-container w3-dark-grey w3-padding w3-center" style={{ "width": "95%" }}>80%</div>
            </div>
            <p>
                <button class="w3-button w3-dark-grey w3-padding-large w3-margin-top w3-margin-bottom">
                    <i class="fa fa-download w3-margin-right"></i>Download Resume
                </button>
            </p>
        </React.Fragment>
    }
}