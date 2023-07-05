import type { GatsbyNode } from 'gatsby';

export const onPluginInit: GatsbyNode[`onPluginInit`] = ({ reporter }) => {
  reporter.info(`Builder.io  loaded...`);
};
