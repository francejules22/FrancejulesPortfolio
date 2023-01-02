import React from 'react';
import './portfolio.css';
import DiabetesApp from '../../assets/DiabetesImg.png';
import SnackApp from '../../assets/SnackApp.png';
import CifarApp from '../../assets/CifarApp.png';
import ArchiImg from '../../assets/architecture.png';
import FruitImg from '../../assets/fruit.png';
import TravelImg from '../../assets/travel.png';
import TodoImg from '../../assets/todoImg.png';
import InvisImg from '../../assets/InvisImg.png';
import SassImg from '../../assets/UIImg.png';
import FoodImg from '../../assets/FoodImg.png';
import FitnessImg from '../../assets/FitnessImg.png';
import WineImg from '../../assets/WineImg.png';
import {Slide} from 'react-reveal';

//Using Array Map
const data_images = [

    {
        id: 1,
        image: DiabetesApp,
        title: 'Diabetest App',
        description: 'DiabeTest is a free app that helps you detect the Type 2 Diabetes Mellitus Disease using Machine Learning Algorithm and provides with better results.This was also my Thesis Proposal requirements for graduation.',
        iconOne: 'ri-html5-fill',
        iconTwo: 'ri-css3-fill',
        iconThree: 'ri-reactjs-line',
        github: 'https://github.com/francejules22/DiabetestApp',
        demo: 'https://diabetestapp.netlify.app/'
    },

    {
        id: 2,
        image: SnackApp,
        title: 'Snack App',
        description: 'This is the project in our web information system which a website for food business to order the goods and product through online. Technology used was HTML5, CSS3 and Javascript.',
        iconOne: 'ri-html5-fill',
        iconTwo: 'ri-css3-fill',
        iconThree: 'ri-reactjs-line',
        github: 'https://github.com/francejules22/SnackHack',
        demo: 'https://francejules22.github.io/SnackHackApp/'
    },

    {
        id: 3,
        image: CifarApp,
        title: 'CIFAR10 Image Classification',
        description: 'CIFAR10 Image Classification that can predict the image using Convolutional Neural Networks and give accurate results. A Convolutional Neural Network is a kind of network architecture for deep learning algorithms used for image recognition.',
        iconOne: 'ri-html5-fill',
        iconTwo: 'ri-css3-fill',
        iconThree: 'ri-reactjs-line',
        github: 'https://github.com/francejules22/ImageClassificationUsingCIFAR10',
        demo: 'http://france22.pythonanywhere.com/'
    },

    {
        id: 4,
        image: ArchiImg,
        title: 'Architecture',
        description: 'A website for architecture and interior design .Technology used was HTML5, CSS3 and some Javascript ',
        iconOne: 'ri-html5-fill',
        iconTwo: 'ri-css3-fill',
        iconThree: 'ri-reactjs-line',
        github: 'https://github.com/francejules22/Architecture-Website',
        demo: 'https://francejules22.github.io/architecture/'
    },

    {
        id: 5,
        image: FruitImg,
        title: 'Fruit',
        description: 'This is simple web design project using different fruits with unique design.Technology used was HTML5, CSS3, and Javascript ',
        iconOne: 'ri-html5-fill',
        iconTwo: 'ri-css3-fill',
        iconThree: 'ri-reactjs-line',
        github: 'https://github.com/francejules22/Fruit-Scroll-Animation',
        demo: 'https://francejules22.github.io/Fruit-Scroll-Animation/'
    },

    {
        id: 6, 
        image: TravelImg,
        title: 'Travel',
        description: 'A website which the user can book beautiful tourist destination and tour around the world.Technology used was HTML5, CSS3, and Javascript.',
        iconOne: 'ri-html5-fill',
        iconTwo: 'ri-css3-fill',
        iconThree: 'ri-reactjs-line',
        github: 'https://github.com/francejules22/Travel-Website',
        demo: 'https://francejules22.github.io/Travel-Website/'
    },

    {
        id: 7, 
        image: TodoImg,
        title: 'TodoList App',
        description: 'To-Do List project is an application specially built to keep track of errands or tasks that need to be done. This application will be like a task keeper where the user would be able to enter the tasks that they need to do. Once they are done with their tasks they can also remove them from the list',
        iconOne: 'ri-html5-fill',
        iconTwo: 'ri-css3-fill',
        iconThree: 'ri-reactjs-line',
        github: 'https://github.com/francejules22/todolist',
        demo: 'https://francejules22.github.io/todolist/'
    },

    {
        id: 8, 
        image: InvisImg,
        title: 'Invis',
        description: 'This is a simple sign up project with unique web design. Technology used was HTML5, CSS3, and Javascript.',
        iconOne: 'ri-html5-fill',
        iconTwo: 'ri-css3-fill',
        iconThree: 'ri-reactjs-line',
        github: 'https://github.com/francejules22/Invis-Website',
        demo: 'https://francejules22.github.io/Invis-Website/'
    },

    {
        id: 9, 
        image: SassImg,
        title: 'SASS',
        description: 'This is a simple sign up project with unique web design.Technology used was HTML5, CSS3, and Javascript.',
        iconOne: 'ri-html5-fill',
        iconTwo: 'ri-css3-fill',
        iconThree: 'ri-reactjs-line',
        github: 'https://github.com/francejules22/SASS-Website',
        demo: 'https://francejules22.github.io/SASS-Website/'
    },

    {
        id: 10, 
        image: FoodImg,
        title: 'Food',
        description: 'This is a food website which the user can order online and shows different delicacies.Technology used was HTML5, CSS3, and Javascript.',
        iconOne: 'ri-html5-fill',
        iconTwo: 'ri-css3-fill',
        iconThree: 'ri-reactjs-line',
        github: 'https://github.com/francejules22/Food-Website',
        demo: 'https://francejules22.github.io/Food-Website/'
    },

    {
        id: 11, 
        image: FitnessImg,
        title: 'Fitness',
        description: 'This is a fitness website which the user can view available gym online.Technology used was HTML5, CSS3, and Javascript.',
        iconOne: 'ri-html5-fill',
        iconTwo: 'ri-css3-fill',
        iconThree: 'ri-reactjs-line',
        github: 'https://github.com/francejules22/Fitness-Website',
        demo: 'https://francejules22.github.io/Fitness-Website/'
    },

    {
        id: 12, 
        image: WineImg,
        title: 'Wine',
        description: 'This is a alcoholic website that the user can order or view different kinds of Wine.Technology used was HTML5, CSS3, and Javascript.',
        iconOne: 'ri-html5-fill',
        iconTwo: 'ri-css3-fill',
        iconThree: 'ri-reactjs-line',
        github: 'https://github.com/francejules22/Wine-Website',
        demo: 'https://francejules22.github.io/Wine-Website/'
    }


]


const Portfolio = () => {
    return(
        <section id="portfolio">
            <Slide left>
              <h5 className="portfolio-title">My Projects</h5>
              <h2>Portfolio</h2>
            </Slide>

            <div className="container portfolio_container">
                {
                    data_images.map(({id, image, title, description,iconOne,iconTwo, iconThree, github, demo}) => {
                        return(
                            <article key={id} className="portfolio_item">
                            <div className="portfolio_item-image"> 
                               <img src={image} alt={title} className="portfolio-image"/>
                            </div>
                                <h3 className="portfolio-para">{title}</h3>
                                <p>{description}</p>

                                <div className="portfolio-icons">
                                    <span><i class={iconOne}></i></span>
                                    <span><i class={iconTwo}></i></span>
                                    <span><i class={iconThree}></i></span>
                                </div>

                                <div className="portfolio_item-cta">
                                   <a href={github} className="btn" target="_blank">Github</a>
                                   <a href={demo} className="btn btn_primary" target='_blank'>Demo</a>
                                </div>
                         </article>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default Portfolio;