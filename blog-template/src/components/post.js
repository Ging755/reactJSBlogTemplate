import React from 'react';

export class Post extends React.Component {
    render() {
        return <React.Fragment>
            <div class="w3-third w3-container w3-margin-bottom">
                <img src="https://www.w3schools.com/w3images/mountains.jpg" alt="Norway" style={{ "width": "100%" }} class="w3-hover-opacity" />
                <div class="w3-container w3-white">
                    <p><b>Lorem Ipsum</b></p>
                    <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                </div>
            </div>
        </React.Fragment>
    }
}