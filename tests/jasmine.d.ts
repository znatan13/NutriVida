declare function describe(description: string, specDefinitions: () => void): void;
declare function it(description: string, testFunction: () => void): void;
declare function beforeEach(action: () => void): void;
declare function afterEach(action: () => void): void;
declare function expect(actual: unknown): any;
