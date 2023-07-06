import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TablesOnibus } from '@app/components/tables/Tables/TablesOnibus';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
const [onibus, setOnibus] = useState([]);


// UseEffect
useEffect(()=> {
  fetch('http://localhost:8080/onibus')
  .then(retorno => retorno.json())
  .then(retorno_convertido => setOnibus(retorno_convertido));
}, []);

const OnibusPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>{JSON.stringify(onibus)}</p>
      <PageTitle>{t('Onibus')}</PageTitle>
      <TablesOnibus />
    </>
  );
};
export default OnibusPage;


