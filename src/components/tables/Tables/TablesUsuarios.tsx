import React from 'react';
import { UsuariosTable } from '../usuariosTable/UsuariosTable';
import { useTranslation } from 'react-i18next';
import * as S from './Tables.styles';

export const TablesUsuarios: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <S.TablesWrapper>
        <S.Card id="editable-table" title={t('Usuarios')} padding="1.25rem 1.25rem 0">
          <UsuariosTable />
        </S.Card>
      </S.TablesWrapper>
    </>
  );
};