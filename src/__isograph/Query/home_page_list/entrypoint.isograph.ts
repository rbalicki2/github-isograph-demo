import type {IsographFetchableResolver, FragmentReference, NormalizationAst, RefetchQueryArtifactWrapper} from '@isograph/react';
import type {ReadFromStoreType, ResolverParameterType, ReadOutType} from './reader.isograph';
import readerResolver from './reader.isograph';
import refetchQuery0 from './__refetch__0.isograph';
const nestedRefetchQueries: RefetchQueryArtifactWrapper[] = [{ artifact: refetchQuery0, allowedVariables: [] }, ];

const queryText = 'query home_page_list  {\
  viewer {\
    id,\
    login,\
    name,\
  },\
}';

const normalizationAst: NormalizationAst = [
  {
    kind: "Linked",
    fieldName: "viewer",
    arguments: null,
    selections: [
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
    ],
  },
];
const artifact: IsographFetchableResolver<ReadFromStoreType, ResolverParameterType, ReadOutType> = {
  kind: "FetchableResolver",
  queryText,
  normalizationAst,
  nestedRefetchQueries,
  readerArtifact: readerResolver,
};

export default artifact;
