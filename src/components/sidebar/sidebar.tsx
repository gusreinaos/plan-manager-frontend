import React, {FC} from "react";
import './sidebar.scss';

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

                <div className="col-2 menu-container">

                    <div className="user-data">

                        <img src="../assets/Circle-icons-profile.svg.png" className="profile-picture" alt={""}/>
                        <h3 className="profile-name">Username</h3>

                    </div>

                    <ul>
                        <li>
                            Home
                        </li>

                        <li>
                            My Friends
                        </li>

                        <li>
                            Plans
                        </li>

                        <li>
                            Invitations
                        </li>

                    </ul>

                </div>

            </div>
        );
    }
}

export default Sidebar;