import { sum, fetchData, fetchData1, forEach } from './src/index';

test('1+1=3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('object assignment', () => {
  const data = {
    one: 1,
  };
  expect(data).toEqual({
    one: 1,
  })
})

test('add positive numbers is not zero', () => {
  for (let a = 0; a < 10; a += 1) {
    expect(a + 1).not.toBe(0)
  }
})


test('test callback', (done) => {
  function callback(data) {
    expect(data).toBe('hellow world')
    done()
  }
  fetchData(callback)
})

test('test promises', () => {
  expect.assertions(1);
  return fetchData1().catch((e) => {
    expect(e).toEqual(new Error('hello world'))
  })
})

test('test resolve', () => expect(fetchData1()).rejects.toEqual(new Error('hello world')))

test('test async', async () => {
  expect.assertions(1)
  try {
    await fetchData1()
  } catch (e) {
    expect(e).toEqual(new Error('hello world'))
  }
})

describe('before each', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = "hello";
  })

  test('wrapper', () => {
    expect(wrapper).toBe('hello');
  })
})

// describe('test mock', () => {
//   // const mockCallback = jest.fn((x) => 42 + x);
//   // forEach([0, 1], mockCallback)
//   // console.log(mockCallback.mock)
  
//   const myMock = jest.fn();
//   console.log(myMock())

//   myMock
//     .mockReturnValueOnce(10)
//     .mockReturnValueOnce('x')
//     .mockReturnValue(true);

//   console.log(myMock(), myMock(), myMock(), myMock)

// })
