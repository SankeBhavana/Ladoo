import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Reward = () => {
  const [userPoints, setUserPoints] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  
  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const fetchUserPoints = async () => {
      const user = auth.currentUser;
      
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);
        
        if (userDoc.exists()) {
          setUserPoints(userDoc.data().loyaltyPoints || 0);
        } else {
          console.log('No such user document!');
        }
      } else {
        navigate('/login'); // Use navigate to redirect
      }
      setLoading(false);
    };
    
    fetchUserPoints();
  }, [auth, db, navigate]);

  const handleOrderSuccess = async () => {
    const user = auth.currentUser;
    
    if (user) {
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);
      
      if (userDoc.exists()) {
        const currentPoints = userDoc.data().loyaltyPoints || 0;
        const newPoints = currentPoints + 10; // Assume 10 points per successful order
        
        await updateDoc(userDocRef, {
          loyaltyPoints: newPoints,
        });
        
        setUserPoints(newPoints);
      } else {
        console.log('No such user document!');
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="reward-container">
      <h2>Your Loyalty Points</h2>
      <p>Current points: {userPoints}</p>
      <button onClick={handleOrderSuccess}>Simulate Order Success</button>
    </div>
  );
};

export default Reward;
