import React from 'react';
import { RecomendacoesTable } from '../recomendacoesTable/RecomendacoesTable';
import { useTranslation } from 'react-i18next';
import * as S from './Tables.styles';

export const TablesRecomendacoes: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <S.TablesWrapper>
        <S.Card id="editable-table" title={t('Recomendacoes')} padding="1.25rem 1.25rem 0">
          <RecomendacoesTable />
        </S.Card>
      </S.TablesWrapper>
    </>
  );
};