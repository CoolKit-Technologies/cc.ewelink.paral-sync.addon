import EEnv from '../src/ts/enum/EEnv';

const isTestEnv = () => import.meta.env.DEV;
/** 环境 */
const env = isTestEnv() ? EEnv.TEST : EEnv.PROD;

/** 调试用ip */
const NSPanelProIp = isTestEnv() ? 'localhost' : 'localhost';
/** 版本(从.env文件获取) */
const version = import.meta.env.VITE_VERSION;

/** 请求 baseURL */
const apiUrl = `http://${NSPanelProIp}:8322/api/v1`;

// 请求用ak/sk
const TEST_APPID = 'your-appid';
const TEST_SECRET = 'your-appsecret';
const PROD_APPID = 'your-appid';
const PROD_SECRET = 'your-appsecret';
const appId = isTestEnv() ? TEST_APPID : PROD_APPID;
const appSecret = isTestEnv() ? TEST_SECRET : PROD_SECRET;
const sseUrl = isTestEnv() ? `//${NSPanelProIp}:8322/api/v1/sse` : '/api/v1/sse';

console.log(`current version: ${version}`);

export { apiUrl, appSecret, appId, env, sseUrl };
