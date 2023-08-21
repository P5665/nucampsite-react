import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import validateCommentForm from '../../utils/validateCommentForm';

const CommentsForm = ({ campsiteId }) => {
	const [modalOpen, setModalOpen] = useState(false);
	const handleSubmit = (values) => {
		const comment = {
			campsiteId: parseInt(campsiteId),
			rating: values.rating,
			author: values.author,
			text: values.commentText,
		};
		console.log('🚀 ~ file: CommentsForm.js:14 ~ handleSubmit ~ comment:', comment);
		setModalOpen(false);
	};

	return (
		<>
			<Button
				outline
				onClick={() => setModalOpen(true)}
			>
				{' '}
				<i className='fa fa-pencil fa-lg' /> Add Comment
			</Button>
			<Modal isOpen={modalOpen}>
				<ModalHeader toggle={() => setModalOpen(false)}>Add Comment</ModalHeader>
				<ModalBody>
					<Formik
						initialValues={{
							rating: undefined,
							author: '',
							commentText: '',
						}}
						onSubmit={handleSubmit}
						validate={validateCommentForm}
					>
						<Form>
							<FormGroup>
								<Label
									htmlFor='rating'
									name='rating'
								>
									Rating
								</Label>
								<Field
									name='rating'
									as='select'
									className='form-control'
								>
									<option value=' '>Select...</option>
									<option value='1'>1</option>
									<option value='2'>2</option>
									<option value='3'>3</option>
									<option value='4'>4</option>
									<option value='5'>5</option>
								</Field>
								<ErrorMessage name='rating'>{(msg) => <p className='text-danger'>{msg}</p>}</ErrorMessage>
							</FormGroup>
							<FormGroup>
								<Label
									htmlFor='author'
									name='author'
								>
									Your Name
								</Label>
								<Field
									name='author'
									placeholder='Your Name'
									className='form-control'
								/>
								<ErrorMessage name='author'>{(msg) => <p className='text-danger'>{msg}</p>}</ErrorMessage>
							</FormGroup>
							<FormGroup>
								<Label htmlFor='commentText'>Comment</Label>
								<Field
									name='commentText'
									as='textarea'
									rows='12'
									className='form-control'
								/>
							</FormGroup>
							<Button
								type='submit'
								color='primary'
							>
								Submit
							</Button>
						</Form>
					</Formik>
				</ModalBody>
			</Modal>
		</>
	);
};

export default CommentsForm;
