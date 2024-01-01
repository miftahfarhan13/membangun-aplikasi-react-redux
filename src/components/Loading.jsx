import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

function Loading() {
  return (
    <div style={{ position: 'fixed', top: 0, zIndex: 100 }}>
      <LoadingBar progressIncrease={1} showFastActions updateTime={100} />
    </div>
  );
}

export default Loading;
