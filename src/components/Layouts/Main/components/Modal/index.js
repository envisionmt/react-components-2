import React, { useRef, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

// Components
import { DeviceModal } from '../../../../Modals/DeviceModal';
import { CollectionModal } from '../../../../Modals/CollectionModal';
import AddCardModal from '../../../../Modals/AddCard';
import AddNewUploadModal from '../../../../Modals/AddNewUploadModal';
import AddWalletModal from '../../../../Modals/AddWalletModal';
import AddArtworkOrderModal from '../../../../Modals/AddArtworkOrderModal';

// Actions
import { closeModal } from '../../../../../store/app/actions';

const modalAppear = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  animation: ${modalAppear} 0.5s ease-in forwards;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const ModalContainer = styled.div`
  background: #222222;
  width: ${({ width }) => width};
  height: auto;
  border-radius: 12px;
`;

const useOutsideAlerter = (ref) => {
  const dispatch = useDispatch();
  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      dispatch(closeModal());
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};

const Modal = () => {
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const app = useSelector((state) => state.app);

  useOutsideAlerter(containerRef);

  const handleCloseModal = useCallback(() => {
    dispatch(closeModal());
  });

  const renderModal = () => {
    switch (app.currentModal) {
      case 'ADD_CARD':
        return <AddCardModal closeModal={handleCloseModal} />;
      case 'COLLECTION':
        return <CollectionModal closeModal={handleCloseModal} {...app.modalParams} />;
      case 'DEVICE':
        return <DeviceModal closeModal={handleCloseModal} {...app.modalParams} />;
      case 'ADD_NEW_UPLOAD':
        return <AddNewUploadModal closeModal={handleCloseModal} />;
      case 'ADD_WALLET':
        return <AddWalletModal closeModal={handleCloseModal} />;
      case 'ORDER_ARTWORK':
        return <AddArtworkOrderModal closeModal={handleCloseModal} {...app.modalParams} />;
      default:
        return null;
    }
  };

  if (!app.modalOpen) {
    return null;
  }

  return (
    <Wrapper>
      <ModalContainer width={app?.modalWidth} ref={containerRef}>
        {renderModal()}
      </ModalContainer>
    </Wrapper>
  );
};

export default Modal;
