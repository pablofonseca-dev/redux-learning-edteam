import React from 'react';
import {connect} from 'react-redux';

const CarCounter = ({carLength}) => {
    return (
        <li>
            <button className="button tiny ghost">Carrito: {carLength}</button>
        </li>
    );
}

//pasarle al componente props del estado global
const mapStateToProps = state => (
    {
        carLength: state.car.length
    }
)

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps)(CarCounter);