import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';
const myComponent = {
    width: '100%',
    height: '100%',
    overflow: 'scroll'
};


const Layout =() =>{
    return(
     <div className='App'  >
        <Sidebar/>
        <div className='page'>
        <Outlet />
            
        </div>
     </div>
    

    )
}

export default Layout