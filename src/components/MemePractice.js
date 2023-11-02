import React,{useState} from "react";
import memesData from "../memesData";

export default function MemePractice(){

    const[meme,setMeme]=useState({
        randomImage:"https://i.imgflip.com/265k.jpg",
        topText:"",
        bottomText:""
    });



    function generateImage(){
        const id=getRandom()
        const url=memesData.data.memes[id].url;
        console.log(url)
        setMeme(prevMeme=>{
            return{
                ...prevMeme,
                randomImage:url
            }
        })
    }


    function getRandom(){
        return Math.floor(Math.random()*100)
    }


    function handleChange(event){
        const{name,value}=event.target
        setMeme(prevMeme=>{
            return{
                ...prevMeme,
                [name]:value
            }
        })

    }
    
    const imgstyle = {
        width:'50%'
      };
    
    
    return(

        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6">
                    <input className="form-control" onChange={handleChange} type="text" name="topText" value={meme.topText} placeholder="Top text"/>
                </div>
                <div className="col-lg-6">
                    <input className="form-control" onChange={handleChange} type="text" name="bottomText" value={meme.bottomText} placeholder="Bottom text"/>
                </div>

                <button className="mt-4 btn btn-lg btn-info text-white" onClick={generateImage}>Get New Image</button>
                <div className="text-center mt-5 ">
                    <img style={imgstyle} className="img-thumbnail" src={meme.randomImage} />
                </div>

                <h1>{meme.topText}</h1>
                <h1>{meme.bottomText}</h1>

            </div>

            
        </div>

    )
}