import type { Request, Response } from "express";
import prisma from "../../datasource";
import { success, failure } from "../../responses";
import { hashPassword } from "../../utils/string";

export const store = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        data.password = hashPassword(data.password);
        data.last_session = new Date(data.last_session);
        data.date_born = new Date(data.date_born);

        const user = await prisma.user.create({data});

        return success({res, status: 201, data: user});
    } catch (error) {
        return failure({res, message: error});
    }
};