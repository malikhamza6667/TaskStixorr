import { MainRoutes } from "@navigations"

import {store} from '@redux'
import { Provider } from "react-redux"

const App=()=>{
  
  return(
    <Provider store={store}>
<MainRoutes/>
    </Provider>
    
  )
}

export default App