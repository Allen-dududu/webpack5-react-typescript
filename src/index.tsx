import React from 'react'
import ReactDOM from 'react-dom'
import './app.less'
// import './common-test.js'

const App = () => {
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

  let x =
    'ddvgvdsffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddscs回家吧vvv计划vvv巨巨巨巨巨和v看韩剧d'
})
ReactDOM.render(<App />, document.getElementById('root'))
