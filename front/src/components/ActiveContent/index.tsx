/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useEffect, useState } from 'react';

import { http } from '../../helpers';
import { ITemplate } from '../../types/templates';

import { Container, Content, ContentSection, Image } from './styles';
import Spinner from '../Spinner';
interface Props {
  selectedItemId: string;
}

const ActiveContent: React.FC<Props> = ({ selectedItemId }) => {
  const [template, setTemplate] = useState<ITemplate>();
  const [loading, setLoading] = useState(true);

  const requestTemplate = async (): Promise<void> => {
    try {
      const response = await http.get(`/templatessss/${selectedItemId}`);
      setLoading(false);
      setTemplate(JSON.parse(response.data));
    } catch (err) {
      console.error(err);
      alert('We have some error see this in the console!');
    }
  };

  useEffect(() => {
    requestTemplate();
  }, [selectedItemId]);

  return loading ? (
    <Spinner />
  ) : (
    <Container>
      <Image
        src={`${String(process.env.REACT_APP_BASE_URL_STATIC)}/large/${
          template?.image
        }`}
        alt={template?.title}
      />

      <Content>
        <ContentSection>
          <b>TITLE</b> {template?.title}
        </ContentSection>
        <ContentSection>
          <b>DESCRIPTION</b> {template?.description}
        </ContentSection>
        <ContentSection>
          <b>COST</b> ${template?.cost}
        </ContentSection>
        <ContentSection>
          <b>ID #</b> {template?.id}
        </ContentSection>
        <ContentSection>
          <b>THUMBNAIL FILE</b> {template?.thumbnail}
        </ContentSection>
        <ContentSection>
          <b>LARGE IMAGE FILE</b> {template?.image}
        </ContentSection>
      </Content>
    </Container>
  );
};

export default ActiveContent;
