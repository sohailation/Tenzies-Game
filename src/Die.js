import React from "react";
// import useSound from 'use-sound';
// import select from "./sound/click.wav"
// import unselect from "./sound/click1.wav"



export default function Die(props){

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    // var audio = new Audio(select);
    // var audio2 = new Audio(unselect);

    // function click(){
    //     props.isHeld ? audio.play() : audio2.play()
    // }


    return(
        <div className="die-con" style={styles} onClick={props.holdDice}>
            <h2>{props.value}</h2>
        </div>
    )

}