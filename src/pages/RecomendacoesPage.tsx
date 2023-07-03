import React from 'react';
import { useTranslation } from 'react-i18next';
import { TablesRecomendacoes} from '@app/components/tables/Tables/TablesRecomendacoes';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';

const RecomendacoesPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('Recomendacoes')}</PageTitle>
      <TablesRecomendacoes />
    </>
  );
};
export default RecomendacoesPage;
