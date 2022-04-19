export default function () {
  return {
    apartments: null,
    validationErrors: null,
    apartFilter: {
      rooms: {
        selected: '1к',
        name: 'rooms',
        items: ['S', '1к', '2к', '3к'],
      },
      floor: {
        min: 1,
        max: 13,
      },
      area: {
        min: 1,
        max: 100,
      },
      price: {
        min: 9.9,
        max: 99.9,
      },
      model: '1',
    }
  };
}
