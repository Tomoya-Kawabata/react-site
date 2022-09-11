import React from "react";
import '../css/HomePage.css';
import Myicon from '../imgs/myicon.png';


const HomePage = () => {
  return (
    <div className="container text-center ">
      <h1 className="mb-5">Tomoya Kawabata</h1>
      <img src={Myicon} className="profileImage mt-3 mb-3"/>
      <p className="porofile-text mt-5">
        大学時代からプログラミングに興味があり、独学で掲示板などを作ってました。<br />
        現職ではWebアプリ（管理画面）のデザイン、コーディングを主に担当しています。<br />
        趣味は投資、散歩、色々な人と話すことです！
      </p>

      <section id="skill">
        <div className="text-center">
          <h1 className="title my-5">skills</h1>
          <div className="row text-center pb-5">
            <div className="col-md-4 services">
              <i className="fa-brands fa-html5 fa-7x fa-fw"></i>
              <h4>HTML</h4>
              <p></p>
            </div>
            <div className="col-md-4 services">
              <i className="fa-brands fa-css3-alt fa-7x fa-fw"></i>
              <h4>CSS</h4>
              <p></p>
            </div>
            <div className="col-md-4 services">
              <i className="fa-brands fa-sass fa-7x fa-fw"></i>
              <h4>Sass</h4>
              <p></p>
            </div>
            <div className="col-md-4 services">
              <i className="fa-brands fa-bootstrap fa-7x fa-fw"></i>
              <h4>Bootstrap</h4>
              <p></p>
            </div>
            <div className="col-md-4 services">
              <i className="fa-brands fa-js fa-7x fa-fw"></i>
              <h4>JavaScript</h4>
              <p></p>
            </div>
            <div className="col-md-4 services">
              <div className="img-wrapper">
                <img src="https://img.icons8.com/ios/100/000000/jquery.png" className="j-img"/>
              </div>
              <h4 className="j-title">jQuery</h4>
              <p></p>
            </div>
            <div className="col-md-4 services">
              <i className="fa-brands fa-react fa-7x fa-fw"></i>
              <h4>React/Three.js</h4>
              <p></p>
            </div>
            <div className="col-md-4 services">
              <i className="fa-brands fa-php fa-7x fa-fw"></i>
              <h4>PHP</h4>
              <p></p>
            </div>
            <div className="col-md-4 services align-items-center">
              <i className="fa-brands fa-square-git fa-7x fa-fw"></i>
              <h4>Git/GitHub</h4>
              <p></p>
            </div>
            <div className="col-md-4 services">
              <div className="img-wrapper">
                <img src="https://img.icons8.com/color/144/000000/adobe-photoshop--v1.png"/>
              </div>
              <h4 className="img-title">Photoshop</h4>
              <p></p>
            </div>
            <div className="col-md-4 services">
              <div className="img-wrapper">
                <img src="https://img.icons8.com/color/144/000000/adobe-illustrator--v1.png"/>
              </div>
              <h4 className="img-title">Illustrater</h4>
              <p></p>
            </div>
            <div className="col-md-4 services">
              <div className="img-wrapper">
                <img src="https://img.icons8.com/color/144/000000/adobe-xd--v1.png"/>
              </div>
              <h4 className="img-title">XD</h4>
              <p></p>
            </div>
            <div className="col-md-4 services">
              <i className="fa-brands fa-wordpress fa-7x fa-fw"></i>
              <h4>WordPress</h4>
              <p></p>
            </div>
            <div className="col-md-4 services">
              <i className="fa-solid fa-server fa-7x fa-fw"></i>
              <h4>X-server</h4>
              <p></p>
            </div>
            <div className="col-md-4 services">
              <i className="fa-solid fa-database fa-7x fa-fw"></i>
              <h4>MySQL</h4>
              <p></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
