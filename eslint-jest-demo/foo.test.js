import foo from "./src/foo"

jest.mock('./src/foo')

test('test mock function', () => {
  foo.mockImplementation(() => 42);
  console.log(foo())
})
