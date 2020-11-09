import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import ImageLoader from '../imageLoader/imageLoader.component';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-item.styles';

export const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  const [ImageLoading, setImageLoading] = useState(false);

  useEffect(() => {
    setImageLoading(true);
    setTimeout(() => {
      setImageLoading(false)
    }, 2000)
  }, []);

  return (
    <CollectionItemContainer>
      {
        ImageLoading ?
          <>
            <ImageLoader />
            <BackgroundImage
              imageUrl={imageUrl}
            />
          </>
          :
          ""
      }

      <BackgroundImage
        imageUrl={imageUrl}
      />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
