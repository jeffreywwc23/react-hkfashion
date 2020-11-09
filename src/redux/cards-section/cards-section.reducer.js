export const INITIAL_STATE = {
    cardContent: [
        {
            title: 'Future Collections and Upcoming Thread',
            imageUrl: 'https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1902&q=80',
            id: 1,
            label: 'fashion'
        },
        {
            title: 'Design Beyond Imagination',
            imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            id: 2,
            label: 'trend'
        },
        {
            title: 'A fashion guide for special occasion',
            imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=662&q=80',
            id: 3,
            label: 'coordination'
        }
    ]
};

const cardsSectionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default cardsSectionReducer;
