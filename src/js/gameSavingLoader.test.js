import GameSavingLoader from './GameSavingLoader.js';

test('Проверка создания объекта GameSaving', async () => {
  const saving = await GameSavingLoader.load();
  // eslint-disable-next-line
    expect(saving).toEqual('{\"id\":9,\"created\":1546300800,\"userInfo\":{\"id\":1,name\":\"Hitman\",\"level\":10,\"points\":2000}}');
});
