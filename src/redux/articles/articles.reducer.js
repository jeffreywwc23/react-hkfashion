export const INITIAL_STATE = {
    articles: [
        {
            title: 'Future Collections and Upcoming Trend',
            imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            short: 'By Kelly Wong',
            id: 1,
            label: 'fashion'
        },
        {
            title: 'Design Beyond Imagination',
            imageUrl: 'https://images.hdqwalls.com/wallpapers/fashion-model-4k-9k.jpg',
            short: 'By Kyle Kawaguchi',
            id: 2,
            label: 'trend'
        },
        {
            title: 'A fashion guide for special occasion',
            imageUrl: 'https://c4.wallpaperflare.com/wallpaper/805/765/82/red-dress-wallpaper-preview.jpg',
            short: 'By Camillo Powell',
            id: 3,
            label: 'coordination'
        },
        {
            title: 'How to enhance inner beauty?',
            imageUrl: 'https://i.pinimg.com/originals/6c/b5/53/6cb5539ae51b2adf781256ea140d2ead.jpg',
            short: 'By Johnson Ip',
            id: 4,
            label: 'coordination'
        }
    ]
};

const articlesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default articlesReducer;
