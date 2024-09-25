import axios from 'axios';
import NFT from '../types/nft.type';

class NFTService {
  private readonly URL = `${import.meta.env.VITE_SERVER_URL}/nfts`;

  getByPagination(page: number, limit: number) {
    const params = new URLSearchParams({
      _page: page.toString(),
      _limit: limit.toString(),
    });

    return axios.get<NFT>(this.URL, {
      params,
    });
  }

  getById(id: number) {
    return axios.get<NFT>(this.URL, {
      params: {
        id,
      },
    });
  }
}

const nftService = new NFTService();
export default nftService;
