import React, { useEffect, useState } from 'react';

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch users data
  useEffect(() => {
    fetch('/all-users') // Replace with your backend URL
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load users');
        setLoading(false);
      });
  }, []);

  // Fetch orders for a specific user
  const fetchUserOrders = (userId) => {
    setLoading(true);
    fetch(`/api/user-orders/${userId}`) // Replace with your backend URL
      .then((res) => res.json())
      .then((data) => {
        setOrders((prevOrders) => ({
          ...prevOrders,
          [userId]: data,
        }));
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load orders');
        setLoading(false);
      });
  };

  return (
    <div className="container mt-5">
      <h2>Manage Users</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => fetchUserOrders(user.id)}
                    >
                      View Orders
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {Object.keys(orders).map((userId) => (
            <div key={userId} className="order-history">
              <h4>Orders for {users.find((user) => user.id === userId)?.name}</h4>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {orders[userId]?.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.amount / 100} INR</td> {/* Assuming amount is in paise */}
                      <td>{order.status}</td>
                      <td>{new Date(order.date).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageUser;
