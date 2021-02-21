exports.handler = function (event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: "This API is Created Using Netlify functions"
    });
}