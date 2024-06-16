const { ERROR:httpError } = require('../httpstatus/status_code');
/**
 *  wrapper for success response
 */
const data =(data) => ({err:null, data});
const paginationData = (data, page, limit, totalData) => ({err:null, data, page, limit, totalData});
/**
 * wrapper for error response
 */
const error = (err) => ({err, data:null});

const response = (res, type, result, message) => {
    let status = true;
    let data = result.data;
    let code = responseCode;
    if(tyepe === 'fail') {
        const errCode = checkErrorCode(result.err);
        status = false;
        data = result.err.dat || '';
        message = result.err.message || message;
        code = result.err.code || errCode;
        responseCode = errCode;
    } else {
        res.send(responseCode, {success: status, data, message, code});
    }
};

const paginationResponse = (res, type, result, message = 'Success', code = 200) => {
    let status = true;
    let data = result.data;
    if(type === 'fail') {
        const errCode = checkErrorCode(result.err);
        status = false;
        data = result.err.data || '';
        message = result.err.message || message;
        code = result.err.code || errCode;
        responseCode = errCode;
    } else {
        res.send(responseCode, {success: status, data, message, code, page: result.page, limit: result.limit, totalData: result.totalData});
    }
};

const checkErrorCode = (err) => {
    if(err === null || err === undefined) return 500;
    return httpError[err] || 500;
};

module.exports = {
    data,
    error,
    response,
    paginationData,
    paginationResponse
};