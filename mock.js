const { getGuid } = require("@/common/functions");

const items = [
  {
    name: "Luca",
    phone: "+19680608071",
    createdAt: +new Date(),
    guid: getGuid()
  },
  {
    name: "Ricky",
    phone: "+19680608022",
    guid: getGuid(),
    createdAt: +new Date(),
    updatedAt: null
  },
  {
    name: "Mark",
    phone: "+459680608022",
    guid: getGuid(),
    createdAt: +new Date(),
    updatedAt: null
  },
  {
    name: "Lucia",
    phone: "+19929129129",
    createdAt: +new Date(),
    guid: getGuid(),
    updatedAt: null
  }
];

export default items;
