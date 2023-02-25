import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

// Components
import Dropdown from '../../Dropdown/index';
import OutsideAlerter from '../../OutsideAlerter';

// Configs
import { socialMediaList } from '../../../configs/ListConfig';

import {
  RootWrapper,
  StyledLink,
  CollectionTitle,
  CardContent,
  ThumbnailContainer,
  ThumbnailAspectRatioBox,
  ThumbnailImage,
} from './styled';

const ownerDropDownList = [
  { id: 'share', title: 'Share', hasSubMenu: false },
  { id: 'make-public', title: 'Make Public', hasSubMenu: false },
];

const dropDownList = [
  { id: 'follow', title: 'Follow', hasSubMenu: false },
  {
    id: 'share',
    title: 'Share',
    hasSubMenu: true,
    subMenu: socialMediaList,
  },
];

export function CollectionPreview({ collection, userId, itemIndex }) {
  const history = useHistory();
  const [isClickMore, setIsClickMore] = useState(false);
  const isCurrentUserPlayList = collection?.userId !== undefined && collection?.userId === userId;

  return (
    <OutsideAlerter onClickOutside={() => setIsClickMore(false)}>
      <RootWrapper key={collection.id} onClick={() => history.push(`/collections/${collection.id}`)}>
        <CardContent>
          <ThumbnailContainer>
            <ThumbnailAspectRatioBox>
              <ThumbnailImage src={collection?.media?.image?.low} />
            </ThumbnailAspectRatioBox>
          </ThumbnailContainer>
          <StyledLink>
            <CollectionTitle>{collection?.name}</CollectionTitle>
          </StyledLink>
        </CardContent>
        {isClickMore && (
          <Dropdown
            listItems={isCurrentUserPlayList ? ownerDropDownList : dropDownList}
            visible
            onClose={() => setIsClickMore(false)}
            itemIndex={itemIndex}
            marginTop="-80px"
            marginLeft={itemIndex % 3 === 2 ? '25px' : '240px'}
          />
        )}
      </RootWrapper>
    </OutsideAlerter>
  );
}

CollectionPreview.propTypes = {
  collection: PropTypes.object,
  userId: PropTypes.string,
  itemIndex: PropTypes.number,
};

CollectionPreview.defaultProps = {
  collection: null,
  userId: null,
  itemIndex: 0,
};
