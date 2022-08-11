import React, {FC} from "react";
import Rootpage from './privateroot';
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from "react-bootstrap";
import './home.scss';

const HomePage: FC = (props) => {
    return(
        <Rootpage>

            <div className="row home-intro">

                <div className="col-10 section-name">

                    🏠Home

                </div>

                <Button className="col-2 create-plan-button btn">

                    + Create Plan

                </Button>

            </div>

            <div className="row name-home-information-container">

                <div className="col-4">

                    <u>😄 Incoming Plans</u>

                </div>

                <div className="col-6">

                    <u>📅 Calendar</u>

                </div>

            </div>

            <div className="row home-information-container">

                <div className="col-4 incoming-plans">

                    Backend call

                </div>

                <div className="col-6 calendar">

                    Google API

                </div>

            </div>

        </Rootpage>
    )
}

export default HomePage;