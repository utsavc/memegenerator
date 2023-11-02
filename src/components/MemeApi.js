import React,{useState,useEffect} from "react";

export default function MemeApi(){
    const[meme,setMeme]=useState({
        topText:"",
        bottomText:"",
        imgURL:"https://i.imgflip.com/265k.jpg"
    })


    const[allMemes,setAllMemes]=useState([])

    function handleChange(event){
        setMeme(prevMeme=>{
            const{value,name}=event.target
            return{
                ...prevMeme,
                [name]:value
                
            }
        })

    }

    function generateRandom(){
        return Math.floor(Math.random()*allMemes.length)
    }


    useEffect(function(){
        async function getMemes(){
            const res=await fetch("https://api.imgflip.com/get_memes")
            const data=await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    },[])



    function generateImage(){
        const id=generateRandom()
        const url=allMemes[id].url
        setMeme(prevMeme=>{
            return{
                ...prevMeme,
                imgURL:url
            }
        })        
    }


    return(
        <div className="row mt-5 ">
            <div className="col-lg-5 offset-3 ">
                <div className="mb-3 ">
                     <input placeholder="Top text" className="form-control " type="text" name="topText" value={meme.topText} onChange={handleChange} />
                </div>
                <div className="mb-3">    
                    <input placeholder="Bottom Text" className="form-control " type="text" name="bottomText" value={meme.bottomText} onChange={handleChange} />
                </div>
                <button className="btn btn-primary " onClick={generateImage}>Generate Image</button>
                <h3 className="text-primary mt-5 ">{meme.topText}</h3>
                <h3 className="text-success ">{meme.bottomText}</h3>
            </div>
            <div className="col-lg-4 w">
                <img src={meme.imgURL} className="img img-thumbnail" />
            </div>
        </div>
    )
}