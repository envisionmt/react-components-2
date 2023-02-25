import React from 'react';

// Components
import { CollectionCarousel } from '../../../components/Collections/Carousel';
import { Loader } from '../../../components/Loader';
import { DiscoverHeader } from '../../../components/DiscoverHeader';

// Hooks
import { useAllCategories } from '../../../hooks/data';

// Styled
import { Wrapper, LowerWrapper } from './styled';

export function CollectionHome() {
  const categories = useAllCategories();

  return (
    <Wrapper>
      <DiscoverHeader activeLink="collections" />
      <LowerWrapper>
        {categories.isLoading && <Loader />}
        {!categories.isLoading && (
          <>
            {categories.data?.map((category) => (
              <CollectionCarousel title={category.name} collections={category.collections} key={category.id} />
            ))}
          </>
        )}
      </LowerWrapper>
    </Wrapper>
  );
}
