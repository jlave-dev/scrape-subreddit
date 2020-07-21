type Listing<T> = {
  kind: 'Listing';
  data: {
    dist: number;
    children: Array<T>;
    after: string;
  };
};

type PostListing = Listing<PostData>;
type CommentListing = Listing<CommentData>;

type PostData = {
  kind: 't3';
  data: {
    selftext: string;
    author_fullname: string;
    gilded: number;
    title: string;
    downs: number;
    ups: number;
    name: string;
    num_comments: number;
    permalink: string;
    created_utc: number;
  };
};

type CommentData = {
  kind: 't1';
  data: {
    downs: number;
    ups: number;
    name: string;
    gilded: number;
    author_fullname: string;
    body: string;
    is_submitter: boolean;
    permalink: string;
    created_utc: number;
    depth: number;
    replies: '' | CommentListing;
    parent: string; // Custom: ID of parent - either post or comment
  };
};
