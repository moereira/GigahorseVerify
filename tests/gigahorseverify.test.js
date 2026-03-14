// tests/gigahorseverify.test.js
/**
 * Tests for GigahorseVerify module
 */

const { GigahorseVerify } = require('../src/gigahorseverify');

describe('GigahorseVerify', () => {
    let instance;

    beforeEach(() => {
        instance = new GigahorseVerify({ verbose: false });
    });

    test('should create instance with default config', () => {
        expect(instance).toBeDefined();
        expect(instance.timeout).toBe(30000);
        expect(instance.maxRetries).toBe(3);
    });

    test('should execute successfully', async () => {
        const result = await instance.execute();
        expect(result.success).toBe(true);
        expect(result.message).toBeTruthy();
    });

    test('should process data', async () => {
        const result = await instance.process();
        expect(result.processed).toBe(true);
    });
});
