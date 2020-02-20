import React, { Component } from "react";
import NewsBanner from '../../../components/molecules/NewsBanner'

class HomeBanner extends Component {
    render() {
        return (
            <NewsBanner img={require('../../../assets/dummy/amien-rais.jpg' )} />
        )
    }
}

export default HomeBanner;