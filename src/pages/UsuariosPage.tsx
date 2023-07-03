import React from 'react';
import { useTranslation } from 'react-i18next';
import { TablesUsuarios } from '@app/components/tables/Tables/TablesUsuarios';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';

const UsuariosPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('Usuarios')}</PageTitle>
      <TablesUsuarios />
    </>
  );
};
export default UsuariosPage;
