import { DynocardCoreModule } from './core.module';

describe('DynocardCoreModule', () => {
  it('should work', () => {
    expect(new DynocardCoreModule(null)).toBeDefined();
  });
});
