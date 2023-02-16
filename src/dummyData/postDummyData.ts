import { postDataType } from "@/types";
import images from "@/utils/constants/images";

const postDummyData: postDataType[] = [
  {
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/665.jpg",
    imageSource: images.postImage1,
    like: 1500,
    message: 450,
    share: 42,
    name: "Fabiola",
    time: "2 hrs ago",
  },
  {
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/611.jpg",
    imageSource: images.postImage2,
    like: 67,
    message: 12,
    share: 4,
    name: "Rickie",
    time: "2 hrs ago",
  },
  {
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1126.jpg",
    imageSource: images.postImage1,
    like: 435,
    message: 450,
    share: 42,
    name: "Athena",
    time: "2 hrs ago",
  },
];

export default postDummyData;
