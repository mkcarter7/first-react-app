/* eslint-disable no-unused-vars */

'use client';

// any component that uses useAuth needs this because if a component directly imports useAuth, it needs to be a client component since useAuth uses React hooks.

import { Button } from 'react-bootstrap';
import { signOut } from '@/utils/auth'; // anything in the src dir, you can use the @ instead of relative paths
import { useAuth } from '@/utils/context/authContext';
import { useEffect, useState } from 'react';

function Home() {
  const [uselessFact, setUselessFact] = useState({});

  const { user } = useAuth();

  const fetchFact = async () => {
    const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en');
    const fact = await response.json();

    setUselessFact(fact);
  };
  const selectResponse = (boolean) => {
    const obj = {
      userId: user.uid,
      permalink: uselessFact.permalink,
      response: Boolean,
    };
    fetchFact();
    return obj;
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <>
      <h2>Did you know this fact?</h2>
      {uselessFact.text}
      <button className="btn btn-sucess" type="button" onClick={() => selectResponse(true)}>
        YES
      </button>
      <button className="btn btn-danger" type="button" onClick={() => selectResponse(false)}>
        NO
      </button>
    </>
  );
}

export default Home;
