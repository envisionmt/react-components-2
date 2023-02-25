import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import { Loader } from '../../Loader';
import { DeviceCard } from '../Card';

// Hooks
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { useAllDevicesInfinite } from '../../../hooks/data';

// Styled
import { Wrapper, FlexContainer, GridItem, LoadingMore } from './styled';

export function InfiniteDeviceGrid({ queryKey, queryParams, limit }) {
  const loadMoreRef = useRef();
  const devices = useAllDevicesInfinite(queryKey, queryParams, limit);

  useIntersectionObserver({
    target: loadMoreRef,
    onIntersect: devices.fetchNextPage,
    enabled: devices.hasNextPage,
  });

  return (
    <Wrapper>
      <FlexContainer>
        {devices?.data?.pages?.map((page) => (
          <React.Fragment key={`page-${page.nextOffset}`}>
            {page.devices?.map((device) => (
              <GridItem key={device.id}>
                <DeviceCard device={device} />
              </GridItem>
            ))}
          </React.Fragment>
        ))}
      </FlexContainer>
      <LoadingMore ref={loadMoreRef}>
        {(devices.isFetchingNextPage || devices.isLoading) && <Loader />}
        {!devices.isFetchingNextPage &&
          !devices.isLoading &&
          !devices.hasNextPage &&
          devices.data?.pages.length > 1 && <span>No more devices...</span>}
      </LoadingMore>
    </Wrapper>
  );
}

InfiniteDeviceGrid.propTypes = {
  queryKey: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  queryParams: PropTypes.object,
  limit: PropTypes.number,
};

InfiniteDeviceGrid.defaultProps = {
  queryParams: {},
  limit: 12,
};
