async function readJsonBody(req) {
    if (req.body && typeof req.body === 'object') {
        return req.body;
    }

    if (typeof req.body === 'string' && req.body) {
        return JSON.parse(req.body);
    }

    return new Promise((resolve, reject) => {
        let rawBody = '';

        req.on('data', chunk => {
            rawBody += chunk;
        });

        req.on('end', () => {
            if (!rawBody) {
                resolve({});
                return;
            }

            try {
                resolve(JSON.parse(rawBody));
            } catch (error) {
                reject(error);
            }
        });

        req.on('error', reject);
    });
}

module.exports = {
    readJsonBody
};