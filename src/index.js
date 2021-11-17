import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app/app.js';

// class WhoAmI extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             years: 23,
//         }
        // this.nextYear = this.nextYear.bind(this);
        // Внизу еще один классческий вариант
        // this.nextYear = () => {
    //             this.setState(state => ({
    //                 years: ++state.years,
    //             }));
    //     }
    // }

    // Новый синтаксис
    // state = {
    //     years: 23,
    // }

    // nextYear = () => {
    //     this.setState(state => ({
    //         years: ++state.years,
    //     }));
    // }

    //Классический синтаксис с байнд
    // nextYear() {
    //     this.setState(state => ({
    //         years: ++state.years,
    //     }));
    // }


    // render() {
//         const {name, surname, link} = this.props;
//         const years = this.state.years;
//         return (
//             <>
//                 <button onClick={this.nextYear}>+</button>
//                 <h1>My name is {name}, surname - {surname}, years - {years}</h1>
//                 <a href={link}>My profile</a>
//             </>
//         )
//     }
// }


// const All = () => {
//     return (
//         <>
//             <WhoAmI name ="Tim" surname="Mit" link="https://vk.com/id94495454"/>
//             <WhoAmI name ="Imu" surname="Met" link="https://vk.com/id94495454"/>
//             <WhoAmI name ="Mur" surname="Mot" link="https://vk.com/id94495454"/>
//         </>
//     )
// }
 
ReactDOM.render(<App/>, document.getElementById('root'));
