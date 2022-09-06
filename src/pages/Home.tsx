import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.scss';
import logo from '../assets/ui/logoLogin.png';
export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    // const navigate = useNavigate();

    return (
        <div className="containerLogin">
            <div className="boxLogin">
                <img src={logo} alt="Logo" />
                <div className="inputBox">
                    <input type="text" id="fname" name="firstname" placeholder="Nome do administrador ou e-mail" required></input>
                </div>
                <div className="inputBox">
                    <input type="password" id="fname" name="firstname" placeholder="Senha" required></input>
                </div>
                <div className="optLogin">
                    <div>
                        <p>Esqueci minha senha</p>
                    </div>
                    <div>
                        <p>Manter-me conectado</p>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
                <div className="boxBtnMenu">
                    <button>ENTRAR</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
