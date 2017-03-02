// src/auth/index.js

import {router} from '../../router/index'

// URL and endpoint constants
const API_URL = 'http://localhost:3001/'
const LOGIN_URL = API_URL + 'sessions/create/'
const SIGNUP_URL = API_URL + 'users/'

export default {
  user: {
    userID: 0,
    username: '',
    type: 0
  },
  setUser(userID, username, type){
    if(userID === null){
      username = null
      type = null
    }
    this.user.userID = userID
    this.user.username = username
    this.user.type = type
  },
  authenticate(username, password){
    let userID = 1
    let type = 2
    if(username === 'admin'){
      type = 1
    }
    this.setUser(userID, username, type)
    localStorage.setItem('usertoken', JSON.stringify(this.user))
  },
  checkAuthentication(){
    let token = localStorage.getItem('usertoken')
    if(token){
      token = JSON.parse(token)
      this.setUser(token.userID, token.username, token.type)
    }else{
      this.setUser(null)
    }
  },
  deaunthenticate(){
    localStorage.removeItem('usertoken')
    this.setUser(null)
  }
}
