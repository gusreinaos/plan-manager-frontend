import React, {FC} from "react";
import Sidebar from "../components/sidebar/sidebar";
import 'bootstrap/dist/css/bootstrap.css';
import './publicroot.scss'

type RootProps = {
    children: React.ReactNode
}

const Rootpage: FC<RootProps> = (props: RootProps) => {
    return(

        <div className = {"container"}>

            <div className={"row"}>

                <div className={"col-2 left-container"}>
                    <Sidebar />
                </div>

                <div className={"col-10 right-container"}>
                    {props.children}
                </div>

            </div>

        </div>
    )
};

export default Rootpage;