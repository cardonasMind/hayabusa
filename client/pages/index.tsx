import React, { PureComponent, Fragment } from "react";

import axios from "axios";

class IndexPage extends PureComponent {
    componentDidMount() {
        axios("http://localhost:1337/products").then(res => console.log(res.data))
    }

    render () {
        return (
            <Fragment>
                <h1 className="text-4xl">Siuuu</h1>
            </Fragment>
        )
    }
}

export default IndexPage;