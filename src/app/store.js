import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
import { userReducer } from '../features/user/userSlice';

export const store = configureStore({
	reducer: {
		campsites: campsitesReducer,
		comments: commentsReducer,
		partners: partnersReducer,
		promotions: promotionsReducer,
		user: userReducer,
	},
	middleware: [...getDefaultMiddleware(), logger],
});
// console.log('🚀 ~ file: store.js:9 ~ store:', store.getState()); when store just had campsites
/*
{
    "campsites": {
        "campsiteArray": [
            {
                "id": 0,
                "name": "React Lake Campground",
                "image": "/static/media/react-lake.05bcb300b6ee37035a7c.jpg",
                "elevation": 1233,
                "featured": false,
                "description": "Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers."
            },
            {
                "id": 1,
                "name": "Chrome River Campground ",
                "image": "/static/media/chrome-river.59bc51bda08040bae159.jpg",
                "elevation": 877,
                "featured": false,
                "description": "Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River."
            },
            {
                "id": 2,
                "name": "Breadcrumb Trail Campground",
                "image": "/static/media/breadcrumb-trail.48aaedf7dfa61a00a5b1.jpg",
                "elevation": 2901,
                "featured": false,
                "description": "Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground."
            },
            {
                "id": 3,
                "name": "Redux Woods Campground",
                "image": "/static/media/redux-woods.371a075ae70280bee9e3.jpg",
                "elevation": 42,
                "featured": true,
                "description": "You'll never want to leave this hidden gem, deep within the lush Redux Woods."
            }
        ]
    }
}

*/
