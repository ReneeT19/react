import React from 'react'
import ReactDOM from 'react-dom'

const element = React.createElement('div', {
    className: 'welcome-message'},
    React.createElement('strong',null,"hello world"))


console.log(element)

ReactDOM.rencer(
    element,
    document.getElementById('root')
)
// const people = [
//     {name: 'Renee'},
//     {name: 'Erik'},
//     {name: 'Soren'}
// ]