import { stopApp, TestButton } from '../index'

test('stop app function', () => {
  expect(stopApp).toBeInstanceOf(Function)
})
test('stop app test button', () => {
  expect(TestButton).toBeInstanceOf(Function)
  const testButton = TestButton()
  expect(testButton).not.toBeInstanceOf(Function)
})
