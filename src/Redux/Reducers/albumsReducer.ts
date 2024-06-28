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
  museums: [
    {
      displayName: "Градостроительства и быта",
      name: "urbanMuseum",
      mediaUrl: bytaMuseum1,
      onMapsLink: "https://yandex.ru/maps/-/CCUue-FtOB",
      museumOnlineLink: "https://www.tgliamz.ru/online-museum/Taganrod-gradostroitelstvo/",
      color: "#9A5150",
      isWide: true,
    },
    {
      displayName: "Домик Чехова",
      name: "chehov-house",
      mediaUrl: chehovsHouse1,
      onMapsLink:
        "https://yandex.ru/maps/org/domik_chekhova/1186079693/?ll=38.905125%2C47.222697&mode=search&sll=38.917300%2C47.220983&sspn=0.246506%2C0.098706&text=%D0%BC%D1%83%D0%B7%D0%B5%D0%B9&z=14",
      museumOnlineLink: "https://www.tgliamz.ru/online-museum/Taganrog-domik/",
      color: "rgb(193,220,60)",
      isWide: true,
    },
    {
      displayName: "Лавка Чехова",
      name: "chehov-shop",
      mediaUrl: chehovShop1,
      onMapsLink: "https://yandex.ru/maps/-/CCUue-VNKB",
      museumOnlineLink: "https://www.tgliamz.ru/online-museum/Taganrog-lavka/",
      color: "#D27B62",
      isWide: true,
    },
    {
      displayName: "Художественный музей",
      name: "art-museum",
      mediaUrl: artMuseum1,
      onMapsLink:
        "https://yandex.ru/maps/org/taganrogskiy_khudozhestvenny_muzey/1067987948/?display-text=%D0%BC%D1%83%D0%B7%D0%B5%D0%B9&ll=38.905125%2C47.222697&mode=search&sll=38.905125%2C47.222697&sspn=0.123253%2C0.049351&text=%D0%BC%D1%83%D0%B7%D0%B5%D0%B9&z=14",
      museumOnlineLink: "http://www.artmuseumtgn.ru/pan_3d/tour.html",
      color: "rgb(175, 171, 163)",
      isWide: true,
    },
  ],
  albums: [
    {
      displayName: "Дворец Алфераки",
      name: "alferaki",
      mediaUrl: alferaki1,
      onMapsLink: "https://yandex.ru/maps/-/CCUuiCCnDA",
      isWide: true,
    },
    {
      displayName: "Богудония",
      name: "bogudonia",
      mediaUrl: bogudonia1,
      onMapsLink: "https://yandex.ru/maps/-/CCUuiCCjXB",
      isWide: false,
      color: "#8696A4",
    },
    {
      displayName: "Переулок Шмидта",
      name: "shmidta",
      mediaUrl: shmidta1,
      onMapsLink: "https://yandex.ru/maps/-/CCUuiCGtkD",
      isWide: false,
      color: "#376e8d",
    },
    {
      displayName: "Старое кладбище",
      name: "graveyard",
      mediaUrl: graveyard1,
      onMapsLink: "https://yandex.ru/maps/-/CCUuiCGGlA",
      isWide: false,
      color: "rgb(126, 101, 76)",
    },

    {
      displayName: "Плитка, ворота, балконы",
      name: "tile",
      mediaUrl: balcony,
      onMapsLink:
        "https://yandex.ru/maps/org/dvorets_n_d_alferaki/41237525313/?ll=38.926696%2C47.212990&mode=search&sll=38.905125%2C47.222697&sspn=0.123253%2C0.049351&text=%D0%B0%D0%BB%D1%84%D0%B5%D1%80%D0%B0%D0%BA%D0%B8&z=17",
      isWide: false,
      color: "rgb(252, 236, 236)",
      textColor: "#000000",
    },
    {
      displayName: "Круглый дом",
      name: "round-house",
      mediaUrl: round1,
      onMapsLink: "https://yandex.ru/maps/-/CCUuiCGLGB",
      isWide: true,
      color: "rgb(228, 196, 60)",
    },
    {
      displayName: "Переулок Красный",
      name: "krasniy",
      mediaUrl: krasniy1,
      onMapsLink: "https://yandex.ru/maps/-/CCUuiCG8hB",
      isWide: true,
      // color: "rgb(139, 158, 188)",
      color: "#D27B62",
    },
    {
      displayName: "Переулок Итальянский",
      name: "italyanskiy",
      mediaUrl: italyanskiy,
      onMapsLink: "https://yandex.ru/maps/-/CCUurXBSoC",
      isWide: false,
      color: "#376e8d",
    },
    {
      displayName: "Набережная",
      name: "embankment",
      mediaUrl: embankment1,
      onMapsLink: "https://yandex.ru/maps/-/CCUuiCC7-B",
      isWide: false,
      color: "rgb(166, 147, 136)",
    },
    {
      displayName: "Водолечебница",
      name: "vodolechebnica",
      mediaUrl: voda,
      onMapsLink: "https://yandex.ru/maps/-/CCUurXBkGD",
      isWide: true,
      color: "rgb(4, 11, 11)",
    },
    {
      displayName: "Дом пионеров",
      name: "cvr",
      mediaUrl: cvr1,
      onMapsLink: "https://yandex.ru/maps/-/CCUuiCSIcA",
      isWide: false,
      color: "rgb(4, 188, 116)",
    },
    {
      displayName: "Европейский квартал",
      name: "europe",
      mediaUrl: europe,
      onMapsLink: "https://yandex.ru/maps/-/CCUyIHAvHB",
      isWide: false,
      color: "rgb(250, 224, 79)",
    },
    {
      displayName: "Торговые ряды",
      name: "shoping-rows",
      mediaUrl: shopingRows1,
      onMapsLink: "https://yandex.ru/maps/-/CCUuiCSIcA",
      isWide: true,
      color: "rgb(50, 38, 125)",
    },
  ],
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
