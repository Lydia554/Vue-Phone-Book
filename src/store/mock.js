const { getGuid } = require("@/common/functions");

const items = [
  {
    name: "Alan",
    phone: "+20680608071",
    createdAt: +new Date(),
    guid: getGuid()
  },
  {
    name: "Michelle",
    phone: "+90680608022",
    guid: getGuid(),
    createdAt: +new Date(),
    updatedAt: null
  },
  {
    name: "Michael",
    phone: "+459680608022",
    guid: getGuid(),
    createdAt: +new Date(),
    updatedAt: null
  },
  {
    name: "Philippa",
    phone: "+386929129129",
    createdAt: +new Date(),
    guid: getGuid(),
    updatedAt: null
  }
];

export default items;
