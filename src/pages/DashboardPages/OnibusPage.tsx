import React from 'react';
import { useTranslation } from 'react-i18next';
import { TablesOnibus } from '@app/components/tables/Tables/TablesOnibus';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';

const OnibusPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('Onibus')}</PageTitle>
      <TablesOnibus />
    </>
  );
};
export default OnibusPage;
