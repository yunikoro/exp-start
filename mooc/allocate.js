
const allocateDTOList = [
    {
        boxAllocateSn: '00020022018031948968',
        deliveryName: '王五',
        totalBox: 55,
        status: 1,
        stationName: '福地元站',
        outTime: 1515254400000,
    },
    {
        boxAllocateSn: '12asasdas3',
        deliveryName: '吴彦祖',
        totalBox: 121,
        status: 1,
        stationName: '凤起路站',
        outTime: null,
    },
    {
        boxAllocateSn: '341112',
        deliveryName: '李白',
        totalBox: 234,
        status: 1,
        stationName: '西溪站',
        outTime: 1521428384000,
    },
    {
        boxAllocateSn: '1341231',
        deliveryName: '李丽',
        totalBox: 423,
        status: 1,
        stationName: '浙大站',
        outTime: 1521429202000,
    },
    {
        boxAllocateSn: '112312',
        deliveryName: '测试1',
        totalBox: 42,
        status: 1,
        stationName: '黄龙站',
        outTime: 1521072000000,
    },
];

const allocateHeader = {
    addTime: 1521378009000,
    allocateDesc: null,
    boxAllocateSn: "00020022018031948968",
    deliveryName: "王五",
    deliveryTel: "18768101233",
    operatorId: "",
    operatorName: "",
    outTime: 1515254400000,
    stationId: "2",
    stationName: "福地元站",
    status: 1,
    totalBox: 55,
    updateTime: 1521789588000,
    warehousingSn: null,
}

const boxDetail = {
    boxSn: '1234567',
    goodsId: [123, 345, 567],
    goodsBarCode: [156654352341, 124312412321, 321312446423],
    goodsName: ['为她柠檬茶', '情爱酸奶', '父亲牛肉棒'],
    boxExpirationDate: '2019-01-21',
}

const boxDetailList = [
    {
        boxSn: '1234567',
        goodsId: [123, 345, 567],
        goodsBarCode: [156654352341, 124312412321, 321312446423],
        goodsName: ['为她柠檬茶', '情爱酸奶', '父亲牛肉棒'],
        boxExpirationDate: '2019-01-21',
    },
    {
        boxSn: '1234567',
        goodsId: [123, 345, 567],
        goodsBarCode: [156654352341, 124312412321, 321312446423],
        goodsName: ['为她柠檬茶', '情爱酸奶', '父亲牛肉棒'],
        boxExpirationDate: '2019-01-21',
    },
    {
        boxSn: '1234567',
        goodsId: [123, 345, 567],
        goodsBarCode: [156654352341, 124312412321, 321312446423],
        goodsName: ['为她柠檬茶', '情爱酸奶', '父亲牛肉棒'],
        boxExpirationDate: '2019-01-21',
    },
    {
        boxSn: '1234567',
        goodsId: [123, 345, 567],
        goodsBarCode: [156654352341, 124312412321, 321312446423],
        goodsName: ['为她柠檬茶', '情爱酸奶', '父亲牛肉棒'],
        boxExpirationDate: '2019-01-21',
    },
]

const stationList = [
    {
        id: 1,
        name: '西斗门路站点',
        stationId: 1
    },
    {
        id: 2,
        name: '东斗门路站点',
        stationId: 2
    },
    {
        id: 3,
        name: '南斗门路站点',
        stationId: 3
    },
    {
        id: 4,
        name: '北斗门路站点',
        stationId: 4
    },
    {
        id: 5,
        name: '中斗门路站点',
        stationId: 5
    },
];

module.exports = {
    allocateList: allocateDTOList,
    boxDetail: boxDetail,
    allocateHeader: allocateHeader,
    boxDetailList: boxDetailList,
    stationList: stationList
}

