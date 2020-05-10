import React from 'react';
import { Post } from '../components/post';
import { Pagging } from '../components/pagging';

export class PostsList extends React.Component {
    render() {
        return <React.Fragment>
            <div class="w3-row-padding">
                <Post></Post>
                <Post></Post>
                <Post></Post>
            </div>

            <div class="w3-row-padding">
                <Post></Post>
                <Post></Post>
                <Post></Post>
            </div>

            <Pagging></Pagging>
        </React.Fragment>
    }
}