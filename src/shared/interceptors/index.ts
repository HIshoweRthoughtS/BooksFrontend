
import { logoutSyncInterceptor } from './logout-sync.interceptor';
import { nodeHeadersInterceptor } from './node-headers.interceptor';

export const interceptors = [
    /*1*/nodeHeadersInterceptor,
    /*2*/logoutSyncInterceptor];
