'use client';

import PropTypes from 'prop-types'; // Import PropTypes

import Card from 'react-bootstrap/Card';

function FactCard({ fact }) {
  return (
    <Card>
      <Card.Body>{fact}</Card.Body>
    </Card>
  );
}

// Add PropTypes validation
FactCard.propTypes = {
  fact: PropTypes.string.isRequired, // Validate 'fact' as a required string
};
export default FactCard;
