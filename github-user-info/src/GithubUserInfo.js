import React, {Component} from "react";
import axios from 'axios';

class GithubUserInfo extends Component {
    constructor(props)
    {
        super(props);
        this.state = {imgURL: "" , name: ""};
    }
    async componentDidMount() {
        const url = `https://api.github.com/users/${this.props.username}`;
        let response = await axios.get(url);
        let data = response.data;
        console.log(data);
        this.setState({imgURL: data.avatar_url , name: data.name});
    }
    render() {
        return (
            <div>
                <h1>GITHUB USER INFO: {this.state.name}</h1>
                <img src={this.state.imgURL} />
            </div>
        );
    }
}
export default GithubUserInfo;