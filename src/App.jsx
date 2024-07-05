import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Posts } from './component/Posts';
import { CreatePost } from './component/CreatePost';
import { ViewPost } from './component/ViewPost';
import { EditPost } from './component/EditPost';
import { Topbar } from './component/Topbar';
import './App.css'

function App() {
  let url = import.meta.env.VITE_url
  return (
    <>
      <Router basename={ url }>
        <div className='container'>
          <Topbar/>
          <div className='content'>
            <Routes basename={ url }>
              <Route path="/" element={<Navigate to="/posts" />} />
              <Route path="/posts" exact element={<Posts/>} />
              <Route path="/posts/:id" exact element={<ViewPost/>} />
              <Route path="/posts/new" exact element={<CreatePost/>} />
              <Route path="/posts/edit/:id" exact element={<EditPost/>} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
/*
        

*/