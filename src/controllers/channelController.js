import { StatusCodes } from "http-status-codes";

import { getChannelByIdService } from "../services/channelService.js";
import { customErrorResponse, internalErrorResponse, successResponse } from "../utils/common/responseObjects.js";

export const getChannelByIdController = async (req, res) => {
    try {
        const response = await getChannelByIdService(
            req.params.channelId,
            req.user
        );
        return res
        .status(StatusCodes.OK)
        .json(successResponse(response, 'Channel fetched Successfully'))
    } catch (error) {
        console.log(`Get Channel by id controller error`, error);
        if (error.statusCode) {
            return res.status(error.statusCode).json(customErrorResponse(error));
        }

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(internalErrorResponse(error));
    }
}