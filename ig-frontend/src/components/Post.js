import React from 'react'

// const post = {
//     "id": 1,
//     "description": "me learning react with strapi",
//     "likes": 20,
//     "author": {
//       "id": 1,
//       "username": "testuser",
//       "email": "testuser@gmail.com",
//       "provider": "local",
//       "confirmed": true,
//       "blocked": false,
//       "role": 1,
//       "created_at": "2021-07-09T21:12:56.403Z",
//       "updated_at": "2021-07-09T21:13:00.356Z"
//     },
//     "published_at": "2021-07-09T22:10:13.317Z",
//     "created_at": "2021-07-09T22:10:11.517Z",
//     "updated_at": "2021-07-09T22:12:12.337Z",
//     "image": {
//       "id": 1,
//       "name": "Capture.PNG",
//       "alternativeText": "",
//       "caption": "",
//       "width": 437,
//       "height": 387,
//       "formats": {
//         "thumbnail": {
//           "name": "thumbnail_Capture.PNG",
//           "hash": "thumbnail_Capture_976d0f4cd2",
//           "ext": ".PNG",
//           "mime": "image/png",
//           "width": 176,
//           "height": 156,
//           "size": 30.54,
//           "path": null,
//           "url": "/uploads/thumbnail_Capture_976d0f4cd2.PNG"
//         }
//       },
//       "hash": "Capture_976d0f4cd2",
//       "ext": ".PNG",
//       "mime": "image/png",
//       "size": 72.08,
//       "url": "/uploads/Capture_976d0f4cd2.PNG",
//       "previewUrl": null,
//       "provider": "local",
//       "provider_metadata": null,
//       "created_at": "2021-07-09T22:09:49.714Z",
//       "updated_at": "2021-07-09T22:09:49.734Z"
//     }
// }

const API_URL = 'http://localhost:1337'
const formatImageUrl = (url) => `${API_URL}${url}`

export default function Post({post}) {
    const { image:{url}, description, likes } = post

    return (
        <div className="Post">
            <img src={formatImageUrl(url)} className="Post__Image" alt="aaa"/>
            <h4>{description}</h4>
            <div>
                <span>Likes: {likes}</span>
            </div>
        </div>
    )
}
