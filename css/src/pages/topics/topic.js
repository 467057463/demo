import React from 'react';

import { useParams } from 'react-router-dom';

function Topic(){
  console.log(useParams())
  const { id } = useParams();
  return(
    <div className="topic">
      topic show id: {id}
    </div>
  )
}

export default Topic;
