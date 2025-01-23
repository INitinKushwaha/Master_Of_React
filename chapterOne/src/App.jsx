import './App.css'

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
  return (
    <h3>This is Demo App</h3>
  )
}


export default App
