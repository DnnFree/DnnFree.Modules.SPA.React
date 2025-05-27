// @ts-ignore
import request from "superagent";

declare var context: any;

export const GET = async (uri: string, data: any = null): Promise<any | null> => {
    return await service('GET', uri, data)
}

export const POST = async (uri: string, data: any = null): Promise<any | null> => {
    return await service('POST', uri, data)
}

export const PUT = async (uri: string, data: any = null): Promise<any | null> => {
    return await service('PUT', uri, data)
}

export const DELETE = async (uri: string, data: any = null): Promise<any | null> => {
    return await service('DELETE', uri, data)
}

const service = async (method: string, uri: string, data: any = null): Promise<any | null> => {
    return request(method, context.servicePath + uri)
        .set('moduleId', context.moduleId)
        .send(data)
        .then(res => {
            return res.body;
        })
        .catch(err => {
            console.error(err);
            return null;
        });
}