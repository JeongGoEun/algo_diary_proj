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

columns.probOptions=[
  {  label: 'BOJ', value: 1},
  { label: 'SWEA', value:2},
  { label:'Programmers', value:3},
]

export {columns}