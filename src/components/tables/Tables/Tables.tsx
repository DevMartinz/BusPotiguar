import React from 'react';
import { EditableTable } from '../editableTable/EditableTable';
import { useTranslation } from 'react-i18next';
import * as S from './Tables.styles';

export const Tables: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <S.TablesWrapper>
        <S.Card id="editable-table" title={t('Linhas')} padding="1.25rem 1.25rem 0">
          <EditableTable />
        </S.Card>
      </S.TablesWrapper>
    </>
  );
};
