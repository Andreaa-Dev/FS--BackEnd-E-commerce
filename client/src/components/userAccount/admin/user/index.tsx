import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { UserDataType } from '../../../../misc/type'

import { CustomizedTitle } from '../../../customizedCSS'
import UserList from './UserList'

function Index() {
  const [userList, setUserList] = useState<UserDataType[] | undefined>()

  const getUserData = async () => {
    let response = await axios.get(`/user`)
    const userData = response.data
    setUserList(userData)
  }
  useEffect(() => {
    getUserData()
  }, [])

  return (
    <div>
      <CustomizedTitle> USER MANAGEMENT</CustomizedTitle>
      <UserList userData={userList} getUserData={getUserData} />
    </div>
  )
}

export default Index
