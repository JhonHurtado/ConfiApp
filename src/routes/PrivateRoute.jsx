import {Navigate} from 'react-router-dom';
import SidebarAdmin from '../components/SidebarAdmin';


export default function PrivateRoute() {

    if(!localStorage.getItem('token')) {
        return <Navigate to="/login"/>
    }

  return (
    <>
    <SidebarAdmin/>
    </>
  )
}
