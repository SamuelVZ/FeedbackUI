import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

function Post() {
  const status = 200;
  const navigate = useNavigate();
  if (status === 400) {
    return <Navigate to='/notFound' />;
  }

  const onClick = () => {
    console.log('hello');
    navigate('/about');
  };
  return (
    <div>
      <h1>PostPage</h1>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path='/show' element={<h1>show displayed</h1>} />
      </Routes>
    </div>
  );
}
export default Post;
