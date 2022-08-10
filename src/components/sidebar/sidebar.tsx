import React, {FC} from "react";
import './sidebar.scss'

interface ISidebarState{
    date: Date;
}

class SidebarState implements ISidebarState {
    date: Date;

    constructor(date: Date) {
        this.date = date;
    }
}

class Sidebar extends React.Component<any, ISidebarState> {
    constructor(props: any) {
        super(props);
        this.state = new SidebarState(new Date);
    }

    render() {
        return (
            <div className={"sidebar"}>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Sidebar;