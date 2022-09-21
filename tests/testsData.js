export const cheeses = [
  {
    id: 1,
    name: "Camembert",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Camembert_%28Cheese%29.jpg/390px-Camembert_%28Cheese%29.jpg",
    description:
      "Camembert est une appellation générique qui désigne généralement un fromage à pâte molle et à croûte fleurie. Commercialement, cette appellation d'origine normande ne fait l'objet d'aucune protection et se voit utilisée pour des fromages n'ayant parfois que peu de rapport avec le camembert originel. Dans certaines régions de France, le camembert est appelé « claquos », « calendos » ou « camembos » ou cadendos ou cadenli ou cadenil et dans le Jura, il est appelé Comté coulant.",
    area: "Normandie",
    milkType: 1,
    vote: 32,
  },
  {
    name: "Comté",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Comte_AOP.jpg/375px-Comte_AOP.jpg",
    description:
      "Comté est l'appellation d'origine d'un fromage français transformé principalement en Franche-Comté et bénéficiant d'une AOC depuis 1958 et d'une AOP depuis 1996. Son aire de production s'étend dans les départements du Jura, du Doubs et l'est de l'Ain et de la Saône et Loire.",
    area: "Franche-Comté",
    vote: 31,
    id: 2,
    milkType: 1,
  },
  {
    name: "Mozarella di Buffala",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mozzarella_cheese_%281%29.jpg/390px-Mozzarella_cheese_%281%29.jpg",
    description:
      "La mozzarella ou mozzarelle est un fromage à pâte filée traditionnel de la cuisine italienne, à base de lait de vache ou de bufflonne. La mozzarella di Bufala Campana, produite en Campanie avec du lait de bufflonne, est l'objet d'une appellation d'origine protégée italienne (AOP) depuis 1996.",
    area: "Campanie",
    vote: 7,
    id: 3,
    milkType: 4,
  },
];

export const cheese = cheeses[0];

export const milkTypes = [
  {
    id: 1,
    name: "Vache",
  },
  {
    id: 2,
    name: "Chèvre",
  },
  {
    id: 3,
    name: "Brebis",
  },
  {
    id: 4,
    name: "Bufflonne",
  },
  {
    id: 5,
    name: "Autre",
  },
];
