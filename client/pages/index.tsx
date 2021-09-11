import React, { PureComponent, Fragment } from "react";

import { GetStaticProps } from 'next'

import axios from "axios";

import { Header, Category } from "../src/components";

interface IndexPageProps {
    testCategoryData: {
        id: string
        name: string
        products: object[]
    }
}

export const getStaticProps: GetStaticProps = async () => {
    const testCategoryData = await axios("https://hayabusa-server.herokuapp.com/categories/613ab01f1ae9da089c1dd4ed").then(res => res.data)

    return { 
        props: { testCategoryData } 
    };
}

class IndexPage extends PureComponent<IndexPageProps> {
    render () {
        const { testCategoryData } = this.props;

        return (
            <Fragment>
                <Header />
                <Category data={testCategoryData} />
            </Fragment>
        )
    }
}

export default IndexPage;