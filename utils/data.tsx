import { v4 as uuidv4 } from "uuid";
import { BsArrowDownShort } from "react-icons/bs";
import { factory } from "typescript";
const uniqueId = uuidv4();

const NavItems = {
  data: [
    {
      title: "Home",
      link: "",
      id: uniqueId,
      isDropdown: true,
      icon: <BsArrowDownShort />,
      collections: [
        {
          name: "Home One",
          id: uniqueId,
        },
        {
          name: "Home One",
          id: uniqueId,
        },
        {
          name: "Home One",
          id: uniqueId,
        },
      ],
    },
    {
      title: "About",
      id: uniqueId,
      link: "",
      isDropdown: false,
    },
    {
      title: "Menu",
      id: uniqueId,
      link: "",
      isDropdown: true,
      icon: <BsArrowDownShort />,
      collections: [
        {
          name: "Menu List",
          id: uniqueId,
          link: "",
        },
        {
          name: "Menu List",
          id: uniqueId,
          link: "",
        },
        {
          name: "Menu List",
          id: uniqueId,
          link: "",
        },
        {
          name: "Menu List",
          id: uniqueId,
          link: "",
        },
      ],
    },
    {
      title: "Pages",
      id: uniqueId,
      link: "",
      isDropdown: true,
      icon: <BsArrowDownShort />,
      collections: [
        {
          name: "Food Reservation",
          id: uniqueId,
          link: "",
        },
        {
          name: "Chef",
          id: uniqueId,
          link: "",
        },
        {
          name: "Gallery",
          id: uniqueId,
          link: "",
          collections: [
            {
              name: "GALLERY",
              link: "",
              id: uniqueId,
            },
            {
              name: "GALLERY",
              link: "",
              id: uniqueId,
            },
            {
              name: "GALLERY",
              link: "",
              id: uniqueId,
            },
          ],
        },
        {
          name: "Shop",
          id: uniqueId,
          link: "",
          collections: [
            { name: "SHOP", link: "", id: uniqueId },
            { name: "SHOP", link: "", id: uniqueId },
            { name: "SHOP", link: "", id: uniqueId },
          ],
        },
        {
          name: "Error",
          id: uniqueId,
          link: "",
        },
        {
          name: "Food Category",
          id: uniqueId,
          link: "",
        },
      ],
    },
    {
      title: "Contact",
      id: uniqueId,
      isDropdown: false,
      link: "",
    },
  ],
};

const ShowCaseData = {
  data: [
    {
      image:
        "https://restho-nextjs.vercel.app/assets/images/icon/h2-about1.svg",
      title: " Pure Fresh Food.",
      description: "We are serve different type of fresh food.",
      id: uniqueId,
    },
    {
      image:
        "https://restho-nextjs.vercel.app/assets/images/icon/h2-about2.svg",
      title: "Expertises Chief",
      description: "We are serve different type of fresh food",
      id: uniqueId,
    },
  ],
};

export { NavItems, ShowCaseData };
