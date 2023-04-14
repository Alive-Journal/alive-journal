'use strict';

const { server } = require('../src/auth/server');
const supertest = require('supertest');
const { db } = require('../src/auth/models');
const request = supertest(server);

beforeAll(async () => {
 
  await db.sync();
 
});

afterAll(async () => {
  await db.drop();
});

describe('v1 routes', () => {
  it('creates a blogs item', async () => {
    let response = await request.post('/api/v1/blogs').send({
      name: 'The Dark Knight',
      price: 200,
      type: 'action',
    });
    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual('The Dark Knight');
  });

  it('gets all blogs items', async () => {
    let response = await request.get('/api/v1/blogs');
    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('The Dark Knight');
  },
  );

  it('updates a blogs item', async () => {
    let response = await request.put('/api/v1/blogs/1').send({
      name: 'The Dark Knight',
      price: 200,
      type: 'action',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('The Dark Knight');
  },
  );
});
