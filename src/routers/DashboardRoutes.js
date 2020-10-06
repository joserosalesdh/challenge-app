import React from 'react'
import Navbar from '../components/ui/Navbar'
import { Switch, Route, Redirect } from 'react-router-dom'
// import ServiceScreen from '../components/servicios/ServiceScreen';
import FinanceScreen from '../components/finance/FinanceScreen';
import ReviewsScreen from '../components/reviews/ReviewsScreen';
import CarScreen from '../components/CarScreen';
import Product from '../components/Product';


export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>

                    <Route exact path="/servicio" component={Product} />
                    <Route exact path="/car/:carId" component={CarScreen} />
                    <Route exact path="/finance" component={FinanceScreen} />
                    <Route exact path="/reviews" component={ReviewsScreen} />

                    <Redirect to="/servicio" />

                </Switch>


            </div>
        </>
    )
}