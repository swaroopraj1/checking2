import React from 'react'
import {
    BrowserRouter as Router,
    Route, 
    Link
} from 'react-router-dom'

const MyBlog = () => (
    <Router>
        <div>
            <ul>
                <li> <Link to= "/"> Home </Link></li>
                <li> <Link to= "/aboutMe"> AboutMe </Link></li>
                <li> <Link to= "/details"> ContactMe </Link></li>
                
            </ul>
            <hr/>
            <br/>
            <Route exact path = "/" component={Home}/>
            <Route path = "/aboutMe" component={AboutMe}/>
            <Route path = "/details" component={ContactMe}/>
            
        </div>
    </Router>

)

const Home = () => ( 
    <div>
        <h1> HomePage </h1>
    </div>
)
const AboutMe = () => (
    <div>
        <h1> A very good guy ;) </h1>
    </div>
)
const ContactMe = ({match}) => (
    <div>
        <h1> My Details </h1>
        <ul>
            <li>
            <Link to={`${match.url}/name`}>
              Swaroop Raj Gudipalli
            </Link>
            </li>
            <li>
            <Link to={`${match.url}/phone`}>
              Phone: 2702265787
            </Link>
            </li>
            <li>
            <Link to={`${match.url}/city`}>
               Kurnool
            </Link>
            </li>
            <li>
            <Link to= {`${match.url}/personal`}>
                Hello every one! This is Swaroop.
            </Link>
            </li>
        </ul>
        <Route path= {`${match.url}/:contactId`} component={myinfo}/>
        <Route exact path={match.url} render={() => (
            <h2>Check me out ;) </h2>
        )
        }/>
    </div>
    
    )

const myinfo = ({match}) => (
    <div>
        {match.params.contactId}
    </div>
)

export default MyBlog