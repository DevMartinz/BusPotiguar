import React from 'react';
import { CidadesTable } from '../cidadesTable/CidadesTable';
import { useTranslation } from 'react-i18next';
import * as S from './Tables.styles';

export const TablesCidades: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <S.TablesWrapper>
        <S.Card id="editable-table" title={t('Cidades')} padding="1.25rem 1.25rem 0">
          <CidadesTable />
        </S.Card>
      </S.TablesWrapper>
    </>
  );
};