import React, { Component } from 'react';

class ProviderComponent extends Component {

    render() {
        return (
            <div className="providerComponent">
                {this.props.child}
            </div>
        );
    }
}

export default ProviderComponent;