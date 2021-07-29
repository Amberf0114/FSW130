import {Link} from 'react-router-dom'


function Home(){
    return(
        <div>
            <h1>HELLO WORLD!</h1>
            <h2>What would you like to see?</h2>

            <button><Link to='/movies'>Movies</Link></button>
            <button><Link to='/tvshows'>TV Shows</Link></button>

        </div>
    )
}

export default Home