type Folder = {
  id: number;
  name: string;
  description: string;
  heading: string;
};

type CarouselItem = {
  id: number;
  name: string;
  imagePublicId: string;
  eventLink: string;
  descripton: string;
};

export const folders: Folder[] = [
  {
    id: 1,
    name: "Independence-day-celebration",
    heading: "Independence Day Celebration",
    description:
      "Our workshops in celebration of Independence Day brought children together in a vibrant expression of creativity and patriotism. Through painting, drawing, and singing, we fostered a sense of unity and pride, celebrating our nation’s heritage and instilling these values in the younger generation",
  },
  {
    id: 2,
    name: "meeraki-adp-walkathon",
    heading: "Meeraki X ADP Walkathon",
    description:
      "Our efforts to spread awareness have also included essential health initiatives, such as mask donation drives during the pandemic, and inspiring participation in the GNITS Women's Conclave. These events have not only promoted public health and safety but have also encouraged a spirit of giving and community involvement. ",
  },
  {
    id: 3,
    name: "meeraki-gnits",
    heading: "Meeraki X GNITS WILC",
    description:
      "Our efforts to spread awareness have also included essential health initiatives, such as mask donation drives during the pandemic. These events have not only promoted public health and safety but have also encouraged a spirit of giving and community involvement. ",
  },
  {
    id: 4,
    name: "old-age-home-food-donation-drive",
    heading: "Old Age Home Food Donation Drive",
    description:
      "Visiting the old age home was a humbling experience that allowed us to connect with around 40 elderly residents. Sharing meals and heartfelt conversations, we were touched by their wisdom and life stories. These moments highlighted the importance of not just meeting their basic needs, but also providing companionship, respect, and dignity. The love and care shared during our visit reinforced the need for ongoing support and attention to their well-being.",
  },
  {
    id: 5,
    name: "orphanage-food-donation-drives",
    heading: "Orphanage Food Donation Drives",
    description:
      "At Meeraki, our recent efforts have profoundly touched the lives of many, bringing warmth, hope, and love to those in need. Our food donation drives have been a beacon of joy, where we reached out to children in orphanages, providing them with nourishing meals and moments of genuine happiness. These children, each with their unique and often challenging backgrounds, found comfort and connection with our dedicated volunteers. The bonds formed and the smiles shared served as a reminder that even small acts of kindness can make a world of difference.",
  },

  {
    id: 6,
    name: "slum-education-drive",
    heading: "Slum Education Drive",
    description:
      "Our slum education drive opened our eyes to the incredible resilience and determination of young minds eager to learn despite facing severe financial obstacles. Many of these children had to leave school due to economic pressures, yet their thirst for knowledge remained unquenched. This experience underscored the necessity for creative and tailored educational approaches to bridge the learning gap. We are more committed than ever to ensuring that every child, regardless of their circumstances, has access to quality education and the opportunity to realize their potential.",
  },
];

export const CarouselItems: CarouselItem[] = [
  {
    id: 1,
    name: "Independence Day Celebration",
    imagePublicId: "Independence-day-celebration/7_nbczwv",
    eventLink: "photos/Independence-day-celebration",
    descripton:
      "Our workshops in celebration of Independence Day brought children together in a vibrant expression of creativity and patriotism. Through painting, drawing, and singing, we fostered a sense of unity and pride, celebrating our nation’s heritage and instilling these values in the younger generation.",
  },
  {
    id: 2,
    name: "Meeraki X ADP Walkathon",
    imagePublicId:
      "meeraki-adp-walkathon/3ea15003-3d3c-4cb3-adf4-a27c66f8ef5e_kthsqa",
    eventLink: "photos/meeraki-adp-walkathon",
    descripton:
      "Our efforts to spread awareness have also included essential health initiatives, such as mask donation drives during the pandemic, and inspiring participation in the GNITS Women's Conclave. These events have not only promoted public health and safety but have also encouraged a spirit of giving and community involvement.",
  },
  {
    id: 3,
    name: "Meeraki X GNITS WILC",
    imagePublicId: "meeraki-gnits/E91EBA61-595B-4ECC-BDE1-A2C940166253_s1l7yv",
    eventLink: "photos/meeraki-gnits",
    descripton:
      "Our efforts to spread awareness have also included essential health initiatives, such as mask donation drives during the pandemic. These events have not only promoted public health and safety but have also encouraged a spirit of giving and community involvement.",
  },
  {
    id: 4,
    name: "Old Age Home Food Donation Drive",
    imagePublicId: "old-age-home-food-donation-drive/IMG_9256_vzcpsi",
    eventLink: "photos/old-age-home-food-donation-drive",
    descripton:
      "Visiting the old age home was a humbling experience that allowed us to connect with around 40 elderly residents. Sharing meals and heartfelt conversations, we were touched by their wisdom and life stories.",
  },
  {
    id: 5,
    name: "Orphanage Food Donation Drives",
    imagePublicId:
      "orphanage-food-donation-drives/210295a2-3c8b-445a-850b-fdfaf9d43602_uiu3xh",
    eventLink: "photos/orphanage-food-donation-drives",
    descripton:
      "our recent efforts have profoundly touched the lives of many, bringing warmth, hope, and love to those in need. Our food donation drives have been a beacon of joy, where we reached out to children in orphanages, providing them with nourishing meals and moments of genuine happiness.",
  },
  {
    id: 6,
    name: "Slum Education Drive",
    imagePublicId: "/slum-education-drive/IMG_5568_xidk5q",
    eventLink: "photos/slum-education-drive",
    descripton:
      "This experience underscored the necessity for creative and tailored educational approaches to bridge the learning gap. We are more committed than ever to ensuring that every child, regardless of their circumstances, has access to quality education and the opportunity to realize their potential.",
  },
];
