import axios from 'axios';
import NFT from '../types/nft.type';

class NFTService {
  private readonly URL = `${import.meta.env.VITE_SERVER_URL}/nfts`;

  getByPagination(page: number) {
    return axios.get<NFT>(`${this.URL}/get`);
  }
}

const nftService = new NFTService();
export default nftService;
