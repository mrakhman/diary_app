const initState =  {
    posts_test: [
        {id: 111, title: 'What is Lorem Ipsum?', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'},
        {id: 112, title: 'Why do we use it?', text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum'},
        {id: 113, title: 'Where does it come from?', text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old'}
    ]
};

const rootReducer = (state = initState, action) => {
    return state;
};

export default rootReducer;
