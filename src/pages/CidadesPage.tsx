import React from 'react';
import { useTranslation } from 'react-i18next';
import { TablesCidades } from '@app/components/tables/Tables/TablesCidades';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';

const CidadesPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('Cidades')}</PageTitle>
      <TablesCidades />
    </>
  );
};
export default CidadesPage;
