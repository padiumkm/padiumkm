type FooterList = {
  title: string;
  list: {
    name: string;
    link: string;
  }[];
};

type SocialMedia = {
  name: string;
  link: string;
  icon: string;
};

type PaymentMethod = {
  name: string;
  icon: string;
};

export const footerList: FooterList[] = [
  {
    title: "PaDi UMKM",
    list: [
      {
        name: "Tentang PaDi UMKM",
        link: "/about",
      },
      {
        name: "Syarat & Ketentuan",
        link: "/syarat-dan-ketentuan",
      },
      {
        name: "Kebijakan Privasi",
        link: "/kebijakan-privasi",
      },
      {
        name: "Finance",
        link: "/finance",
      },
    ],
  },
  {
    title: "Informasi",
    list: [
      {
        name: "FAQ (Tanya Jawab)",
        link: "/faq",
      },
    ],
  },
  {
    title: "Penjual",
    list: [
      {
        name: "Panduan Penjual",
        link: "/panduan-penjual",
      },
      {
        name: "Marketplace",
        link: "/marketplace",
      },
      {
        name: "eProcurement",
        link: "/eprocurement",
      },
      {
        name: "Tender",
        link: "/tender",
      },
      {
        name: "Control Tower",
        link: "/control-tower",
      },
    ],
  },
];

export const socialMedia: SocialMedia[] = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/padiumkm",
    icon: "/facebook.svg",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/padiumkm",
    icon: "/twitter.svg",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/padiumkm",
    icon: "/instagram.svg",
  },
  {
    name: "Youtube",
    link: "",
    icon: "/youtube.svg",
  },
];

export const paymentMethod: PaymentMethod[] = [
  {
    name: "BNI",
    icon: "/bni.svg",
  },
  {
    name: "BRI",
    icon: "/bri.svg",
  },
  {
    name: "Mandiri",
    icon: "/mandiri.svg",
  },
  {
    name: "Bank BTN",
    icon: "/btn.svg",
  },
  {
    name: "QRIS",
    icon: "/qris.svg",
  },
  {
    name: "Link Aja",
    icon: "/linkaja.svg",
  },
  {
    name: "Master Card",
    icon: "/mastercard.svg",
  },
  {
    name: "Visa",
    icon: "/visa.svg",
  },
];