import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.polygonTestnet,
  mainnet: Networks.polygonMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'TheAstrodes',
  tokenName: 'The Astrodes',
  tokenSymbol: 'ASD',
  hiddenMetadataUri: 'https://nftstorage.link/ipfs/bafybeifpgqsqp4z6rn5yltj3xptiuk6qmvf3o2lmifxcjel52nvlmwpxkm/hidden.json',
  maxSupply: 11111,
  whitelistSale: {
    price: 0.0005,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.0007,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.00,
    maxMintAmountPerTx: 11,
  },
  contractAddress: "0x3D92Bb1bEE99A691d1BB4033b2A8d3A064392701",
  marketplaceIdentifier: 'the-astrodes-nft',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
