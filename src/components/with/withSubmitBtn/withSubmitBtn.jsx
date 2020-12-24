import React from 'react';
import Btn from '../../btn/btn';

const withSubmit = (Component) => {
   return class withSubmit extends React.Component {
        render() {
            const { btnName, click } = this.props;
            return (
            <Component
                btnClass='btn btn-submit'
                btnText='Submit' 
                click={click} 
                btnName={btnName} 
            />
            )
        }
    }
}

const BtnWithSubmit = withSubmit(Btn);

export default BtnWithSubmit;