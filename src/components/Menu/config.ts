import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.unitydefi.com/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://www.unitydefi.com/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://www.unitydefi.com/pools',
  },
  {
    label: 'Referral',
    icon: 'ReferralIcon',
    href: 'https://www.unitydefi.com/referral',
  },
]

export default config
