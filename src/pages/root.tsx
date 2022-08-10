import React, {FC} from "react";
import Sidebar from "../components/sidebar/sidebar";
import 'bootstrap/dist/css/bootstrap.css';

type RootProps = {
    children: React.ReactNode
}

const Rootpage: FC<RootProps> = (props: RootProps) => {
    return(
        <div className={"col-4 left-container"}>
            <Sidebar />
            {props.children}
        </div>
    )
};

export default Rootpage;