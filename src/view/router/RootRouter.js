import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import Main from "./main/Main";
import Service from "./service/Service";

function RootRouter(props) {
    return (
        <Routes>
            <Route path="/*" element={<Layout/>}>
                <Route index element={<Main/>}/>
                <Route path='service' element={<Service/>}/>
            </Route>
        </Routes>
    );
}

export default RootRouter;