// eslint-disable-next-line no-unused-vars
import axios, { AxiosResponse } from 'axios';
import config from '../config';

export default class Subreddit {
  private readonly SUBREDDIT_JSON_URL: string;

  constructor(name: string) {
    this.SUBREDDIT_JSON_URL = `${config.BASE_URL}/r/${name}.json`;
  }

  public async *getPosts() {
    let response: AxiosResponse<PostListing>;
    let data: PostListing;
    let after: string | null = null;

    do {
      const url = this.SUBREDDIT_JSON_URL + (after ? `?after=${after}` : '');
      try {
        response = await axios.get(url);
      } catch (error) {
        throw new Error(error.message);
      }
      if (response.status !== 200) {
        throw new Error(response.data.toString());
      }
      data = response?.data;
      yield data?.data?.children;
      after = data?.data?.after;
    } while (after);
  }
}
