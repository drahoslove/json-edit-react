import { type CustomKeyDefinition, type CustomKeyProps, type NodeData } from './types'

export interface CustomKeyData {
  CustomKey?: React.FC<CustomKeyProps>
  customKeyProps?: Record<string, unknown>
}

// Fetches matching custom key definition (based on condition filter) and
// returns the component and its props
export const getCustomKey = (
  customKeyDefinitions: CustomKeyDefinition[] = [],
  nodeData: NodeData
): CustomKeyData => {
  const matchingDefinitions = customKeyDefinitions.filter(({ condition }) => condition(nodeData))
  if (matchingDefinitions.length === 0) return {}

  const { element, customKeyProps } = matchingDefinitions[0]

  return {
    CustomKey: element,
    customKeyProps,
  }
}
