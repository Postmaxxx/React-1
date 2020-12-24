import React from 'react';
import Btn from '../../btn/btn';

const withAdd = (Component) => {
   return class withAdd extends React.Component {
        render() {
            const { btnName, click, btnIsDisable } = this.props;
            return (
            <Component
                disabled={btnIsDisable}
                btnClass='btn btn-add'
                btnText='+ Add card' 
                click={click} 
                btnName={btnName} 
            />
            )
        }
    }
}

const BtnWithAdd = withAdd(Btn);

export default BtnWithAdd;