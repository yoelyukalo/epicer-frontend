import React, { useState, useEffect } from 'react';

// css
import './css/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'

// components
import SignUpForm from './jwt/SignUpForm';
import LoginForm from './jwt/LoginForm';

function Home(props) {
  const [user, setUser] = useState({})
  const [form, setForm] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      fetch(`http://localhost:3000/auto_login`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(r => r.json())
        .then(data => {
          setUser(data)
        })
    }
  }, [])

  const handleLogin = (user) => {
    setUser(user)
  }

  const handleFormSwitch = (input) => {
    setForm(input)
  }

  const renderForm = () => {
    switch (form) {
      case "login":
        return <LoginForm handleFormSwitch={handleFormSwitch} handleLogin={handleLogin} history={props.history} />
      default:
        return <SignUpForm handleFormSwitch={handleFormSwitch} handleLogin={handleLogin} history={props.history} />
    }
  }

  return (
    <div>
      {/* <Alert variant="info" style={{backgroundColor: "lightblue", textAlign: "center"}}>
        User authentication currently disabled. Please press the submit button.
      </Alert> */}
      <div className="WelcomeBanner">
        <Card className="Banner" bg="light">
          <Card.Header>Welcome to Epicer!</Card.Header>
        </Card>
        <br />
        <br />
        <br />
        {renderForm()}
      </div>
    </div>
  );
}

export default Home;