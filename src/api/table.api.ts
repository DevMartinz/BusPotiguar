import { Priority } from '../constants/enums/priorities';

export interface Tag {
  value: string;
  priority: Priority;
}

export interface BasicTableRow {
  key: number;
  name: string;
  age: string;
  address: string;
  saidas: string;
  tags?: Tag[];
}

export interface EditableTableRow {
  key: number;
  name: number;
  age: string;
  address: string;
  saidas: string;
  tags?: Tag[];
}

export interface OnibusTableRow {
  key: number;
  id: number;
  acessibilidade: string;
  id_linha: number;
  nome_linha: string;
  tags?: Tag[];
}

export interface ParadasTableRow {
  key: number;
  id: number;
  local: string;
  ordem: number;
  id_linha: number;
  tags?: Tag[];
}

export interface CidadesTableRow {
  key: number;
  id: number;
  nome: string;
  tags?: Tag[];
}

export interface Pagination {
  current?: number;
  pageSize?: number;
  total?: number;
}

export interface BasicTableData {
  data: BasicTableRow[];
  pagination: Pagination;
}

export interface OnibusTableData {
  data: OnibusTableRow[];
  pagination: Pagination;
}

export interface ParadasTableData {
  data: ParadasTableRow[];
  pagination: Pagination;
}

export interface CidadesTableData {
  data: CidadesTableRow[];
  pagination: Pagination;
}

export interface TreeTableRow extends BasicTableRow {
  children?: TreeTableRow[];
}

export interface TreeTableData extends BasicTableData {
  data: TreeTableRow[];
}

export interface EditableTableData{
  data: EditableTableRow[];
  pagination: Pagination;
}

export interface RecomendacoesTableData extends BasicTableData {
  data: BasicTableRow[];
}

export interface UsuariosTableData extends BasicTableData {
  data: BasicTableRow[];
}

export const getBasicTableData = (pagination: Pagination): Promise<BasicTableData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          {
            key: 1,
            name: 'John Brown',
            age: '...',
            address: 'New York No. 1 Lake Park',
            saidas: '...',
            tags: [
              { value: 'Architect', priority: Priority.LOW },
              { value: 'Engineer', priority: Priority.MEDIUM },
            ],
          },
          {
            key: 2,
            name: 'Jim Green',
            age: '...',
            address: 'London No. 1 Lake Park',
            saidas: '...',
            tags: [{ value: 'Doctor', priority: Priority.HIGH }],
          },
          {
            key: 3,
            name: 'Joe Black',
            age: '...',
            address: 'Sidney No. 1 Lake Park',
            saidas: '...',
            tags: [
              { value: 'Professor', priority: Priority.INFO },
              { value: 'Architect', priority: Priority.LOW },
            ],
          },
          {
            key: 4,
            name: 'Pavel Green',
            age: '...',
            address: 'New York No. 1 Lake Park',
            saidas: '...',
            tags: [
              { value: 'Engineer', priority: Priority.MEDIUM },
              { value: 'Architect', priority: Priority.LOW },
            ],
          },
        ],
        pagination: { ...pagination, total: 4 },
      });
    }, 1000);
  });
};

export const getTreeTableData = (pagination: Pagination): Promise<TreeTableData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          {
            key: 1,
            name: 'John Brown sr.',
            age: '...',
            address: 'New York No. 1 Lake Park',
            saidas: '...',
            children: [
              {
                key: 11,
                name: 'John Brown',
                age: '...',
                address: 'New York No. 2 Lake Park',
                saidas: '...',
              },
              {
                key: 12,
                name: 'John Brown jr.',
                age: '...',
                address: 'New York No. 3 Lake Park',
                saidas: '...',
                children: [
                  {
                    key: 121,
                    name: 'Jimmy Brown',
                    age: '...',
                    address: 'New York No. 3 Lake Park',
                    saidas: '...',
                  },
                ],
              },
              {
                key: 13,
                name: 'Jim Green sr.',
                age: '...',
                address: 'London No. 1 Lake Park',
                saidas: '...',
                children: [
                  {
                    key: 131,
                    name: 'Jim Green',
                    age: '...',
                    address: 'London No. 2 Lake Park',
                    saidas: '...',
                    children: [
                      {
                        key: 1311,
                        name: 'Jim Green jr.',
                        age: '...',
                        address: 'London No. 3 Lake Park',
                        saidas: '...',
                      },
                      {
                        key: 1312,
                        name: 'Jimmy Green sr.',
                        age: '...',
                        address: 'London No. 4 Lake Park',
                        saidas: '...',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            key: 200,
            name: 'Joe Black',
            age: '...',
            address: 'Sidney No. 1 Lake Park',
            saidas: '...',
            children: [
              {
                key: 201,
                name: 'Joe Green',
                age: '...',
                address: 'London No. 2 Lake Park',
                saidas: '...',
                children: [
                  {
                    key: 202,
                    name: 'Joe Green jr.',
                    age: '...',
                    address: 'London No. 3 Lake Park',
                    saidas: '...',
                  },
                  {
                    key: 203,
                    name: 'Joe Green sr.',
                    age: '...',
                    address: 'London No. 4 Lake Park',
                    saidas: '...',
                  },
                ],
              },
            ],
          },
          {
            key: 300,
            name: 'Jaime Black',
            age: '...',
            address: 'Sidney No. 1 Lake Park',
            saidas: '...',
            children: [
              {
                key: 301,
                name: 'Jaime Green',
                age: '...',
                address: 'London No. 2 Lake Park',
                saidas: '...',
                children: [
                  {
                    key: 302,
                    name: 'Jaime Green jr.',
                    age: '...',
                    address: 'London No. 3 Lake Park',
                    saidas: '...',
                  },
                  {
                    key: 303,
                    name: 'Jaime Green sr.',
                    age: '...',
                    address: 'London No. 4 Lake Park',
                    saidas: '...',
                  },
                ],
              },
            ],
          },
          {
            key: 400,
            name: 'Pavel Brown',
            age: '...',
            address: 'London No. 2 Lake Park',
            saidas: '...',
            children: [
              {
                key: 401,
                name: 'Pavel Brown',
                age: '...',
                address: 'London No. 2 Lake Park',
                saidas: '...',
                children: [
                  {
                    key: 402,
                    name: 'Pavel Brown jr.',
                    age: '...',
                    address: 'London No. 1 Lake Park',
                    saidas: '...',
                  },
                ],
              },
            ],
          },
        ],
        pagination: { ...pagination, total: 8 },
      });
    }, 1000);
  });
};

export const getEditableTableData = (pagination: Pagination): Promise<EditableTableData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          {
            key: 1,
            name: 25,
            age: 'Nova Cruz - Natal',
            address: `R$ 20,00`,
            saidas: '18h30',
          },
          {
            key: 2,
            name: 26,
            age: 'Nova Cruz - Goianinha',
            address: `R$ 30,00`,
            saidas: '16h00',
          },
          {
            key: 3,
            name: 27,
            age: 'Nova Cruz - Guarabira',
            address: `R$ 40,00`,
            saidas: '12h00',
          },
          {
            key: 4,
            name: 28,
            age: 'Nova Cruz - Parnamirim',
            address: `R$ 30,00`,
            saidas: '08h00',
          },
        ],
        pagination: { ...pagination, total: 4 },
      });
    }, 1000);
  });
};

export const getOnibusTableData = (pagination: Pagination): Promise<OnibusTableData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          {
            key: 1,
            id: 200,
            acessibilidade: "Sim",
            id_linha: 25,
            nome_linha: 'Nova Cruz - Natal',
          },
          {
            key: 2,
            id: 201,
            acessibilidade: "Não",
            id_linha: 26,
            nome_linha: 'Nova Cruz - Goianinha',
          },
          {
            key: 3,
            id: 202,
            acessibilidade: "Sim",
            id_linha: 27,
            nome_linha: 'Nova Cruz - Guarabira',
          },
          {
            key: 4,
            id: 203,
            acessibilidade: "Não",
            id_linha: 28,
            nome_linha: 'Nova Cruz - Parnamirim',
          },
        ],
        pagination: { ...pagination, total: 4 },
      });
    }, 1000);
  });
};

export const getParadasTableData = (pagination: Pagination): Promise<ParadasTableData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          {
            key: 1,
            id: 80001,
            local: 'Rua da Liberdade, 25',
            ordem: 2,
            id_linha: 25,
          },
          {
            key: 2,
            id: 80002,
            local: 'Rua da Liberdade, 805',
            ordem: 3,
            id_linha: 25,
          },
          {
            key: 3,
            id: 80111,
            local: 'Av. Walter Disney, 1225',
            ordem: 20,
            id_linha: 26,
          },
          {
            key: 4,
            id: 80112,
            local: 'Av. Walter Disney, 10',
            ordem: 22,
            id_linha: 26,
          },
        ],
        pagination: { ...pagination, total: 4 },
      });
    }, 1000);
  });
};

export const getCidadesTableData = (pagination: Pagination): Promise<CidadesTableData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          {
            key: 1,
            id: 1,
            nome: `Nova Cruz`,
          },
          {
            key: 2,
            id: 2,
            nome: `Natal`,
          },
          {
            key: 3,
            id: 3,
            nome: `Goianinha`,
          },
          {
            key: 4,
            id: 4,
            nome: `Guarabira`,
          },
        ],
        pagination: { ...pagination, total: 4 },
      });
    }, 1000);
  });
};

export const getRecomendacoesTableData = (pagination: Pagination): Promise<RecomendacoesTableData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          {
            key: 1,
            name: `05000000`,
            age: 'Nova Cruz - Natal',
            address: `R$ 20,00`,
            saidas: '18h30',
          },
          {
            key: 2,
            name: `022`,
            age: 'Nova Cruz - Goianinha',
            address: `R$ 30,00`,
            saidas: '16h00',
          },
          {
            key: 3,
            name: `025`,
            age: 'Nova Cruz - Guarabira',
            address: `R$ 40,00`,
            saidas: '12h00',
          },
          {
            key: 4,
            name: `030`,
            age: 'Nova Cruz - Parnamirim',
            address: `R$ 30,00`,
            saidas: '08h00',
          },
        ],
        pagination: { ...pagination, total: 4 },
      });
    }, 1000);
  });
};

export const getUsuariosTableData = (pagination: Pagination): Promise<UsuariosTableData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          {
            key: 1,
            name: `06000000`,
            age: 'Nova Cruz - Natal',
            address: `R$ 20,00`,
            saidas: '18h30',
          },
          {
            key: 2,
            name: `022`,
            age: 'Nova Cruz - Goianinha',
            address: `R$ 30,00`,
            saidas: '16h00',
          },
          {
            key: 3,
            name: `025`,
            age: 'Nova Cruz - Guarabira',
            address: `R$ 40,00`,
            saidas: '12h00',
          },
          {
            key: 4,
            name: `030`,
            age: 'Nova Cruz - Parnamirim',
            address: `R$ 30,00`,
            saidas: '08h00',
          },
        ],
        pagination: { ...pagination, total: 4 },
      });
    }, 1000);
  });
};

