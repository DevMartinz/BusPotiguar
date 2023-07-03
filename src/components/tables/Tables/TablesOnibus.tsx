import React from 'react';
import { OnibusTable } from '../onibusTable/OnibusTable';
import { useTranslation } from 'react-i18next';
import * as S from './Tables.styles';

export const TablesOnibus: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <S.TablesWrapper>
        <S.Card id="editable-table" title={t('Onibus')} padding="1.25rem 1.25rem 0">
          <OnibusTable />
        </S.Card>
      </S.TablesWrapper>
    </>
  );
};