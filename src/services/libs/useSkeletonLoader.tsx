import { Skeleton } from 'antd';
import { useEffect, useState } from 'react';

export const useSkeletonLoader = (delay: number = 2000, justifyStart: boolean = false) => {
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingState(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const renderOrSkeleton = (fn: () => React.ReactNode, width: number = 125) => {
    if (loadingState) {
      return (
        <div className={`w-full ${justifyStart ? 'flex justify-start' : ''}`}>
          <Skeleton.Node
            active
            style={{
              width: width,
              height: '15px',
              borderRadius: 0,
              marginBlock: '0.8rem',
            }}
          />
        </div>
      );
    }
    return fn();
  };

  return { renderOrSkeleton };
};
