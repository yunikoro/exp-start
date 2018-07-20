const cityList = [
    {
        citySn: '001',
        cityName: '杭州'
    },
    {
        citySn: '002',
        cityName: '上海'
    },
    {
        citySn: '003',
        cityName: '北京'
    },
    {
        citySn: '004',
        cityName: '桂林'
    }
];

const dcList = [
    {
        dcSn: '00202',
        dcName: '上海1仓',
        cityName: '上海',
        citySn: '002'  
    },
    {
        dcSn: '00203',
        dcName: '上海2仓',
        cityName: '上海',
        citySn: '002'  
    },
    {
        dcSn: '00204',
        dcName: '上海3仓',
        cityName: '上海',
        citySn: '002'  
    },
    {
        dcSn: '00205',
        dcName: '上海仓',
        cityName: '上海',
        citySn: '002'  
    },
    {
        dcSn: '00101',
        dcName: '杭州1仓',
        cityName: '杭州',
        citySn: '001'  
    },
    {
        dcSn: '00102',
        dcName: '杭州2仓',
        cityName: '杭州',
        citySn: '001'  
    },
];

const orderList = [
    {
        addTime: '2018-01-01',
        orderSn: '2018030100365522',
        payAmount: '99.99',
        userTel: '158****4270',
        status: '1'
    },
    {
        addTime: '2018-02-01',
        orderSn: '2018042300558698',
        payAmount: '12.99',
        userTel: '182****4273',
        status: '1'
    },
];

const orderDetail = [
    {
        orderSn: '2018030100365522',
        addTime: '2018-01-01',
        price: '949',
        discountAmount: '900',
        payAmount: '49',
        boxList: [
            {
                boxSn: '1445',
                skuImg: 'http://',
                skuName: '恒大冰泉',
                price: '250',
                num: '2',
                total: '50',
            },
            {
                boxSn: '1446',
                skuImg: 'http://',
                skuName: '父亲牛肉棒',
                price: '600',
                num: '2',
                total: '1200',
            },
        ]
    }
]

module.exports = {
    cityList: cityList,
    dcList: dcList,
    orderList: orderList,
    orderDetail: orderDetail,
}