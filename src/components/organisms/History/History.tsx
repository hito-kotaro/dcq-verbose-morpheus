import React from 'react'
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid'
import { Box } from '@mui/material'
import useHistory from './useHistory'

const styles = {
  grid: {
    '.MuiDataGrid-toolbarContainer': {
      borderBottom: 'solid 1px rgba(224, 224, 224, 1)',
    },
    '.MuiDataGrid-row .MuiDataGrid-cell:not(:last-child)': {
      borderRight: 'solid 1px rgba(224, 224, 224, 1) !important',
    },
    // 列ヘッダに背景色を指定
    '.MuiDataGrid-columnHeaders': {
      backgroundColor: '#FA9900',
      color: '#fff',
    },
  },
}

const History = () => {
  const { gridData } = useHistory()

  const altCols: GridColDef[] = [
    {
      field: 'title',
      headerName: '承認依頼タイトル',
      width: 200,
    },
    {
      field: 'applicant',
      headerName: '申請者',
      width: 200,
    },
    {
      field: 'status',
      headerName: 'ステータス',
      width: 200,
    },
    {
      field: 'authorizer',
      headerName: '承認者',
      width: 200,
    },
    {
      field: 'created_at',
      headerName: '申請日',
      width: 250,
    },
    {
      field: 'updated_at',
      headerName: '更新日',
      width: 250,
    },
  ]

  return (
    <Box sx={{ width: '100%', height: '100%', p: 5 }}>
      <DataGrid
        columns={altCols}
        rows={gridData}
        sx={styles.grid}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </Box>
  )
}

export default History
