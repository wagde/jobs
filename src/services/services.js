import axios from 'axios'
import { LOCAL_SERVER, LOGIN_API,JOPS_API } from '../common/constants'
export const postLoginApi = async ({ email, password }) => {
  const status = { isLoggedIn: false, statusCode: 404 }
  try {
    const res = await axios.post(`${LOCAL_SERVER}${LOGIN_API}`, {
      email,
      password,
    })
    if (res.status === 200) {
      status.isLoggedIn = true
      status.statusCode = res.status
    }
  } catch (error) {
    const statusCode = error?.response?.status
    if (statusCode === 404 || statusCode === 401) {
      status.isLoggedIn = false
      status.statusCode = statusCode
    }
  }
  return status
}


export const getJobs = async ()=>{
    try{
      const res =  await axios.get(`${LOCAL_SERVER}${JOPS_API}`)
      if (res.status === 200) {
        return  res.data
      }

    }catch(error){
        return false
    }

}
