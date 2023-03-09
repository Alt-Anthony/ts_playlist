import type { Response } from "express";

interface IResponse {
    res: Response;
    status?: number;
    data?: any;
    message?: any;
}

export function success({ res, status = 200, data }: IResponse) {
    return res.status(status).json({
        ok: true,
        data,
    });
}

export function failure({ res, status = 500, message }: IResponse) {
    return res.status(status).json({
        ok: false,
        message,
    });
}