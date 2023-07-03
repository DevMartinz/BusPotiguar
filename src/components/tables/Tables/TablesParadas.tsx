import React from 'react';
import { ParadasTable } from '../paradasTable/ParadasTable';
import { useTranslation } from 'react-i18next';
import * as S from './Tables.styles';

export const TablesParadas: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <S.TablesWrapper>
        <S.Card id="editable-table" title={t('Paradas')} padding="1.25rem 1.25rem 0">
          <ParadasTable />
        </S.Card>
      </S.TablesWrapper>
    </>
  );
};