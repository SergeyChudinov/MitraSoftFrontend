import { Post } from './Post';

export const Posts = ({posts}) => {
	return posts.map(post => <Post post={post} key={post.id}/>)
}