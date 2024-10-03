import {
  writable
} from "svelte/store";

export let transactions = writable([{
    hash: '0x86125eeed3e436f41aafe4a9da2814abcb8115e5645c76bd4364b9dab87cbe69',
    status: 'SUCCESS',
    block: 863726,
    date: '10/02/2024 08:55',
    txHash: '0xf8296c6c792c18fc24710ce5c00dac57ba1ec98577c3fbf12b8d519b82a0f49b',
    type: 'multi',
    action: '-',
    value: '0.00000650 BTC / 0.393 USD'
  },
  {
    hash: '0x3a7d2f8e9b1c5e4d6f2a0b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e',
    status: 'SUCCESS',
    block: 863727,
    date: '10/02/2024 09:02',
    txHash: '0xa1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
    type: 'single',
    action: 'transfer',
    value: '0.00000720 BTC / 0.435 USD'
  },
  {
    hash: '0xf1e2d3c4b5a6978685746362514a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6',
    status: 'FAILED',
    block: 863728,
    date: '10/02/2024 09:10',
    txHash: '0xc1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2',
    type: 'multi',
    action: 'swap',
    value: '0.00000550 BTC / 0.332 USD'
  },
  {
    hash: '0x9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d1e0f9a8',
    status: 'SUCCESS',
    block: 863729,
    date: '10/02/2024 09:18',
    txHash: '0xe1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2',
    type: 'single',
    action: 'mint',
    value: '0.00000830 BTC / 0.501 USD'
  },
  {
    hash: '0x5f4e3d2c1b0a9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a5f4',
    status: 'SUCCESS',
    block: 863730,
    date: '10/02/2024 09:25',
    txHash: '0xb0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1',
    type: 'multi',
    action: '-',
    value: '0.00000690 BTC / 0.417 USD'
  },
  {
    hash: '0x2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1',
    status: 'SUCCESS',
    block: 863731,
    date: '10/02/2024 09:33',
    txHash: '0xd0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1',
    type: 'single',
    action: 'burn',
    value: '0.00000770 BTC / 0.465 USD'
  },
  {
    hash: '0x7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2c1b0a9f8e7d6c5b4a3f2e1d0c9b8a7f6',
    status: 'FAILED',
    block: 863732,
    date: '10/02/2024 09:41',
    txHash: '0xf0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1',
    type: 'multi',
    action: 'stake',
    value: '0.00000610 BTC / 0.368 USD'
  },
  {
    hash: '0xc1b0a9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2c1b',
    status: 'SUCCESS',
    block: 863733,
    date: '10/02/2024 09:49',
    txHash: '0xa3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4',
    type: 'single',
    action: 'transfer',
    value: '0.00000890 BTC / 0.537 USD'
  },
  {
    hash: '0x4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3',
    status: 'SUCCESS',
    block: 863734,
    date: '10/02/2024 09:57',
    txHash: '0xc5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6',
    type: 'multi',
    action: '-',
    value: '0.00000680 BTC / 0.411 USD'
  },
  {
    hash: '0xe1f0a9b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f',
    status: 'SUCCESS',
    block: 863735,
    date: '10/02/2024 10:05',
    txHash: '0xe7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8',
    type: 'single',
    action: 'swap',
    value: '0.00000750 BTC / 0.453 USD'
  },
  {
    hash: '0x6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5',
    status: 'FAILED',
    block: 863736,
    date: '10/02/2024 10:13',
    txHash: '0x9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c',
    type: 'multi',
    action: 'mint',
    value: '0.00000590 BTC / 0.356 USD'
  },
  {
    hash: '0xb0a9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2c1b0a',
    status: 'SUCCESS',
    block: 863737,
    date: '10/02/2024 10:21',
    txHash: '0xd2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3',
    type: 'single',
    action: 'burn',
    value: '0.00000810 BTC / 0.489 USD'
  },
  {
    hash: '0x8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d0e9f8a7',
    status: 'SUCCESS',
    block: 863738,
    date: '10/02/2024 10:29',
    txHash: '0xf4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5',
    type: 'multi',
    action: '-',
    value: '0.00000670 BTC / 0.405 USD'
  },
  {
    hash: '0xd2c1b0a9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2c',
    status: 'SUCCESS',
    block: 863739,
    date: '10/02/2024 10:37',
    txHash: '0xb6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7',
    type: 'single',
    action: 'transfer',
    value: '0.00000730 BTC / 0.441 USD'
  },
  {
    hash: '0x3f2e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2c1b0a9f8e7d6c5b4a3f2',
    status: 'FAILED',
    block: 863740,
    date: '10/02/2024 10:45',
    txHash: '0xd8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9',
    type: 'multi',
    action: 'stake',
    value: '0.00000570 BTC / 0.344 USD'
  },
  {
    hash: '0x9b8a7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2c1b0a9f8e7d6c5b4a3f2e1d0c9b8',
    status: 'SUCCESS',
    block: 863741,
    date: '10/02/2024 10:53',
    txHash: '0xf0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1',
    type: 'single',
    action: 'swap',
    value: '0.00000850 BTC / 0.513 USD'
  }
])