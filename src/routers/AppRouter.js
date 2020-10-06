import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import CarScreen from '../components/CarScreen';
import Navbar from '../components/Navbar';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>

                    <Navbar />

                    <Route
                        exact path="/car/:carId"
                        component={CarScreen}
                    />

                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
