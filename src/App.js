
import './App.css';

function App() {
  return (
    <div className="App">
   <div className='logo-box'>
  <img src='./x.png' alt='logo' className='logo'/>
  <h2>Sign In To X</h2>
  <button>
  <img src='./google.png' alt='logo'/>
  Sign in with Google
  </button>
  <button>
  <img src='./applel.jpg' alt='logo'/>
  Sign in with Google
  </button>

  <hr></hr>

  <span>Or</span>

  <form>
    <input type = "text" placeholder='Phone email or username'/>
    <button>Next</button>
  </form>
 </div>
    </div>
  );
}

export default App;
