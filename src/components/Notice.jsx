import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa6';

const Notice = ({ mode }) => {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    setShowNotice(true);

    const noticeTimeOut = setTimeout(() => {
      setShowNotice(false);
    }, 3000);

    return () => {
      clearTimeout(noticeTimeOut);
    };
  }, [mode]);

  return (
    <>
      {showNotice && (
        <div id='notice'>
          {mode ? (
            <>
              Dark <FaMoon />
            </>
          ) : (
            <>
              Light <FaSun />
            </>
          )}
          mode activated
        </div>
      )}
    </>
  );
};

export default Notice;
