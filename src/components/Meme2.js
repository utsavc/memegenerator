import React,{useState} from "react";
import memesData from "../memesData";

export default function Meme2(){
    const[meme,setMeme]=useState({
        topText:"",
        bottomText: "",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    // const[allMemeImages,setAllMeMeImages]=useState(memesData)

    function generateImage(){
        const id=generateRandom()
        const url=memesData.data.memes[id].url
        setMeme(prevMeme=>{
            return{
                ...prevMeme,                
                randomImage:url
            }
        })
    }

    function generateRandom(){
        return Math.floor(Math.random()*100)
    }

    function handleChange(event){
        const{name,value}=event.target
        setMeme(prevMeme=>({
            ...prevMeme,
            [name]:value
        }))

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
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>

            </div>

            
        </div>

    )
}