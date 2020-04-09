/* eslint-disable import/no-unresolved */
import React from 'react';
import { withErrorBoundary } from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import { Data } from '../constants';
import { Props } from '../types';

import * as T from '../../../ignitus-Shared/ignitus-DesignSystem/shared';
import * as S from '../styles';

const PureContributors = ({ data, type, paragraph }: Props) => (
  <section id="contributors">
    <T.Wrapper>
      <T.TopSection>
        <T.Title>{ type }</T.Title>
        <S.Paragraph>
          Supported with
          {' '}
          <S.Icon><S.Heart/></S.Icon>
          {' '}
          {paragraph}
        </S.Paragraph>
      </T.TopSection>
      <T.BottomSection>
        <S.BottomRow>
          {data.map((logo:string) => (
            <S.Card key={logo}>
              <S.CardPicture src={logo} alt="logo" />
            </S.Card>
          ))}
        </S.BottomRow>
      </T.BottomSection>
    </T.Wrapper>
  </section>
);

const SupportedBy: React.FunctionComponent = () => (
  <PureContributors data={Data} type="Supported By" paragraph="by following Organizations, Programs & Companies." />
);

export default withErrorBoundary(SupportedBy);