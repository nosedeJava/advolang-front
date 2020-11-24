import React, { useEffect } from 'react';
import './Subscription.css';
import { componentDidMountGet } from '../../services/Petitions.js';
import {SubscriptionList} from './SubscriptionList';

export function Subscription(props) {

  const user = JSON.parse(localStorage.getItem('user'));

  const [loading, setLoading] = React.useState(true);
  const [subscriptions, setSubscriptions] = React.useState([]);

  useEffect(() => {
    componentDidMountGet(setLoading, setSubscriptions, '/api/users/'+user.id+'/subscriptions');
  }, []);


  if (loading) {
    return (
      <div style = {{backgroundColor: 'red', lineHeight: 2 }}>
       Loading .......

      </div>
    );

  }
  return (

    <div className="subsGeneralDiv">
      <SubscriptionList subscriptions={subscriptions} />
    </div>

  );
}
