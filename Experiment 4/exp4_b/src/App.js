import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './features/counter/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🚀 Redux Counter</h1>

      <div style={styles.card}>
        {/* key makes animation trigger when number changes */}
        <div key={count} style={styles.counter}>
          {count}
        </div>

        <div style={styles.row}>
          <button
            style={{ ...styles.button, ...styles.inc }}
            onClick={() => dispatch(increment())}
          >
            ➕ Increment
          </button>

          <button
            style={{ ...styles.button, ...styles.dec }}
            onClick={() => dispatch(decrement())}
          >
            ➖ Decrement
          </button>
        </div>

        <button
          style={{ ...styles.button, ...styles.reset }}
          onClick={() => dispatch(reset())}
        >
          🔄 Reset
        </button>
      </div>

      {/* Animation CSS */}
      <style>
        {`
          @keyframes pop {
            0% { transform: scale(0.6); opacity: 0.5; }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); opacity: 1; }
          }

          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }

          button:hover {
            transform: translateY(-4px) scale(1.05);
            box-shadow: 0 12px 25px rgba(0,0,0,0.3);
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
    fontFamily: 'Poppins, sans-serif',
  },

  title: {
    color: '#5a095d',
    marginBottom: '40px',
    fontSize: '48px',
    letterSpacing: '2px',
    textShadow: '0 6px 20px rgba(0,0,0,0.25)',
  },

  card: {
    backdropFilter: 'blur(25px)',
    background: 'rgba(255,255,255,0.3)',
    padding: '60px',
    borderRadius: '30px',
    width: '450px',
    textAlign: 'center',
    boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
    border: '1px solid rgba(255,255,255,0.4)',
    animation: 'float 4s ease-in-out infinite',
  },

  counter: {
    fontSize: '90px',
    fontWeight: 'bold',
    marginBottom: '40px',
    background: 'linear-gradient(45deg, #ff1493, #ff69b4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 5px 20px rgba(0,0,0,0.2)',
    animation: 'pop 0.4s ease',
  },

  row: {
    display: 'flex',
    gap: '20px',
    marginBottom: '25px',
  },

  button: {
    flex: 1,
    padding: '16px',
    border: 'none',
    borderRadius: '15px',
    color: '#fff',
    fontSize: '18px',
    cursor: 'pointer',
    transition: '0.3s',
    boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
  },

  inc: {
    background: 'linear-gradient(45deg, #00c9ff, #92fe9d)',
  },

  dec: {
    background: 'linear-gradient(45deg, #f857a6, #ff5858)',
  },

  reset: {
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    width: '100%',
  },
};

export default App;