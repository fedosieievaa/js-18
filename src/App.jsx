import './App.css';
import Post from './components/Post';
import Ray from "./components/assets/img/Ray_Skywalker.jpeg";

const RAY_IMAGE = Ray;


const post = {
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: RAY_IMAGE,
    date: "26 февр."
}
      
function App() {
    return ( 
            <>
                <Post content={post.content} image={post.image} date={post.date}/>
            </>
    );
}

export default App;