import { PureComponent } from "react";

import Router from "next/router";

export default class extends PureComponent {
    componentDidMount() {
        Router.push("/");
    }

    render () {
        return null;
    }
}