import React, {FC} from "react";
import Rootpage from './root';
import 'bootstrap/dist/css/bootstrap.css';

const HomePage: FC = (props) => {
    return(
        <Rootpage>
            <div className={"right-container"}>
                Soy el lado verde
            </div>

        </Rootpage>
    )
}

export default HomePage;