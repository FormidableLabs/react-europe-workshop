import React from 'react';
import renderer from 'react-test-renderer';
import Fetch from './Fetch';

global.fetch = jest.fn();

describe('Fetch Component', () => {
  global.fetch.mockReturnValue(
    new Promise(resolve => {
      setTimeout(() => {
        resolve({
          json: () => Promise.resolve('HEY'),
        });
      }, 200);
    })
  );
  it('renders a snapshot that is good', () => {
    const tree = renderer
      .create(
        <Fetch url="http://google.com">
          {args => <p style={{ color: !args.loading ? 'blue' : 'red' }}>YAY</p>}
        </Fetch>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('starts with loading equals true', () => {
    let result;
    const tree = renderer.create(
      <Fetch url="whatever">
        {({ loading }) => {
          result = loading;
          return null;
        }}
      </Fetch>
    );

    expect(result).toBe(true);
  });

  it('should do data', done => {
    let result;
    const tree = renderer.create(
      <Fetch url="whatever">
        {data => {
          console.log(data);
          result = data;
          return null;
        }}
      </Fetch>
    );

    expect(result.loading).toBe(true);
    setTimeout(() => {
      expect(result.data).toBe('HEY');
      done();
    }, 300);
  });
});
