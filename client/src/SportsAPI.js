
import React, { Component } from 'react'
import Navbar from './Navbar';

export default class SportsAPI extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles:[]
        }
    }
    componentDidMount(){
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=02eda2ae3d4045acaea7c40286459dbf')
        .then((response)=>{
            return response.json();
        })
        .then((myJson)=>{
            this.setState({
                articles: myJson.articles
            }); 
        });
    }
    render() {
        console.log(this.state);

        return (
            <>
            
                <Navbar />
            
                <div className='container'>
                    <div className="sample">
                        Sports
                    </div>
                </div>

                <div className="newsapi">
                    {this.state.articles.map((item,index)=>{
                        return (
                            <div className="container">
                                <div class="card">
                                
                                <img src={item.urlToImage} style={{height:'30vw'}}  alt='Loading...' />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text"><h9>{item.description}</h9></p>
                                    <p className="card-text">{item.content}</p>
                                    <a href={item.url} target={"_blank"} >Read More...</a>
                                </div>
                                </div>
                            </div>
                        )
                    })}
                </div>


            </>
        )
    }
}

