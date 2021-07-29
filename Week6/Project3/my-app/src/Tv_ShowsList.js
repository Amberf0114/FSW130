import { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import { removeTvShow } from './Redux/Tv_Shows';
import { addTvShow } from './Redux/Tv_Shows';

const initialState = {tvShow: ''}

function TvShowsMap(props) {
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
        <div className="TvShowsMap">
            <form>
                <input name='tvShow' value={inputs.tvShow} onChange={handleChange} />
            </form>
                <button onClick={() => dispatch(addTvShow(inputs))}>Add TV Show</button>
            <ul>
                {props.tvShow.map(show => {
                    return(
                        <li>
                            <h1>{show.tvShow}</h1>
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
  
  export default connect( mapStateToProps)(TvShowsMap);

