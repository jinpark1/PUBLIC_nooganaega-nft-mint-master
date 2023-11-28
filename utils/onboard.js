import { init } from '@web3-onboard/react';
import injectedModule from '@web3-onboard/injected-wallets';
import walletConnectModule from '@web3-onboard/walletconnect';
import coinbaseModule from '@web3-onboard/coinbase';
import ledgerModule from '@web3-onboard/ledger'
import NoogaNaegaIcon from '../NoogaNaega';

import trezorModule from '@web3-onboard/trezor';
import enkryptModule from '@web3-onboard/enkrypt'

const RPC_URL = process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL;

const injected = injectedModule()
const walletConnect = walletConnectModule()
const coinbaseWallet = coinbaseModule();
const ledger = ledgerModule();
const trezor = trezorModule({
  email: 'nooga@nooganaega.com',
  appUrl: 'https://nft.nooganaega.com',
});
const enkrypt = enkryptModule()

const initOnboard = init({
    wallets: [
        walletConnect,
        coinbaseWallet,
        injected,
        ledger,
        trezor,
        enkrypt,
      ],
      chains: [
        {
          id: '0x1',
          token: 'ETH',
          label: 'Ethereum Mainnet',
          rpcUrl: `${RPC_URL}`
        }
      ],
      appMetadata: {
        name: 'NoogaNaega',
        icon: NoogaNaegaIcon,
        description: 'NoogaNaega Red NFT',
        recommendedInjectedWallets: [
          { name: 'MetaMask', url: 'https://metamask.io' },
          { name: 'Coinbase', url: 'https://wallet.coinbase.com/' }
        ]
      }
})

export { initOnboard }