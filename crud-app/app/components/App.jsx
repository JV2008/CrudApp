import React, { useState, useEffect } from 'react';

const API_URL = 'http://localhost:5000/api/auth/login';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Check for existing token on component mount
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store token and user info
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      setToken(data.token);
      setUser(data.user);
      setEmail('');
      setPassword('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  // Styles
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    card: {
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
      padding: '40px',
      width: '100%',
      maxWidth: '400px',
    },
    title: {
      textAlign: 'center',
      margin: '0 0 30px 0',
      color: '#333',
      fontSize: '28px',
      fontWeight: '600',
    },
    inputGroup: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      color: '#555',
      fontWeight: '500',
    },
    input: {
      width: '100%',
      padding: '12px 15px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      fontSize: '16px',
      boxSizing: 'border-box',
      transition: 'border-color 0.3s',
    },
    button: {
      width: '100%',
      padding: '14px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'opacity 0.3s',
    },
    error: {
      color: '#e74c3c',
      textAlign: 'center',
      marginBottom: '15px',
      padding: '10px',
      background: '#fee',
      borderRadius: '5px',
    },
    loggedInCard: {
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
      padding: '40px',
      width: '100%',
      maxWidth: '400px',
      textAlign: 'center',
    },
    userInfo: {
      marginBottom: '30px',
    },
    userName: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#333',
      marginBottom: '10px',
    },
    userEmail: {
      color: '#777',
      fontSize: '16px',
    },
    logoutButton: {
      padding: '12px 30px',
      background: '#e74c3c',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
    },
  };

  // Render logged in state
  if (user && token) {
    return (
      <div style={styles.container}>
        <div style={styles.loggedInCard}>
          <h2 style={styles.title}>Welcome!</h2>
          <div style={styles.userInfo}>
            <div style={styles.userName}>{user.name}</div>
            <div style={styles.userEmail}>{user.email}</div>
          </div>
          <button 
            style={styles.logoutButton}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  // Render login form
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>
        
        {error && <div style={styles.error}>{error}</div>}
        
        <form onSubmit={handleLogin}>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          
          <button 
            type="submit" 
            style={styles.button}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

