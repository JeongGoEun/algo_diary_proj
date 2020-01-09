let columns = {}

columns.tableColumns = [
    {
        title: 'NO',
        dataIndex: 'no',
        key: 'no',
        defaultSorterOrder: 'descend',
        sorter: (a, b) => a.no - b.no,
      },
      {
        title: 'TITLE',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'DATE',
        dataIndex: 'date',
        key: 'date',
        sorter: (a, b) => a.date - b.date,
      },
]

export {columns}