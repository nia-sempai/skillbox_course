import {hot} from "react-hot-loader/root";
import * as React from 'react';
import {Layout} from "./shared/Layout";
import './main.global.css';
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";

function AppComponent() {
    return (
        <Layout>
            <Header/>
            <Content>content</Content>
        </Layout>
    );
}

export const App = hot(AppComponent);