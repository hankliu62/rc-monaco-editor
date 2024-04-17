import React from 'react';
import { render } from '@testing-library/react';

// 无法用 jest 测试 monaco editor
// https://cloud.tencent.com/developer/ask/sof/116043459
// https://github.com/react-monaco-editor/react-monaco-editor/issues/172#issuecomment-625103606

describe('Basic', () => {
  it('className props should work on component', () => {
    const className = "hankliu-monaco-editor"
    const { container } = render(
      <div className={className} />,
    );
    // @ts-ignore
    expect(container.firstChild).toHaveClass(className);
  });
});
