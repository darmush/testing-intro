const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    expect(sortProductsByPrice(products, 'asc').map((product) => product.id)).toEqual([3, 6, 5, 4, 2, 1]);
  });
  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
    expect(sortProductsByPrice(products).map((product) => product.id)).toEqual([3, 6, 5, 4, 2, 1]);
  });
  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const catalog = [products.find(el => el.id === 1), products.find(el => el.id === 3), products.find(el => el.id === 4)];
    expect(sortProductsByPrice(catalog, 'asc').map((product) => product.id)).toEqual([3, 4, 1]);
  });
  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    expect(sortProductsByPrice(products, 'desc').map((product) => product.id)).toEqual([1, 2, 4, 5, 6, 3]);
  });
  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const catalog = [products.find(el => el.id === 3), products.find(el => el.id === 1), products.find(el => el.id === 4)];
    expect(sortProductsByPrice(catalog, 'desc').map((product) => product.id)).toEqual([1, 4, 3]);
  });
  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const catalog = [products.find(el => el.id === 5), products.find(el => el.id === 2), products.find(el => el.id === 6)];
    expect(sortProductsByPrice(catalog, 'desc').map((product) => product.id)).toEqual([2, 5, 6]);
  });
  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const catalog = [products.find(el => el.id === 1), products.find(el => el.id === 3), products.find(el => el.id === 4)];
    const original = [...catalog];
    sortProductsByPrice(catalog, 'asc');
    expect(catalog).toEqual(original);
  });
  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const catalog = [products.find(el => el.id === 1), products.find(el => el.id === 3), products.find(el => el.id === 4)];
    const original = [...catalog];
    sortProductsByPrice(catalog, 'desc');
    expect(catalog).toEqual(original);
  });
  test('направление по умолчанию не меняет исходный массив всех товаров', () => {
    const catalog = products;
    const original = [...catalog];
    sortProductsByPrice(catalog);
    expect(catalog).toEqual(original);
  });
});
