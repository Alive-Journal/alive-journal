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
  xit('creates a blogs item', async () => {
    let response = await request.post('/api/v1/blogs').send({
      title: 'How to live life like a Playa',
      author: 'Jimmy Mac Daddy',
      categories: 'relationships',
    });
    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual('How to live life like a Playa');
  });

  xit('gets all blogs items', async () => {
    let response = await request.get('/api/v1/blogs');
    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('How to live life like a Playa');
  },
  );

  xit('updates a blogs item', async () => {
    let response = await request.put('/api/v1/blogs/1').send({
      title: 'How to live life like a Playa',
      author: 'Jimmy Mac Daddy',
      categories: 'relationships',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('How to live life like a Playa');
  },
  );
});
