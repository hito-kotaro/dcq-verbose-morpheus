import React from 'react'
import useAdminState from '../../recoil/AdminState/useAdminState'

const AdminPage = () => {
  const { isAdmin } = useAdminState()
  console.log(isAdmin)
  return <div>AdminPage</div>
}

export default AdminPage
