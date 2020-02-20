import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Home,Bpjs,More, NewsDetail, OrderDetail,Pln, Orders,PaketData, MenuAgen, AgenDetail, Histori, Akun, Pulsa} from '../../containers/pages';


const HomeStack = createStackNavigator(
    {
        Home,
        NewsDetail,
        Pulsa,
        PaketData,
        Pln,
        Bpjs,
        More
        
        
    },
    {
        headerMode: 'none',
        initialRouteName: 'Home'
    }
)
const OrdersStack = createStackNavigator(
    {
        Orders,
        OrderDetail,
    },
    {
        headerMode: 'none',
        initialRouteName: 'Orders'
    }
)
const AgenStack = createStackNavigator(
    {
        MenuAgen,
        AgenDetail,
    },
    {
        headerMode: 'none',
        initialRouteName: 'MenuAgen'
    }
)
const HistoriStack = createStackNavigator(
    {
        Histori,
    },
    {
        headerMode: 'none',
        initialRouteName: 'Histori'
    }
)
const AkunStack = createStackNavigator(
    {
        Akun,
    },
    {
        headerMode: 'none',
        initialRouteName: 'Akun'
    }
)


const Router = createSwitchNavigator(
    {
        HomeStack,
        OrdersStack,
        AgenStack,
        HistoriStack,
        AkunStack,

    },
        {
            headerMode: 'none',
            initialRouteName: 'HomeStack'
        }
    
  );
  
  export default createAppContainer(Router);