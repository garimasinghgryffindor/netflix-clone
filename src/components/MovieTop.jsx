import React from 'react'
import "./MovieTop.css"

function MovieTop(props) {

    if(props.url!=null) {
        console.log("new value");
        console.log(props.posX);
        console.log(props.posY);
        console.log(Number(props.posX)-50);
        console.log(Number(props.posY)-50);
        const ele = document.querySelector(".movie-top")
        ele.style.display = "inline-block";
        ele.style.left = (Number(props.posX)-50)+'px';
        ele.style.top = (Number(props.posY)-100)+'px';
    }

    function changeVisibility() {
        document.querySelector(".movie-top").style.display = "none";
    }

  return (
    <div className='movie-top' onMouseLeave={changeVisibility}>
        <img src={props.url} alt="movie poster"/>
        <br/><br/><br/>
        <h3>{props.name}</h3>
    </div>
  )
}

export default MovieTop