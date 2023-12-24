import type {IsographFetchableResolver, ReaderAst, FragmentReference, NormalizationAst} from '@isograph/react';
const queryText = 'query User_refetch ($id: ID!) { node____id___id: node(id: $id) { ... on User { \
  id,\
  login,\
  name,\
}}}';

const normalizationAst: NormalizationAst = [{ kind: "Linked", fieldName: "node", alias: null, arguments: [{ argumentName: "id", variableName: "id" }], selections: [
  {
    kind: "Scalar",
    fieldName: "id",
    arguments: null,
  },
  {
    kind: "Scalar",
    fieldName: "login",
    arguments: null,
  },
  {
    kind: "Scalar",
    fieldName: "name",
    arguments: null,
  },
] }];
const artifact: any = {
  kind: "RefetchQuery",
  queryText,
  normalizationAst,
};

export default artifact;
