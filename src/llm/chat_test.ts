import { describe, it } from '@std/testing/bdd';
import { expect } from '@std/expect';
import { ok } from 'neverthrow';
import chat from './chat.ts';
import type groqClient from './groq.ts';

describe('test chat function', () => {
  it('should returns string', async () => {
    const returnValueMock = {
      choices: [
        {
          message: {
            content: 'this is mocked response',
          },
        },
      ],
    };
    const groqClientMock: unknown = {
      chat: {
        completions: {
          create: () => Promise.resolve(returnValueMock),
        },
      },
    };

    const res = await chat(
      [
        {
          role: 'user',
          content: 'lorem ipsum',
        },
      ],
      groqClientMock as typeof groqClient,
    );
    expect(res).toEqual(ok(returnValueMock.choices.at(0)!.message.content));
  });

  it('should returns err when process failed', async () => {
    const groqClientMock: unknown = {
      chat: {
        completions: {
          create: () => Promise.reject(new Error('connection failed')),
        },
      },
    };

    const res = await chat(
      [
        {
          role: 'user',
          content: 'lorem ipsum',
        },
      ],
      groqClientMock as typeof groqClient,
    );

    expect(res.isErr()).toBeTruthy();
  });
});
