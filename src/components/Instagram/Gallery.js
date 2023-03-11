// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import Post from './Post';
// import FacebookSVG from '../../assets/images/fb2.svg';
// import InstagramSVG from '../../assets/images/ig2.svg';
// import TiktokSVG from '../../assets/images/tiktok.svg';
// import Crest from '../../assets/images/logoSVG.svg';

// const Gallery = ({ token, limit }) => {
//   const [posts, setPostData] = useState([]);
//   const tokenProp = useRef(token);
//   tokenProp.current = token;

//   const instaURL = `https://graph.instagram.com/me/media?fields=id,media_type,permalink,children,media_url,caption&limit=16&access_token=IGQVJYX3VlcVl0YjNNXzBUbldPTVh3Rkc1ajNpSER4WVlDalJwaG1YWEFpZATlNZAnhJQXV2ZA1g1N2dRblM1YnVzcGNMeHJ0ZAU5KRnotbHRCRV90NGppR2YxdmExVVdtQjVvZA3VWMXpR`;
//   //   <GatsbyImage
//   //   image={sponsor.image.asset.gatsbyImage}
//   //   alt="sponsor"
//   //   className="brand-rail__img"
//   // />
//   useEffect(() => {
//     // this is to avoid memory leaks
//     const abortController = new AbortController();
//     async function fetchInstagramPost() {
//       try {
//         axios.get(instaURL).then((resp) => {
//           setPostData(resp.data.data);
//           console.log(resp.data);
//         });
//       } catch (err) {
//         console.log('error', err);
//       }
//     }

//     // manually call the fecth function
//     fetchInstagramPost();

//     return () => {
//       // cancel pending fetch request on component unmount
//       abortController.abort();
//     };
//   }, [instaURL, limit]);

//   return (
//     <div className="insta-posts">
//       <div className="insta-posts__header">
//         <h3>
//           <span>#</span>ScyllaRugby
//           <span>
//             <Crest />
//           </span>
//         </h3>
//         <div className="insta-posts__social-bar">
//           <div className="insta-posts__svg">
//             <FacebookSVG />
//           </div>
//           <div className="insta-posts__svg">
//             <InstagramSVG />
//           </div>
//           <div className="insta-posts__svg">
//             <TiktokSVG />
//           </div>
//         </div>
//       </div>
//       {posts.map((post) => (
//         <Post key={post.id} post={post} />
//       ))}
//     </div>
//   );
// };

// export default Gallery;
