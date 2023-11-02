import React from "react";
import memesData from "../memesData"

export default function Meme(){
    const [memeImg,setMemeImg]=React.useState("http://i.imgflip.com/1bij.jpg")


    function generateRandom() {
        return Math.floor(Math.random() * 100);
      }

    function generateImage(){
        let id=generateRandom()
        setMemeImg(memesData.data.memes[id].url)
    }

    const imgstyle = {
        width:'50%'
      };

    
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6">
                    <input className="form-control" type="text" placeholder="Top text"/>
                </div>
                <div className="col-lg-6">
                    <input className="form-control"type="text" placeholder="Bottom text"/>
                </div>

                <button className="mt-4 btn btn-lg btn-info text-white" onClick={generateImage}>Get New Image</button>
                <div className="text-center mt-5 ">
                    <img style={imgstyle} className="img-thumbnail" src={memeImg} />
                </div>

            </div>

            
        </div>
    );
}