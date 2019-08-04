// TODO: create a new one deletePost
export const deletePost = (id) => {
	return {
		type: 'DELETE_POST',
		id: id
	}
};

export const createPost = (post) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		// TODO: make async call to db
		const firestore = getFirestore();
		const profile = getState().firebase.profile;
		const authorId = getState().firebase.auth.uid;
		firestore.collection('posts').add({
			title: post.title,
			text: post.text,
			tag: post.my_tag,
			date: new Date(),
			authorFirstName: profile.firstName,
			authorLastName: profile.lastName,
			authorId: authorId
		})
			.then(() => {
				dispatch({
					type: 'CREATE_POST',
					post: post
				})
			})
			.catch((err) => {
				dispatch({
					type: 'CREATE_POST_ERROR',
					err
				})
			})

	}
};
