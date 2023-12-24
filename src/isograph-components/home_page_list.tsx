import { iso } from "@isograph/react";
import type { ResolverParameterType as HomePageListParams } from "@iso/Query/home_page_list/reader.isograph";

export const home_page_list = iso<
  HomePageListParams,
  ReturnType<typeof HomePageList>
>`
  Query.home_page_list @component {
    viewer {
      login,
      name,
      __refetch,
    },
  }
`(HomePageList);

function HomePageList(props: HomePageListParams) {
  return <>hello from home page {props.data.viewer.name}</>;
}
