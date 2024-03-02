import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { cookieStorage, createStorage } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string

const metadata = {
  description: 'Web3Modal Example',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  name: 'Web3Modal',
  url: process.env.NEXT_PUBLIC_HOST as string,
}

export const config = defaultWagmiConfig({
  chains: [mainnet, sepolia],
  enableCoinbase: true,
  enableEIP6963: true,
  enableInjected: true,
  enableWalletConnect: true,
  metadata,
  projectId,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
})
