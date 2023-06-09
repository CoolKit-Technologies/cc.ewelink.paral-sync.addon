export const devConf = {
    nodeApp: {
        env: 'dev',
        port: 8322,
        dataPath: '',
        dbPath: '',
        name: 'Paral-Sync',
        version: '0.0.1',
    },
    auth: {
        appId: 'your-appid',
        appSecret: 'your-appsecret',
    },
    iHost: {
        ip: 'your-ihost-ip',
    },
    log: {
        path: 'log/logFile/total_dev.log',
        pattern: '-yyyy-MM-dd.log',
    },
    /** 启动的ip */
    localIp: 'your-local-ip',
    /** 获取网关凭证的等待时长 (ms) */
    getGatewayTokenTimeout: 300000,
};
