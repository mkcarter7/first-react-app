/* eslint-disable no-unused-vars */
/* eslint-disable no-template-curly-in-string */
import React from 'react';
import FactCard from '@/components/Card';

export default async function responseYesPage({ params }) {
  const response = await fetch('https://first-react-app-9fff1-default-rtdb.firebaseio.com/responseYes.json?orderBy="userId"&equalTo="${params.userId}"');
  const facts = await response.json();

  return (
    <div>
      {Object.values(facts).map((fact) => (
        <FactCard />
      ))}
    </div>
  );
}
