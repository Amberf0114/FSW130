import {Consumer} from './Context'

export function UglyThings(){
    return(
        <div>
            <Consumer>
                {({uglythings}) => 
                    (<ul> {uglythings.map(thing => {
                        return(
                            <li key={thing.title}>
                                <h1>{thing.title}</h1>
                                <img src={thing.imgUrl}/>
                                <p>{thing.description}</p> 
                            </li>

                        )
                    })}

                    </ul>
                )}
            </Consumer>

        </div>
    )
}


export default UglyThings

