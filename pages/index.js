import SetHead from "../components/head/index";
import Footer from "../components/footer/index";
import Product from "../components/Product/index";

const DUMMY_MEETUPS = [
  {
    product_id: 1,
    product_name: "มอนสเตอร่า",
    image_path: "https://img-ha.mthcdn.com/K-DWtb3AVn9_7ZYiUlIn1Ec_Po8=/mthai.com/app/uploads/2020/08/1-1-1.jpg",
    price: 2500,
  },
  {
    product_id: 2,
    product_name: "ยางอินเดีย",
    image_path: "https://img-ha.mthcdn.com/FVg8VtB7wsfCR7te0ss-URnl0Xk=/mthai.com/app/uploads/2020/08/1-2-1-819x1024.jpg",
    price: 800,
  },
  {
    product_id: 3,
    product_name: "ไทรใบสัก",
    image_path: "https://img-ha.mthcdn.com/kjMinH6Ybp6fO6gZrHyKuTsXxA8=/mthai.com/app/uploads/2020/08/1-3-1.jpg",
    price: 600,
  },
  {
    product_id: 4,

    product_name: "ลิ้นมังกร",
    image_path: "https://img-ha.mthcdn.com/szwLqgxoiOxHvM7fHk60G72I8gc=/mthai.com/app/uploads/2020/08/1-5-1.jpg",
    price: 560,
  },
  {
    product_id: 5,

    product_name: "กวักมรกต",
    image_path:
      "https://img-ha.mthcdn.com/Cc_rSMS42eaHO2DXQcZc95bSglk=/mthai.com/app/uploads/2020/08/1-6-1-683x1024.jpg",
    price: 999,
  },
  {
    product_id: 6,

    product_name: "ว่านงาช้าง",
    image_path:
      "https://img-ha.mthcdn.com/Ds3hgyyqv9x3vU2y4QRqEcRw1l8=/mthai.com/app/uploads/2020/08/1-7-1.jpg",
    price: 1140,
  },
  {
    product_id: 7,

    product_name: "แคคตัส",
    image_path: "https://img-ha.mthcdn.com/50SJYJFS6N9m0A63BTq_yxH2HdI=/mthai.com/app/uploads/2020/08/1-8-1.jpg",

    price: 4744,
  },
  {
    product_id: 8,

    product_name: "พลูใบฉลุ",
    image_path: "https://img-ha.mthcdn.com/p7o9thtK1iQN7PbOzlcrF4OzM2A=/mthai.com/app/uploads/2020/08/1-9-1.jpg",
    price: 1020,
  },
  {
    product_id: 9,

    product_name: "ราชินีหินอ่อน",
    image_path:
      "https://img-ha.mthcdn.com/BMnZhGhzKYQkDggbNYqQXpZshhI=/mthai.com/app/uploads/2020/08/1-10-1-683x1024.jpg",
    price: 1000,
  },
  {
    product_id: 10,
    product_name: "ช้อนเงินช้อนทอง",
    image_path:
      "https://img-ha.mthcdn.com/rewzWXaDMDiMjaGF9ya4GOicOkw=/mthai.com/app/uploads/2020/08/1-11-1.jpg",
    price: 42,
  },
];

export default function Home(props) {
  const { data } = props;
  return (
    <>
      <SetHead />
      <Product data={data} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      data: DUMMY_MEETUPS,
    },
  };
}
