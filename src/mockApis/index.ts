import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/users', () => {
    return HttpResponse.json(
      {
        users: [
          {
            name: 'test user',
          },
        ],
      },
      {
        status: 200,
      }
    );
  }),
];
