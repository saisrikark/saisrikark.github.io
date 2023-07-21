import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={ <Home></Home> }></Route>
                    <Route path='about' element={ <About></About> }></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;