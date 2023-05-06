import React, {useRef, useEffect} from 'react'
import "./Movie.css";

function Movie(props) {

    //useEffect(() => {
    //    const ele = document.querySelector(".movie-poster");
    //    ele.addEventListener("mouseenter", () => {
    //        console.log("i entered");
    //        console.log(props.name);
    //    });
    //}, []);

    function zoom(e) {
        const ele = document.querySelector(`#_${props.id}`);

        console.log(ele.offsetLeft+"    "+ele.offsetTop);

        props.hover(props.source, props.name,ele.offsetLeft,ele.offsetTop);

        //ele.style.backgroundColor="red";
        //ele.style.height = "240px";
    }
    

  return (
    <div>
        <img onMouseEnter={zoom} id={`_${props.id}`} className="movie-poster" src={props.source} alt="movie poster"/>
    </div>
  )
}

export default Movie