import React from 'react'
import '../css/Works.css';
import typingImg from "../imgs/typing.jpg"
import threeImg from "../imgs/3d.jpg"
import flowerImg from "../imgs/flower.jpg"

const Works = () => {

  const ToTypingPage = () => {
    window.location.href = "https://tomoya-kawabata.github.io/typing-game/";
  } ;
  const ToThreePage = () => {
    window.location.href = "https://tomoya-kawabata.github.io/threePage/";
  } ;
  const ToSearchPicturePage = () => {
    window.location.href = "https://tomoya-kawabata.github.io/photo-search/";
  } ;


  return (
    <div>
      <div className='contents-wrapper'>
        <div className='content' onClick={ToTypingPage}>
          <div className='works-img-wrapper'>
            <img src={typingImg}></img>
          </div>
          <div className='content-text'>Typing Game</div>
        </div>
        <div className='content' onClick={ToThreePage}>
          <div className='works-img-wrapper'>
            <img src={threeImg}></img>
          </div>
          <div className='content-text'>Three.js LP</div>
        </div>
        <div className='content' onClick={ToSearchPicturePage}>
          <div className='works-img-wrapper'>
            <img src={flowerImg}></img>
          </div>
          <div className='content-text'>写真検索アプリ</div>
        </div>
      </div>
    </div>
  )
}

export default Works