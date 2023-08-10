import { Col } from 'reactstrap';
import Comment from './Comments';
import { selectCommentsByCampsiteId } from './commentsSlice';

const CommentsList = ({ campsiteId }) => {
	const comments = selectCommentsByCampsiteId(campsiteId);

	if (comments && comments.length > 0) {
		return (
			<Col md='5' className='mt-4'>
				<h4>Comments</h4>
				{comments.map((comment) => (
					<Comment key={comment.id} comment={comment} />
				))}
			</Col>
		);
	}

	return (
		<Col md='5' className='mt-4'>
			There are no comment for this campsite yet.
		</Col>
	);
};

export default CommentsList;
