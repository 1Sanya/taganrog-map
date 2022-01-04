import { storage } from "../../firebase/config";
import { Dispatch } from "redux";
import { photosACT } from "../../Types/albumsPageT";
import { fetchAlbumStartAC, fetchAlbumSuccessAC } from "./albumsPageAC";

export const fetchAlbumAC = (name: string) => async (dispatch: Dispatch<photosACT>) => {
  dispatch(fetchAlbumStartAC());
  const fetchImages = async () => {
    const result = await storage.ref().child(name).listAll();
    const urlPromises = result.items.map((imageRef) => imageRef.getDownloadURL());

    return Promise.all(urlPromises);
  };

  const loadImages = async () => {
    const urls = await fetchImages();
    dispatch(fetchAlbumSuccessAC(urls, name));
  };
  loadImages();
};

// export const fetchAlbumAC = () => async (dispatch: Dispatch<homeACT>) => {
//   console.log(`before first`);
//   dispatch(fetchMusicStartAC());
//   const fetchMusic = async () => {
//     const result = await storage.ref().child("music").listAll();
//     console.log(`listed all ${result}`);
//     const urlPromises = result.items.map((imageRef) => imageRef.getDownloadURL());
//
//     return Promise.all(urlPromises);
//   };
//
//   const loadImages = async () => {
//     const urls = await fetchMusic();
//     dispatch(fetchMusicSuccessAC(urls));
//   };
//   loadImages();
// };

// let result;
// return (result = await storage
//   .ref()
//   .child(name)
//   .listAll()
//   .then((imgsLinks) => {
//     imgsLinks.items.map((imageRef: any) =>
//       imageRef.getDownloadURL().then((outputImgs: string[]) => {
//         dispatch(fetchAlbumSuccessAC(outputImgs));
//       })
//     );
//   }))

// return async function (dispatch: Dispatch<photosACT>) {
//   dispatch(fetchAlbumStartAC());
//   const result = await storage.ref().child(name).listAll();
//   const urlPromises = result.items.map((imageRef: any) => imageRef.getDownloadURL());
//   dispatch(fetchAlbumSuccessAC(urlPromises));
// };

// const imgs = new Promise(function (resolve) {
//   resolve(
//     Promise.all(urlPromises).then((values) => {
//       array = values;
//     })
//   );
// });

// imgs.then(() => {
//   fetchAlbumSuccessAC(array);
// });

// import { storage } from "../../firebase/config";
// import { Dispatch } from "redux";
// import { fetchAlbumErrorAC, fetchAlbumStartAC, fetchAlbumSuccessAC } from "./mainPageAC";
// import { photosACT } from "../../Types/mainPageT";
//
// export const fetchAlbumAC = (name: string) => async (dispatch: Dispatch<photosACT>) => {
//   try {
//     fetchAlbumStartAC();
//     const storageRef = storage.ref();
//     const result = await storageRef.child(name).listAll();
//
//     fetchAlbumSuccessAC(urlPromises);
//   } catch (e) {
//     fetchAlbumErrorAC(String(e));
//   }
// };

// const urlPromises = new Promise((resolve) => {
//   resolve((outPut = result.items.map((imageRef: any) => imageRef.getDownloadURL())));
//   // Promise.all(outPut).then((values) => {
//   //   outPut.push(values);
//   // });
// });
