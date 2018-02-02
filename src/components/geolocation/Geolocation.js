import React from "react";
import {geolocated} from "react-geolocated";
import RegisterPage from '../register/RegisterPage';
class Geolocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: '',
            longitude: ''
        }
    }

    componentWillMount() {
        if (this.props.coords) {
            this.setState({
                latitude: this.props.coords.latitude,
                longitude: this.props.coords.longitude
            })
        }
    }

    componentDidMount() {
        if (this.props.coords) {
            this.setState({
                latitude: this.props.coords.latitude,
                longitude: this.props.coords.longitude
            })
        }
    }

    componentWillUnmount() {
        if (this.props.coords) {
            this.setState({
                latitude: this.props.coords.latitude,
                longitude: this.props.coords.longitude
            })
        }
    }

    render() {
        if (this.props.coords) {
            return (
                <div>
                    {/*<RegisterPage latitude={this.state.latitude} longitude={this.state.longitude}/>*/}
                    <RegisterPage latitude={this.props.coords.latitude} longitude={this.props.coords.longitude}/>
                </div>
            )
        }
        return (
            <div>
            </div>
        )

    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Geolocation);