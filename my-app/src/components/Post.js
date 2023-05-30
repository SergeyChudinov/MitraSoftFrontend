import Card from 'react-bootstrap/Card';

import images from '../assets/images.png';

export const Post = ({post}) => {
	return (
		<Card className='post_card'>
			<Card.Img image variant="top" src={images}/>
			<Card.Body>
				<Card.Title>{post.title}</Card.Title>
				<Card.Text>{post.body}</Card.Text>
			</Card.Body>
    </Card>
	)
}
