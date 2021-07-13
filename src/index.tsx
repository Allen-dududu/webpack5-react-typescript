import React from 'react'
import ReactDOM from 'react-dom'
import './app.less'
const NODE_ENV = process.env.NODE_ENV
// import './common-test.js'

const App = () => {
  if (NODE_ENV === 'production') {
    console.log('production')
  } else {
    console.log(NODE_ENV)
  }
  return (
    <div>
      hello world2 <div>hello world2 </div>
      <div>hello world2 </div>
      <div>hello world2 </div>
      <div>hello world2 </div> <div>hello world2 </div>
      <div>hello world2 </div>
      <div>hello world2 </div>
      <div>hello world2 </div>
      <div>hello world2 </div>
    </div>
  )
}
const promise = new Promise(resolve => {
  setTimeout(() => {
    console.log(promise)
    resolve
  })
})
promise.then(() => {
  console.log('then')
})
ReactDOM.render(<App />, document.getElementById('root'))
