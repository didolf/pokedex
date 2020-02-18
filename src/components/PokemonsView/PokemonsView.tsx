import React, { useCallback, useState } from 'react'
import { Table, Tag, Input } from 'antd'
import { useObserver } from 'mobx-react'
import { PokemonInstance, SpiritesInstance } from '../../store/models'
import { StoreInstance } from '../../store'
import { getFilters } from '../../utils/getTypes'
import { getTypeToColorMap } from '../../utils/getTypeToColorMap'

interface PokemonViewProps {
  store: StoreInstance;
}

export const PokemonsView: React.FC<PokemonViewProps> = ({ store }) => {
  const [search, setSearch] = useState('')
  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event?.target.value)
    },
    []
  )
  return useObserver(() => {
    const handlePaginationChange = (page: number, pageSize?: number) => {
      store.pagination.changePagination(page, pageSize)
    }
    const paginationConfig = {
      total: store.pagination.total,
      current: store.pagination.currentPage,
      pageSize: store.pagination.perPage,
      onChange: handlePaginationChange,
      onShowSizeChange: handlePaginationChange,
      showSizeChanger: true
    }
    const pokemons = store.pokemons.filter(({ name }) =>
      name.startsWith(search)
    )
    const filters = getFilters(pokemons)

    const typeToColor = getTypeToColorMap(pokemons)

    const columns = [
      {
        title: 'Avatar',
        dataIndex: 'sprites',
        width: 100,
        render: ({ front_default: frontDefault }: SpiritesInstance) =>
          frontDefault && <img src={frontDefault} alt="avatar" />
      },
      {
        title: 'Name',
        dataIndex: 'name',
        width: 100
      },
      {
        title: 'Height',
        dataIndex: 'height',
        width: 100
      },
      {
        title: 'Weight',
        dataIndex: 'weight',
        width: 100
      },
      {
        title: 'Stats',
        dataIndex: 'stats',
        width: 200,
        render: (stats: any[]) => (
          <div>
            {stats.map(({ base_stat: baseStat, stat: { name } }) => (
              <Tag>
                {name}:{baseStat}
              </Tag>
            ))}
          </div>
        )
      },
      {
        title: 'Type',
        dataIndex: 'types',
        width: 100,
        render: (types: { type: { name: string }; slot: number }[]) =>
          types.map(({ type: { name }, slot }) => <Tag color={typeToColor[name]} key={slot}>{name}</Tag>),
        filters,
        onFilter: (value: string, record: PokemonInstance) =>
          !!record.types.find(({ type: { name } }) => name === value)
      }
    ]

    return (
      <div>
        <Input
          placeholder="Input name of pokemon here"
          value={search}
          onChange={handleSearchChange}
        />
        <Table<PokemonInstance>
          loading={store.fetchStatus === 'pending'}
          columns={columns}
          dataSource={pokemons}
          pagination={paginationConfig}
          scroll={{ x: 500 }}
          bordered
        />
      </div>
    )
  })
}
