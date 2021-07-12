import Post from './components/Post'
import './App.css';


const posts = [
  {
    "id": 1,
    "description": "me learning react with strapi",
    "likes": 20,
    "image": {
      "url": "/uploads/Capture_976d0f4cd2.PNG",
    }
  },
  {
    "id": 2,
    "description": "my react app",
    "likes": 15,
    "image": {
      "url": "/uploads/sss_f1269892a1.PNG",
    }
  }
]

function App() {
  return (
    <div className="App">
      {posts.map(post => <Post post={post} />)}
    </div>
  );
}

export default App;
