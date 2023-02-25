import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, DiscoverNav, NavLink, ContentWrapper } from './styled';

export function TabbedContent({ tabs }) {
  const [current, setCurrent] = useState(0);

  function handleNavClick(tabId) {
    const index = tabs.findIndex((tab) => tab.id === tabId);
    setCurrent(index);
  }

  function renderNavItems() {
    return tabs.map((tab, index) => (
      <NavLink id={`nav-${tab.id}`} isActive={current === index} onClick={() => handleNavClick(tab.id)}>
        {tab.title}
      </NavLink>
    ));
  }

  return (
    <Wrapper>
      <DiscoverNav>{renderNavItems()}</DiscoverNav>
      <ContentWrapper>{tabs[current]?.content || null}</ContentWrapper>
    </Wrapper>
  );
}

TabbedContent.propTypes = {
  tabs: PropTypes.array,
};

TabbedContent.defaultProps = {
  tabs: [],
};
