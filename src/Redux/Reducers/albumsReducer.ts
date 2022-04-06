import { photosACT, photosAT, albumsReducerT } from "../../Types/albumsPageT";
import alferaki1 from "../../assets/photo/alferaki/1.jpg";
import artMuseum1 from "../../assets/photo/artmuseum/1.jpg";
import bogudonia1 from "../../assets/photo/bogudonia/1.jpg";
import chehovsHouse1 from "../../assets/photo/chehov/1.png";
import chehovShop1 from "../../assets/photo/chekhovshop/1.jpg";
import cvr1 from "../../assets/photo/cvr/1.jpg";
import embankment1 from "../../assets/photo/embankment/1.jpg";
import bytaMuseum1 from "../../assets/photo/gradstroy/1.jpg";
import graveyard1 from "../../assets/photo/graveyard/1.jpg";
import krasniy1 from "../../assets/photo/krasniy/1.jpg";
import round1 from "../../assets/photo/round/1.jpg";
import shmidta1 from "../../assets/photo/shmidta/1.jpg";
import shopingRows1 from "../../assets/photo/shoppingrows/1.jpg";
import balcony from "../../assets/photo/balcony/1.jpg";
import voda from "../../assets/photo/vodo/1.jpg";
import italyanskiy from "../../assets/photo/italyanskiy/ava.jpg";
import europe from "../../assets/photo/europe/1.jpg";

export function getAlbumsModule() {
  return {
    id: "albums",
    reducerMap: {
      albumsReducer: albumsReducer,
    },
  };
}

export const initialState: albumsReducerT = {
  currentAlbum: [],
  error: false,
  loading: false,
  museums: [],
  albums: [],
  industries: [],
  // museums: [
  //   {
  //     displayName: "Градостроительства и быта",
  //     name: "urbanMuseum",
  //     mediaUrl: bytaMuseum1,
  //     onMapsLink: "https://yandex.ru/maps/-/CCUue-FtOB",
  //     museumOnlineLink: "https://www.tgliamz.ru/online-museum/Taganrod-gradostroitelstvo/",
  //     color: "#9A5150",
  //     isWide: true,
  //   },
  //   {
  //     displayName: "Домик Чехова",
  //     name: "chehov-house",
  //     mediaUrl: chehovsHouse1,
  //     onMapsLink:
  //       "https://yandex.ru/maps/org/domik_chekhova/1186079693/?ll=38.905125%2C47.222697&mode=search&sll=38.917300%2C47.220983&sspn=0.246506%2C0.098706&text=%D0%BC%D1%83%D0%B7%D0%B5%D0%B9&z=14",
  //     museumOnlineLink: "https://www.tgliamz.ru/online-museum/Taganrog-domik/",
  //     color: "rgb(193,220,60)",
  //     isWide: true,
  //   },
  //   {
  //     displayName: "Лавка Чехова",
  //     name: "chehov-shop",
  //     mediaUrl: chehovShop1,
  //     onMapsLink: "https://yandex.ru/maps/-/CCUue-VNKB",
  //     museumOnlineLink: "https://www.tgliamz.ru/online-museum/Taganrog-lavka/",
  //     color: "#D27B62",
  //     isWide: true,
  //   },
  //   {
  //     displayName: "Художественный музей",
  //     name: "art-museum",
  //     mediaUrl: artMuseum1,
  //     onMapsLink:
  //       "https://yandex.ru/maps/org/taganrogskiy_khudozhestvenny_muzey/1067987948/?display-text=%D0%BC%D1%83%D0%B7%D0%B5%D0%B9&ll=38.905125%2C47.222697&mode=search&sll=38.905125%2C47.222697&sspn=0.123253%2C0.049351&text=%D0%BC%D1%83%D0%B7%D0%B5%D0%B9&z=14",
  //     museumOnlineLink: "http://www.artmuseumtgn.ru/pan_3d/tour.html",
  //     color: "rgb(175, 171, 163)",
  //     isWide: true,
  //   },
  // ],
  // albums: [
  //   {
  //     displayName: "Дворец Алфераки",
  //     name: "alferaki",
  //     mediaUrl: alferaki1,
  //     onMapsLink: "https://yandex.ru/maps/-/CCUuiCCnDA",
  //     isWide: true,
  //   },
  //   {
  //     displayName: "Богудония",
  //     name: "bogudonia",
  //     mediaUrl: bogudonia1,
  //     onMapsLink: "https://yandex.ru/maps/-/CCUuiCCjXB",
  //     isWide: false,
  //     color: "#8696A4",
  //   },
  //   {
  //     displayName: "Переулок Шмидта",
  //     name: "shmidta",
  //     mediaUrl: shmidta1,
  //     onMapsLink: "https://yandex.ru/maps/-/CCUuiCGtkD",
  //     isWide: false,
  //     color: "#376e8d",
  //   },
  //   {
  //     displayName: "Старое кладбище",
  //     name: "graveyard",
  //     mediaUrl: graveyard1,
  //     onMapsLink: "https://yandex.ru/maps/-/CCUuiCGGlA",
  //     isWide: false,
  //     color: "rgb(126, 101, 76)",
  //   },
  //
  //   {
  //     displayName: "Плитка, ворота, балконы",
  //     name: "tile",
  //     mediaUrl: balcony,
  //     onMapsLink:
  //       "https://yandex.ru/maps/org/dvorets_n_d_alferaki/41237525313/?ll=38.926696%2C47.212990&mode=search&sll=38.905125%2C47.222697&sspn=0.123253%2C0.049351&text=%D0%B0%D0%BB%D1%84%D0%B5%D1%80%D0%B0%D0%BA%D0%B8&z=17",
  //     isWide: false,
  //     color: "rgb(252, 236, 236)",
  //     textColor: "#000000",
  //   },
  //   {
  //     displayName: "Круглый дом",
  //     name: "round-house",
  //     mediaUrl: round1,
  //     onMapsLink: "https://yandex.ru/maps/-/CCUuiCGLGB",
  //     isWide: true,
  //     color: "rgb(228, 196, 60)",
  //   },
  //   {
  //     displayName: "Переулок Красный",
  //     name: "krasniy",
  //     mediaUrl: krasniy1,
  //     onMapsLink: "https://yandex.ru/maps/-/CCUuiCG8hB",
  //     isWide: true,
  //     // color: "rgb(139, 158, 188)",
  //     color: "#D27B62",
  //   },
  //   {
  //     displayName: "Переулок Итальянский",
  //     name: "italyanskiy",
  //     mediaUrl: italyanskiy,
  //     onMapsLink: "https://yandex.ru/maps/-/CCUurXBSoC",
  //     isWide: false,
  //     color: "#376e8d",
  //   },
  //   {
  //     displayName: "Набережная",
  //     name: "embankment",
  //     mediaUrl: embankment1,
  //     onMapsLink: "https://yandex.ru/maps/-/CCUuiCC7-B",
  //     isWide: false,
  //     color: "rgb(166, 147, 136)",
  //   },
  //   {
  //     displayName: "Водолечебница",
  //     name: "vodolechebnica",
  //     mediaUrl: voda,
  //     onMapsLink: "https://yandex.ru/maps/-/CCUurXBkGD",
  //     isWide: true,
  //     color: "rgb(4, 11, 11)",
  //   },
  //   {
  //     displayName: "Дом пионеров",
  //     name: "cvr",
  //     mediaUrl: cvr1,
  //     onMapsLink: "https://yandex.ru/maps/-/CCUuiCSIcA",
  //     isWide: false,
  //     color: "rgb(4, 188, 116)",
  //   },
  //   {
  //     displayName: "Европейский квартал",
  //     name: "europe",
  //     mediaUrl: europe,
  //     onMapsLink: "https://yandex.ru/maps/-/CCUyIHAvHB",
  //     isWide: false,
  //     color: "rgb(250, 224, 79)",
  //   },
  //   {
  //     displayName: "Торговые ряды",
  //     name: "shoping-rows",
  //     mediaUrl: shopingRows1,
  //     onMapsLink: "https://yandex.ru/maps/-/CCUuiCSIcA",
  //     isWide: true,
  //     color: "rgb(50, 38, 125)",
  //   },
  // ],
};

export const albumsReducer = (state = initialState, action: photosACT): albumsReducerT => {
  switch (action.type) {
    case photosAT.FETCH_ALBUM_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case photosAT.FETCH_ALBUM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        currentAlbum: action.album,
      };
    case photosAT.FETCH_ALBUM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

// return {
//   ...state,
//   museums: state.museums.map((museum) => {
//     if (museum.name == action.name) {
//       return {
//         ...museum,
//         photos: action.album,
//       };
//     }
//     return museum;
//   }),
//   albums: state.albums.map((albums) => {
//     if (albums.name == action.name) {
//       return {
//         ...albums,
//         photos: action.album,
//       };
//     }
//     return albums;
//   }),
// };
// import { photoACT, photosReducerT } from "../../Types/photosT";

// import alferaki2 from "../../assets/photo/alferaki/2.jpg";
// import alferaki3 from "../../assets/photo/alferaki/3.jpg";
// import alferaki4 from "../../assets/photo/alferaki/4.jpg";
// import alferaki5 from "../../assets/photo/alferaki/5.jpg";
// import alferaki6 from "../../assets/photo/alferaki/6.jpg";

// import artMuseum2 from "../../assets/photo/artmuseum/2.jpg";
// import artMuseum3 from "../../assets/photo/artmuseum/3.jpg";
// import artMuseum4 from "../../assets/photo/artmuseum/4.jpg";
// import artMuseum5 from "../../assets/photo/artmuseum/5.jpg";
// import artMuseum6 from "../../assets/photo/artmuseum/6.jpg";
// import artMuseum7 from "../../assets/photo/artmuseum/7.jpg";
// import artMuseum8 from "../../assets/photo/artmuseum/8.jpg";
// import artMuseum9 from "../../assets/photo/artmuseum/9.jpg";
// import artMuseum10 from "../../assets/photo/artmuseum/10.jpg";

// import bogudonia2 from "../../assets/photo/bogudonia/2.jpg";
// import bogudonia3 from "../../assets/photo/bogudonia/3.jpg";
// import bogudonia4 from "../../assets/photo/bogudonia/4.jpg";
// import bogudonia5 from "../../assets/photo/bogudonia/5.jpg";
// import bogudonia6 from "../../assets/photo/bogudonia/6.jpg";
// import bogudonia7 from "../../assets/photo/bogudonia/7.jpg";
// import bogudonia8 from "../../assets/photo/bogudonia/8.jpg";
// import bogudonia9 from "../../assets/photo/bogudonia/9.jpg";
// import bogudonia10 from "../../assets/photo/bogudonia/10.jpg";

// import chehovsHouse2 from "../../assets/photo/chehov/2.png";
// import chehovsHouse3 from "../../assets/photo/chehov/3.png";
// import chehovsHouse4 from "../../assets/photo/chehov/4.png";
// import chehovsHouse5 from "../../assets/photo/chehov/5.png";
// import chehovsHouse6 from "../../assets/photo/chehov/6.png";

// import chehovShop2 from "../../assets/photo/chekhovshop/2.jpg";
// import chehovShop3 from "../../assets/photo/chekhovshop/3.jpg";
// import chehovShop4 from "../../assets/photo/chekhovshop/4.jpg";

// import cvr2 from "../../assets/photo/cvr/2.jpg";
// import cvr3 from "../../assets/photo/cvr/3.jpg";
// import cvr4 from "../../assets/photo/cvr/4.jpg";
// import cvr5 from "../../assets/photo/cvr/5.jpg";
// import cvr6 from "../../assets/photo/cvr/6.jpg";

// import embankment2 from "../../assets/photo/embankment/2.jpg";
// import embankment3 from "../../assets/photo/embankment/3.jpg";
// import embankment4 from "../../assets/photo/embankment/4.jpg";
// import embankment5 from "../../assets/photo/embankment/5.jpg";

// import gorkogo2 from "../../assets/photo/gorkogo/2.jpg";
// import gorkogo3 from "../../assets/photo/gorkogo/3.jpg";
// import gorkogo4 from "../../assets/photo/gorkogo/4.jpg";

// import bytaMuseum2 from "../../assets/photo/gradstroy/2.jpg";
// import bytaMuseum3 from "../../assets/photo/gradstroy/3.jpg";
// import bytaMuseum4 from "../../assets/photo/gradstroy/4.jpg";
// import bytaMuseum5 from "../../assets/photo/gradstroy/5.jpg";
// import bytaMuseum6 from "../../assets/photo/gradstroy/6.jpg";
// import bytaMuseum7 from "../../assets/photo/gradstroy/7.jpg";
// import bytaMuseum8 from "../../assets/photo/gradstroy/8.jpg";
// import bytaMuseum9 from "../../assets/photo/gradstroy/9.jpg";
// import bytaMuseum10 from "../../assets/photo/gradstroy/10.jpg";
// import bytaMuseum11 from "../../assets/photo/gradstroy/11.jpg";
// import bytaMuseum12 from "../../assets/photo/gradstroy/12.jpg";
// import bytaMuseum13 from "../../assets/photo/gradstroy/13.jpg";
// import bytaMuseum14 from "../../assets/photo/gradstroy/14.jpg";
// import bytaMuseum15 from "../../assets/photo/gradstroy/15.jpg";

// import graveyard2 from "../../assets/photo/graveyard/2.jpg";
// import graveyard3 from "../../assets/photo/graveyard/3.jpg";
// import graveyard4 from "../../assets/photo/graveyard/4.jpg";
// import graveyard5 from "../../assets/photo/graveyard/5.jpg";
// import graveyard6 from "../../assets/photo/graveyard/6.jpg";
// import graveyard7 from "../../assets/photo/graveyard/7.jpg";
// import graveyard8 from "../../assets/photo/graveyard/8.jpg";
// import graveyard9 from "../../assets/photo/graveyard/9.jpg";
// import graveyard10 from "../../assets/photo/graveyard/10.jpg";
// import graveyard11 from "../../assets/photo/graveyard/11.jpg";

// import krasniy2 from "../../assets/photo/krasniy/2.jpg";
// import krasniy3 from "../../assets/photo/krasniy/3.jpg";
// import krasniy4 from "../../assets/photo/krasniy/4.jpg";
// import library1 from "../../assets/photo/library/1.jpg";
// import library2 from "../../assets/photo/library/2.jpg";
// import library3 from "../../assets/photo/library/3.jpg";

// import round2 from "../../assets/photo/round/2.jpg";
// import round3 from "../../assets/photo/round/3.jpg";
// import round4 from "../../assets/photo/round/4.jpg";
// import round5 from "../../assets/photo/round/5.jpg";

// import shmidta2 from "../../assets/photo/shmidta/2.jpg";
// import shmidta3 from "../../assets/photo/shmidta/3.jpg";
// import shmidta4 from "../../assets/photo/shmidta/4.jpg";
// import shmidta5 from "../../assets/photo/shmidta/5.jpg";
// import shmidta6 from "../../assets/photo/shmidta/6.jpg";
// import shmidta7 from "../../assets/photo/shmidta/7.jpg";
// import shmidta8 from "../../assets/photo/shmidta/8.jpg";

// import shopingRows2 from "../../assets/photo/shoppingrows/2.jpg";
// import shopingRows3 from "../../assets/photo/shoppingrows/3.jpg";
// import shopingRows4 from "../../assets/photo/shoppingrows/4.jpg";

// import stoneRoad2 from "../../assets/photo/stoneRoad/2.jpg";
// import stoneRoad3 from "../../assets/photo/stoneRoad/3.jpg";

// import stoneRoad12 from "../../assets/photo/stoneRoad1/2.jpg";
// import stoneRoad13 from "../../assets/photo/stoneRoad1/3.jpg";
// import stoneRoad14 from "../../assets/photo/stoneRoad1/4.jpg";
// import singleImage1 from "../../assets/photo/1.jpg";
// import singleImage2 from "../../assets/photo/2.jpg";
// import singleImage3 from "../../assets/photo/3.jpg";
// import singleImage4 from "../../assets/photo/4.jpg";
// import singleImage13 from "../../assets/photo/13.jpg";
// import singleImage16 from "../../assets/photo/16.jpg";
// import singleImage17 from "../../assets/photo/17.jpg";
// import singleImage18 from "../../assets/photo/18.jpg";
// import singleImage19 from "../../assets/photo/19.jpg";
// import singleImage20 from "../../assets/photo/20.jpg";
// import singleImage21 from "../../assets/photo/21.jpg";
// import singleImage22 from "../../assets/photo/22.jpg";
// import singleImage23 from "../../assets/photo/23.jpg";
// import singleImage24 from "../../assets/photo/24.jpg";
// import singleImage25 from "../../assets/photo/25.jpg";
// import singleImage26 from "../../assets/photo/26.jpg";
// import singleImage27 from "../../assets/photo/27.jpg";
// import singleImage28 from "../../assets/photo/28.jpg";
// import singleImage29 from "../../assets/photo/29.jpg";
// import singleImage30 from "../../assets/photo/30.jpg";
// import singleImage31 from "../../assets/photo/31.jpg";
// import singleImage32 from "../../assets/photo/32.jpg";
// import singleImage33 from "../../assets/photo/33.jpg";
// import singleImage34 from "../../assets/photo/34.jpg";
// import singleImage35 from "../../assets/photo/35.jpg";
// import singleImage36 from "../../assets/photo/36.jpg";
// import singleImage37 from "../../assets/photo/37.jpg";
// import singleImage38 from "../../assets/photo/38.jpg";
// import singleImage39 from "../../assets/photo/39.jpg";
// import singleImage40 from "../../assets/photo/40.jpg";
// import singleImage41 from "../../assets/photo/41.jpg";
// import singleImage42 from "../../assets/photo/42.jpg";
// import singleImage43 from "../../assets/photo/43.jpg";
// import singleImage44 from "../../assets/photo/44.jpg";
// import singleImage45 from "../../assets/photo/45.jpg";
// import singleImage46 from "../../assets/photo/46.jpg";
// import singleImage47 from "../../assets/photo/47.jpg";
// import singleImage48 from "../../assets/photo/48.jpg";
