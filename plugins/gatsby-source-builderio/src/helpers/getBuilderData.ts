import { createAdminApiClient } from '@builder.io/admin-sdk';

export default async function getBuilderData(privateAPiKey) {
  const adminSDK = createAdminApiClient(privateAPiKey);

  const res = await adminSDK.query({
    models: {
      name: true,
      content: [{ contentQuery: { limit: 10 } }],
    },
  });

  console.dir(res.data.models, { depth: null });
}
