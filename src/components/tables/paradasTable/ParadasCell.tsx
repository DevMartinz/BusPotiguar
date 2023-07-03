import React from 'react';
import { ParadasTableRow } from '@app/api/table.api';
import { InputNumber } from '@app/components/common/inputs/InputNumber/InputNumber';
import { BaseInput } from '@app/components/common/inputs/BaseInput/BaseInput';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: string;
  inputType: 'number' | 'text';
  record: ParadasTableRow;
  index: number;
  children: React.ReactNode;
}

export const ParadasCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <BaseInput />;

  return (
    <td {...restProps}>
      {editing ? (
        <BaseForm.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </BaseForm.Item>
      ) : (
        children
      )}
    </td>
  );
};
