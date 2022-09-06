import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';
import Cards from '../components/Cards/Cards';
import './About.scss';

export interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
    const [message, setMessage] = useState('');
    const { number } = useParams();

    useEffect(() => {
        if (number) {
            setMessage('The number is ' + number);
        } else {
            setMessage('No number was provided');
        }
    }, []);

    return (
        <div className="">
            <Menu />
            <div className="titleWraper">
                <h1>Início</h1>
            </div>
            <div className="cardsWraper">
                <div className="cardsBox">
                    <Cards />
                    <Cards />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;
