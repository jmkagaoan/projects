
export const generateNormalUserBasicCredentials = (): string => {
        const credentials = Buffer.from('user:user').toString('base64');
        return `Basic ${credentials}`;
}