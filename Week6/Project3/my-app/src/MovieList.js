import { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import { addMovie } from './Redux/Movies';
import { removeMovie } from './Redux/Movies';

const initialState = {movie: ''}

function MoviesMap(props) {
    const dispatch = useDispatch()

    const [inputs, setInputs] = useState(initialState)
  
    const handleChange = (e) => {
    const {name, value} = e.target
      setInputs({
        ...inputs,
        [name] : value
      })
    }
    console.log(props)
  return (
        <div className="MoviesMap">
            <form>
                <input name='movie' value={inputs.movie} onChange={handleChange} />
            </form>
                <button onClick={() => dispatch(addMovie(inputs))}>Add Movie</button>
            <ul>
                {props.movie.map(film => {
                    return(
                        <li>
                            <h1>{film.movie}</h1>
                        </li>
                    )
                })}
            </ul>
         </div> 

  );
}

const mapStateToProps = state => {
    console.log(state)
    return(state)
  }
  
  export default connect( mapStateToProps)(MoviesMap);

              //import dispatch from Combine.js
            //import actions
            //import connect
            //mapstatetoprops
            //after props are working with movies array----create the map
            //Hook for holding copy of array?

            //Form for movies
                //handle submit
                    //value of inputs and dispatch add movie
                //handle change
                //hook for handling inputs

                //?Delete button
                    //handledelete