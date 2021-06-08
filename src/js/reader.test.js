import read from "./reader";
jest.mock("./reader")

test('Проверка ошибка', async ()=> {
    await expect(read(false)).rejects.toEqual(Error('Ошибка'))
    }
)

test('Проверка resolve', async ()=> {
    await expect(read(true)).resolves.toBe('ok')
})