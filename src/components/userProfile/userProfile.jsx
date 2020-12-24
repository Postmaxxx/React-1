import React from 'react';
import UserMenu from '../userMenu/userMenu.jsx';
import './userProfile.css';
import logoDefault from '../../images/logoDefault.svg';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.onHandleClick = this.onHandleClick.bind(this);
    }


    onHandleClick(e) {
        const { open } = this.state;
        this.setState({open: !open});
    }

    render() {
        const { open } = this.state;
        const arrowClasses = open ? 'userArrow userArrowUp' : 'userArrow userArrowDown';
        return (
            <div className='userProfile' onClick={e => this.onHandleClick(e)}>
                <div className='userLogo' style={{ backgroundImage: "url(" + logoDefault + ")"}}></div>
                <div className={arrowClasses}></div>
                <UserMenu open={open} />
            </div>
        )
    }
}









export default UserProfile;