import React, { useState, useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';

// Components
import { Loader } from '../../../components/Loader';
import MainButton from '../../../components/Button/MainButton';
import { CanvasImage } from './CanvasImage';
import { useResize } from '../../../hooks/useResize';
import { useDigitalCanvasData } from '../../../hooks/data';

// Actions
import { addCartItem } from '../../../store/checkout/actions';

// Configs
import { frameColorItems } from '../../../configs/ListConfig';
import { dataOne } from './data';

import {
  RootWrapper,
  CanvasImageWrapper,
  SettingWrapper,
  ContentWrapper,
  ContentTitle,
  ConfigureBlock,
  Title,
  DisplaySizeWrapper,
  ConfigureBlockTitle,
  ConfigureBlockPriceTitle,
  DisplaySizeItemWrapper,
  DisplaySizeItemColumn,
  DisplaySizeItem,
  FrameColorWrapper,
  FrameColorItemWrapper,
  FrameColorItemColumn,
  FrameColorItem,
  PurchaseWrapper,
  PurchasePriceWrapper,
  PurchaseTotalWrapper,
  PurchaseTotalPrice,
  ContentDescriptionWrapper,
  ContentDescriptionItem,
  ContentDescription,
  ContentDescriptionAttribute,
  CardContainer,
  CardTopContainer,
  ThumbnailContainer,
  ThumbnailAspectRatioBox,
  ThumbnailFrame,
  ThumbnailImage,
  DividerLine,
  ItemTotal,
  CanvasDisplayWrapper,
  SettingsWrapper,
} from './styled';

export function DigitalCanvas({ top }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { size } = useParams();
  const frameRef = useRef(null);
  const settingRef = useRef(null);
  const { width } = useResize(frameRef);
  const { dimensions } = useResize(settingRef);

  const checkoutCartData = useSelector((state) => state.checkout.checkoutCartData);
  const purchaseDisplayItems = checkoutCartData?.params?.displayItems;

  const { data: digitalCanvasData, isLoading } = useDigitalCanvasData();
  const digitalCanvasList = digitalCanvasData?.digtalCanvas;
  const frameItems = digitalCanvasData?.frames;

  const [digitalCanvas, setDigitalCanvas] = useState([]);
  const [activeDisplayItem, setActiveDisplayItem] = useState(null);
  const [selectedFrame, setSelectedFrame] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [activeFrameColor, setActiveFrameColor] = useState(frameColorItems[3]);

  const convertFloat = (price) => {
    if (price) return parseFloat(price.replace(/,/g, ''));
    return 0;
  };

  const setActiveFrameItem = (displayCanvas, frameColor) => {
    frameItems.forEach((frame) => {
      if (frame?.metadata?.Size === displayCanvas?.metadata?.Size) {
        if (frameColor.name === 'No frame') {
          setSelectedFrame(null);
          setTotalPrice(convertFloat(displayCanvas?.metadata?.MSRPPrice));
        } else {
          setSelectedFrame(frame);
          setTotalPrice(convertFloat(displayCanvas?.metadata?.MSRPPrice) + convertFloat(frame?.metadata?.Price));
        }
      }
    });
  };

  useEffect(() => {
    if (digitalCanvasList) {
      const tempDigitalCanvas = digitalCanvasList;
      for (let i = 0; i < tempDigitalCanvas.length - 1; i += 1) {
        for (let j = i + 1; j < tempDigitalCanvas.length; j += 1) {
          if (tempDigitalCanvas[i].metadata.Size > tempDigitalCanvas[j].metadata.Size) {
            const tempCanvas = tempDigitalCanvas[i];
            tempDigitalCanvas[i] = tempDigitalCanvas[j];
            tempDigitalCanvas[j] = tempCanvas;
          }
        }
      }

      setDigitalCanvas(tempDigitalCanvas);
      setActiveDisplayItem(tempDigitalCanvas[0]);
      setActiveFrameItem(activeDisplayItem, activeFrameColor);
    }
  }, [digitalCanvasList, activeDisplayItem]);

  useEffect(() => {
    if (size) {
      const matchedSize = digitalCanvas?.filter((i) => i.metadata.Size === `${size.split('-')[2]}`);
      if (matchedSize?.length > 0) {
        setActiveDisplayItem(matchedSize[0]);
      }
    }
  }, [activeDisplayItem, digitalCanvas]);

  const handleClickDisplaySize = (displayItem) => {
    setActiveDisplayItem(displayItem);
    setActiveFrameItem(displayItem, activeFrameColor);
    history.push(`/canvas/p/digital-canvas-${displayItem?.metadata?.Size}`);
  };

  const handleClickFrameColor = (frameColor) => {
    setActiveFrameColor(frameColor);

    if (frameColor.name === 'No frame') {
      setSelectedFrame(null);
      setTotalPrice(
        Math.round((totalPrice - convertFloat(selectedFrame?.metadata?.Price) + Number.EPSILON) * 100) / 100
      );
    } else {
      setActiveFrameItem(activeDisplayItem, frameColor);
    }
  };

  const handleClickPurchase = useCallback(() => {
    const displayItemsTemp = [];

    let selectedFrameId;
    if (selectedFrame) {
      Object.keys(selectedFrame?.metadata).forEach((key) => {
        if (key.includes(activeFrameColor.name)) {
          selectedFrameId = selectedFrame.metadata[key];
        }
      });
    }

    const displayItem = {
      id: activeDisplayItem.id,
      size: activeDisplayItem?.metadata.Size,
      price: activeDisplayItem?.metadata.MSRPPrice,
      priceId: activeDisplayItem?.metadata.MSRPPriceID,
      quantity: 1,
      type: 'display',
    };

    const frameItem = selectedFrame
      ? {
          id: selectedFrame.id,
          size: selectedFrame?.metadata.Size,
          price: selectedFrame?.metadata.Price,
          priceId: selectedFrameId,
          color: activeFrameColor.name,
          quantity: 1,
          type: 'frame',
        }
      : {};

    if (purchaseDisplayItems) {
      let flag = false;
      purchaseDisplayItems.forEach((purchaseDisplayItem) => {
        if (displayItem.id === purchaseDisplayItem.id) {
          flag = true;
          purchaseDisplayItem.quantity += 1;
        }
        displayItemsTemp.push(purchaseDisplayItem);
      });

      if (!flag) {
        displayItemsTemp.push(displayItem);
      }
    } else {
      displayItemsTemp.push(displayItem);
    }

    if (selectedFrame !== null) {
      if (displayItemsTemp) {
        let flag = false;
        displayItemsTemp.forEach((purchaseDisplayItem) => {
          if (frameItem.id === purchaseDisplayItem.id) {
            flag = true;
            purchaseDisplayItem.quantity += 1;
          }
        });

        if (!flag) {
          displayItemsTemp.push(frameItem);
        }
      } else {
        displayItemsTemp.push(frameItem);
      }
    }

    displayItemsTemp.forEach((item) => {
      dispatch(addCartItem(item));
    });
  });

  return (
    <RootWrapper>
      {isLoading && <Loader color="white" />}
      {!isLoading && (
        <>
          <CanvasDisplayWrapper width={dimensions.width}>
            <CanvasImageWrapper>
              <CanvasImage size={activeDisplayItem?.metadata?.Size} color={activeFrameColor?.name} />
            </CanvasImageWrapper>
          </CanvasDisplayWrapper>
          <SettingsWrapper>
            <SettingWrapper top={top}>
              <ContentWrapper ref={settingRef}>
                <Title>Digital Canvas</Title>
                <ConfigureBlock>
                  <DisplaySizeWrapper>
                    <ConfigureBlockTitle>Display Size</ConfigureBlockTitle>
                    <DisplaySizeItemWrapper>
                      {digitalCanvas?.map((displayItem) => (
                        <DisplaySizeItemColumn key={displayItem?.id}>
                          <DisplaySizeItem
                            onClick={() => handleClickDisplaySize(displayItem)}
                            isActive={activeDisplayItem?.id === displayItem?.id}
                          >
                            {`${displayItem?.metadata?.Size} "`}
                          </DisplaySizeItem>
                        </DisplaySizeItemColumn>
                      ))}
                    </DisplaySizeItemWrapper>
                  </DisplaySizeWrapper>
                  <DividerLine />
                  <FrameColorWrapper>
                    <ConfigureBlockTitle>Frame Color</ConfigureBlockTitle>
                    <FrameColorItemWrapper>
                      {frameColorItems.map((frameColor) => (
                        <FrameColorItemColumn pr={24} key={frameColor?.name}>
                          <FrameColorItem
                            onClick={() => handleClickFrameColor(frameColor)}
                            isActive={activeFrameColor?.id === frameColor?.id}
                            color={frameColor?.color}
                            width={width}
                            ref={frameRef}
                          >
                            {frameColor?.id === 4 && 'No frame'}
                          </FrameColorItem>
                        </FrameColorItemColumn>
                      ))}
                    </FrameColorItemWrapper>
                  </FrameColorWrapper>
                  <DividerLine />
                  <FrameColorWrapper>
                    <ConfigureBlockTitle>Dimensions (W x H x D)</ConfigureBlockTitle>
                    <ContentDescriptionWrapper>
                      <ContentDescriptionItem>
                        <ContentDescriptionAttribute>
                          {activeDisplayItem?.metadata?.Width} x {activeDisplayItem?.metadata?.Height} x{' '}
                          {activeDisplayItem?.metadata?.Depth}
                        </ContentDescriptionAttribute>
                      </ContentDescriptionItem>
                    </ContentDescriptionWrapper>
                  </FrameColorWrapper>
                  <DividerLine />
                  <PurchaseWrapper>
                    <PurchasePriceWrapper>
                      <ConfigureBlockPriceTitle>Canvas</ConfigureBlockPriceTitle>
                      <ItemTotal>$ {activeDisplayItem ? activeDisplayItem.metadata.Price : 0}</ItemTotal>
                    </PurchasePriceWrapper>
                    <PurchasePriceWrapper>
                      <ConfigureBlockPriceTitle>Frame</ConfigureBlockPriceTitle>
                      <ItemTotal>$ {selectedFrame ? selectedFrame?.metadata.Price : 0}</ItemTotal>
                    </PurchasePriceWrapper>
                    <PurchaseTotalWrapper>
                      <ConfigureBlockPriceTitle>Total</ConfigureBlockPriceTitle>
                      <PurchaseTotalPrice>
                        <CurrencyFormat
                          value={totalPrice?.toFixed(2)}
                          displayType="text"
                          thousandSeparator
                          prefix="$"
                          renderText={(value) => <PurchaseTotalPrice>{value}</PurchaseTotalPrice>}
                        />
                      </PurchaseTotalPrice>
                    </PurchaseTotalWrapper>
                    <DividerLine />
                    <MainButton color="red" borderColor="#333333" title="Purchase" onClick={handleClickPurchase} />
                  </PurchaseWrapper>
                </ConfigureBlock>
              </ContentWrapper>
              <ContentWrapper>
                {dataOne.map((card) => (
                  <CardContainer>
                    <CardTopContainer>
                      <ContentTitle>{card.title}</ContentTitle>
                      <ContentDescription>{card.description}</ContentDescription>
                    </CardTopContainer>
                    <ThumbnailContainer>
                      <ThumbnailAspectRatioBox>
                        <ThumbnailFrame>
                          <ThumbnailImage backgroundImage={card.image} />
                        </ThumbnailFrame>
                      </ThumbnailAspectRatioBox>
                    </ThumbnailContainer>
                  </CardContainer>
                ))}
              </ContentWrapper>
            </SettingWrapper>
          </SettingsWrapper>
        </>
      )}
    </RootWrapper>
  );
}

DigitalCanvas.propTypes = {
  top: PropTypes.string,
};

DigitalCanvas.defaultProps = {
  top: '20px',
};
