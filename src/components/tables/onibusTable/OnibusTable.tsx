import React, { useState, useEffect, useCallback } from 'react';
import { BaseTable } from '@app/components/common/BaseTable/BaseTable';
import { getEditableTableData, getOnibusTableData, OnibusTableRow, Pagination } from 'api/table.api';
import { OnibusCell } from './OnibusCell';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { useTranslation } from 'react-i18next';
import { useMounted } from '@app/hooks/useMounted';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';
import { BasePopconfirm } from '@app/components/common/BasePopconfirm/BasePopconfirm';

const initialPagination: Pagination = {
  current: 1,
  pageSize: 4,
};

export const OnibusTable: React.FC = () => {
  const [form] = BaseForm.useForm();
  const [tableData, setTableData] = useState<{ data: OnibusTableRow[]; pagination: Pagination; loading: boolean }>({
    data: [],
    pagination: initialPagination,
    loading: false,
  });
  const [editingKey, setEditingKey] = useState(0);
  const { t } = useTranslation();
  const { isMounted } = useMounted();

  const fetch = useCallback(
    (pagination: Pagination) => {
      setTableData((tableData) => ({ ...tableData, loading: true }));
      getOnibusTableData(pagination).then((res) => {
        if (isMounted.current) {
          setTableData({ data: res.data, pagination: res.pagination, loading: false });
        }
      });
    },
    [isMounted],
  );

  useEffect(() => {
    fetch(initialPagination);
  }, [fetch]);

  const handleTableChange = (pagination: Pagination) => {
    fetch(pagination);
    cancel();
  };

  const isEditing = (record: OnibusTableRow) => record.key === editingKey;

  const edit = (record: Partial<OnibusTableRow> & { key: React.Key }) => {
    form.setFieldsValue({ id: '', acessibilidade: '', id_linha: '', nome_linha: '', ...record });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey(0);
  };

  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as OnibusTableRow;

      const newData = [...tableData.data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
      } else {
        newData.push(row);
      }
      setTableData({ ...tableData, data: newData });
      setEditingKey(0);
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const handleDeleteRow = (rowId: number) => {
    setTableData({ ...tableData, data: tableData.data.filter((item) => item.key !== rowId) });
  };

  const columns = [
    {
      title: t('ID'),
      dataIndex: 'id',
      width: '25%',
      editable: true,
    },
    {
      title: t('Acessibilidade'),
      dataIndex: 'acessibilidade',
      width: '15%',
      editable: true,
    },
    {
      title: t('ID Linha'),
      dataIndex: 'id_linha',
      width: '30%',
      editable: true,
    },
    {
      title: t('Nome Linha'),
      dataIndex: 'nome_linha',
      width: '30%',
      editable: true,
    },
    {
      title: t('Ações'),
      dataIndex: 'actions',
      width: '15%',
      render: (text: string, record: OnibusTableRow) => {
        const editable = isEditing(record);
        return (
          <BaseSpace>
            {editable ? (
              <>
                <BaseButton type="primary" onClick={() => save(record.key)}>
                  {t('common.save')}
                </BaseButton>
                <BasePopconfirm title={t('tables.cancelInfo')} onConfirm={cancel}>
                  <BaseButton type="ghost">{t('common.cancel')}</BaseButton>
                </BasePopconfirm>
              </>
            ) : (
              <>
                <BaseButton type="ghost" disabled={editingKey !== 0} onClick={() => edit(record)}>
                  {t('common.edit')}
                </BaseButton>
                <BaseButton type="default" danger onClick={() => handleDeleteRow(record.key)}>
                  {t('tables.delete')}
                </BaseButton>
              </>
            )}
          </BaseSpace>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: OnibusTableRow) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <BaseForm form={form} component={false}>
      <BaseTable
        components={{
          body: {
            cell: OnibusCell,
          },
        }}
        bordered
        dataSource={tableData.data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          ...tableData.pagination,
          onChange: cancel,
        }}
        onChange={handleTableChange}
        loading={tableData.loading}
        scroll={{ x: 800 }}
      />
    </BaseForm>
  );
};
