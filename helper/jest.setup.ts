import { UiControlClient, UiController } from 'askui';

// Server for controlling the operating system
let uiController: UiController;

// Client is necessary to use the askui API
// eslint-disable-next-line import/no-mutable-exports
let aui: UiControlClient;

jest.setTimeout(60 * 1000 * 60);

beforeAll(async () => {
  uiController = new UiController({
    /**
     * Select the display you want to run your tests on, display 0 is your main display;
     * ignore if you have only one display
     */
    display: 0,
  });

  await uiController.start();

  aui = await UiControlClient.build({credentials: {
    workspaceId: 'a09eb343-b772-46bb-825c-6876e54389ca',
    token: 'u2G0PEAsotENQbebzWJP',
  }});

  await aui.connect();
});

afterAll(async () => {
  await uiController.stop();

  aui.close();
});

export { aui };
