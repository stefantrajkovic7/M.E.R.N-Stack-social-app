import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {github} from "../../../environment/dev";

class Github extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientId: github.clientId,
            clientSecret: github.secret,
            count: 5,
            sort: 'Created: asc',
            repos: []
        }
    }

    componentDidMount() {
        const { username } = this.props;
        const { count, sort, clientId, clientSecret } = this.state;

        fetch(`http://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret${clientSecret}`)
            .then(res => res.json())
            .then(data => {
                if (this.refs.Ref) {
                    this.setState({repos: data})
                }
            })
            .catch(err => console.log(err));
    }

    componentWillUnmount() {
        this.setState({repos: null})
    }

    render() {
        const { repos } = this.state;
        const items = repos.map(repo => (
           <div key={repo.id} className="card card-body mb-2">
               <div className="row">
                   <div className="col md-6">
                       <h4>
                           <Link to={repo.html_url} className="text-info" target="_blank">
                               { repo.name }
                           </Link>
                       </h4>
                       <p>{repo.description}</p>
                   </div>
                   <div className="col-md-6">
                       <span className="badge badge-info mr-1">
                           Stars: {repo.stargazers_count}
                       </span>
                       <span className="badge badge-secondary mr-1">
                           Watchers: {repo.watchers_count}
                       </span>
                       <span className="badge badge-success mr-1">
                           Forks: {repo.forks_count}
                       </span>
                   </div>
               </div>
           </div>
        ));
        return (
            <div className="github" ref="Ref">
                <hr/>
                <h3 className="mb-4">Latest Github Repos</h3>
                { items }
            </div>
        )
    }
}

Github.propTypes = {
    username: PropTypes.string.isRequired
};

export default Github;