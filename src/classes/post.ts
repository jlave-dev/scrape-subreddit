// eslint-disable-next-line no-unused-vars
import axios, { AxiosResponse } from 'axios';
import config from '../config';

function addParentToComments(parent: string, comments: CommentData[]) {
  return comments.map((comment) => ({ ...comment, parent }));
}

export default class Post {
  private readonly POST_JSON_URL: string;

  private name: string;

  constructor(name: string) {
    this.name = name;
    this.POST_JSON_URL = `${config.BASE_URL}/${name}.json`;
  }

  private async getPostJSON() {
    let response: AxiosResponse<[PostListing, CommentListing]>;
    try {
      response = await axios.get(this.POST_JSON_URL);
    } catch (error) {
      throw new Error(error.message);
    }
    if (response.status !== 200) {
      throw new Error(response.data.toString());
    }
    return response?.data;
  }

  public async getComments() {
    const [, commentListing] = await this.getPostJSON();
    let topLevelComments = commentListing.data?.children;
    topLevelComments = addParentToComments(this.name, topLevelComments);
    return topLevelComments;
  }
}
