import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import Main from "./main/Main";

function RootRouter(props) {
    return (
        <Routes>
            <Route path="/*" element={<Layout/>}>
                <Route index element={<Main/>}/>
                {/*<Route path="sub-page" element={<SubPage/>} />*/}
            </Route>
        </Routes>
    );
}

export default RootRouter;