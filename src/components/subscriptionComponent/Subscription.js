import React, { useEffect } from 'react';
import './Subscription.css';
import { componentDidMountGet } from '../../services/Petitions.js';
import {SubscriptionList} from './SubscriptionList';
import {cylonLoading} from '../loadingComponent/Loading';

export function Subscription(props) {

  const user = JSON.parse(localStorage.getItem('user'));

  const [loading, setLoading] = React.useState(true);
  const [subscriptions, setSubscriptions] = React.useState([]);

  useEffect(() => {
    componentDidMountGet(setLoading, setSubscriptions, '/api/users/'+user.id+'/subscriptions');
  }, []);


  if (loading) {
    return (
      <div style = {{backgroundColor: 'transparent', width:"10vw"}}>
        <div  className="divLoad">
          {cylonLoading()}
        </div>
      </div>
    );

  }
  return (

    <div className="subsGeneralDiv">
      <SubscriptionList subscriptions={subscriptions} />
    </div>

  );
}
