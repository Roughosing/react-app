import React from 'react'
import { Button } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'
import { Link } from 'react-router'
import Contact from './Contact'

class Home extends React.Component {
    render () {
        return (
            <div>
                This is the Home page.
                <Button tag={Link} to="/contact">Contact</Button>
            </div>
        )
    }
} 

export default Home