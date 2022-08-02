import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import './App.css';
import News from './components/News/News';

function App() {
  const[articles,setArticles]=useState([])
  useEffect(()=>{
    const url='https://newsapi.org/v2/everything?q=Apple&from=2022-02-15&sortBy=popularity&apiKey=91035f6fe6774028800de6033bc790f0';
    fetch(url)
    .then(res=>res.json())
    .then(data=>setArticles(data.articles))
  },[])
  return (
    <div>
        <h2 style={{textAlign:'center'}}>Top Breaking News :{articles.length}</h2>
      {
        articles.map(article=><News article={article} ></News>)
      }
    
    </div>
  );
}

export default App;
