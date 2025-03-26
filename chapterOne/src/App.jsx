import './App.css'
import mycar from './clss'
import { hello1 } from './function'
function App() {

  let name = 'React'
  return (
    <div>
    <h1>Hello In Master Class Of {name}</h1>
    <Demo></Demo>
    </div>
  )
}
function Demo() {
  console.log('Demo Component')
  console.log(mycar.show());
  console.log(hello1());

  return (
    <>
      <h3>This is Demo App</h3>
      <h2>hello</h2>
    </>
  )
}


export default App
