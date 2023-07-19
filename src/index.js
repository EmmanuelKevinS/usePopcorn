import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import StarRating from './StarRating';

// function Test() {
//   const [movieRating, setMovieRating] = useState('Rate movie');
//   return (
//     <div>
//       <StarRating
//         outlineColor="blue"
//         color="blue"
//         maxRating={10}
//         onSetMovieRating={setMovieRating}
//       />
//       <p>
//         {movieRating > 1
//           ? `This movie was rated ${movieRating} stars`
//           : movieRating > 0
//           ? `This movie was rated ${movieRating} star`
//           : movieRating}
//       </p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={['Terrible!', 'Bad!', 'Okay', 'Good!', 'Amazing!']}
    />
    <StarRating
      maxRating={10}
      outlineColor="red"
      color="red"
      size={24}
      className="test"
      defaultRating={5}
    />
    <Test /> */}
  </React.StrictMode>
);
