import React from 'react'
import ManageSearchIcon from '@mui/icons-material/ManageSearch'
import { DataGrid, GridColDef, GridToolbar, GridRowParams, GridActionsCellItem } from '@mui/x-data-grid'
import { Box, Tooltip } from '@mui/material'
import useHistory from './useHistory'
import SingleContentTemplate from '../../templates/SingleContentTemplate'
import HistoryDetail from './HistoryDetail'
import CardFrame from '../../molecules/CardFrame'

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
  const { his, modalState, gridData, handleDetailClick } = useHistory()

  // 表示するアクションを返す関数です
  const getDetailAction = React.useCallback(
    (params: GridRowParams) => [
      <GridActionsCellItem
        icon={
          <Tooltip title="詳細を表示">
            <ManageSearchIcon fontSize="large" />
          </Tooltip>
        }
        label="詳細"
        onClick={handleDetailClick(params)}
      />,
    ],
    [handleDetailClick]
  )

  const altCols: GridColDef[] = [
    {
      field: 'detailAction',
      headerName: '',
      align: 'left',
      width: 60,
      type: 'actions',
      getActions: getDetailAction,
    } as GridColDef,
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
    <SingleContentTemplate
      modalChildren={
        <CardFrame image="cosmic1">
          <Box height="60vh" sx={{ overflowY: 'scroll' }}>
            <HistoryDetail
              applicant={his.applicant}
              authorizer={his.authorizer}
              authComment={his.auth_comment}
              status={his.status}
              qTitle={his.quest_title}
              qPoint={his.reward}
              qDescription={his.quest_description}
              rTitle={his.title}
              rDescription={his.description}
              rCreatedAt={his.created_at}
              rUpdatedAt={his.updated_at}
              buttonList={[]}
            />
          </Box>
        </CardFrame>
      }
      modalState={modalState}
    >
      <DataGrid
        columns={altCols}
        rows={gridData}
        sx={styles.grid}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </SingleContentTemplate>
  )
}

export default History
