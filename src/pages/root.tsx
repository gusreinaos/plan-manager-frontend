import React, {FC} from "react";
import Sidebar from "../components/sidebar/sidebar";

type RootProps = {
    children: React.ReactNode
}

const Rootpage: FC<RootProps> = (props: RootProps) => {
    return(
        <div>
            <Sidebar />
            {props.children}
        </div>
    )
};

export default Rootpage;