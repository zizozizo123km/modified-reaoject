import React, { useState, useEffect } from 'react';
import Dashboard from '@/components/Dashboard';

// Declaration to ensure TypeScript recognizes the global FB SDK object
declare const FB: any; 

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkLoginStatus = () => {
    if (typeof FB === 'undefined') {
      console.error('Facebook SDK not initialized.');
      setIsLoading(false);
      return;
    }

    FB.getLoginStatus((response: any) => {
      if (response.status === 'connected') {
        // User logged in to FB and authorized the app
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setIsLoading(false);
    });
  };

  const handleFacebookLogin = () => {
    if (typeof FB === 'undefined') return;

    // Request necessary permissions 
    FB.login((response: any) => {
      if (response.authResponse) {
        setIsLoggedIn(true);
      } else {
        // User cancelled login or declined permissions
      }
    }, { scope: 'public_profile,email' }); // Example scopes
  };

  const handleLogout = () => {
    if (typeof FB !== 'undefined') {
      FB.logout(() => {
        setIsLoggedIn(false);
      });
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    // In a standard Facebook app environment, the SDK is loaded asynchronously.
    // We poll briefly to wait for window.FB to be available before checking status.
    
    if (typeof window.FB !== 'undefined') {
        checkLoginStatus();
    } else {
        const retry = setTimeout(() => {
            if (typeof window.FB !== 'undefined') {
                checkLoginStatus();
            } else {
                console.warn('FB SDK still unavailable after timeout.');
                setIsLoading(false);
            }
        }, 1000);
        
        return () => clearTimeout(retry);
    }
  }, []);

  if (isLoading) {
    return <div>Loading Facebook App...</div>;
  }

  if (!isLoggedIn) {
    // Prompt the user to log in via Facebook
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Cloud Miner Pro - Facebook App</h1>
        <p>Please log in with Facebook to start mining.</p>
        <button onClick={handleFacebookLogin} style={{ 
          backgroundColor: '#4267B2', 
          color: 'white', 
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Login with Facebook
        </button>
      </div>
    );
  }

  return <Dashboard onLogout={handleLogout} />;
};

export default Index;