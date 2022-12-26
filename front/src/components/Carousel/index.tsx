import React from 'react';
import { usePagination } from './usePagination';

import { Container, Item, NavItems } from './styles';
import { ITemplate } from '../../types/templates';

import PreviousNav from '../../assets/images/previous.png';
import NextNav from '../../assets/images/next.png';

interface Props {
  items: ITemplate[];
  selectedPage: number;
  changePage: (page: number) => void;
}

const CarouselComponent: React.FC<Props> = ({
  items,
  selectedPage,
  changePage,
}) => {
  const total = items.length;

  const pagination = usePagination({ page: selectedPage, total });

  return (
    <Container>
      <NavItems
        disabled={selectedPage === 1}
        onClick={() => changePage(selectedPage - 1)}
      >
        <img src={PreviousNav} alt="previous" />
      </NavItems>

      {items.length > 0 &&
        pagination.map((page) => {
          const active = selectedPage === page;
          const template = items[page - 1];

          return (
            <Item
              active={active}
              key={template.id}
              onClick={() => changePage(page)}
            >
              <div>
                <img
                  src={`${String(
                    process.env.REACT_APP_BASE_URL_STATIC,
                  )}/thumbnails/${template.thumbnail}`}
                  alt={template.title}
                />
              </div>
              <h5>{template.id}</h5>
            </Item>
          );
        })}

      <NavItems
        disabled={total === selectedPage}
        onClick={() => changePage(selectedPage + 1)}
      >
        <img src={NextNav} alt="previous" />
      </NavItems>
    </Container>
  );
};

export default CarouselComponent;
