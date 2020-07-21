import Post from './classes/post';
import Subreddit from './classes/subreddit';

export default { Post, Subreddit };

// (async function main() {
//   const subreddit = new Subreddit('Menieres');
//   const iterator = subreddit.getPosts();

//   let done;
//   do {
//     const result = await iterator.next();
//     console.log(result.value ? result.value.length : 'done');
//     done = result.done;
//     // eslint-disable-next-line no-promise-executor-return
//     await new Promise((resolve) => setTimeout(resolve, 250));
//   } while (!done);
// })();
