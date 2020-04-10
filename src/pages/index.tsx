import React, { useState } from "react"
import "./index.scss"
// import Link from "gatsby-link"

const Index = () => {
    const [counter, setCounter] = useState<number>(0)

    return (
        <>
            <input type="button" value="+" onClick={_ => setCounter(counter - 1)} />
            <p>{counter}</p>
            <input type="button" value="-" onClick={_ => setCounter(counter + 1)} />
        </>
    )
}

export default Index

// export default () => 
//     <div>
//         <h1>Hello world!</h1>
//         {/* <Link to="/page-2" >link to page 2</Link> */}
//     </div>
