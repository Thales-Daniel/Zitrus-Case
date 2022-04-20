import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Details() {
  const lastUser = useSelector((state) => state.customers);

  useEffect(() => {
  }, [lastUser]);
  return (
    <div className="detailsContainer">
      {lastUser.name}
    </div>
  );
}

export default Details;
