const initState =  {
	posts_test: [
		{id: 111, title: 'What is Lorem Ipsum?', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', date: '1'},
		{id: 112, title: 'Why do we use it?', text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum', date: '2'},
		{id: 113, title: 'Where does it come from?', text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old', date: '3'}
	],
	posts: []
};

const projectReducer = (state = initState, action) => {
	if (action.type === 'DELETE_POST') {
		// We don't want to alter the original data. Non-destructive manner instead
		let newPosts = state.posts_test.filter(post => {
			return action.id !== post.id
		});
		return {
			...state,
			posts_test: newPosts
		}
	}

	// We can use if or switch
	switch (action.type) {
		case 'CREATE_POST':
			console.log('new post:', action.post);
			return state;
		case 'CREATE_POST_ERROR':
			console.log('create post error:', action.err);
			return state;
		default:
			return state;
	}
	// return state;
};

export default projectReducer;
