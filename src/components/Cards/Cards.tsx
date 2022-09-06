import React from 'react';
//import { Outlet } from 'react-router-dom';
import './Cards.scss';
import geoIcon from '../../assets/ui/geoIcon.png';

export interface IFooterProps {}

const Cards: React.FunctionComponent<IFooterProps> = (props) => {
    return (
        <div className="card">
            <img className="options" src={geoIcon} alt="Logo" />
            <p>Geoprocessamento</p>
        </div>
    );
};

export default Cards;
