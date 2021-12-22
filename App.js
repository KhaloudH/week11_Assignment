import {injected} from "./components/wallet/connectors"
import {useWeb3React} from "@web3-react/core"
import {Web3ReactProvider,getweb3ReactContext} from "@web3-react/core"
import {Web3Provider} from "@ethersproject/providers"
import{ethers,Contract} from "ethers"
//import formatEther from "@etherproject/units"will want later if importing eth values probably 
import React from "react"


  
export default function App(){
  const InteractiveArea = () => {

    const context = useWeb3React()
    const {chainid, provider, account, active, activate, deactivate} = context 
    const walletAdress = account 

    const connectWallet = () => {
      activate(injected)
    }

    const disconnectWallet = () => {
      deactivate(injected)
    }

    return(
      <div>
      <button onClick={connectWallet}>Connect </button>
      <div>Connected Address:{walletAdress} </div>
      <button onClick= {disconnectWallet}>Disconnect</button>
      </div>
    )
    }

    function getLibraryf(provider) {
      const library = new Web3Provider(provider);
      library.pollingInterval = 12000;
      return library
    }

    return (
      <Web3ReactProvider getLibrary={getLibraryf}>
        <InteractiveArea />
      </Web3ReactProvider>
    )
    }