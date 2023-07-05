import { GatsbyNode} from "gatsby"
import type { IPluginOptionsInternal, } from "../types"
import getBuilderData from "../helpers/getBuilderData";

export const sourceNodes: GatsbyNode[`sourceNodes`] = async (_gatsbyApi, pluginOptions: IPluginOptionsInternal) => {
  // const {createNodeId, createContentDigest, actions} = gatsbyApi; 

  const {privateAPiKey} = pluginOptions;

  await getBuilderData(privateAPiKey)

  // if(models && models.length > 0) {
  //   for (const model of models) {
  //     const id = createNodeId(`${model.name}-${model.id}`)

  //     const node = {
  //       ...model.content,
  //       id,
  //       /**
  //        * "id" is a reserved field in Gatsby, so if you want to keep it, you need to rename it
  //        * You can see all reserved fields here:
  //        * @see https://www.gatsbyjs.com/docs/reference/graphql-data-layer/node-interface/
  //        */
  //       _id: model.id,
  //       parent: null,
  //       children: [],
  //       internal: {
  //         type: `Builder_${model.name}`,
  //         /**
  //          * The content digest is a hash of the entire node.
  //          * Gatsby uses this internally to determine if the node needs to be updated.
  //          */
  //         contentDigest: createContentDigest(model.content),
  //       },
  //     }

  //     actions.createNode(node)
  //   }
  // }
}