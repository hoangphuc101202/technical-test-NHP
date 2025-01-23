import { StatusCodes } from 'http-status-codes';

export class DataReponse {
    private data: object;
    status: number;
    private message: string;

    constructor(
        data = {},
        message = "",
        statusCode: StatusCodes,
    ) {
        this.data = data;
        this.status = statusCode;
        this.message = message;
    }
}