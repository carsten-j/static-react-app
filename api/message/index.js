module.exports = async function (context, req) {
    // context.done();
    context.res.json({
        text: "Hello from the API"
    });
};